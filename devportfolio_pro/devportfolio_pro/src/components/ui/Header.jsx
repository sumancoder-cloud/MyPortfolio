import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from './Button';
import Icon from '../AppIcon';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/dynamic-home', icon: 'Home' },
    { name: 'Story', path: '/professional-story', icon: 'User' },
    { name: 'Skills Lab', path: '/interactive-skills-lab', icon: 'Code' },
    { name: 'Projects', path: '/project-showcase', icon: 'FolderOpen' },
    { name: 'Experience', path: '/experience-journey', icon: 'Briefcase' }
  ];

  const secondaryItems = [
    { name: 'Connect', path: '/connect-collaborate', icon: 'MessageCircle' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePath = (path) => location.pathname === path;

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    window.location.href = path;
  };

  const handleScheduleInterview = () => {
    // Simulate calendar booking integration
    window.open('https://calendly.com/tsuman-yadav', '_blank');
  };

  const handleDownloadResume = () => {
    // Simulate resume download
    const link = document.createElement('a');
    link.href = './assets/downloads/Amazon_SDE1_Resume.pdf';
    link.download = 'T-Suman-Yadav-Resume.pdf';
    link?.click();
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-card shadow-glass-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('/dynamic-home')}
              className="flex items-center space-x-2 group transition-smooth"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-glow">
                  <Icon name="Code2" size={20} color="white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-primary to-secondary rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-display text-gradient">
                  My Portfolio
                </h1>
                <p className="text-xs text-muted-foreground -mt-1">
                  T Suman Yadav
                </p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <button
                key={item?.path}
                onClick={() => handleNavClick(item?.path)}
                className={`nav-link flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
                  isActivePath(item?.path) ? 'nav-link-active' : ''
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleNavClick('/connect-collaborate')}
              iconName="MessageCircle"
              iconPosition="left"
              iconSize={16}
              className={isActivePath('/connect-collaborate') ? 'text-primary' : ''}
            >
              Connect
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadResume}
              iconName="Download"
              iconPosition="left"
              iconSize={16}
              className="btn-glass"
            >
              Resume
            </Button>

            <Button
              variant="default"
              size="sm"
              onClick={handleScheduleInterview}
              iconName="Calendar"
              iconPosition="left"
              iconSize={16}
              className="btn-conversion shadow-conversion"
            >
              Schedule Interview
            </Button>

            {/* Availability Status */}
            <div className="flex items-center space-x-2 px-3 py-1 glass rounded-full">
              <div className="w-2 h-2 bg-trust rounded-full animate-pulse"></div>
              <span className="text-xs text-muted-foreground">Available</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              iconName={isMobileMenuOpen ? "X" : "Menu"}
              iconSize={20}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass-card border-t border-border animate-slide-up">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation */}
              <div className="space-y-2">
                {navigationItems?.map((item) => (
                  <button
                    key={item?.path}
                    onClick={() => handleNavClick(item?.path)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-smooth ${
                      isActivePath(item?.path) 
                        ? 'bg-primary/10 text-primary border border-primary/20' :'hover:bg-white/5'
                    }`}
                  >
                    <Icon name={item?.icon} size={18} />
                    <span className="font-medium">{item?.name}</span>
                  </button>
                ))}
                
                {secondaryItems?.map((item) => (
                  <button
                    key={item?.path}
                    onClick={() => handleNavClick(item?.path)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-smooth ${
                      isActivePath(item?.path) 
                        ? 'bg-primary/10 text-primary border border-primary/20' :'hover:bg-white/5'
                    }`}
                  >
                    <Icon name={item?.icon} size={18} />
                    <span className="font-medium">{item?.name}</span>
                  </button>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-border space-y-3">
                <Button
                  variant="outline"
                  fullWidth
                  onClick={handleDownloadResume}
                  iconName="Download"
                  iconPosition="left"
                  iconSize={16}
                  className="btn-glass"
                >
                  Download Resume
                </Button>

                <Button
                  variant="default"
                  fullWidth
                  onClick={handleScheduleInterview}
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={16}
                  className="btn-conversion"
                >
                  Schedule Interview
                </Button>

                {/* Mobile Availability Status */}
                <div className="flex items-center justify-center space-x-2 py-2">
                  <div className="w-2 h-2 bg-trust rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">Available for interviews</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;