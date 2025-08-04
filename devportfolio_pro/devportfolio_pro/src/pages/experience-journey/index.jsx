import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import TimelineItem from './components/TimelineItem';
import GrowthVisualization from './components/GrowthVisualization';
import ExperienceStats from './components/ExperienceStats';

import DownloadableResources from './components/DownloadableResources';

const ExperienceJourney = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const experiences = [
    {
      id: 1,
      type: 'education',
      title: 'B.Tech in Computer Science & Engineering',
      organization: 'SRM University AP',
      location: 'Andhra Pradesh, India',
      duration: '2023 - 2027',
      description: `Pursuing Bachelor of Technology with specialization in Computer Science and Engineering. Focused on practical learning through hands-on projects in AI, web development, and software engineering. Core coursework includes Data Structures, Algorithms, Database Management, Software Engineering, and Web Technologies.`,
      highlights: [
        'Strong academic performance with focus on practical projects',
        'Specialized in AI/ML and Computer Vision applications',
        'Active in coding and development communities',
        'Completed multiple real-world projects',
        'Self-directed learning in modern web technologies'
      ],
      technologies: ['Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'MySQL', 'MongoDB', 'Express.js', 'OpenCV'],
      logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop&crop=center',
      metrics: [
        { label: 'GitHub Projects', value: '8+' },
        { label: 'Technologies Learned', value: '15+' },
        { label: 'Certifications', value: '4' },
        { label: 'Study Years', value: '2' }
      ]
    },
    {
      id: 2,
      type: 'internship',
      title: 'Full Stack Web Development Intern',
      organization: 'Addwise Tech Innovations',
      location: 'Remote',
      duration: 'May 2024 - July 2024',
      description: `Worked as a Full Stack Web Development Intern focusing on MERN stack development. Contributed to real-time web applications, developed dashboards, and implemented full-stack features. Gained hands-on experience in modern web technologies and agile development practices.`,
      highlights: [
        'Developed full-stack applications using MERN stack',
        'Implemented responsive user interfaces with React.js',
        'Built RESTful APIs using Node.js and Express.js',
        'Worked with MongoDB for database management',
        'Collaborated with team using Git version control',
        'Participated in code reviews and agile development'
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML5', 'CSS3', 'Git'],
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center',
      metrics: [
        { label: 'Projects Contributed', value: '3+' },
        { label: 'Features Implemented', value: '8+' },
        { label: 'Technologies Used', value: '8' },
        { label: 'Duration (Months)', value: '3' }
      ],
      testimonial: {
        quote: 'Suman shows great potential in full-stack development and consistently delivers quality work.',
        author: 'Technical Mentor',
        role: 'Senior Developer',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      }
    },
    {
      id: 3,
      type: 'project',
      title: 'AI Drowsiness Detection System',
      organization: 'Personal Project',
      location: 'GitHub',
      duration: 'March 2024',
      description: `Developed an AI-powered drowsiness detection system using computer vision and machine learning. The system uses OpenCV and dlib to detect facial landmarks and calculate eye aspect ratio (EAR) to determine if a person is drowsy. Implemented real-time video processing with Flask web interface.`,
      highlights: [
        'Implemented real-time facial landmark detection',
        'Calculated Eye Aspect Ratio (EAR) for drowsiness detection',
        'Built Flask web interface for easy interaction',
        'Achieved 95% accuracy in drowsiness detection',
        'Used OpenCV and dlib for computer vision processing',
        'Created safety application for driver monitoring'
      ],
      technologies: ['Python', 'OpenCV', 'dlib', 'Flask', 'NumPy', 'Computer Vision', 'Machine Learning'],
      logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop&crop=center',
      metrics: [
        { label: 'Detection Accuracy', value: '95%' },
        { label: 'Processing Speed', value: '30 FPS' },
        { label: 'Technologies Used', value: '7' },
        { label: 'GitHub Stars', value: '5+' }
      ],
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/sumancoder-cloud/AI-Drowsiness-Detection' },
        { label: 'Live Demo', url: '#' }
      ]
    },
    {
      id: 4,
      type: 'project',
      title: 'GPS Tracking with QR Code',
      organization: 'Personal Project',
      location: 'GitHub',
      duration: 'April 2024',
      description: `Developed a GPS tracking application with QR code integration for location sharing and tracking. The system allows users to generate QR codes for specific locations and track real-time GPS coordinates. Implemented geolocation APIs and QR code generation for seamless location sharing.`,
      highlights: [
        'Implemented real-time GPS tracking functionality',
        'Generated QR codes for location sharing',
        'Used HTML5 Geolocation API for accurate positioning',
        'Built responsive web interface for mobile devices',
        'Integrated QR code scanning for location access',
        'Created user-friendly location sharing system'
      ],
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Geolocation API', 'QR Code.js', 'Responsive Design'],
      logo: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=100&h=100&fit=crop&crop=center',
      metrics: [
        { label: 'Location Accuracy', value: '±3m' },
        { label: 'QR Generation Speed', value: '<1s' },
        { label: 'Mobile Compatibility', value: '100%' },
        { label: 'Technologies Used', value: '6' }
      ],
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/sumancoder-cloud/GPS-Tracking-with-QR-Code' },
        { label: 'Live Demo', url: '#' }
      ]
    },
    {
      id: 5,
      type: 'project',
      title: 'TO-DO List Application',
      organization: 'Personal Project',
      location: 'GitHub',
      duration: 'May 2024',
      description: `Built a comprehensive TO-DO list application using TypeScript for enhanced type safety and better code maintainability. The application features task management, priority levels, due dates, and local storage persistence. Implemented modern UI/UX design with responsive layout.`,
      highlights: [
        'Implemented TypeScript for type safety',
        'Added task priority and due date features',
        'Used local storage for data persistence',
        'Created responsive and intuitive user interface',
        'Implemented task filtering and sorting',
        'Added task completion tracking and statistics'
      ],
      technologies: ['TypeScript', 'HTML5', 'CSS3', 'Local Storage', 'Responsive Design', 'JavaScript'],
      logo: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=100&h=100&fit=crop&crop=center',
      metrics: [
        { label: 'Type Safety', value: '100%' },
        { label: 'Features Implemented', value: '8+' },
        { label: 'Code Quality', value: 'High' },
        { label: 'Responsive Design', value: '100%' }
      ],
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/sumancoder-cloud/TO-DO-List' },
        { label: 'Live Demo', url: '#' }
      ]
    },
    {
      id: 6,
      type: 'project',
      title: 'User Authentication System',
      organization: 'Personal Project',
      location: 'GitHub',
      duration: 'July 2024',
      description: `Developed a secure user authentication system using PHP and MySQL with advanced security features. The system includes user registration, login, password hashing with bcrypt, email verification, and SQL injection protection. Implemented best practices for web security and data protection.`,
      highlights: [
        'Implemented secure password hashing with bcrypt',
        'Added email verification for user registration',
        'Protected against SQL injection attacks',
        'Created session management system',
        'Built responsive user interface',
        'Implemented password reset functionality'
      ],
      technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'bcrypt', 'Email Verification'],
      logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop&crop=center',
      metrics: [
        { label: 'Security Features', value: '6+' },
        { label: 'SQL Injection Protection', value: '100%' },
        { label: 'Password Security', value: 'bcrypt' },
        { label: 'Email Verification', value: 'Active' }
      ],
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/sumancoder-cloud/User-Authentication-System' },
        { label: 'Live Demo', url: '#' }
      ]
    },
    {
      id: 7,
      type: 'project',
      title: 'Fitness Tracker Case Study',
      organization: 'Personal Project',
      location: 'GitHub',
      duration: 'June 2024',
      description: `Created a comprehensive fitness tracker case study with data visualization using Chart.js. The project demonstrates health analytics, workout tracking, and progress visualization. Implemented interactive charts and responsive design for optimal user experience across devices.`,
      highlights: [
        'Built interactive data visualization with Chart.js',
        'Created responsive design for mobile and desktop',
        'Implemented workout tracking functionality',
        'Added progress monitoring and analytics',
        'Designed user-friendly dashboard interface',
        'Integrated health metrics calculation'
      ],
      technologies: ['JavaScript', 'Chart.js', 'HTML5', 'CSS3', 'Responsive Design', 'Data Visualization'],
      logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop&crop=center',
      metrics: [
        { label: 'Chart Types', value: '5+' },
        { label: 'Responsive Design', value: '100%' },
        { label: 'Data Points', value: '50+' },
        { label: 'User Experience', value: 'Excellent' }
      ],
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/sumancoder-cloud/Fitness-Tracker-Case-Study' },
        { label: 'Live Demo', url: '#' }
      ]
    }
  ];

  const filterOptions = [
    { id: 'all', label: 'All Experiences', icon: 'List' },
    { id: 'education', label: 'Education', icon: 'GraduationCap' },
    { id: 'internship', label: 'Internships', icon: 'Briefcase' },
    { id: 'project', label: 'Projects', icon: 'Code' },
    { id: 'achievement', label: 'Achievements', icon: 'Award' },
    { id: 'hackathon', label: 'Hackathons', icon: 'Trophy' },
    { id: 'certification', label: 'Certifications', icon: 'Certificate' }
  ];

  const filteredExperiences = activeFilter === 'all' 
    ? experiences 
    : experiences?.filter(exp => exp?.type === activeFilter);

  const toggleExpanded = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev?.[id]
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="glass-card p-8 text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading experience journey...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Experience Journey - T Suman Yadav </title>
        <meta name="description" content="Explore T Suman Yadav's professional journey through internships, projects, achievements, and continuous learning in software development." />
        <meta name="keywords" content="experience, internships, projects, achievements, software developer, full-stack developer" />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-glow animate-float">
                <Icon name="MapPin" size={32} color="white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-display text-gradient mb-6">
              Experience Journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Chronicling my professional development through internships, academic projects, 
              and practical experience. Each milestone represents growth, learning, and the 
              continuous pursuit of excellence in software development.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              {[
                { label: 'Years of Learning', value: '2+', icon: 'Calendar' },
                { label: 'Internships', value: '1', icon: 'Briefcase' },
                { label: 'Projects Completed', value: '12+', icon: 'Code' },
                { label: 'Certifications', value: '4', icon: 'Award' }
              ]?.map((stat, index) => (
                <div key={stat?.label} className="glass-card p-4 hover-lift transition-smooth">
                  <div className="flex items-center justify-center mb-2">
                    <Icon name={stat?.icon} size={24} className="text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat?.value}</div>
                  <div className="text-sm text-muted-foreground">{stat?.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Experience Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ExperienceStats />
        </div>
      </section>
      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
              Professional Timeline
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A chronological journey through my experiences, achievements, and continuous learning
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filterOptions?.map((filter) => (
              <button
                key={filter?.id}
                onClick={() => setActiveFilter(filter?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                  activeFilter === filter?.id
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'bg-surface text-muted-foreground hover:text-foreground hover:bg-surface/80'
                }`}
              >
                <Icon name={filter?.icon} size={16} />
                <span>{filter?.label}</span>
                <span className="text-xs bg-muted px-2 py-1 rounded-full">
                  {filter?.id === 'all' ? experiences?.length : experiences?.filter(e => e?.type === filter?.id)?.length}
                </span>
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative">
            {filteredExperiences?.map((experience, index) => (
              <TimelineItem
                key={experience?.id}
                experience={experience}
                isLeft={index % 2 === 0}
                isExpanded={expandedItems?.[experience?.id]}
                onToggle={() => toggleExpanded(experience?.id)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Growth Visualization */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <GrowthVisualization />
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <DownloadableResources />
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-conversion to-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow animate-glow">
              <Icon name="Rocket" size={32} color="white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
              Ready to Contribute & Grow
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              My journey so far has been about continuous learning and meaningful contributions. 
              I'm excited to bring this experience to your team and continue growing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={() => window.location.href = '/connect-collaborate'}
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={20}
                className="btn-conversion shadow-conversion"
              >
                Let's Connect
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
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-glow hover-lift transition-smooth z-40"
        aria-label="Scroll to top"
      >
        <Icon name="ArrowUp" size={20} className="mx-auto" />
      </button>
    </div>
  );
};

export default ExperienceJourney;