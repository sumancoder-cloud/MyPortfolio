import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const InteractiveTimeline = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(0);

  const milestones = [
    {
      id: 0,
      year: "2023",
      title: "University Journey Begins",
      subtitle: "SRM University AP - Computer Science & Engineering",
      icon: "GraduationCap",
      color: "primary",
      description: `Started my B.Tech in Computer Science & Engineering at SRM University AP with a passion for technology and innovation. 
      Focused on building strong fundamentals in programming, data structures, and software development principles.`,
      highlights: [
        "Enrolled in B.Tech CSE program (2023-2027)",
        "Built foundation in programming and algorithms",
        "Started exploring web development technologies"
      ],
      technologies: ["C", "Python", "HTML/CSS", "JavaScript","MERN Stack"]
    },
    {
      id: 1,
      year: "2024",
      title: "Project Development Phase",
      subtitle: "Building Real-World Applications",
      icon: "Code2",
      color: "secondary",
      description: `Began developing practical projects that solve real-world problems. Created AI-powered applications and web-based solutions, 
      focusing on computer vision, location tracking, and user authentication systems.`,
      highlights: [
        "Developed AI Drowsiness Detection System using OpenCV",
        "Built GPS Tracking application with QR code integration",
        "Created secure User Authentication System with PHP/MySQL"
      ],
      technologies: ["Python", "OpenCV", "JavaScript", "PHP", "MySQL"]
    },
    {
      id: 2,
      year: "2025",
      title: "Professional Internship",
      subtitle: "Addwise Tech Innovations - Full Stack Developer",
      icon: "Briefcase",
      color: "accent",
      description: `Completed a Full Stack Web Development Internship at Addwise Tech Innovations from May to July 2024. Gained hands-on experience 
      with MERN stack development, working on real-time applications and contributing to production-level projects.`,
      highlights: [
        "3 months of intensive professional development experience",
        "MERN stack development and deployment",
        "Real-time application development and optimization"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Git"]
    },
    
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: "bg-primary text-primary-foreground border-primary",
      secondary: "bg-secondary text-secondary-foreground border-secondary",
      accent: "bg-accent text-accent-foreground border-accent",
      conversion: "bg-conversion text-conversion-foreground border-conversion"
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
            My Journey Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key milestones that shaped my path as a software developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Timeline Navigation */}
          <div className="space-y-4">
            {milestones?.map((milestone, index) => (
              <button
                key={milestone?.id}
                onClick={() => setSelectedMilestone(index)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                  selectedMilestone === index
                    ? 'glass border border-primary/30 shadow-glow'
                    : 'hover:bg-white/5 border border-transparent'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    selectedMilestone === index ? getColorClasses(milestone?.color) : 'bg-muted'
                  }`}>
                    <Icon 
                      name={milestone?.icon} 
                      size={20} 
                      color={selectedMilestone === index ? "white" : "var(--color-muted-foreground)"}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-medium text-primary">{milestone?.year}</span>
                      {selectedMilestone === index && (
                        <Icon name="ChevronRight" size={16} color="var(--color-primary)" />
                      )}
                    </div>
                    <h3 className="font-semibold text-foreground">{milestone?.title}</h3>
                    <p className="text-sm text-muted-foreground">{milestone?.subtitle}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Milestone Details */}
          <div className="glass p-6 rounded-lg animate-fade-in">
            {milestones?.[selectedMilestone] && (
              <div>
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    getColorClasses(milestones?.[selectedMilestone]?.color)
                  }`}>
                    <Icon 
                      name={milestones?.[selectedMilestone]?.icon} 
                      size={24} 
                      color="white"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary mb-1">
                      {milestones?.[selectedMilestone]?.year}
                    </div>
                    <h3 className="text-xl font-display text-foreground">
                      {milestones?.[selectedMilestone]?.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestones?.[selectedMilestone]?.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground leading-relaxed mb-6">
                  {milestones?.[selectedMilestone]?.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                    <Icon name="Star" size={16} className="mr-2" color="var(--color-accent)" />
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {milestones?.[selectedMilestone]?.highlights?.map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Icon name="Check" size={16} color="var(--color-accent)" className="mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                    <Icon name="Code" size={16} className="mr-2" color={getIconColorVar(milestones?.[selectedMilestone]?.color)} />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {milestones?.[selectedMilestone]?.technologies?.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTimeline;