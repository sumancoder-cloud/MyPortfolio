import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDemoClick = (demoUrl) => {
    window.open(demoUrl, '_blank');
  };

  const handleGithubClick = (githubUrl) => {
    window.open(githubUrl, '_blank');
  };

  return (
    <motion.div
      className="glass-card hover-lift hover-glow transition-smooth cursor-pointer relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      onClick={() => onViewDetails(project)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden rounded-t-lg">
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

        {/* Quick Actions */}
        <motion.div
          className="absolute top-4 left-4 flex space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          {project?.demoUrl && (
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e?.stopPropagation();
                handleDemoClick(project?.demoUrl);
              }}
              className="glass w-8 h-8"
            >
              <Icon name="ExternalLink" size={14} />
            </Button>
          )}
          {project?.githubUrl && (
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e?.stopPropagation();
                handleGithubClick(project?.githubUrl);
              }}
              className="glass w-8 h-8"
            >
              <Icon name="Github" size={14} />
            </Button>
          )}
        </motion.div>
      </div>
      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-display text-foreground group-hover:text-primary transition-colors">
            {project?.title}
          </h3>
          <div className="flex items-center space-x-1 text-warning">
            <Icon name="Star" size={14} fill="currentColor" />
            <span className="text-sm font-medium">{project?.rating}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project?.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.techStack?.slice(0, 4)?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
            >
              {tech}
            </span>
          ))}
          {project?.techStack?.length > 4 && (
            <span className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded-md">
              +{project?.techStack?.length - 4} more
            </span>
          )}
        </div>

        {/* Project Stats */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
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
            <span className="text-trust">{project?.impact}</span>
          </div>
        </div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-primary/5 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            variant="default"
            className="btn-conversion"
            iconName="Eye"
            iconPosition="left"
            iconSize={16}
          >
            View Details
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;