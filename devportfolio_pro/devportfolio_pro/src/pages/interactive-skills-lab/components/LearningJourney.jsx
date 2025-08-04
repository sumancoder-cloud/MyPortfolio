import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LearningJourney = () => {
  const [selectedYear, setSelectedYear] = useState('2025');

  const journeyData = {
    '2025': [
      {
        id: 1,
        month: 'January',
        skills: ['Advanced React Patterns', 'Context API'],
        projects: ['Dynamic Portfolio Enhancement', 'Component Optimization'],
        commits: 45,
        achievements: ['React Mastery', 'Performance Optimization']
      },
      {
        id: 2,
        month: 'February',
        skills: ['TensorFlow.js', 'Machine Learning'],
        projects: ['AI Model Integration', 'Browser-based ML'],
        commits: 38,
        achievements: ['ML in Browser', 'AI Enhancement']
      },
      {
        id: 3,
        month: 'March',
        skills: ['Docker', 'Container Deployment'],
        projects: ['Application Containerization', 'DevOps Pipeline'],
        commits: 52,
        achievements: ['DevOps Skills', 'Deployment Automation']
      }
    ],
    '2024': [
      {
        id: 1,
        month: 'January',
        skills: ['Python Fundamentals', 'OpenCV Basics'],
        projects: ['Learning Python Syntax', 'Basic Image Processing'],
        commits: 45,
        achievements: ['Python Foundation', 'Computer Vision Introduction']
      },
      {
        id: 2,
        month: 'February',
        skills: ['Computer Vision', 'dlib Library'],
        projects: ['Face Detection Experiments', 'Eye Tracking Research'],
        commits: 67,
        achievements: ['Facial Recognition Basics', 'Eye Aspect Ratio Understanding']
      },
      {
        id: 3,
        month: 'March',
        skills: ['Flask Framework', 'Real-time Processing'],
        projects: ['AI Drowsiness Detection System', 'Web Interface Development'],
        commits: 89,
        achievements: ['AI Safety Application', 'Real-time Video Processing']
      },
      {
        id: 4,
        month: 'April',
        skills: ['JavaScript APIs', 'Geolocation'],
        projects: ['GPS Tracking with QR Code', 'Location Services'],
        commits: 72,
        achievements: ['GPS Integration', 'QR Code Implementation']
      },
      {
        id: 5,
        month: 'May',
        skills: ['TypeScript', 'Local Storage'],
        projects: ['TO-DO List Application', 'Task Management System'],
        commits: 56,
        achievements: ['Type Safety Mastery', 'Client-side Storage']
      },
      {
        id: 6,
        month: 'June',
        skills: ['Chart.js', 'Data Visualization'],
        projects: ['Fitness Tracker Case Study', 'Health Analytics Dashboard'],
        commits: 63,
        achievements: ['Data Visualization', 'Health Tech Application']
      },
      {
        id: 7,
        month: 'July',
        skills: ['PHP Security', 'MySQL Integration'],
        projects: ['User Authentication System', 'Secure Login Implementation'],
        commits: 78,
        achievements: ['Security Best Practices', 'Database Integration']
      },
      {
        id: 8,
        month: 'August',
        skills: ['MERN Stack', 'Full-Stack Development'],
        projects: ['Portfolio Development', 'React Component Architecture'],
        commits: 94,
        achievements: ['Full-Stack Proficiency', 'Modern Web Development']
      },
      {
        id: 9,
        month: 'September',
        skills: ['Advanced JavaScript', 'ES6+ Features'],
        projects: ['Modern JS Applications', 'Async Programming'],
        commits: 67,
        achievements: ['JavaScript Mastery', 'Modern Development']
      },
      {
        id: 10,
        month: 'October',
        skills: ['Node.js Advanced', 'Express Middleware'],
        projects: ['Backend API Development', 'Server Optimization'],
        commits: 73,
        achievements: ['Backend Expertise', 'API Development']
      },
      {
        id: 11,
        month: 'November',
        skills: ['MongoDB Advanced', 'Database Optimization'],
        projects: ['Database Design', 'Performance Tuning'],
        commits: 58,
        achievements: ['Database Mastery', 'Performance Optimization']
      },
      {
        id: 12,
        month: 'December',
        skills: ['Full-Stack Integration', 'Project Deployment'],
        projects: ['Complete MERN Applications', 'Production Deployment'],
        commits: 82,
        achievements: ['Full-Stack Developer', 'Production Ready']
      }
    ],
    '2023': [
      {
        id: 1,
        month: 'September',
        skills: ['HTML5 Fundamentals', 'CSS3 Basics'],
        projects: ['First Web Pages', 'Basic Styling'],
        commits: 23,
        achievements: ['Web Development Start', 'Responsive Design Basics']
      },
      {
        id: 2,
        month: 'October',
        skills: ['JavaScript Basics', 'DOM Manipulation'],
        projects: ['Interactive Web Elements', 'Form Validation'],
        commits: 34,
        achievements: ['JavaScript Foundation', 'Dynamic Web Pages']
      },
      {
        id: 3,
        month: 'November',
        skills: ['Git/GitHub', 'Version Control'],
        projects: ['First GitHub Repository', 'Collaboration Learning'],
        commits: 45,
        achievements: ['Version Control Mastery', 'Open Source Contribution']
      },
      {
        id: 4,
        month: 'December',
        skills: ['Advanced CSS', 'Bootstrap Framework'],
        projects: ['Responsive Layouts', 'Mobile-First Design'],
        commits: 56,
        achievements: ['CSS Grid & Flexbox', 'Framework Integration']
      }
    ]
  };

  const currentlyLearning = [
    {
      id: 1,
      name: 'Advanced React Patterns',
      progress: 75,
      description: 'Context API, Custom Hooks, and Performance Optimization techniques',
      icon: 'Code',
      gradient: 'from-blue-500 to-cyan-500',
      startDate: '2024-08-01',
      estimatedCompletion: '2024-10-15'
    },
    {
      id: 2,
      name: 'TensorFlow & Deep Learning',
      progress: 45,
      description: 'Machine Learning models for computer vision and AI applications',
      icon: 'Brain',
      gradient: 'from-orange-500 to-red-500',
      startDate: '2024-07-15',
      estimatedCompletion: '2024-11-01'
    },
    {
      id: 3,
      name: 'Docker & DevOps',
      progress: 60,
      description: 'Containerization, CI/CD pipelines, and deployment automation',
      icon: 'Package',
      gradient: 'from-blue-400 to-blue-600',
      startDate: '2024-08-10',
      estimatedCompletion: '2024-10-30'
    }
  ];

  const years = Object.keys(journeyData)?.sort((a, b) => b - a);

  return (
    <div className="space-y-8">
      {/* Currently Learning Section */}
      <div>
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-gradient-to-br from-accent to-trust rounded-lg flex items-center justify-center">
            <Icon name="BookOpen" size={18} color="white" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">Currently Exploring</h3>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {currentlyLearning?.map((item, index) => (
            <motion.div
              key={item?.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card-glass hover-lift"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item?.gradient} flex items-center justify-center shadow-glow`}>
                    <Icon name={item?.icon} size={20} color="white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item?.name}</h4>
                    <p className="text-xs text-muted-foreground">In Progress</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-foreground">{item?.progress}%</div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{item?.description}</p>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-muted-foreground">Progress</span>
                  <span className="text-xs text-foreground">{item?.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${item?.gradient} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${item?.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Started: {new Date(item.startDate)?.toLocaleDateString()}</span>
                <span>ETA: {new Date(item.estimatedCompletion)?.toLocaleDateString()}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Learning Journey Timeline */}
      <div>
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <Icon name="TrendingUp" size={18} color="white" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">Learning Journey</h3>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
        </div>

        {/* Year Selector */}
        <div className="flex items-center space-x-2 mb-6">
          {years?.map((year) => (
            <Button
              key={year}
              variant={selectedYear === year ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedYear(year)}
              className={selectedYear === year ? "btn-primary" : "btn-glass"}
            >
              {year}
            </Button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
          
          <div className="space-y-6">
            {journeyData?.[selectedYear]?.map((item, index) => (
              <motion.div
                key={item?.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-glow">
                  <Icon name="Calendar" size={16} color="white" />
                </div>
                
                <div className="card-glass hover-lift">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{item?.month} {selectedYear}</h4>
                      <p className="text-sm text-muted-foreground">Skills & Projects Development</p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="GitCommit" size={16} />
                      <span>{item?.commits} commits</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h5 className="text-sm font-medium text-foreground mb-2">Skills Learned</h5>
                      <div className="space-y-1">
                        {item?.skills?.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center space-x-2">
                            <Icon name="CheckCircle" size={14} className="text-trust" />
                            <span className="text-sm text-muted-foreground">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium text-foreground mb-2">Projects Built</h5>
                      <div className="space-y-1">
                        {item?.projects?.map((project, projectIndex) => (
                          <div key={projectIndex} className="flex items-center space-x-2">
                            <Icon name="Folder" size={14} className="text-primary" />
                            <span className="text-sm text-muted-foreground">{project}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm font-medium text-foreground mb-2">Achievements</h5>
                    <div className="flex flex-wrap gap-2">
                      {item?.achievements?.map((achievement, achievementIndex) => (
                        <span
                          key={achievementIndex}
                          className="px-3 py-1 text-xs bg-gradient-to-r from-accent/20 to-trust/20 text-accent border border-accent/30 rounded-full"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningJourney;