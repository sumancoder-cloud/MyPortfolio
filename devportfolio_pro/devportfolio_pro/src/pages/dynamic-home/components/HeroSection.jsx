import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import SkillCard from '../../interactive-skills-lab/components/SkillCard';


const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [currentCode, setCurrentCode] = useState(0);

  const roles = [
    'Software Developer',
    'Problem Solver', 
    'FullStack Developer',
    'DSA Enthusiast',
  ];

  const codeSnippets = [
    {
      language: 'React',
      code: `const Portfolio = () => {
  const [skills, setSkills] = useState([]);
  
  useEffect(() => {
    fetchSkills().then(setSkills);
  }, []);
  
  return (
    <div className="portfolio">
      {skills.map(skill => 
        <SkillCard key={skill.id} {...skill} />
      )}
    </div>
  );
};`
    },
    {
      language: 'Python',
      code: `import pandas as pd
import matplotlib.pyplot as plt

def analyze_performance(data):
    metrics = data.groupby('category').agg({
        'score': ['mean', 'std', 'count']
    }).round(2)
    
    plt.figure(figsize=(10, 6))
    metrics.plot(kind='bar')
    plt.title('Performance Analysis')
    return metrics`
    },
    {
      language: 'JavaScript',
      code: `class DataProcessor {
  constructor(config) {
    this.config = config;
    this.cache = new Map();
  }
  
  async process(data) {
    const key = this.generateKey(data);
    
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    
    const result = await this.transform(data);
    this.cache.set(key, result);
    return result;
  }
}`
    }
  ];

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles?.length);
    }, 3000);

    const codeInterval = setInterval(() => {
      setCurrentCode((prev) => (prev + 1) % codeSnippets?.length);
    }, 4000);

    return () => {
      clearInterval(roleInterval);
      clearInterval(codeInterval);
    };
  }, []);

  const handleExploreWork = () => {
    window.location.href = '/project-showcase';
  };

  const handleConnect = () => {
    window.location.href = '/connect-collaborate';
  };

  const handleScheduleInterview = () => {
    window.open('https://calendly.com/tsuman-yadav', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-slate-900 to-slate-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-conversion/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-3"
            >
              <div className="w-2 h-2 bg-trust rounded-full animate-pulse"></div>
              <span className="text-muted-foreground text-lg">Hello, I'm</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-display text-gradient leading-tight"
            >
              T Suman Yadav
            </motion.h1>

            {/* Dynamic Role */}
            <div className="h-16 flex items-center">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl lg:text-3xl font-semibold text-foreground"
                >
                  {roles?.[currentRole]}
                </motion.h2>
              </AnimatePresence>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              Crafting digital experiences that bridge the gap between complex problems and elegant solutions. Currently pursuing B.Tech at SRM University AP, passionate about building scalable applications that make a difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="default"
                size="lg"
                onClick={handleExploreWork}
                iconName="ArrowRight"
                iconPosition="right"
                className="btn-conversion shadow-conversion hover-lift"
              >
                Explore My Work
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleConnect}
                iconName="MessageCircle"
                iconPosition="left"
                className="btn-glass"
              >
                Let's Connect
              </Button>

              <Button
                variant="ghost"
                size="lg"
                onClick={handleScheduleInterview}
                iconName="Calendar"
                iconPosition="left"
                className="text-trust hover:text-trust/80"
              >
                Schedule Interview
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center space-x-8 pt-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">1</div>
                <div className="text-sm text-muted-foreground">Internships</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-conversion">50+</div>
                <div className="text-sm text-muted-foreground">Commits</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Code & Profile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Profile Image */}
            <motion.div
              className="relative mb-8 flex justify-center lg:justify-end"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden glass-card p-2">
                  <Image
                    src="./assets/myphoto.jpg"
                    alt="T Suman Yadav - Software Developer"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                
                {/* Floating Status */}
                <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-full">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-trust rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Available for hire</span>
                  </div>
                </div>

                {/* Floating Tech Stack */}
                <div className="absolute -top-4 -left-4 glass-card px-3 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Icon name="Code2" size={16} className="text-primary" />
                    <span className="text-sm font-medium">Full Stack</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Animated Code Snippet */}
            <motion.div
              className="glass-card p-6 rounded-xl font-code text-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentCode}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-muted-foreground font-medium"
                    >
                      {codeSnippets?.[currentCode]?.language}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <Icon name="Copy" size={16} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              </div>

              <AnimatePresence mode="wait">
                <motion.pre
                  key={currentCode}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-foreground leading-relaxed overflow-hidden"
                >
                  <code>{codeSnippets?.[currentCode]?.code}</code>
                </motion.pre>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-muted-foreground"
        >
          <span className="text-sm">Scroll to explore</span>
          <Icon name="ChevronDown" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;