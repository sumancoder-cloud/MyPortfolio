import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProjects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'AI Drowsiness Detection System',
      description: 'A real-time drowsiness detection system using computer vision and machine learning to detect driver drowsiness and prevent accidents through multiple alert mechanisms.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      techStack: ['Python', 'OpenCV', 'dlib', 'Flask', 'TensorFlow', 'Twilio API'],
      category: 'AI/ML Application',
      impact: {
        users: 'Safety Enhancement',
        reduction: '95%',
        metric: 'Detection Accuracy'
      },
      features: [
        'Real-time facial landmark detection',
        'Eye Aspect Ratio (EAR) analysis',
        'Multi-layered alert system',
        'Web-based interface'
      ],
      status: 'Live',
      demoUrl: 'https://github.com/sumancoder-cloud/AI-DROWNINESS-DETECTION-AND-PREVENTION-SYSTEM',
      githubUrl: 'https://github.com/sumancoder-cloud/AI-DROWNINESS-DETECTION-AND-PREVENTION-SYSTEM'
    },
    {
      id: 2,
      title: 'GPS Tracking with QR Code System',
      description: 'A comprehensive GPS tracking system that uses QR codes for easy device identification and real-time location monitoring with interactive maps.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      techStack: ['JavaScript', 'HTML5', 'CSS3', 'GPS API', 'QR Code.js', 'Chart.js'],
      category: 'Web Application',
      impact: {
        users: 'Location Tracking',
        improvement: '±3m',
        metric: 'GPS Accuracy'
      },
      features: [
        'QR code generation & scanning',
        'Real-time GPS tracking',
        'Location history visualization',
        'Interactive mapping interface'
      ],
      status: 'Live',
      demoUrl: 'https://github.com/sumancoder-cloud/GpsTrackingWithQRCode',
      githubUrl: 'https://github.com/sumancoder-cloud/GpsTrackingWithQRCode'
    },
    {
      id: 3,
      title: 'Advanced TO-DO List Application',
      description: 'A feature-rich task management application built with TypeScript, offering advanced organization and productivity features with responsive design.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      techStack: ['TypeScript', 'HTML5', 'CSS3', 'Local Storage', 'Drag & Drop API'],
      category: 'Web Application',
      impact: {
        users: 'Productivity Tool',
        accuracy: '100%',
        metric: 'Task Completion'
      },
      features: [
        'Task management with priorities',
        'Due date tracking',
        'Category organization',
        'Responsive design'
      ],
      status: 'Live',
      demoUrl: 'https://github.com/sumancoder-cloud/TO-DO-LIST',
      githubUrl: 'https://github.com/sumancoder-cloud/TO-DO-LIST'
    },
    {
      id: 4,
      title: 'Fitness Tracker Case Study',
      description: 'A comprehensive fitness tracking web application with workout logging, progress monitoring, and health analytics built with modern web technologies.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js', 'Local Storage'],
      category: 'Web Application',
      impact: {
        teams: 'Health Management',
        efficiency: '100%',
        metric: 'Responsive Design'
      },
      features: [
        'Workout tracking & logging',
        'Progress visualization',
        'Goal setting & monitoring',
        'Health metrics tracking'
      ],
      status: 'Live',
      demoUrl: 'https://github.com/sumancoder-cloud/CASESTUDY-FITNESS-TRACKER',
      githubUrl: 'https://github.com/sumancoder-cloud/CASESTUDY-FITNESS-TRACKER'
    }
  ];

  React.useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentProject((prev) => (prev + 1) % projects?.length);
      }, 5000);
    }

    return () => {
      if (intervalRef?.current) {
        clearInterval(intervalRef?.current);
      }
    };
  }, [isAutoPlaying, projects?.length]);

  const handleProjectChange = (index) => {
    setCurrentProject(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handlePrevious = () => {
    setCurrentProject((prev) => (prev - 1 + projects?.length) % projects?.length);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % projects?.length);
    setIsAutoPlaying(false);
  };

  const handleViewProject = (project) => {
    window.location.href = `/project-showcase?project=${project?.id}`;
  };

  const handleViewDemo = (demoUrl) => {
    window.open(demoUrl, '_blank');
  };

  const handleViewCode = (githubUrl) => {
    window.open(githubUrl, '_blank');
  };

  const currentProjectData = projects?.[currentProject];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my latest work where innovation meets implementation. Each project represents a unique challenge solved with modern technology.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Project Display */}
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-64 lg:h-96 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentProjectData?.image}
                      alt={currentProjectData?.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </motion.div>
                </AnimatePresence>

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    currentProjectData?.status === 'Live' ?'bg-trust/20 text-trust border border-trust/30'
                      : currentProjectData?.status === 'Beta' ?'bg-warning/20 text-warning border border-warning/30' :'bg-primary/20 text-primary border border-primary/30'
                  }`}>
                    {currentProjectData?.status}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <div className="glass px-3 py-1 rounded-full text-xs font-medium">
                    {currentProjectData?.category}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon name="ChevronLeft" size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon name="ChevronRight" size={20} />
                </button>
              </div>

              {/* Project Details */}
              <div className="p-8 lg:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl lg:text-3xl font-display text-foreground mb-4">
                      {currentProjectData?.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {currentProjectData?.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentProjectData?.techStack?.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impact Metrics */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Impact</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="glass p-3 rounded-lg">
                          <div className="text-lg font-bold text-conversion">
                            {currentProjectData?.impact?.users || currentProjectData?.impact?.teams}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {currentProjectData?.impact?.users ? 'Active Users' : 'Teams Using'}
                          </div>
                        </div>
                        <div className="glass p-3 rounded-lg">
                          <div className="text-lg font-bold text-trust">
                            {currentProjectData?.impact?.reduction || currentProjectData?.impact?.improvement || currentProjectData?.impact?.accuracy || currentProjectData?.impact?.efficiency}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {currentProjectData?.impact?.metric}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {currentProjectData?.features?.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Icon name="Check" size={16} className="text-trust" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        variant="default"
                        onClick={() => handleViewProject(currentProjectData)}
                        iconName="ExternalLink"
                        iconPosition="right"
                        className="btn-conversion"
                      >
                        View Case Study
                      </Button>
                      
                      <Button
                        variant="outline"
                        onClick={() => handleViewDemo(currentProjectData?.demoUrl)}
                        iconName="Play"
                        iconPosition="left"
                        className="btn-glass"
                      >
                        Live Demo
                      </Button>

                      <Button
                        variant="ghost"
                        onClick={() => handleViewCode(currentProjectData?.githubUrl)}
                        iconName="Github"
                        iconPosition="left"
                      >
                        View Code
                      </Button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects?.map((_, index) => (
              <button
                key={index}
                onClick={() => handleProjectChange(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? 'bg-primary scale-125' :'bg-muted hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name={isAutoPlaying ? "Pause" : "Play"} size={16} />
              <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
            </button>
          </div>
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.location.href = '/project-showcase'}
            iconName="FolderOpen"
            iconPosition="left"
            className="btn-glass hover-lift"
          >
            View All Projects ({projects?.length + 8}+)
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;