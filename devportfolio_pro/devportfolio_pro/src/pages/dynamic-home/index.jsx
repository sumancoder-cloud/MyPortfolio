import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import SkillsPreview from './components/SkillsPreview';
import FeaturedProjects from './components/FeaturedProjects';
import GitHubActivity from './components/GitHubActivity';

const DynamicHome = () => {
  useEffect(() => {
    // Set page title
    document.title = 'T Suman Yadav - Software Developer | DevPortfolio Pro';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Explore the portfolio of T Suman Yadav, a passionate software developer specializing in full-stack development, AI/ML, and innovative web solutions.');
    }

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      {/* Hero Section */}
      <HeroSection />
      {/* Skills Preview Section */}
      <SkillsPreview />
      {/* Featured Projects Section */}
      <FeaturedProjects />
      {/* GitHub Activity Section */}
      <GitHubActivity />
      {/* Call to Action Footer */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-t from-slate-900 to-transparent"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display text-gradient mb-6">
            Ready to Build Something Amazing Together?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to collaborate on innovative projects and explore new opportunities. Let's connect and discuss how we can create impactful solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/connect-collaborate'}
              className="btn-conversion px-8 py-4 rounded-xl font-semibold text-lg hover-lift shadow-conversion inline-flex items-center justify-center space-x-2"
            >
              <span>Start a Conversation</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <button
              onClick={() => window.open('https://calendly.com/tsuman-yadav', '_blank')}
              className="btn-glass px-8 py-4 rounded-xl font-semibold text-lg hover-lift inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Schedule Interview</span>
            </button>
          </div>

          {/* Quick Contact Info */}
          <div className="mt-12 glass-card p-6 rounded-xl max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-trust rounded-full animate-pulse"></div>
                <span>Available for hire</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Response within 24h</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default DynamicHome;