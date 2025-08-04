import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ stats }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="mb-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {stats?.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="glass-card p-6 text-center hover-lift transition-smooth"
          >
            <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
              stat?.color === 'primary' ? 'bg-primary/10' :
              stat?.color === 'secondary' ? 'bg-secondary/10' :
              stat?.color === 'accent' ? 'bg-accent/10' :
              stat?.color === 'trust'? 'bg-trust/10' : 'bg-warning/10'
            }`}>
              <Icon 
                name={stat?.icon} 
                size={28} 
                className={
                  stat?.color === 'primary' ? 'text-primary' :
                  stat?.color === 'secondary' ? 'text-secondary' :
                  stat?.color === 'accent' ? 'text-accent' :
                  stat?.color === 'trust'? 'text-trust' : 'text-warning'
                }
              />
            </div>
            <div className="text-3xl font-display text-foreground mb-2">{stat?.value}</div>
            <div className="text-muted-foreground text-sm font-medium">{stat?.label}</div>
            {stat?.description && (
              <div className="text-muted-foreground text-xs mt-2 opacity-80">{stat?.description}</div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectStats;