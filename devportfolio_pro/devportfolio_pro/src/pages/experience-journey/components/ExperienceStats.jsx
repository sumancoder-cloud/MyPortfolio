import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ExperienceStats = () => {
  const [animatedValues, setAnimatedValues] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      id: 'internships',
      label: 'Internships Completed',
      value: 1,
      suffix: '',
      icon: 'Briefcase',
      color: 'text-primary',
      bgColor: 'bg-primary/20',
      description: 'Hands-on industry experience'
    },
    {
      id: 'projects',
      label: 'Projects Delivered',
      value: 12,
      suffix: '+',
      icon: 'Code',
      color: 'text-secondary',
      bgColor: 'bg-secondary/20',
      description: 'End-to-end development'
    },
    {
      id: 'technologies',
      label: 'Technologies Mastered',
      value: 25,
      suffix: '+',
      icon: 'Layers',
      color: 'text-trust',
      bgColor: 'bg-trust/20',
      description: 'Full-stack expertise'
    },
    {
      id: 'contributions',
      label: 'GitHub Contributions',
      value: 2,
      suffix: '+',
      icon: 'GitBranch',
      color: 'text-warning',
      bgColor: 'bg-warning/20',
      description: 'Open source involvement'
    },
    {
      id: 'hackathons',
      label: 'Hackathons Participated',
      value: 3,
      suffix: '',
      icon: 'Trophy',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      description: 'Competitive programming'
    },
    {
      id: 'certifications',
      label: 'Certifications Earned',
      value: 4,
      suffix: '',
      icon: 'Award',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/20',
      description: 'Validated skills'
    }
  ];

  const milestones = [
    {
      title: 'First Internship',
      date: 'June 2023',
      description: 'Started journey as Frontend Developer Intern',
      icon: 'Rocket',
      color: 'text-primary'
    },
    {
      title: 'Full-Stack Transition',
      date: 'September 2023',
      description: 'Expanded to backend development with Node.js',
      icon: 'Layers',
      color: 'text-secondary'
    },
    {
      title: 'Team Leadership',
      date: 'January 2024',
      description: 'Led development team of 5 members',
      icon: 'Users',
      color: 'text-trust'
    },
    {
      title: 'Open Source Contributor',
      date: 'March 2024',
      description: 'First major open source contribution accepted',
      icon: 'GitBranch',
      color: 'text-warning'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('experience-stats');
    if (element) {
      observer?.observe(element);
    }

    return () => {
      if (element) {
        observer?.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats?.forEach((stat, index) => {
        setTimeout(() => {
          animateValue(stat?.id, 0, stat?.value, 1500);
        }, index * 200);
      });
    }
  }, [isVisible]);

  const animateValue = (id, start, end, duration) => {
    const startTime = performance.now();
    
    const updateValue = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(start + (end - start) * easeOutCubic);
      
      setAnimatedValues(prev => ({
        ...prev,
        [id]: currentValue
      }));
      
      if (progress < 1) {
        requestAnimationFrame(updateValue);
      }
    };
    
    requestAnimationFrame(updateValue);
  };

  return (
    <div id="experience-stats" className="space-y-8">
      {/* Stats Grid */}
      <div className="glass-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <Icon name="BarChart3" size={20} color="white" />
          </div>
          <div>
            <h2 className="text-2xl font-display text-foreground">Experience Overview</h2>
            <p className="text-muted-foreground">Key metrics from my professional journey</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats?.map((stat, index) => (
            <div
              key={stat?.id}
              className={`${stat?.bgColor} border border-border rounded-lg p-6 hover-lift transition-smooth animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat?.bgColor} border border-border rounded-lg flex items-center justify-center ${stat?.color}`}>
                  <Icon name={stat?.icon} size={24} />
                </div>
                <div className="text-right">
                  <div className={`text-3xl font-bold ${stat?.color}`}>
                    {animatedValues?.[stat?.id] || 0}{stat?.suffix}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{stat?.label}</h3>
                <p className="text-sm text-muted-foreground">{stat?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Key Milestones */}
      <div className="glass-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-trust to-warning rounded-lg flex items-center justify-center">
            <Icon name="Flag" size={20} color="white" />
          </div>
          <div>
            <h2 className="text-2xl font-display text-foreground">Key Milestones</h2>
            <p className="text-muted-foreground">Significant achievements in my career journey</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {milestones?.map((milestone, index) => (
            <div
              key={milestone?.title}
              className="bg-surface border border-border rounded-lg p-6 hover-lift transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-10 h-10 bg-surface border border-border rounded-lg flex items-center justify-center ${milestone?.color} flex-shrink-0`}>
                  <Icon name={milestone?.icon} size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{milestone?.title}</h3>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {milestone?.date}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{milestone?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Skills Progress */}
      <div className="glass-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-secondary to-trust rounded-lg flex items-center justify-center">
            <Icon name="TrendingUp" size={20} color="white" />
          </div>
          <div>
            <h2 className="text-2xl font-display text-foreground">Current Skill Levels</h2>
            <p className="text-muted-foreground">Self-assessed proficiency across key technologies</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { skill: 'React.js', level: 92, color: 'bg-primary' },
            { skill: 'Node.js', level: 88, color: 'bg-secondary' },
            { skill: 'JavaScript/TypeScript', level: 90, color: 'bg-trust' },
            { skill: 'Python', level: 85, color: 'bg-warning' },
            { skill: 'Database Design', level: 82, color: 'bg-pink-500' },
            { skill: 'System Architecture', level: 78, color: 'bg-orange-500' }
          ]?.map((item, index) => (
            <div key={item?.skill} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">{item?.skill}</span>
                <span className="text-sm text-muted-foreground">{item?.level}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={`${item?.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                  style={{ 
                    width: isVisible ? `${item?.level}%` : '0%',
                    transitionDelay: `${index * 0.1}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceStats;