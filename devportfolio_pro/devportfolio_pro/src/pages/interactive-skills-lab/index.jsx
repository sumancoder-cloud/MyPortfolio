import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import SkillCard from './components/SkillCard';
import CodeEditor from './components/CodeEditor';
import LearningJourney from './components/LearningJourney';
import CertificationBadges from './components/CertificationBadges';
import PerformanceMetrics from './components/PerformanceMetrics';
import GitHubActivity from '../../components/GitHubActivity';

const InteractiveSkillsLab = () => {
  const [activeSection, setActiveSection] = useState('skills');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const skillsData = [
    {
      id: 1,
      name: 'Python',
      category: 'Programming Language',
      level: 90,
      experience: '2+ years',
      icon: 'Code2',
      gradient: 'from-blue-600 to-purple-600',
      description: 'Advanced Python development for AI/ML applications, web development, and automation. Expert in computer vision, machine learning, and web frameworks.',
      technologies: ['OpenCV', 'dlib', 'TensorFlow', 'Flask', 'Pandas', 'NumPy']
    },
    {
      id: 2,
      name: 'JavaScript',
      category: 'Programming Language',
      level: 88,
      experience: '2+ years',
      icon: 'Zap',
      gradient: 'from-yellow-500 to-orange-500',
      description: 'Modern JavaScript ES6+ with expertise in DOM manipulation, API integration, and interactive web applications. Strong foundation in both vanilla JS and frameworks.',
      technologies: ['ES6+', 'DOM Manipulation', 'APIs', 'Chart.js', 'Local Storage', 'AJAX']
    },
    {
      id: 3,
      name: 'TypeScript',
      category: 'Programming Language',
      level: 85,
      experience: '1+ year',
      icon: 'Code',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Type-safe JavaScript development with TypeScript. Experience in building scalable applications with enhanced developer experience and code reliability.',
      technologies: ['TypeScript', 'Type Safety', 'Interfaces', 'Generics', 'Modules']
    },
    {
      id: 4,
      name: 'PHP',
      category: 'Backend Language',
      level: 82,
      experience: '1.5+ years',
      icon: 'Server',
      gradient: 'from-purple-500 to-indigo-500',
      description: 'Server-side PHP development with focus on security best practices, authentication systems, and database integration. Expert in secure coding practices.',
      technologies: ['PHP', 'MySQL', 'bcrypt', 'PHPMailer', 'Session Management', 'Security']
    },
    {
      id: 5,
      name: 'HTML5 & CSS3',
      category: 'Frontend Technologies',
      level: 90,
      experience: '2+ years',
      icon: 'Layout',
      gradient: 'from-orange-500 to-red-500',
      description: 'Modern HTML5 and CSS3 with expertise in responsive design, CSS Grid, Flexbox, and semantic markup. Strong foundation in web standards.',
      technologies: ['HTML5', 'CSS3', 'Responsive Design', 'CSS Grid', 'Flexbox', 'Bootstrap']
    },
    {
      id: 6,
      name: 'Computer Vision',
      category: 'AI/ML Specialization',
      level: 85,
      experience: '1+ year',
      icon: 'Eye',
      gradient: 'from-green-500 to-teal-500',
      description: 'Computer vision applications using OpenCV and dlib. Experience in facial recognition, object detection, and real-time image processing.',
      technologies: ['OpenCV', 'dlib', 'Facial Recognition', 'Image Processing', 'Real-time Analysis']
    },
    {
      id: 7,
      name: 'Database Management',
      category: 'Backend Technology',
      level: 80,
      experience: '1.5+ years',
      icon: 'Database',
      gradient: 'from-blue-500 to-green-500',
      description: 'Database design and management with MySQL. Experience in schema design, query optimization, and data security practices.',
      technologies: ['MySQL', 'Database Design', 'SQL Queries', 'Data Security', 'Normalization']
    },
    {
      id: 8,
      name: 'Git & Version Control',
      category: 'Development Tools',
      level: 88,
      experience: '2+ years',
      icon: 'GitBranch',
      gradient: 'from-gray-600 to-gray-800',
      description: 'Version control with Git and GitHub. Experience in collaborative development, branching strategies, and project management.',
      technologies: ['Git', 'GitHub', 'Version Control', 'Collaboration', 'Project Management']
    },
    {
      id: 9,
      name: 'React.js',
      category: 'Frontend Framework',
      level: 85,
      experience: '1+ year',
      icon: 'Code',
      gradient: 'from-cyan-500 to-blue-500',
      description: 'Modern React development with hooks, components, and state management. Part of MERN stack expertise for full-stack applications.',
      technologies: ['React', 'JSX', 'Hooks', 'Components', 'State Management', 'Virtual DOM']
    },
    {
      id: 10,
      name: 'Node.js & Express',
      category: 'Backend Framework',
      level: 80,
      experience: '1+ year',
      icon: 'Server',
      gradient: 'from-green-500 to-emerald-500',
      description: 'Server-side JavaScript with Node.js and Express.js. RESTful API development and middleware implementation for MERN stack applications.',
      technologies: ['Node.js', 'Express.js', 'REST APIs', 'Middleware', 'NPM', 'Async/Await']
    },
    {
      id: 11,
      name: 'MongoDB',
      category: 'NoSQL Database',
      level: 78,
      experience: '1+ year',
      icon: 'Database',
      gradient: 'from-green-600 to-green-800',
      description: 'NoSQL database management with MongoDB. Document-based data modeling and aggregation pipelines for MERN stack applications.',
      technologies: ['MongoDB', 'Mongoose', 'Aggregation', 'Document DB', 'Atlas', 'Indexing']
    },
    {
      id: 12,
      name: 'MERN Stack',
      category: 'Full Stack Development',
      level: 82,
      experience: '1+ year',
      icon: 'Layers',
      gradient: 'from-indigo-500 to-purple-500',
      description: 'Full-stack web development using MongoDB, Express.js, React.js, and Node.js. Complete end-to-end application development.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Full Stack', 'REST APIs']
    }
  ];

  const sections = [
    { id: 'skills', name: 'Skills Overview', icon: 'Code' },
    { id: 'journey', name: 'Learning Journey', icon: 'TrendingUp' },
    { id: 'certifications', name: 'Certifications', icon: 'Award' },
    { id: 'metrics', name: 'Performance', icon: 'BarChart3' },
    { id: 'github', name: 'GitHub Activity', icon: 'Github' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleTrySkill = (skill) => {
    setSelectedSkill(skill);
  };

  const handleDownloadAssessment = () => {
    // Simulate PDF download
    // const link = document.createElement('a');
    // link.href = '/assets/documents/T-Suman-Yadav-Technical-Assessment.pdf';
    // link.download = 'T-Suman-Yadav-Technical-Assessment.pdf';
    // link?.click();
  };

  const handleViewGitHub = () => {
    window.open('https://github.com/sumancoder-cloud', '_blank');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-muted-foreground">Loading Skills Lab...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-glow">
                <Icon name="Code" size={32} color="white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-display text-gradient mb-6">
              Interactive Skills Lab
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore my technical competencies through live demonstrations, interactive code samples, and real-world project examples. 
              Don't just read about my skills—experience them firsthand.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              {/* <Button
                variant="default"
                size="lg"
                onClick={handleDownloadAssessment}
                iconName="Download"
                iconPosition="left"
                iconSize={20}
                className="btn-conversion shadow-conversion"
              >
                Download Technical Assessment
              </Button> */}
              <Button
                variant="outline"
                size="lg"
                onClick={handleViewGitHub}
                iconName="Github"
                iconPosition="left"
                iconSize={20}
                className="btn-glass"
              >
                View GitHub Profile
              </Button>
            </div>
          </motion.div>

          {/* Section Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {sections?.map((section) => (
              <Button
                key={section?.id}
                variant={activeSection === section?.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveSection(section?.id)}
                iconName={section?.icon}
                iconPosition="left"
                iconSize={16}
                className={activeSection === section?.id ? "btn-primary" : "btn-glass"}
              >
                {section?.name}
              </Button>
            ))}
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeSection === 'skills' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillsData?.map((skill, index) => (
                  <SkillCard
                    key={skill?.id}
                    skill={skill}
                    index={index}
                    onTryIt={handleTrySkill}
                  />
                ))}
              </div>

              {/* Skills Summary */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="card-glass text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">{skillsData?.length}</div>
                  <div className="text-sm text-muted-foreground">Technical Skills</div>
                </div>
                <div className="card-glass text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {Math.round(skillsData?.reduce((acc, skill) => acc + skill?.level, 0) / skillsData?.length)}%
                  </div>
                  <div className="text-sm text-muted-foreground">Average Proficiency</div>
                </div>
                <div className="card-glass text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {skillsData?.filter(skill => skill?.level >= 90)?.length}
                  </div>
                  <div className="text-sm text-muted-foreground">Expert Level</div>
                </div>
                <div className="card-glass text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'journey' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <LearningJourney />
            </motion.div>
          )}

          {activeSection === 'certifications' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CertificationBadges />
            </motion.div>
          )}

          {activeSection === 'metrics' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <PerformanceMetrics />
            </motion.div>
          )}

          {activeSection === 'github' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <GitHubActivity />
            </motion.div>
          )}
        </div>
      </section>
      {/* Code Editor Modal */}
      <CodeEditor
        selectedSkill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
      />
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-display text-foreground mb-6">
              Ready to See These Skills in Action?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how my technical expertise can contribute to your team's success. 
              Schedule a technical interview or explore my project portfolio.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                onClick={() => window.location.href = '/connect-collaborate'}
                iconName="Calendar"
                iconPosition="left"
                iconSize={20}
                className="btn-conversion shadow-conversion"
              >
                Schedule Technical Interview
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = '/project-showcase'}
                iconName="FolderOpen"
                iconPosition="left"
                iconSize={20}
                className="btn-glass"
              >
                View Project Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InteractiveSkillsLab;