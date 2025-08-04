import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TimelineItem = ({ 
  experience, 
  isLeft = false, 
  isExpanded, 
  onToggle,
  index 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'education': return 'GraduationCap';
      case 'internship': return 'Briefcase';
      case 'project': return 'Code';
      case 'achievement': return 'Award';
      case 'hackathon': return 'Trophy';
      case 'certification': return 'Certificate';
      default: return 'Circle';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'education': return 'text-blue-400 bg-blue-500/20';
      case 'internship': return 'text-primary bg-primary/20';
      case 'project': return 'text-secondary bg-secondary/20';
      case 'achievement': return 'text-yellow-400 bg-yellow-500/20';
      case 'hackathon': return 'text-orange-400 bg-orange-500/20';
      case 'certification': return 'text-green-400 bg-green-500/20';
      default: return 'text-muted-foreground bg-muted/20';
    }
  };

  return (
    <div className={`relative flex items-center mb-12 ${isLeft ? 'flex-row-reverse' : ''}`}>
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent"></div>
      {/* Timeline Node */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 z-10 w-12 h-12 rounded-full ${getTypeColor(experience?.type)} border-2 border-background flex items-center justify-center shadow-glow`}>
        <Icon name={getTypeIcon(experience?.type)} size={20} />
      </div>
      {/* Content Card */}
      <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
        <div className={`glass-card hover-lift transition-smooth animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(experience?.type)}`}>
                  {experience?.type?.charAt(0)?.toUpperCase() + experience?.type?.slice(1)}
                </span>
                <span className="text-xs text-muted-foreground">{experience?.duration}</span>
              </div>
              <h3 className="text-xl font-display text-foreground mb-1">{experience?.title}</h3>
              <p className="text-primary font-medium">{experience?.organization}</p>
              {experience?.location && (
                <p className="text-sm text-muted-foreground flex items-center mt-1">
                  <Icon name="MapPin" size={14} className="mr-1" />
                  {experience?.location}
                </p>
              )}
            </div>
            {experience?.logo && (
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-surface border border-border flex-shrink-0">
                <Image
                  src={experience?.logo}
                  alt={`${experience?.organization} logo`}
                  className="w-full h-full object-cover"
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {experience?.description}
          </p>

          {/* Key Highlights */}
          {experience?.highlights && experience?.highlights?.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                <Icon name="Star" size={16} className="mr-2 text-yellow-400" />
                Key Highlights
              </h4>
              <ul className="space-y-1">
                {experience?.highlights?.slice(0, isExpanded ? undefined : 3)?.map((highlight, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start">
                    <Icon name="ChevronRight" size={14} className="mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              {experience?.highlights?.length > 3 && !isExpanded && (
                <p className="text-xs text-muted-foreground mt-2">
                  +{experience?.highlights?.length - 3} more highlights
                </p>
              )}
            </div>
          )}

          {/* Technologies */}
          {experience?.technologies && experience?.technologies?.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                <Icon name="Code" size={16} className="mr-2 text-secondary" />
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience?.technologies?.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-surface border border-border rounded-md text-xs text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Metrics */}
          {experience?.metrics && experience?.metrics?.length > 0 && isExpanded && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                <Icon name="TrendingUp" size={16} className="mr-2 text-trust" />
                Impact & Results
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {experience?.metrics?.map((metric, idx) => (
                  <div key={idx} className="bg-surface/50 border border-border rounded-lg p-3">
                    <div className="text-lg font-bold text-trust">{metric?.value}</div>
                    <div className="text-xs text-muted-foreground">{metric?.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          {experience?.links && experience?.links?.length > 0 && isExpanded && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                <Icon name="ExternalLink" size={16} className="mr-2 text-conversion" />
                Related Links
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience?.links?.map((link, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(link?.url, '_blank')}
                    iconName="ExternalLink"
                    iconPosition="right"
                    iconSize={14}
                    className="text-xs"
                  >
                    {link?.label}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Testimonial */}
          {experience?.testimonial && isExpanded && (
            <div className="mb-4 p-4 bg-surface/30 border border-border rounded-lg">
              <div className="flex items-start space-x-3">
                <Icon name="Quote" size={16} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground italic mb-2">
                    "{experience?.testimonial?.quote}"
                  </p>
                  <div className="flex items-center space-x-2">
                    {experience?.testimonial?.avatar && (
                      <div className="w-6 h-6 rounded-full overflow-hidden">
                        <Image
                          src={experience?.testimonial?.avatar}
                          alt={experience?.testimonial?.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="text-xs font-medium text-foreground">
                        {experience?.testimonial?.author}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {experience?.testimonial?.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Expand/Collapse Button */}
          <div className="flex justify-center pt-2 border-t border-border">
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
              iconPosition="right"
              iconSize={16}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;