import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillCard = ({ skill, index, onTryIt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      const levelTimer = setTimeout(() => {
        setAnimatedLevel(skill?.level);
      }, 300);
      return () => clearTimeout(levelTimer);
    }, index * 100);

    return () => clearTimeout(timer);
  }, [skill?.level, index]);

  const getLevelColor = (level) => {
    if (level >= 90) return 'from-trust to-accent';
    if (level >= 70) return 'from-primary to-secondary';
    if (level >= 50) return 'from-warning to-primary';
    return 'from-muted to-warning';
  };

  const getLevelText = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 70) return 'Advanced';
    if (level >= 50) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-glass hover-lift hover-glow group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill?.gradient} flex items-center justify-center shadow-glow`}>
            <Icon name={skill?.icon} size={24} color="white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{skill?.name}</h3>
            <p className="text-sm text-muted-foreground">{skill?.category}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-foreground">{getLevelText(skill?.level)}</div>
          <div className="text-xs text-muted-foreground">{skill?.level}%</div>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">Proficiency</span>
          <span className="text-sm font-medium text-foreground">{animatedLevel}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${getLevelColor(skill?.level)} rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: `${animatedLevel}%` }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm text-muted-foreground mb-2">{skill?.description}</p>
        <div className="flex flex-wrap gap-1">
          {skill?.technologies?.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 text-xs bg-white/10 text-foreground rounded-md border border-white/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
          <Icon name="Calendar" size={14} />
          <span>{skill?.experience}</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onTryIt(skill)}
          iconName="Play"
          iconPosition="left"
          iconSize={14}
          className="btn-glass opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Try It
        </Button>
      </div>
    </motion.div>
  );
};

export default SkillCard;