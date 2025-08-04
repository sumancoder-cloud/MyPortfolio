import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ContactForm from './components/ContactForm';
import CalendarBooking from './components/CalendarBooking';
import SocialConnect from './components/SocialConnect';
import ResourceCenter from './components/ResourceCenter';
import CurrentlySeekingSection from './components/CurrentlySeekingSection';

const ConnectCollaborate = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const tabs = [
    {
      id: 'contact',
      label: 'Contact Form',
      icon: 'MessageSquare',
      description: 'Send a detailed message'
    },
    {
      id: 'calendar',
      label: 'Schedule Meeting',
      icon: 'Calendar',
      description: 'Book interview time'
    },
    {
      id: 'social',
      label: 'Social Connect',
      icon: 'Share2',
      description: 'Connect on platforms'
    },
    {
      id: 'resources',
      label: 'Resources',
      icon: 'Download',
      description: 'Download materials'
    },
    {
      id: 'seeking',
      label: 'Currently Seeking',
      icon: 'Target',
      description: 'Role preferences'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const formatTime = (date) => {
    return date?.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'contact':
        return <ContactForm />;
      case 'calendar':
        return <CalendarBooking />;
      case 'social':
        return <SocialConnect />;
      case 'resources':
        return <ResourceCenter />;
      case 'seeking':
        return <CurrentlySeekingSection />;
      default:
        return <ContactForm />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-trust/10 border border-trust/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-trust rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-trust">Available for opportunities</span>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground">{formatTime(currentTime)}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display text-gradient mb-6">
              Let's Connect &<br />Collaborate
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Ready to discuss opportunities, share ideas, or explore how we can work together. 
              Multiple ways to connect, quick response times, and genuine enthusiasm for great projects.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="text-center p-4 glass rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">&lt; 24h</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div className="text-center p-4 glass rounded-lg">
                <div className="text-2xl font-bold text-secondary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Interview Rate</div>
              </div>
              <div className="text-center p-4 glass rounded-lg">
                <div className="text-2xl font-bold text-accent mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Contact Methods</div>
              </div>
              <div className="text-center p-4 glass rounded-lg">
                <div className="text-2xl font-bold text-trust mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Availability</div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Tabs */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="glass-card p-2">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`p-4 rounded-lg text-left transition-smooth ${
                      activeTab === tab?.id
                        ? 'bg-primary text-primary-foreground shadow-glow'
                        : 'hover:bg-white/5 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <Icon 
                        name={tab?.icon} 
                        size={20} 
                        color={activeTab === tab?.id ? 'white' : 'currentColor'} 
                      />
                      <span className="font-medium">{tab?.label}</span>
                    </div>
                    <p className="text-xs opacity-80">{tab?.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderTabContent()}
          </motion.div>

          {/* Footer CTA */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="glass-card max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Handshake" size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-xl font-display text-foreground">Ready to Start?</h3>
                  <p className="text-sm text-muted-foreground">Let's build something amazing together</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Whether you're looking for a dedicated team member, a project collaborator, 
                or just want to connect with a fellow developer, I'm excited to hear from you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setActiveTab('calendar')}
                  className="btn-conversion px-6 py-3 rounded-lg font-medium transition-smooth hover-lift flex items-center justify-center space-x-2"
                >
                  <Icon name="Calendar" size={18} color="var(--color-conversion-foreground)" />
                  <span>Schedule Interview</span>
                </button>
                <button
                  onClick={() => setActiveTab('contact')}
                  className="btn-glass px-6 py-3 rounded-lg font-medium transition-smooth hover-lift flex items-center justify-center space-x-2"
                >
                  <Icon name="MessageSquare" size={18} />
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default ConnectCollaborate;