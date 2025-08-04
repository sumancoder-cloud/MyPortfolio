import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const GrowthVisualization = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skillsGrowthData = [
    { period: 'Q1 2023', frontend: 65, backend: 45, mobile: 30, devops: 25, total: 41.25 },
    { period: 'Q2 2023', frontend: 72, backend: 58, mobile: 45, devops: 35, total: 52.5 },
    { period: 'Q3 2023', frontend: 78, backend: 68, mobile: 60, devops: 50, total: 64 },
    { period: 'Q4 2023', frontend: 85, backend: 75, mobile: 70, devops: 65, total: 73.75 },
    { period: 'Q1 2024', frontend: 88, backend: 82, mobile: 78, devops: 72, total: 80 },
    { period: 'Q2 2024', frontend: 92, backend: 88, mobile: 85, devops: 80, total: 86.25 }
  ];

  const contributionData = [
    { month: 'Jan', commits: 45, prs: 12, issues: 8, reviews: 15 },
    { month: 'Feb', commits: 52, prs: 18, issues: 12, reviews: 22 },
    { month: 'Mar', commits: 68, prs: 25, issues: 15, reviews: 28 },
    { month: 'Apr', commits: 75, prs: 32, issues: 18, reviews: 35 },
    { month: 'May', commits: 82, prs: 28, issues: 22, reviews: 42 },
    { month: 'Jun', commits: 95, prs: 35, issues: 25, reviews: 48 }
  ];

  const projectComplexityData = [
    { project: 'Todo App', complexity: 2, technologies: 3, impact: 1 },
    { project: 'Weather Dashboard', complexity: 4, technologies: 5, impact: 3 },
    { project: 'E-commerce Platform', complexity: 7, technologies: 8, impact: 6 },
    { project: 'Social Media App', complexity: 8, technologies: 10, impact: 7 },
    { project: 'DevPortfolio Pro', complexity: 9, technologies: 12, impact: 9 }
  ];

  const achievements = [
    {
      icon: 'Trophy',
      title: 'Hackathon Winner',
      description: 'First place in SRM TechFest 2024',
      date: 'March 2024',
      color: 'text-yellow-400'
    },
    {
      icon: 'Award',
      title: 'Best Intern Project',
      description: 'Recognition for outstanding contribution',
      date: 'August 2024',
      color: 'text-primary'
    },
    {
      icon: 'Star',
      title: '100+ GitHub Stars',
      description: 'Open source project milestone',
      date: 'June 2024',
      color: 'text-trust'
    },
    {
      icon: 'Users',
      title: 'Team Leadership',
      description: 'Led 5-person development team',
      date: 'May 2024',
      color: 'text-secondary'
    }
  ];

  const tabs = [
    { id: 'skills', label: 'Skills Growth', icon: 'TrendingUp' },
    { id: 'contributions', label: 'GitHub Activity', icon: 'GitBranch' },
    { id: 'complexity', label: 'Project Evolution', icon: 'BarChart3' },
    { id: 'achievements', label: 'Milestones', icon: 'Award' }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="glass-card p-3 border border-border">
          <p className="text-sm font-medium text-foreground mb-2">{label}</p>
          {payload?.map((entry, index) => (
            <p key={index} className="text-xs" style={{ color: entry?.color }}>
              {entry?.name}: {entry?.value}
              {entry?.dataKey === 'total' && '%'}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="glass-card">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-trust to-primary rounded-lg flex items-center justify-center">
            <Icon name="TrendingUp" size={20} color="white" />
          </div>
          <div>
            <h2 className="text-2xl font-display text-foreground">Growth Trajectory</h2>
            <p className="text-muted-foreground">Visualizing continuous improvement and skill development</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                activeTab === tab?.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-surface text-muted-foreground hover:text-foreground hover:bg-surface/80'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="p-6">
        {/* Skills Growth Chart */}
        {activeTab === 'skills' && (
          <div className="space-y-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={skillsGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="period" 
                    stroke="#94A3B8" 
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="#94A3B8" 
                    fontSize={12}
                    domain={[0, 100]}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line 
                    type="monotone" 
                    dataKey="frontend" 
                    stroke="#0EA5E9" 
                    strokeWidth={2}
                    dot={{ fill: '#0EA5E9', strokeWidth: 2, r: 4 }}
                    name="Frontend"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="backend" 
                    stroke="#8B5CF6" 
                    strokeWidth={2}
                    dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
                    name="Backend"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="mobile" 
                    stroke="#10B981" 
                    strokeWidth={2}
                    dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                    name="Mobile"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="devops" 
                    stroke="#F59E0B" 
                    strokeWidth={2}
                    dot={{ fill: '#F59E0B', strokeWidth: 2, r: 4 }}
                    name="DevOps"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Frontend', value: '92%', color: 'text-primary', bg: 'bg-primary/20' },
                { label: 'Backend', value: '88%', color: 'text-secondary', bg: 'bg-secondary/20' },
                { label: 'Mobile', value: '85%', color: 'text-trust', bg: 'bg-trust/20' },
                { label: 'DevOps', value: '80%', color: 'text-warning', bg: 'bg-warning/20' }
              ]?.map((skill, index) => (
                <div key={skill?.label} className={`${skill?.bg} border border-border rounded-lg p-4 text-center`}>
                  <div className={`text-2xl font-bold ${skill?.color} mb-1`}>{skill?.value}</div>
                  <div className="text-sm text-muted-foreground">{skill?.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GitHub Contributions */}
        {activeTab === 'contributions' && (
          <div className="space-y-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={contributionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="month" 
                    stroke="#94A3B8" 
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="#94A3B8" 
                    fontSize={12}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area 
                    type="monotone" 
                    dataKey="commits" 
                    stackId="1"
                    stroke="#0EA5E9" 
                    fill="#0EA5E9"
                    fillOpacity={0.6}
                    name="Commits"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="prs" 
                    stackId="1"
                    stroke="#8B5CF6" 
                    fill="#8B5CF6"
                    fillOpacity={0.6}
                    name="Pull Requests"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="reviews" 
                    stackId="1"
                    stroke="#10B981" 
                    fill="#10B981"
                    fillOpacity={0.6}
                    name="Code Reviews"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Total Commits', value: '417', icon: 'GitCommit', color: 'text-primary' },
                { label: 'Pull Requests', value: '150', icon: 'GitPullRequest', color: 'text-secondary' },
                { label: 'Issues Resolved', value: '100', icon: 'AlertCircle', color: 'text-warning' },
                { label: 'Code Reviews', value: '190', icon: 'Eye', color: 'text-trust' }
              ]?.map((stat, index) => (
                <div key={stat?.label} className="bg-surface border border-border rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Icon name={stat?.icon} size={24} className={stat?.color} />
                  </div>
                  <div className={`text-2xl font-bold ${stat?.color} mb-1`}>{stat?.value}</div>
                  <div className="text-sm text-muted-foreground">{stat?.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Complexity Evolution */}
        {activeTab === 'complexity' && (
          <div className="space-y-6">
            <div className="space-y-4">
              {projectComplexityData?.map((project, index) => (
                <div key={project?.project} className="bg-surface border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-foreground">{project?.project}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-muted-foreground">Complexity Score:</span>
                      <span className="text-sm font-bold text-primary">{project?.complexity}/10</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Technical Complexity</div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${(project?.complexity / 10) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Technologies Used</div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-secondary h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${(project?.technologies / 12) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Business Impact</div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-trust h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${(project?.impact / 10) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements & Milestones */}
        {activeTab === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements?.map((achievement, index) => (
              <div 
                key={achievement?.title} 
                className="bg-surface border border-border rounded-lg p-6 hover-lift transition-smooth"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-surface border border-border flex items-center justify-center ${achievement?.color}`}>
                    <Icon name={achievement?.icon} size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{achievement?.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{achievement?.description}</p>
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={14} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{achievement?.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GrowthVisualization;