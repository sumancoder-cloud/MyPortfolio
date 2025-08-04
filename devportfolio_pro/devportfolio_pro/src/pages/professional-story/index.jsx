import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

// Import components
import MissionStatement from './components/MissionStatement';
import InteractiveTimeline from './components/InteractiveTimeline';
import DayInTheLife from './components/DayInTheLife';
import PersonalityInsights from './components/PersonalityInsights';
import WhyICode from './components/WhyICode';
import CultureDeckDownload from './components/CultureDeckDownload';

const ProfessionalStory = () => {
  const [activeSection, setActiveSection] = useState('mission');
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'mission', title: 'Mission', icon: 'Target', component: MissionStatement },
    { id: 'timeline', title: 'Journey', icon: 'Clock', component: InteractiveTimeline },
    { id: 'daylife', title: 'Daily Life', icon: 'Sun', component: DayInTheLife },
    { id: 'personality', title: 'Insights', icon: 'Brain', component: PersonalityInsights },
    { id: 'whycode', title: 'Why I Code', icon: 'Heart', component: WhyICode },
    { id: 'culture', title: 'Culture Deck', icon: 'FileText', component: CultureDeckDownload }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement?.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sectionElements = sections?.map(section => 
        document.getElementById(section?.id)
      )?.filter(Boolean);

      const currentSection = sectionElements?.find(element => {
        const rect = element?.getBoundingClientRect();
        return rect?.top <= 100 && rect?.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection?.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScheduleInterview = () => {
    window.open('https://calendly.com/tsuman-yadav', '_blank');
  };

  const handleConnectClick = () => {
    window.location.href = '/connect-collaborate';
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Professional Story - T Suman Yadav | DevPortfolio Pro</title>
        <meta name="description" content="Discover the journey, values, and passion that drive T Suman Yadav as a software developer. From university beginnings to professional aspirations." />
        <meta name="keywords" content="professional story, developer journey, software engineer, career path, work style, team collaboration" />
      </Helmet>
      <Header />
      {/* Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-40">
        <div className="h-1 bg-muted/20">
          <div 
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
      {/* Floating Navigation */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="glass-card p-4 rounded-lg">
          <div className="space-y-3">
            {sections?.map((section) => (
              <button
                key={section?.id}
                onClick={() => scrollToSection(section?.id)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group relative ${
                  activeSection === section?.id
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'hover:bg-white/10 text-muted-foreground hover:text-foreground'
                }`}
                title={section?.title}
              >
                <Icon name={section?.icon} size={18} />
                
                {/* Tooltip */}
                <div className="absolute left-full ml-3 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {section?.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 border border-primary/20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-secondary/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-accent/20 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mb-8 shadow-glow animate-float">
              <Icon name="User" size={32} color="white" />
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-display text-gradient mb-6">
              My Professional Story
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              From curious computer science student to passionate software developer—discover the journey, 
              values, and experiences that shape my approach to building meaningful technology solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={handleScheduleInterview}
                iconName="Calendar"
                iconPosition="left"
                className="btn-conversion shadow-conversion"
              >
                Schedule Interview
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={handleConnectClick}
                iconName="MessageCircle"
                iconPosition="left"
                className="btn-glass"
              >
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-20">
          {sections?.map((section) => {
            const Component = section?.component;
            return (
              <section key={section?.id} id={section?.id} className="scroll-mt-20">
                <Component />
              </section>
            );
          })}
        </div>
      </main>
      {/* Call to Action Footer */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="glass-card p-12 rounded-lg">
            <h2 className="text-3xl font-display text-gradient mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm excited about opportunities to contribute to innovative projects and grow with a dynamic team. Let's discuss how my passion for development can add value to your organization.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={handleScheduleInterview}
                iconName="Calendar"
                iconPosition="left"
                className="btn-conversion shadow-conversion"
              >
                Schedule Interview
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('culture')}
                iconName="Download"
                iconPosition="left"
                className="btn-glass"
              >
                Download Culture Deck
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Mobile Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 lg:hidden">
        <div className="glass-card p-2 rounded-full">
          <div className="flex space-x-2">
            {sections?.slice(0, 4)?.map((section) => (
              <button
                key={section?.id}
                onClick={() => scrollToSection(section?.id)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeSection === section?.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={section?.icon} size={16} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalStory;