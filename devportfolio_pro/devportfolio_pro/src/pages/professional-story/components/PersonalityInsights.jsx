import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const PersonalityInsights = () => {
  const [activeInsight, setActiveInsight] = useState('workStyle');

  const insights = {
    workStyle: {
      title: "Work Style Preferences",
      icon: "Settings",
      color: "primary",
      content: [
        {
          aspect: "Problem-Solving Approach",
          description: "I prefer breaking down complex problems into smaller, manageable components. I enjoy the process of research, experimentation, and iterative improvement.",
          icon: "Puzzle"
        },
        {
          aspect: "Learning Style",
          description: "Hands-on learner who thrives on practical application. I learn best by building projects and experimenting with new technologies in real scenarios.",
          icon: "Brain"
        },
        {
          aspect: "Work Environment",
          description: "Productive in both collaborative team settings and focused individual work. I appreciate open communication and constructive feedback.",
          icon: "Home"
        },
        {
          aspect: "Time Management",
          description: "Structured approach with flexibility for creative exploration. I use time-blocking techniques and maintain a balance between planned tasks and spontaneous learning.",
          icon: "Clock"
        }
      ]
    },
    collaboration: {
      title: "Collaboration Approach",
      icon: "Users",
      color: "secondary",
      content: [
        {
          aspect: "Communication Style",
          description: "Clear, direct, and empathetic communicator. I believe in asking questions when uncertain and sharing knowledge openly with team members.",
          icon: "MessageCircle"
        },
        {
          aspect: "Team Dynamics",
          description: "Supportive team player who enjoys mentoring junior developers and learning from senior colleagues. I value diverse perspectives and inclusive discussions.",
          icon: "Heart"
        },
        {
          aspect: "Conflict Resolution",
          description: "Approach conflicts with curiosity rather than defensiveness. I focus on understanding different viewpoints and finding solutions that benefit the project.",
          icon: "Shield"
        },
        {
          aspect: "Knowledge Sharing",
          description: "Passionate about documenting processes and sharing learnings. I regularly contribute to team knowledge bases and enjoy presenting new findings.",
          icon: "Share"
        }
      ]
    },
    motivation: {
      title: "What Drives Me",
      icon: "Zap",
      color: "accent",
      content: [
        {
          aspect: "Impact-Driven Development",
          description: "Most motivated when working on projects that solve real problems and create meaningful value for users. I find purpose in building solutions that matter.",
          icon: "Target"
        },
        {
          aspect: "Continuous Growth",
          description: "Energized by learning opportunities and technical challenges. I\'m driven by the constant evolution in technology and the chance to grow my skills.",
          icon: "TrendingUp"
        },
        {
          aspect: "Code Quality",
          description: "Take pride in writing clean, maintainable code. I'm motivated by creating elegant solutions that other developers can easily understand and build upon.",
          icon: "Code"
        },
        {
          aspect: "User Experience",
          description: "Passionate about creating intuitive, accessible applications. I'm driven by the satisfaction of building interfaces that users genuinely enjoy using.",
          icon: "Smile"
        }
      ]
    },
    adaptability: {
      title: "Adaptability & Growth",
      icon: "Repeat",
      color: "conversion",
      content: [
        {
          aspect: "Technology Adoption",
          description: "Quick to adapt to new technologies and frameworks. I approach new tools with curiosity and systematic learning, focusing on understanding core concepts.",
          icon: "Cpu"
        },
        {
          aspect: "Feedback Integration",
          description: "Welcome constructive feedback and use it as a catalyst for improvement. I actively seek input from peers and mentors to accelerate my growth.",
          icon: "MessageSquare"
        },
        {
          aspect: "Change Management",
          description: "Comfortable with changing requirements and evolving project scopes. I view changes as opportunities to create better solutions rather than obstacles.",
          icon: "RefreshCw"
        },
        {
          aspect: "Skill Development",
          description: "Proactive in identifying skill gaps and taking initiative to address them. I maintain a growth mindset and embrace challenges as learning opportunities.",
          icon: "BookOpen"
        }
      ]
    }
  };

  const getColorClasses = (color) => {
    const colorMap = {
      primary: "bg-primary/20 text-primary border-primary/30",
      secondary: "bg-secondary/20 text-secondary border-secondary/30",
      accent: "bg-accent/20 text-accent border-accent/30",
      conversion: "bg-conversion/20 text-conversion border-conversion/30"
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  const getIconColorVar = (color) => {
    const colorMap = {
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      accent: "var(--color-accent)",
      conversion: "var(--color-conversion)"
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  return (
    <div className="glass-card p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-display text-gradient mb-4">
            Personality Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding my work style, collaboration approach, and what drives my passion for development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Navigation Tabs */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {Object.entries(insights)?.map(([key, insight]) => (
                <button
                  key={key}
                  onClick={() => setActiveInsight(key)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    activeInsight === key
                      ? getColorClasses(insight?.color) + ' border shadow-glow'
                      : 'hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      activeInsight === key ? 'bg-white/20' : 'bg-muted/50'
                    }`}>
                      <Icon 
                        name={insight?.icon} 
                        size={20} 
                        color={activeInsight === key ? getIconColorVar(insight?.color) : "var(--color-muted-foreground)"}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{insight?.title}</h3>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-2">
            <div className="glass p-6 rounded-lg animate-fade-in">
              {insights?.[activeInsight] && (
                <div>
                  {/* Section Header */}
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      getColorClasses(insights?.[activeInsight]?.color)
                    } border`}>
                      <Icon 
                        name={insights?.[activeInsight]?.icon} 
                        size={24} 
                        color={getIconColorVar(insights?.[activeInsight]?.color)}
                      />
                    </div>
                    <h3 className="text-xl font-display text-foreground">
                      {insights?.[activeInsight]?.title}
                    </h3>
                  </div>

                  {/* Content Grid */}
                  <div className="space-y-6">
                    {insights?.[activeInsight]?.content?.map((item, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 glass rounded-lg hover-lift transition-smooth">
                        <div className="w-10 h-10 bg-muted/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={item?.icon} size={18} color="var(--color-muted-foreground)" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2">{item?.aspect}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item?.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Cultural Fit Indicators */}
        <div className="mt-12 glass p-8 rounded-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display text-foreground mb-2">Cultural Fit Indicators</h3>
            <p className="text-muted-foreground">Key traits that make me a valuable team member</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} color="var(--color-primary)" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Team Player</h4>
              <p className="text-sm text-muted-foreground">
                Collaborative mindset with strong communication skills
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Lightbulb" size={24} color="var(--color-secondary)" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Innovative</h4>
              <p className="text-sm text-muted-foreground">
                Creative problem-solver who brings fresh perspectives
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={24} color="var(--color-accent)" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Growth-Oriented</h4>
              <p className="text-sm text-muted-foreground">
                Committed to continuous learning and improvement
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-conversion/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={24} color="var(--color-conversion)" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Passionate</h4>
              <p className="text-sm text-muted-foreground">
                Genuine enthusiasm for technology and creating impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalityInsights;