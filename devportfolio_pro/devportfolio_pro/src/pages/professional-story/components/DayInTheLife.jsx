import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const DayInTheLife = () => {
  const [activeTime, setActiveTime] = useState('morning');

  const dailySchedule = {
    morning: {
      time: "6:00 AM - 12:00 PM",
      title: "Morning Productivity",
      icon: "Sunrise",
      color: "accent",
      activities: [
        {
          time: "6:00 AM",
          activity: "Start with coffee and tech news",
          icon: "Coffee",
          description: "Catch up on latest developments in web technologies"
        },
        {
          time: "7:00 AM",
          activity: "Code review and planning",
          icon: "Code2",
          description: "Review yesterday\'s work and plan today\'s tasks"
        },
        {
          time: "9:00 AM",
          activity: "Deep work session",
          icon: "Focus",
          description: "Most productive hours for complex problem-solving"
        },
        {
          time: "11:00 AM",
          activity: "Learning new concepts",
          icon: "BookOpen",
          description: "Dedicated time for exploring new technologies"
        }
      ]
    },
    afternoon: {
      time: "12:00 PM - 6:00 PM",
      title: "Collaboration & Development",
      icon: "Sun",
      color: "primary",
      activities: [
        {
          time: "12:00 PM",
          activity: "Team collaboration",
          icon: "Users",
          description: "Stand-ups, code reviews, and team discussions"
        },
        {
          time: "2:00 PM",
          activity: "Active development",
          icon: "Terminal",
          description: "Building features and implementing solutions"
        },
        {
          time: "4:00 PM",
          activity: "Testing and debugging",
          icon: "Bug",
          description: "Ensuring code quality and fixing issues"
        },
        {
          time: "5:00 PM",
          activity: "Documentation",
          icon: "FileText",
          description: "Writing clear documentation for future reference"
        }
      ]
    },
    evening: {
      time: "6:00 PM - 10:00 PM",
      title: "Learning & Personal Projects",
      icon: "Moon",
      color: "secondary",
      activities: [
        {
          time: "6:00 PM",
          activity: "Personal projects",
          icon: "Rocket",
          description: "Working on side projects and experimenting"
        },
        {
          time: "7:30 PM",
          activity: "Online courses",
          icon: "Play",
          description: "Continuous learning through tutorials and courses"
        },
        {
          time: "8:30 PM",
          activity: "Community engagement",
          icon: "MessageSquare",
          description: "Contributing to open source and tech communities"
        },
        {
          time: "9:30 PM",
          activity: "Planning tomorrow",
          icon: "Calendar",
          description: "Organizing tasks and setting goals for next day"
        }
      ]
    }
  };

  const favoriteTools = [
    {
      name: "VS Code",
      icon: "Code",
      description: "Primary code editor with custom themes and extensions",
      category: "Development"
    },
    {
      name: "GitHub",
      icon: "Github",
      description: "Version control and collaboration platform",
      category: "Version Control"
    },
    {
      name: "Figma",
      icon: "Figma",
      description: "UI/UX design and prototyping tool",
      category: "Design"
    },
    {
      name: "Chrome DevTools",
      icon: "Chrome",
      description: "Debugging and performance optimization",
      category: "Debugging"
    },
    {
      name: "Notion",
      icon: "FileText",
      description: "Project management and documentation",
      category: "Productivity"
    },
    {
      name: "Terminal",
      icon: "Terminal",
      description: "Command line interface for development tasks",
      category: "Development"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: "bg-primary/20 text-primary border-primary/30",
      secondary: "bg-secondary/20 text-secondary border-secondary/30",
      accent: "bg-accent/20 text-accent border-accent/30"
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl font-display text-gradient mb-4">
          A Day in My Life
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          How I structure my day for maximum productivity and continuous learning
        </p>
      </div>
      {/* Daily Schedule */}
      <div className="glass-card p-8">
        {/* Time Period Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(dailySchedule)?.map(([key, period]) => (
            <button
              key={key}
              onClick={() => setActiveTime(key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                activeTime === key
                  ? getColorClasses(period?.color) + 'border' :'hover:bg-white/5 border border-transparent'
              }`}
            >
              <Icon name={period?.icon} size={18} />
              <div className="text-left">
                <div className="font-medium text-sm">{period?.title}</div>
                <div className="text-xs opacity-75">{period?.time}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Schedule */}
        <div className="animate-fade-in">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dailySchedule?.[activeTime]?.activities?.map((activity, index) => (
              <div key={index} className="glass p-4 rounded-lg hover-lift transition-smooth">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    getColorClasses(dailySchedule?.[activeTime]?.color)
                  }`}>
                    <Icon name={activity?.icon} size={16} />
                  </div>
                  <div className="text-sm font-medium text-primary">{activity?.time}</div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{activity?.activity}</h3>
                <p className="text-sm text-muted-foreground">{activity?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Favorite Tools */}
      <div className="glass-card p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-display text-foreground mb-2">My Favorite Tools</h3>
          <p className="text-muted-foreground">Essential tools that power my development workflow</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteTools?.map((tool, index) => (
            <div key={index} className="glass p-6 rounded-lg hover-lift transition-smooth group">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Icon name={tool?.icon} size={24} color="var(--color-primary)" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{tool?.name}</h4>
                  <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {tool?.category}
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{tool?.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Learning Habits */}
      <div className="glass-card p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display text-foreground mb-2">Learning Philosophy</h3>
            <p className="text-muted-foreground">How I stay current in the ever-evolving tech landscape</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="BookOpen" size={20} color="var(--color-accent)" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Continuous Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Dedicate 1-2 hours daily to learning new technologies, reading documentation, 
                    and exploring industry trends through various online platforms.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Code2" size={20} color="var(--color-primary)" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Hands-on Practice</h4>
                  <p className="text-sm text-muted-foreground">
                    Build small projects and experiments to test new concepts. 
                    Believe in learning by doing rather than just theoretical knowledge.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" size={20} color="var(--color-secondary)" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Community Engagement</h4>
                  <p className="text-sm text-muted-foreground">
                    Active participation in developer communities, attending virtual meetups, 
                    and contributing to open-source projects when possible.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-conversion/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Target" size={20} color="var(--color-conversion)" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Goal-Oriented</h4>
                  <p className="text-sm text-muted-foreground">
                    Set weekly learning goals and track progress. Focus on technologies 
                    that align with career objectives and industry demands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayInTheLife;