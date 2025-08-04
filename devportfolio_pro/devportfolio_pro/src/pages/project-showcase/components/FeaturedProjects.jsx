import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProjects = ({ projects, onViewDetails }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-4"
        >
          <Icon name="Star" size={16} className="text-warning" fill="currentColor" />
          <span className="text-sm font-medium text-foreground">Featured Projects</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-display text-gradient mb-4"
        >
          Showcase of Excellence
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          Discover my most impactful projects that demonstrate technical expertise, 
          creative problem-solving, and real-world application development.
        </motion.p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {projects?.map((project, index) => (
          <motion.div
            key={project?.id}
            variants={itemVariants}
            className={`glass-card hover-lift hover-glow transition-smooth cursor-pointer ${
              index === 0 ? 'lg:col-span-2' : ''
            }`}
            onClick={() => onViewDetails(project)}
          >
            <div className={`grid ${index === 0 ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-6`}>
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg">
                <div className={`relative ${index === 0 ? 'h-80' : 'h-64'} overflow-hidden`}>
                  <Image
                    src={project?.image}
                    alt={project?.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium glass ${
                      project?.status === 'Live' ? 'text-trust' : 
                      project?.status === 'In Progress' ? 'text-warning' : 'text-muted-foreground'
                    }`}>
                      {project?.status}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project?.featured && (
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center space-x-1 px-2 py-1 bg-warning/20 text-warning rounded-full text-xs font-medium">
                        <Icon name="Star" size={12} fill="currentColor" />
                        <span>Featured</span>
                      </div>
                    </div>
                  )}

                  {/* Quick Actions */}
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    {project?.demoUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e?.stopPropagation();
                          window.open(project?.demoUrl, '_blank');
                        }}
                        className="glass"
                        iconName="ExternalLink"
                        iconPosition="left"
                        iconSize={14}
                      >
                        Demo
                      </Button>
                    )}
                    {project?.githubUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e?.stopPropagation();
                          window.open(project?.githubUrl, '_blank');
                        }}
                        className="glass"
                        iconName="Github"
                        iconPosition="left"
                        iconSize={14}
                      >
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`${index === 0 ? 'text-2xl' : 'text-xl'} font-display text-foreground mb-2`}>
                      {project?.title}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-2">{project?.category}</p>
                  </div>
                  <div className="flex items-center space-x-1 text-warning">
                    <Icon name="Star" size={16} fill="currentColor" />
                    <span className="text-sm font-medium">{project?.rating}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {index === 0 ? project?.fullDescription?.substring(0, 200) + '...' : project?.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project?.techStack?.slice(0, index === 0 ? 6 : 4)?.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project?.techStack?.length > (index === 0 ? 6 : 4) && (
                      <span className="px-3 py-1 bg-muted/20 text-muted-foreground text-xs rounded-full">
                        +{project?.techStack?.length - (index === 0 ? 6 : 4)} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Highlights */}
                {index === 0 && project?.highlights && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-foreground mb-3">Key Highlights</h4>
                    <div className="space-y-2">
                      {project?.highlights?.slice(0, 3)?.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center space-x-2">
                          <Icon name="CheckCircle" size={14} className="text-trust" />
                          <span className="text-muted-foreground text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Calendar" size={14} />
                      <span>{project?.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={14} />
                      <span>{project?.teamSize}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="TrendingUp" size={14} />
                    <span className="text-trust font-medium">{project?.impact}</span>
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  variant="default"
                  fullWidth
                  onClick={() => onViewDetails(project)}
                  className="btn-conversion"
                  iconName="ArrowRight"
                  iconPosition="right"
                  iconSize={16}
                >
                  Explore Project Details
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;