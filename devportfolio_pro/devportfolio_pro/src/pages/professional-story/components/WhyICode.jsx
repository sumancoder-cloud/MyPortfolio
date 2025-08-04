import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const WhyICode = () => {
  const [expandedStory, setExpandedStory] = useState(null);

  const codingStories = [
    {
      id: 1,
      title: "The First \'Hello World\' Moment",
      icon: "Sparkles",
      color: "primary",
      preview: "The moment that sparked my journey into programming...",
      fullStory: `I still remember the excitement I felt when I wrote my first "Hello World" program in C++ during my first semester. 
      It wasn't just about seeing text appear on the screen—it was the realization that I could communicate with a machine, 
      give it instructions, and make it respond. That simple program opened up a world of possibilities.\n\nWhat fascinated me most 
      was the logical structure of code. Every semicolon, every bracket had a purpose. It was like learning a new language that 
      could bring ideas to life. From that moment, I knew I wanted to explore deeper into this world where creativity meets logic.`,
      impact: "Discovered my passion for logical problem-solving",
      technologies: ["C++", "Basic Programming Concepts"]
    },
    {
      id: 2,
      title: "Building My First Web Application",
      icon: "Globe",
      color: "secondary",
      preview: "Creating something that others could actually use and interact with...",
      fullStory: `During my second year, I decided to build a simple task management web application. It started as a personal project 
      to organize my study schedule, but it became so much more. I spent countless hours learning HTML, CSS, and JavaScript, 
      debugging issues, and adding new features.\n\nThe breakthrough moment came when I deployed it online and shared it with my 
      classmates. Seeing others use something I built, provide feedback, and find it genuinely helpful was incredibly rewarding. 
      It taught me that code isn't just about solving problems—it's about creating experiences that can make people's lives easier.`,
      impact: "Learned the joy of building user-centric solutions",
      technologies: ["HTML", "CSS", "JavaScript", "Local Storage"]
    },
    {
      id: 3,
      title: "The Debugging Marathon",
      icon: "Bug",
      color: "accent",
      preview: "A 12-hour debugging session that taught me persistence...",
      fullStory: `During my internship, I encountered a bug that seemed impossible to solve. The application would randomly crash, 
      but only in production, never in development. I spent 12 hours straight going through logs, adding debug statements, 
      and testing different scenarios.\n\nWhen I finally found the issue—a race condition in asynchronous code—the relief was 
      immense. But more importantly, I learned that debugging isn't just about fixing problems; it's about understanding systems 
      deeply. That experience taught me patience, systematic thinking, and the importance of thorough testing.`,
      impact: "Developed resilience and systematic problem-solving skills",
      technologies: ["Node.js", "Debugging Tools", "Async Programming"]
    },
    {
      id: 4,
      title: "Open Source Contribution",
      icon: "GitBranch",
      color: "conversion",
      preview: "Contributing to a project used by thousands of developers...",
      fullStory: `I discovered an open-source React component library that I was using in my projects had a small but annoying bug. 
      Instead of just working around it, I decided to fix it and contribute back to the community.\n\nThe process of understanding 
      someone else's codebase, following contribution guidelines, and having my code reviewed by experienced developers was 
      incredibly educational. When my pull request was merged and I saw it being used by other developers, I felt a deep sense 
      of connection to the global developer community.`,
      impact: "Connected with the global developer community",
      technologies: ["React", "Git", "Open Source Workflow"]
    }
  ];

  const coreMotivations = [
    {
      title: "Problem Solving",
      description: "Every bug is a puzzle waiting to be solved, every feature is a challenge to be conquered",
      icon: "Puzzle",
      color: "primary"
    },
    {
      title: "Creating Impact",
      description: "Building solutions that make a real difference in people's daily lives and work",
      icon: "Heart",
      color: "secondary"
    },
    {
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and there's always something new to discover and master",
      icon: "BookOpen",
      color: "accent"
    },
    {
      title: "Building Community",
      description: "Contributing to open source and helping fellow developers grow and succeed",
      icon: "Users",
      color: "conversion"
    }
  ];

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
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl font-display text-gradient mb-4">
          Why I Code
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          The authentic story behind my passion for software development
        </p>
      </div>
      {/* Coding Stories */}
      <div className="glass-card p-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-display text-foreground mb-8 text-center">
            Defining Moments in My Journey
          </h3>
          
          <div className="space-y-6">
            {codingStories?.map((story) => (
              <div key={story?.id} className="glass p-6 rounded-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    getColorClasses(story?.color)
                  } border`}>
                    <Icon name={story?.icon} size={20} color={getIconColorVar(story?.color)} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-foreground">{story?.title}</h4>
                      <button
                        onClick={() => setExpandedStory(expandedStory === story?.id ? null : story?.id)}
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        <Icon 
                          name={expandedStory === story?.id ? "ChevronUp" : "ChevronDown"} 
                          size={20} 
                        />
                      </button>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {expandedStory === story?.id ? story?.fullStory : story?.preview}
                    </p>
                    
                    {expandedStory === story?.id && (
                      <div className="animate-fade-in space-y-4">
                        <div className="flex items-center space-x-2">
                          <Icon name="Target" size={16} color="var(--color-accent)" />
                          <span className="text-sm font-medium text-accent">Key Learning:</span>
                          <span className="text-sm text-muted-foreground">{story?.impact}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {story?.technologies?.map((tech, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-muted/30 text-muted-foreground text-xs rounded-full border border-border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Core Motivations */}
      <div className="glass-card p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display text-foreground mb-2">What Drives My Passion</h3>
            <p className="text-muted-foreground">The core motivations that fuel my love for development</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreMotivations?.map((motivation, index) => (
              <div key={index} className="glass p-6 rounded-lg hover-lift transition-smooth text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  getColorClasses(motivation?.color)
                } border`}>
                  <Icon name={motivation?.icon} size={24} color={getIconColorVar(motivation?.color)} />
                </div>
                <h4 className="font-semibold text-foreground mb-3">{motivation?.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {motivation?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Philosophy Statement */}
      <div className="glass-card p-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Icon name="Code2" size={32} color="white" />
            </div>
            <h3 className="text-2xl font-display text-foreground mb-4">My Development Philosophy</h3>
          </div>

          <blockquote className="text-xl text-foreground font-medium leading-relaxed mb-6 italic">
            "Code is not just about making computers do things—it's about solving human problems, 
            creating delightful experiences, and building bridges between ideas and reality."
          </blockquote>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="glass p-4 rounded-lg">
              <Icon name="Users" size={20} color="var(--color-primary)" className="mx-auto mb-2" />
              <h4 className="font-semibold text-foreground mb-2">Human-Centered</h4>
              <p className="text-sm text-muted-foreground">
                Every line of code should serve a human need
              </p>
            </div>

            <div className="glass p-4 rounded-lg">
              <Icon name="Zap" size={20} color="var(--color-secondary)" className="mx-auto mb-2" />
              <h4 className="font-semibold text-foreground mb-2">Efficient & Elegant</h4>
              <p className="text-sm text-muted-foreground">
                Simple solutions to complex problems
              </p>
            </div>

            <div className="glass p-4 rounded-lg">
              <Icon name="Infinity" size={20} color="var(--color-accent)" className="mx-auto mb-2" />
              <h4 className="font-semibold text-foreground mb-2">Continuously Evolving</h4>
              <p className="text-sm text-muted-foreground">
                Always learning, always improving
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyICode;