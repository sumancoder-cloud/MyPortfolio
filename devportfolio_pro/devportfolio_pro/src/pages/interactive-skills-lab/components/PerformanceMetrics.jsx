import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { getGitHubStats } from '../../../utils/githubApi';

const PerformanceMetrics = () => {
  const [selectedMetric, setSelectedMetric] = useState('code-quality');
  const [animatedValues, setAnimatedValues] = useState({});
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);

  const metricsData = {
    'code-quality': {
      title: 'Project Quality Scores',
      icon: 'Code',
      gradient: 'from-blue-500 to-cyan-500',
      data: [
        { name: 'AI Drowsiness Detection', score: 92, maxScore: 100 },
        { name: 'GPS Tracking System', score: 88, maxScore: 100 },
        { name: 'TO-DO List App', score: 95, maxScore: 100 },
        { name: 'Fitness Tracker', score: 90, maxScore: 100 },
        { name: 'User Auth System', score: 94, maxScore: 100 }
      ]
    },
    'github-activity': {
      title: 'GitHub Activity',
      icon: 'GitBranch',
      gradient: 'from-green-500 to-emerald-500',
      data: githubData ? [
        { name: 'Total Repositories', score: Math.min((githubData.profile.publicRepos / 20) * 100, 100), maxScore: 100 },
        { name: 'Recent Commits', score: Math.min((githubData.activity.totalCommits / 50) * 100, 100), maxScore: 100 },
        { name: 'Repository Stars', score: Math.min((githubData.repositories.reduce((sum, repo) => sum + repo.stars, 0) / 10) * 100, 100), maxScore: 100 },
        { name: 'Active Projects', score: Math.min((githubData.repositories.filter(repo => {
          const lastUpdate = new Date(repo.updatedAt);
          const monthAgo = new Date();
          monthAgo.setMonth(monthAgo.getMonth() - 1);
          return lastUpdate > monthAgo;
        }).length / 5) * 100, 100), maxScore: 100 },
        { name: 'Code Quality', score: 85, maxScore: 100 }
      ] : [
        { name: 'Loading...', score: 0, maxScore: 100 },
        { name: 'Loading...', score: 0, maxScore: 100 },
        { name: 'Loading...', score: 0, maxScore: 100 },
        { name: 'Loading...', score: 0, maxScore: 100 },
        { name: 'Loading...', score: 0, maxScore: 100 }
      ]
    },
    'skills-progress': {
      title: 'Skills Development',
      icon: 'TrendingUp',
      gradient: 'from-purple-500 to-pink-500',
      data: [
        { name: 'Python Proficiency', score: 90, maxScore: 100 },
        { name: 'JavaScript Mastery', score: 88, maxScore: 100 },
        { name: 'React Development', score: 85, maxScore: 100 },
        { name: 'Computer Vision', score: 85, maxScore: 100 },
        { name: 'Database Design', score: 80, maxScore: 100 }
      ]
    }
  };

  const performanceOverview = [
    {
      id: 1,
      title: 'Project Quality',
      value: 92,
      change: '+8%',
      trend: 'up',
      icon: 'Code',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20'
    },
    {
      id: 2,
      title: 'GitHub Activity',
      value: 75,
      change: '+15%',
      trend: 'up',
      icon: 'GitBranch',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20'
    },
    {
      id: 3,
      title: 'Skills Growth',
      value: 86,
      change: '+12%',
      trend: 'up',
      icon: 'TrendingUp',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20'
    },
    {
      id: 4,
      title: 'Learning Progress',
      value: 82,
      change: '+18%',
      trend: 'up',
      icon: 'BookOpen',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20'
    }
  ];

  const monthlyProgress = githubData?.activity?.monthlyActivity || [
    { month: 'Jan', commits: 45, quality: 78, projects: 1 },
    { month: 'Feb', commits: 67, quality: 82, projects: 1 },
    { month: 'Mar', commits: 89, quality: 85, projects: 1 },
    { month: 'Apr', commits: 72, quality: 88, projects: 1 },
    { month: 'May', commits: 56, quality: 90, projects: 1 },
    { month: 'Jun', commits: 63, quality: 92, projects: 1 }
  ];

  const skillDistribution = [
    { name: 'Python/AI', value: 35, color: '#3B82F6' },
    { name: 'JavaScript', value: 25, color: '#F59E0B' },
    { name: 'Web Development', value: 20, color: '#10B981' },
    { name: 'Database', value: 12, color: '#8B5CF6' },
    { name: 'Tools/DevOps', value: 8, color: '#EF4444' }
  ];

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const stats = await getGitHubStats();
        setGithubData(stats);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setLoading(false);
      }
    };

    fetchGitHubData();

    const timer = setTimeout(() => {
      const newAnimatedValues = {};
      performanceOverview?.forEach(item => {
        newAnimatedValues[item.id] = item?.value;
      });
      setAnimatedValues(newAnimatedValues);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const metricCategories = [
    { id: 'code-quality', name: 'Project Quality', icon: 'Code' },
    { id: 'github-activity', name: 'GitHub Activity', icon: 'GitBranch' },
    { id: 'skills-progress', name: 'Skills Progress', icon: 'TrendingUp' }
  ];

  const currentMetric = metricsData?.[selectedMetric];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-br from-warning to-error rounded-lg flex items-center justify-center">
          <Icon name="BarChart3" size={18} color="white" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">Performance Metrics</h3>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
      </div>
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceOverview?.map((item, index) => (
          <motion.div
            key={item?.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card-glass hover-lift"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg ${item?.bgColor} flex items-center justify-center`}>
                <Icon name={item?.icon} size={24} className={item?.color} />
              </div>
              <div className={`flex items-center space-x-1 text-xs ${
                item?.trend === 'up' ? 'text-trust' : 'text-error'
              }`}>
                <Icon name={item?.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} size={14} />
                <span>{item?.change}</span>
              </div>
            </div>
            
            <div className="mb-2">
              <h4 className="text-sm font-medium text-muted-foreground">{item?.title}</h4>
              <div className="text-2xl font-bold text-foreground">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {animatedValues?.[item?.id] || 0}%
                </motion.span>
              </div>
            </div>

            <div className="w-full bg-muted rounded-full h-2">
              <motion.div
                className={`h-full ${item?.bgColor?.replace('/20', '')} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${animatedValues?.[item?.id] || 0}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Metric Categories */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            {metricCategories?.map((category) => (
              <Button
                key={category?.id}
                variant={selectedMetric === category?.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedMetric(category?.id)}
                iconName={category?.icon}
                iconPosition="left"
                iconSize={16}
                className={selectedMetric === category?.id ? "btn-primary" : "btn-glass"}
              >
                {category?.name}
              </Button>
            ))}
          </div>

          <div className="card-glass">
            <div className="flex items-center space-x-3 mb-6">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${currentMetric?.gradient} flex items-center justify-center`}>
                <Icon name={currentMetric?.icon} size={18} color="white" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">{currentMetric?.title}</h4>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={currentMetric?.data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: '#94A3B8', fontSize: 12 }}
                    axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                  />
                  <YAxis 
                    tick={{ fill: '#94A3B8', fontSize: 12 }}
                    axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1E293B', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar 
                    dataKey="score" 
                    fill="url(#colorGradient)" 
                    radius={[4, 4, 0, 0]}
                  />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Monthly Progress */}
        <div className="space-y-6">
          <div className="card-glass">
            <h4 className="text-lg font-semibold text-foreground mb-6">Monthly Progress</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyProgress}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="month" 
                    tick={{ fill: '#94A3B8', fontSize: 12 }}
                    axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                  />
                  <YAxis 
                    tick={{ fill: '#94A3B8', fontSize: 12 }}
                    axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1E293B', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="commits" 
                    stroke="#0EA5E9" 
                    strokeWidth={2}
                    dot={{ fill: '#0EA5E9', strokeWidth: 2, r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="quality" 
                    stroke="#10B981" 
                    strokeWidth={2}
                    dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="tests" 
                    stroke="#8B5CF6" 
                    strokeWidth={2}
                    dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card-glass">
            <h4 className="text-lg font-semibold text-foreground mb-6">Skill Distribution</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={skillDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {skillDistribution?.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry?.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1E293B', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {skillDistribution?.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item?.color }}
                  ></div>
                  <span className="text-sm text-muted-foreground">{item?.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* GitHub Integration */}
      <div className="card-glass">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center">
              <Icon name="Github" size={18} color="white" />
            </div>
            <h4 className="text-lg font-semibold text-foreground">GitHub Activity</h4>
          </div>
          <a
  href="https://github.com/sumancoder-cloud"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-glass inline-flex items-center text-sm font-medium px-4 py-2 border rounded-lg"
>
  <Icon name="ExternalLink" size={16} className="mr-2" />
  View Profile
</a>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">71</div>
            <div className="text-sm text-muted-foreground">Total Commits</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">14</div>
            <div className="text-sm text-muted-foreground">Repositories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">56</div>
            <div className="text-sm text-muted-foreground">Pull Requests</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">49</div>
            <div className="text-sm text-muted-foreground">Issues Resolved</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;