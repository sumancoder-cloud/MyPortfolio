import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import Icon from './AppIcon';
import { getGitHubStats } from '../utils/githubApi';

const GitHubActivity = () => {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getGitHubStats();
        setGithubData(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
        setError('Failed to load GitHub data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
    // Refresh data every 5 minutes
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="glass-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <Icon name="Github" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-xl font-display text-foreground">GitHub Activity</h3>
            <p className="text-sm text-muted-foreground">Loading real-time data...</p>
          </div>
        </div>
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-muted rounded w-3/4"></div>
          <div className="h-4 bg-muted rounded w-1/2"></div>
          <div className="h-32 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass-card p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-error to-error/80 rounded-lg flex items-center justify-center">
            <Icon name="AlertCircle" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-xl font-display text-foreground">GitHub Activity</h3>
            <p className="text-sm text-error">{error}</p>
          </div>
        </div>
        <p className="text-muted-foreground">Unable to load GitHub data. Please check your connection.</p>
      </div>
    );
  }

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <Icon name="Github" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-xl font-display text-foreground">GitHub Activity</h3>
            <p className="text-sm text-muted-foreground">Real-time data from @sumancoder-cloud</p>
          </div>
        </div>
        <div className="text-xs text-muted-foreground">
          Last updated: {githubData?.activity?.lastUpdated ? 
            new Date(githubData.activity.lastUpdated).toLocaleTimeString() : 'Never'}
        </div>
      </div>

      {/* GitHub Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <motion.div 
          className="bg-primary/10 rounded-lg p-4 text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-2xl font-bold text-primary">{githubData?.profile?.publicRepos || 0}</div>
          <div className="text-sm text-muted-foreground">Repositories</div>
        </motion.div>
        
        <motion.div 
          className="bg-secondary/10 rounded-lg p-4 text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-2xl font-bold text-secondary">{githubData?.activity?.totalCommits || 0}</div>
          <div className="text-sm text-muted-foreground">Total Commits</div>
        </motion.div>
        
        <motion.div 
          className="bg-accent/10 rounded-lg p-4 text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-2xl font-bold text-accent">{githubData?.profile?.followers || 0}</div>
          <div className="text-sm text-muted-foreground">Followers</div>
        </motion.div>
        
        <motion.div 
          className="bg-trust/10 rounded-lg p-4 text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-2xl font-bold text-trust">
            {githubData?.repositories?.reduce((sum, repo) => sum + repo.stars, 0) || 0}
          </div>
          <div className="text-sm text-muted-foreground">Total Stars</div>
        </motion.div>
      </div>

      {/* Monthly Activity Chart */}
      {githubData?.activity?.monthlyActivity?.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-medium text-foreground mb-4">Commit Activity (Last 6 Months)</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={githubData.activity.monthlyActivity}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis 
                  dataKey="month" 
                  stroke="var(--color-muted-foreground)"
                  fontSize={12}
                />
                <YAxis 
                  stroke="var(--color-muted-foreground)"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    color: 'var(--color-foreground)'
                  }}
                />
                <Bar 
                  dataKey="commits" 
                  fill="var(--color-primary)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Recent Repositories */}
      {githubData?.repositories?.length > 0 && (
        <div>
          <h4 className="text-lg font-medium text-foreground mb-4">Recent Repositories</h4>
          <div className="space-y-3">
            {githubData.repositories.slice(0, 3).map((repo, index) => (
              <motion.div
                key={repo.name}
                className="flex items-center justify-between p-3 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <Icon name="GitBranch" size={16} className="text-primary" />
                    <a 
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {repo.name}
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                    {repo.description || 'No description available'}
                  </p>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  {repo.language && (
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <span>{repo.language}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={14} />
                    <span>{repo.stars}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* GitHub Profile Link */}
      <div className="mt-6 pt-4 border-t border-border">
        <a
          href="https://github.com/sumancoder-cloud"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
        >
          <Icon name="ExternalLink" size={16} />
          <span>View Full GitHub Profile</span>
        </a>
      </div>
    </div>
  );
};

export default GitHubActivity;