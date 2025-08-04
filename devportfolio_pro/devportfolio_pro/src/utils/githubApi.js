// GitHub API utilities for fetching real-time data
const GITHUB_USERNAME = 'sumancoder-cloud';
const GITHUB_API_BASE = 'https://api.github.com';

// Cache for API responses to avoid rate limiting
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const getCachedData = (key) => {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
};

const setCachedData = (key, data) => {
  cache.set(key, {
    data,
    timestamp: Date.now()
  });
};

// Fetch user profile data
export const fetchGitHubProfile = async () => {
  const cacheKey = 'github-profile';
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`);
    if (!response.ok) throw new Error('Failed to fetch profile');
    
    const data = await response.json();
    setCachedData(cacheKey, data);
    return data;
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    return null;
  }
};

// Fetch repositories
export const fetchGitHubRepos = async () => {
  const cacheKey = 'github-repos';
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`);
    if (!response.ok) throw new Error('Failed to fetch repositories');
    
    const data = await response.json();
    setCachedData(cacheKey, data);
    return data;
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
};

// Fetch commit activity (events)
export const fetchGitHubActivity = async () => {
  const cacheKey = 'github-activity';
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/events?per_page=30`);
    if (!response.ok) throw new Error('Failed to fetch activity');
    
    const data = await response.json();
    
    // Process activity data
    const processedActivity = processGitHubActivity(data);
    setCachedData(cacheKey, processedActivity);
    return processedActivity;
  } catch (error) {
    console.error('Error fetching GitHub activity:', error);
    return {
      totalCommits: 0,
      recentCommits: [],
      languageStats: {},
      monthlyActivity: []
    };
  }
};

// Process GitHub activity data
const processGitHubActivity = (events) => {
  const commits = events.filter(event => event.type === 'PushEvent');
  const totalCommits = commits.reduce((sum, event) => sum + (event.payload?.commits?.length || 0), 0);
  
  // Get recent commits
  const recentCommits = commits.slice(0, 10).map(event => ({
    repo: event.repo.name,
    message: event.payload?.commits?.[0]?.message || 'No message',
    date: event.created_at,
    url: `https://github.com/${event.repo.name}`
  }));

  // Calculate monthly activity (last 6 months)
  const monthlyActivity = calculateMonthlyActivity(commits);

  return {
    totalCommits,
    recentCommits,
    monthlyActivity,
    lastUpdated: new Date().toISOString()
  };
};

// Calculate monthly commit activity
const calculateMonthlyActivity = (commits) => {
  const months = {};
  const now = new Date();
  
  // Initialize last 6 months
  for (let i = 5; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthKey = date.toISOString().slice(0, 7); // YYYY-MM format
    months[monthKey] = {
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      commits: 0,
      year: date.getFullYear()
    };
  }

  // Count commits per month
  commits.forEach(commit => {
    const commitDate = new Date(commit.created_at);
    const monthKey = commitDate.toISOString().slice(0, 7);
    if (months[monthKey]) {
      months[monthKey].commits += commit.payload?.commits?.length || 0;
    }
  });

  return Object.values(months);
};

// Fetch repository languages
export const fetchRepoLanguages = async (repoName) => {
  const cacheKey = `repo-languages-${repoName}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch(`${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}/languages`);
    if (!response.ok) throw new Error('Failed to fetch languages');
    
    const data = await response.json();
    setCachedData(cacheKey, data);
    return data;
  } catch (error) {
    console.error('Error fetching repository languages:', error);
    return {};
  }
};

// Get GitHub stats summary
export const getGitHubStats = async () => {
  try {
    const [profile, repos, activity] = await Promise.all([
      fetchGitHubProfile(),
      fetchGitHubRepos(),
      fetchGitHubActivity()
    ]);

    return {
      profile: {
        name: profile?.name || 'Suman Yadav',
        bio: profile?.bio || 'Full Stack Developer',
        followers: profile?.followers || 0,
        following: profile?.following || 0,
        publicRepos: profile?.public_repos || 0,
        location: profile?.location || 'India',
        company: profile?.company || null,
        blog: profile?.blog || null,
        avatarUrl: profile?.avatar_url || null
      },
      repositories: repos?.slice(0, 6).map(repo => ({
        name: repo.name,
        description: repo.description,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        url: repo.html_url,
        updatedAt: repo.updated_at
      })) || [],
      activity: {
        totalCommits: activity.totalCommits,
        recentCommits: activity.recentCommits,
        monthlyActivity: activity.monthlyActivity,
        lastUpdated: activity.lastUpdated
      }
    };
  } catch (error) {
    console.error('Error getting GitHub stats:', error);
    return null;
  }
};

export default {
  fetchGitHubProfile,
  fetchGitHubRepos,
  fetchGitHubActivity,
  fetchRepoLanguages,
  getGitHubStats
};