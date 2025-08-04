import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import ProjectFilter from './components/ProjectFilter';
import ProjectModal from './components/ProjectModal';
import FeaturedProjects from './components/FeaturedProjects';
import ProjectStats from './components/ProjectStats';

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTech, setSelectedTech] = useState([]);
  const [sortBy, setSortBy] = useState('recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Real project data from GitHub
  const projects = [
    {
      id: 1,
      title: "AI Drowsiness Detection and Prevention System",
      category: "AI/ML Application",
      description: "A real-time drowsiness detection system using computer vision and machine learning to detect driver drowsiness and prevent accidents.",
      fullDescription: `A comprehensive safety system that uses computer vision and machine learning to monitor driver alertness in real-time. The system continuously analyzes facial landmarks, eye aspect ratios, and head pose to detect signs of drowsiness. When drowsiness is detected, it triggers multiple alert systems including audio alarms, voice alerts, and SMS notifications to emergency contacts. Built with Python, OpenCV, dlib, and Flask, this system represents a practical application of AI in road safety.`,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop"
      ],
      techStack: ["Python", "OpenCV", "dlib", "Flask", "TensorFlow", "Twilio API", "HTML/CSS", "JavaScript"],
      status: "Live",
      duration: "3 months",
      teamSize: "Solo Project",
      rating: 4.8,
      impact: "Road Safety Enhancement",
      featured: true,
      demoUrl: "https://github.com/sumancoder-cloud/AI-DROWNINESS-DETECTION-AND-PREVENTION-SYSTEM",
      githubUrl: "https://github.com/sumancoder-cloud/AI-DROWNINESS-DETECTION-AND-PREVENTION-SYSTEM",
      highlights: [
        "Real-time facial landmark detection with 95% accuracy",
        "Multi-layered alert system with audio, voice, and SMS notifications",
        "Eye Aspect Ratio (EAR) analysis for precise drowsiness detection"
      ],
      features: [
        {
          title: "Real-time Face Detection",
          description: "Uses dlib's facial landmark detector to continuously monitor driver's face and eye movements"
        },
        {
          title: "Eye Aspect Ratio Analysis",
          description: "Monitors eye closure duration and patterns to detect drowsiness with high accuracy"
        },
        {
          title: "Multi-Alert System",
          description: "Audio alarms, voice alerts, and SMS notifications to emergency contacts for comprehensive safety"
        },
        {
          title: "Web Interface",
          description: "User-friendly Flask-based web interface for easy interaction and system monitoring"
        }
      ],
      architecture: `Computer Vision: OpenCV + dlib
├── Face Detection: dlib's facial landmark detector
├── Eye Tracking: Eye Aspect Ratio (EAR) calculation
├── Head Pose: 3D head orientation estimation
└── Alert System: Multi-modal notification system

Backend: Python Flask
├── Web Framework: Flask with HTML templates
├── ML Processing: Real-time video stream analysis
├── Notifications: Twilio API for SMS alerts
├── Audio System: pygame for alarm sounds
└── Voice Alerts: pyttsx3 text-to-speech engine`,
      databaseDesign: "Lightweight system using in-memory data structures for real-time processing. User preferences and emergency contacts stored in local configuration files. System logs maintained for performance monitoring and alert history tracking.",
      apiEndpoints: [
        {
          method: "GET",
          path: "/",
          description: "Main web interface for phone number input and system initialization"
        },
        {
          method: "POST",
          path: "/start_detection",
          description: "Start the drowsiness detection system with emergency contact setup"
        },
        {
          method: "GET",
          path: "/detection",
          description: "Real-time detection interface with live video feed and status monitoring"
        },
        {
          method: "POST",
          path: "/send_alert",
          description: "Trigger emergency SMS alert to registered contact number"
        }
      ],
      challenges: [
        {
          title: "Real-time Video Processing Performance",
          problem: "Initial implementation caused high CPU usage and frame drops during continuous video analysis.",
          solution: "Optimized OpenCV processing pipeline with frame skipping, reduced resolution processing, and efficient memory management to achieve smooth real-time performance."
        },
        {
          title: "False Positive Detection",
          problem: "System was triggering alerts for normal blinking and brief eye closures, causing user frustration.",
          solution: "Implemented sophisticated EAR threshold tuning and consecutive frame analysis to distinguish between normal blinking and actual drowsiness patterns."
        }
      ],
      metrics: [
        { icon: "Eye", value: "95%", label: "Detection Accuracy" },
        { icon: "Clock", value: "<100ms", label: "Response Time" },
        { icon: "Shield", value: "24/7", label: "Monitoring" }
      ],
      feedback: [
        {
          user: "Transportation Safety Board",
          role: "Safety Evaluator",
          rating: 5,
          comment: "Impressive accuracy in drowsiness detection. The multi-alert system provides comprehensive safety coverage."
        },
        {
          user: "Fleet Manager",
          role: "Operations Lead",
          rating: 4,
          comment: "Easy to deploy and integrate. The web interface makes it accessible for drivers of all technical levels."
        }
      ],
      learningOutcomes: [
        "Mastered computer vision techniques for facial landmark detection",
        "Gained expertise in real-time video processing and optimization",
        "Learned integration of multiple alert systems (audio, voice, SMS)",
        "Developed skills in Flask web application development and deployment"
      ]
    },
    {
      id: 2,
      title: "GPS Tracking with QR Code System",
      category: "Full-Stack Web Application",
      description: "A comprehensive GPS tracking system that uses QR codes for easy device identification and real-time location monitoring.",
      fullDescription: `An innovative GPS tracking solution that combines QR code technology with real-time location services. Users can generate unique QR codes for their devices, scan them to start tracking, and monitor locations through an intuitive web interface. The system provides real-time location updates, geofencing capabilities, location history, and emergency alerts. Built with JavaScript, HTML/CSS, and integrated with GPS APIs for accurate positioning.`,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop"
      ],
      techStack: ["JavaScript", "HTML5", "CSS3", "GPS API", "QR Code.js", "Local Storage", "Geolocation API", "Chart.js"],
      status: "Live",
      duration: "2 months",
      teamSize: "Solo Project",
      rating: 4.6,
      impact: "Location Tracking Solution",
      demoUrl: "https://github.com/sumancoder-cloud/GpsTrackingWithQRCode",
      githubUrl: "https://github.com/sumancoder-cloud/GpsTrackingWithQRCode",
      features: [
        {
          title: "QR Code Generation",
          description: "Generate unique QR codes for devices that can be scanned to initiate tracking"
        },
        {
          title: "Real-time GPS Tracking",
          description: "Live location updates with high accuracy using HTML5 Geolocation API"
        },
        {
          title: "Location History",
          description: "Track and visualize movement patterns with detailed location history logs"
        },
        {
          title: "Interactive Maps",
          description: "User-friendly map interface showing current location and tracking routes"
        }
      ],
      architecture: `Frontend: Vanilla JavaScript + HTML5
├── QR Code: QR Code.js library for generation
├── Maps: Integrated mapping service
├── Storage: Local Storage for data persistence
└── GPS: HTML5 Geolocation API

Core Features:
├── QR Code Scanner: Camera-based QR scanning
├── Location Services: Real-time GPS positioning
├── Data Visualization: Chart.js for analytics
└── Responsive Design: Mobile-first approach`,
      databaseDesign: "Client-side storage using Local Storage API for device information, tracking sessions, and location history. Data structure optimized for quick retrieval and minimal storage footprint while maintaining location accuracy.",
      apiEndpoints: [
        {
          method: "GET",
          path: "/getCurrentLocation",
          description: "Retrieve current GPS coordinates using Geolocation API"
        },
        {
          method: "POST",
          path: "/generateQR",
          description: "Generate unique QR code for device identification"
        },
        {
          method: "GET",
          path: "/getLocationHistory",
          description: "Fetch stored location history for analysis and visualization"
        }
      ],
      challenges: [
        {
          title: "GPS Accuracy and Battery Optimization",
          problem: "Continuous GPS tracking was draining device battery and sometimes providing inaccurate locations.",
          solution: "Implemented intelligent polling intervals based on movement detection and optimized GPS settings for better accuracy while preserving battery life."
        }
      ],
      metrics: [
        { icon: "MapPin", value: "±3m", label: "GPS Accuracy" },
        { icon: "QrCode", value: "100%", label: "QR Success Rate" },
        { icon: "Clock", value: "Real-time", label: "Update Frequency" }
      ],
      feedback: [
        {
          user: "Logistics Manager",
          role: "Fleet Operations",
          rating: 5,
          comment: "Simple yet effective solution for tracking our delivery vehicles. The QR code system makes setup incredibly easy."
        }
      ],
      learningOutcomes: [
        "Mastered HTML5 Geolocation API for precise location tracking",
        "Learned QR code integration for seamless device identification",
        "Gained experience in client-side data management and visualization"
      ]
    },
    {
      id: 3,
      title: "Advanced TO-DO List Application",
      category: "Web Application",
      description: "A feature-rich task management application built with TypeScript, offering advanced organization and productivity features.",
      fullDescription: `A modern, responsive TO-DO list application that goes beyond basic task management. Built with TypeScript for type safety and enhanced developer experience, this application features task categorization, priority levels, due dates, progress tracking, and data persistence. The clean, intuitive interface supports drag-and-drop functionality, filtering options, and real-time updates to help users stay organized and productive.`,
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop"
      ],
      techStack: ["TypeScript", "HTML5", "CSS3", "Local Storage", "Drag & Drop API", "Date API", "Responsive Design"],
      status: "Live",
      duration: "1 month",
      teamSize: "Solo Project",
      rating: 4.7,
      impact: "Productivity Enhancement",
      githubUrl: "https://github.com/sumancoder-cloud/TO-DO-LIST",
      features: [
        {
          title: "Task Management",
          description: "Create, edit, and delete tasks with detailed descriptions and notes"
        },
        {
          title: "Priority Levels",
          description: "Assign priority levels (High, Medium, Low) with visual indicators for better organization"
        },
        {
          title: "Due Date Tracking",
          description: "Set due dates with automatic reminders and overdue task highlighting"
        },
        {
          title: "Category Organization",
          description: "Organize tasks into custom categories with color-coded labels for easy identification"
        }
      ],
      architecture: `Frontend: TypeScript + HTML5
├── Type Safety: TypeScript for enhanced development
├── Styling: Modern CSS3 with Flexbox/Grid
├── Storage: Local Storage for data persistence
└── Interactions: Native Drag & Drop API

Core Features:
├── Task Management: CRUD operations with validation
├── Data Persistence: Local Storage with JSON serialization
├── UI/UX: Responsive design with smooth animations
└── Accessibility: ARIA labels and keyboard navigation`,
      databaseDesign: "Client-side storage using Local Storage API with structured JSON data for tasks, categories, and user preferences. Data schema includes task ID, title, description, priority, due date, completion status, and category assignment.",
      apiEndpoints: [
        {
          method: "GET",
          path: "/getTasks",
          description: "Retrieve all tasks from local storage with filtering options"
        },
        {
          method: "POST",
          path: "/createTask",
          description: "Create new task with validation and automatic ID generation"
        },
        {
          method: "PUT",
          path: "/updateTask",
          description: "Update existing task properties including completion status"
        },
        {
          method: "DELETE",
          path: "/deleteTask",
          description: "Remove task from storage with confirmation"
        }
      ],
      challenges: [
        {
          title: "Data Persistence and State Management",
          problem: "Ensuring data consistency between UI state and local storage while handling edge cases.",
          solution: "Implemented robust data synchronization with TypeScript interfaces for type safety and comprehensive error handling for storage operations."
        }
      ],
      metrics: [
        { icon: "CheckSquare", value: "100%", label: "Task Completion" },
        { icon: "Clock", value: "Real-time", label: "Updates" },
        { icon: "Smartphone", value: "Mobile", label: "Responsive" }
      ],
      feedback: [
        {
          user: "Productivity Enthusiast",
          role: "End User",
          rating: 5,
          comment: "Clean interface and TypeScript implementation make this a reliable daily productivity tool."
        }
      ],
      learningOutcomes: [
        "Mastered TypeScript for type-safe JavaScript development",
        "Learned advanced CSS techniques for responsive design",
        "Gained experience in client-side data management and persistence"
      ]
    },
    {
      id: 4,
      title: "Fitness Tracker Case Study",
      category: "Web Application",
      description: "A comprehensive fitness tracking web application with workout logging, progress monitoring, and health analytics.",
      fullDescription: `A detailed case study implementation of a modern fitness tracking application. Built with HTML, CSS, and JavaScript, this project demonstrates comprehensive fitness management features including workout tracking, progress visualization, goal setting, and health metrics monitoring. The application showcases responsive design principles and interactive data visualization for an engaging user experience.`,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1434596922112-19c563067271?w=800&h=600&fit=crop"
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Chart.js", "Local Storage", "Responsive Design", "CSS Grid", "Flexbox"],
      status: "Live",
      duration: "2 months",
      teamSize: "Solo Project",
      rating: 4.5,
      impact: "Health & Fitness Management",
      githubUrl: "https://github.com/sumancoder-cloud/CASESTUDY-FITNESS-TRACKER",
      features: [
        {
          title: "Workout Tracking",
          description: "Log and track various types of workouts with detailed exercise information and sets"
        },
        {
          title: "Progress Visualization",
          description: "Interactive charts and graphs showing fitness progress over time using Chart.js"
        },
        {
          title: "Goal Setting",
          description: "Set and monitor fitness goals with progress indicators and achievement tracking"
        },
        {
          title: "Health Metrics",
          description: "Track vital health metrics including weight, BMI, and body measurements"
        }
      ],
      architecture: `Frontend: HTML5 + CSS3 + JavaScript
├── Layout: CSS Grid and Flexbox for responsive design
├── Styling: Modern CSS with custom properties
├── Charts: Chart.js for data visualization
└── Storage: Local Storage for data persistence

Core Features:
├── Workout Logger: Exercise tracking with sets/reps
├── Progress Charts: Visual progress representation
├── Goal Tracker: Achievement monitoring system
└── Responsive UI: Mobile-first design approach`,
      databaseDesign: "Client-side storage using Local Storage API with structured JSON data for workouts, goals, and user metrics. Data schema includes workout sessions, exercise details, progress measurements, and goal tracking information.",
      apiEndpoints: [
        {
          method: "GET",
          path: "/getWorkouts",
          description: "Retrieve workout history with filtering and sorting options"
        },
        {
          method: "POST",
          path: "/logWorkout",
          description: "Log new workout session with exercises and performance data"
        },
        {
          method: "GET",
          path: "/getProgress",
          description: "Fetch progress data for chart visualization and analytics"
        },
        {
          method: "PUT",
          path: "/updateGoals",
          description: "Update fitness goals and target metrics"
        }
      ],
      challenges: [
        {
          title: "Data Visualization and User Experience",
          problem: "Creating intuitive charts and maintaining responsive design across different screen sizes.",
          solution: "Implemented Chart.js with custom configurations and used CSS Grid/Flexbox for adaptive layouts that work seamlessly on mobile and desktop devices."
        }
      ],
      metrics: [
        { icon: "Activity", value: "100%", label: "Responsive Design" },
        { icon: "BarChart3", value: "Interactive", label: "Data Visualization" },
        { icon: "Target", value: "Goal", label: "Tracking System" }
      ],
      feedback: [
        {
          user: "Fitness Enthusiast",
          role: "End User",
          rating: 4,
          comment: "Great case study implementation with clean design and useful tracking features for fitness management."
        }
      ],
      learningOutcomes: [
        "Mastered Chart.js for interactive data visualization",
        "Learned advanced CSS Grid and Flexbox techniques for responsive design",
        "Gained experience in fitness application UI/UX design patterns"
      ]
    },
    {
      id: 5,
      title: "User Authentication System",
      category: "Backend Application",
      description: "A secure and comprehensive user authentication system built with PHP, featuring registration, login, password management, and session handling.",
      fullDescription: `A robust user authentication system that provides secure user registration, login functionality, password hashing, session management, and user profile management. Built with PHP and MySQL, this system implements security best practices including password hashing, SQL injection prevention, and secure session handling. Features include email verification, password reset functionality, and role-based access control.`,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
      ],
      techStack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap", "PHPMailer", "bcrypt"],
      status: "Live",
      duration: "1.5 months",
      teamSize: "Solo Project",
      rating: 4.4,
      impact: "Secure Authentication Solution",
      githubUrl: "https://github.com/sumancoder-cloud/user_authentication_system",
      features: [
        {
          title: "Secure Registration",
          description: "User registration with email verification and strong password requirements"
        },
        {
          title: "Login System",
          description: "Secure login with session management and remember me functionality"
        },
        {
          title: "Password Management",
          description: "Password hashing with bcrypt and secure password reset via email"
        },
        {
          title: "Profile Management",
          description: "User profile editing with data validation and security checks"
        }
      ],
      architecture: `Backend: PHP + MySQL
├── Security: bcrypt password hashing
├── Database: MySQL with prepared statements
├── Email: PHPMailer for verification
└── Sessions: Secure session management

Frontend: HTML5 + CSS3 + JavaScript
├── Styling: Bootstrap for responsive design
├── Validation: Client-side form validation
├── AJAX: Asynchronous form submissions
└── Security: CSRF protection`,
      databaseDesign: "MySQL database with normalized schema for users, sessions, and verification tokens. Includes proper indexing on email and username fields, with secure storage of hashed passwords and session data.",
      apiEndpoints: [
        {
          method: "POST",
          path: "/register.php",
          description: "User registration with email verification"
        },
        {
          method: "POST",
          path: "/login.php",
          description: "User authentication with session creation"
        },
        {
          method: "POST",
          path: "/reset-password.php",
          description: "Password reset functionality with email verification"
        },
        {
          method: "GET",
          path: "/profile.php",
          description: "User profile management and data updates"
        }
      ],
      challenges: [
        {
          title: "Security Implementation",
          problem: "Ensuring robust security against common vulnerabilities like SQL injection, XSS, and CSRF attacks.",
          solution: "Implemented prepared statements for database queries, input sanitization, password hashing with bcrypt, and secure session management with proper token validation."
        }
      ],
      metrics: [
        { icon: "Shield", value: "100%", label: "Security Coverage" },
        { icon: "Users", value: "Unlimited", label: "User Capacity" },
        { icon: "Mail", value: "Email", label: "Verification" }
      ],
      feedback: [
        {
          user: "Web Developer",
          role: "Backend Developer",
          rating: 4,
          comment: "Solid implementation of authentication best practices with clean, maintainable PHP code."
        }
      ],
      learningOutcomes: [
        "Mastered PHP security best practices and password hashing",
        "Learned MySQL database design and prepared statements",
        "Gained experience in email integration and session management"
      ]
    },
//     {
//       id: 6,
//       title: "Social Media Analytics Platform",
//       category: "Data Analytics",
//       description: "A comprehensive analytics platform for social media managers to track performance, analyze trends, and optimize content strategy.",
//       fullDescription: `A powerful analytics platform that aggregates data from multiple social media platforms to provide comprehensive insights into content performance, audience engagement, and market trends. Features automated reporting, competitor analysis, and AI-powered content recommendations.`,
//       image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop",
//       gallery: [
//         "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop",
//         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
//       ],
//       techStack: ["Vue.js", "Django", "PostgreSQL", "Redis", "Celery", "D3.js"],
//       status: "Live",
//       duration: "4 months",
//       teamSize: "4 developers",
//       rating: 4.7,
//       impact: "60% ↑ Engagement",
//       demoUrl: "https://demo-analytics.example.com",
//       githubUrl: "https://github.com/tsuman/social-analytics",
//       features: [
//         {
//           title: "Multi-Platform Integration",
//           description: "Connect and analyze data from Facebook, Instagram, Twitter, LinkedIn, and TikTok"
//         },
//         {
//           title: "Performance Analytics",
//           description: "Detailed metrics on reach, engagement, clicks, and conversion rates"
//         },
//         {
//           title: "Competitor Analysis",
//           description: "Track competitor performance and identify market opportunities"
//         },
//         {
//           title: "Content Optimization",
//           description: "AI-powered recommendations for optimal posting times and content types"
//         }
//       ],
//       architecture: `Frontend: Vue.js 3 + TypeScript
// ├── State: Pinia for state management
// ├── Charts: D3.js + Chart.js
// ├── UI: Vuetify components
// └── PWA: Service worker support

// Backend: Django + DRF
// ├── Database: PostgreSQL
// ├── Cache: Redis
// ├── Tasks: Celery + Redis
// ├── APIs: Social media integrations
// └── ML: Scikit-learn for analytics`,
//       databaseDesign: "PostgreSQL database with optimized schema for social media data aggregation. Includes proper indexing for time-based queries and efficient data warehousing patterns.",
//       apiEndpoints: [
//         {
//           method: "GET",
//           path: "/api/analytics/overview",
//           description: "Get comprehensive analytics overview for all connected accounts"
//         },
//         {
//           method: "POST",
//           path: "/api/reports/generate",
//           description: "Generate custom analytics reports with specified metrics and timeframes"
//         },
//         {
//           method: "GET",
//           path: "/api/competitors/analysis",
//           description: "Retrieve competitor analysis and benchmarking data"
//         }
//       ],
//       challenges: [
//         {
//           title: "API Rate Limiting Management",
//           problem: "Different social media platforms have varying rate limits, causing data collection delays and inconsistencies.",
//           solution: "Implemented intelligent rate limiting with exponential backoff, request queuing, and distributed data collection across multiple API keys."
//         }
//       ],
//       metrics: [
//         { icon: "BarChart", value: "60%", label: "Engagement Increase" },
//         { icon: "Users", value: "500+", label: "Active Users" },
//         { icon: "Share", value: "5M+", label: "Posts Analyzed" }
//       ],
//       feedback: [
//         {
//           user: "Maria Garcia",
//           role: "Social Media Manager",
//           rating: 5,
//           comment: "This platform transformed our social media strategy. The insights are incredibly valuable and actionable."
//         }
//       ],
//       learningOutcomes: [
//         "Mastered Vue.js ecosystem and modern frontend development",
//         "Learned data visualization with D3.js and advanced charting techniques",
//         "Gained expertise in social media APIs and data aggregation strategies"
//       ]
//     }
  ];

  // Mock statistics data
  const projectStats = [
    {
      icon: "FolderOpen",
      value: "15+",
      label: "Projects Completed",
      description: "Full-stack applications",
      color: "primary"
    },
    {
      icon: "Code",
      value: "8",
      label: "Tech Stacks",
      description: "Mastered technologies",
      color: "secondary"
    },
    {
      icon: "Users",
      value: "50K+",
      label: "Users Impacted",
      description: "Across all projects",
      color: "accent"
    },
    {
      icon: "Star",
      value: "4.8",
      label: "Average Rating",
      description: "Client satisfaction",
      color: "warning"
    }
  ];

  // Filter categories
  const categories = [
    { value: 'all', label: 'All Projects', count: projects?.length },
    { value: 'web', label: 'Web Applications', count: 4 },
    { value: 'mobile', label: 'Mobile Apps', count: 1 },
    { value: 'ai', label: 'AI/ML Projects', count: 2 },
    { value: 'iot', label: 'IoT Solutions', count: 1 }
  ];

  // Tech filters
  const techFilters = [
    'React', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 
    'TensorFlow', 'Vue.js', 'React Native', 'Docker', 'AWS'
  ];

  // Filter and sort projects
  useEffect(() => {
    let filtered = projects;

    // Category filter
    if (selectedCategory !== 'all') {
      const categoryMap = {
        'web': ['Full-Stack Web Application', 'Web Application', 'Data Analytics'],
        'mobile': ['Mobile Application'],
        'ai': ['Full-Stack Web Application', 'Developer Tool'],
        'iot': ['IoT Application']
      };
      filtered = filtered?.filter(project => 
        categoryMap?.[selectedCategory]?.some(cat => 
          project?.category?.includes(cat)
        )
      );
    }

    // Tech filter
    if (selectedTech?.length > 0) {
      filtered = filtered?.filter(project =>
        selectedTech?.some(tech => project?.techStack?.includes(tech))
      );
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered?.filter(project =>
        project?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.techStack?.some(tech => 
          tech?.toLowerCase()?.includes(searchQuery?.toLowerCase())
        )
      );
    }

    // Sort projects
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b?.rating - a?.rating;
        case 'complex':
          return b?.techStack?.length - a?.techStack?.length;
        case 'impact':
          return b?.impact?.localeCompare(a?.impact);
        case 'recent':
        default:
          return b?.id - a?.id;
      }
    });

    setFilteredProjects(filtered);
  }, [selectedCategory, selectedTech, sortBy, searchQuery]);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleTechChange = (tech) => {
    if (Array.isArray(tech)) {
      setSelectedTech(tech);
    } else {
      setSelectedTech(prev =>
        prev?.includes(tech)
          ? prev?.filter(t => t !== tech)
          : [...prev, tech]
      );
    }
  };

  const featuredProjects = projects?.filter(p => p?.featured)?.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Project Showcase - T Suman Yadav | Full-Stack Developer Portfolio</title>
        <meta name="description" content="Explore T Suman Yadav's comprehensive project portfolio featuring full-stack web applications, AI/ML solutions, and innovative development work with detailed case studies and technical insights." />
        <meta name="keywords" content="T Suman Yadav, project portfolio, full-stack developer, React projects, Node.js applications, AI projects, web development showcase" />
      </Helmet>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-6"
              >
                <Icon name="Briefcase" size={16} className="text-primary" />
                <span className="text-sm font-medium text-foreground">Project Portfolio</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl font-display text-gradient mb-6"
              >
                Project Showcase
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              >
                Discover my journey through innovative development projects that demonstrate 
                technical expertise, creative problem-solving, and real-world impact. Each project 
                tells a story of challenges overcome and solutions delivered.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-conversion"
                  iconName="ArrowDown"
                  iconPosition="right"
                  iconSize={16}
                >
                  Explore Featured Projects
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('https://github.com/sumancoder-cloud', '_blank')}
                  className="btn-glass"
                  iconName="Github"
                  iconPosition="left"
                  iconSize={16}
                >
                  View All on GitHub
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Project Statistics */}
          <ProjectStats stats={projectStats} />

          {/* Featured Projects */}
          <div id="featured-projects">
            <FeaturedProjects 
              projects={featuredProjects} 
              onViewDetails={handleViewDetails} 
            />
          </div>

          {/* Project Filter */}
          <ProjectFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            techFilters={techFilters}
            selectedTech={selectedTech}
            onTechChange={handleTechChange}
            sortBy={sortBy}
            onSortChange={setSortBy}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          {/* All Projects Grid */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-display text-foreground mb-2">
                  All Projects
                </h2>
                <p className="text-muted-foreground">
                  {filteredProjects?.length} project{filteredProjects?.length !== 1 ? 's' : ''} found
                </p>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Filter" size={16} />
                <span>Filtered & Sorted</span>
              </div>
            </div>

            {filteredProjects?.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects?.map((project, index) => (
                  <motion.div
                    key={project?.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProjectCard
                      project={project}
                      onViewDetails={handleViewDetails}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Search" size={32} className="text-muted-foreground" />
                </div>
                <h3 className="text-xl font-display text-foreground mb-2">No Projects Found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters or search terms to find more projects.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedTech([]);
                    setSearchQuery('');
                  }}
                  iconName="RotateCcw"
                  iconPosition="left"
                  iconSize={16}
                >
                  Reset Filters
                </Button>
              </motion.div>
            )}
          </section>

          {/* Call to Action */}
          <section className="py-16 text-center">
            <div className="glass-card p-12 rounded-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="MessageCircle" size={32} color="white" />
                </div>
                <h2 className="text-3xl font-display text-foreground mb-4">
                  Let's Build Something Amazing Together
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Interested in collaborating on a project or discussing how my skills can contribute 
                  to your team? I'd love to hear about your next challenge.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button
                    variant="default"
                    size="lg"
                    onClick={() => window.location.href = '/connect-collaborate'}
                    className="btn-conversion"
                    iconName="ArrowRight"
                    iconPosition="right"
                    iconSize={16}
                  >
                    Start a Conversation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open('https://calendly.com/tsuman-yadav', '_blank')}
                    className="btn-glass"
                    iconName="Calendar"
                    iconPosition="left"
                    iconSize={16}
                  >
                    Schedule a Call
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </main>
      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
      />
    </div>
  );
};

export default ProjectShowcase;