import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'technical', label: 'Technical Details', icon: 'Code' },
    { id: 'challenges', label: 'Challenges & Solutions', icon: 'Zap' },
    { id: 'impact', label: 'Impact & Results', icon: 'TrendingUp' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project?.gallery?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project?.gallery?.length - 1 : prev - 1
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-lg"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass-card max-w-6xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e?.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Folder" size={24} color="white" />
                </div>
                <div>
                  <h2 className="text-2xl font-display text-foreground">{project?.title}</h2>
                  <p className="text-muted-foreground">{project?.category} • {project?.duration}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {project?.demoUrl && (
                  <Button
                    variant="outline"
                    onClick={() => window.open(project?.demoUrl, '_blank')}
                    iconName="ExternalLink"
                    iconPosition="left"
                    iconSize={16}
                  >
                    Live Demo
                  </Button>
                )}
                {project?.githubUrl && (
                  <Button
                    variant="outline"
                    onClick={() => window.open(project?.githubUrl, '_blank')}
                    iconName="Github"
                    iconPosition="left"
                    iconSize={16}
                  >
                    Source Code
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  iconName="X"
                  iconSize={20}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex h-[calc(90vh-120px)]">
              {/* Sidebar Navigation */}
              <div className="w-64 border-r border-border p-6">
                <nav className="space-y-2">
                  {tabs?.map((tab) => (
                    <button
                      key={tab?.id}
                      onClick={() => setActiveTab(tab?.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-smooth ${
                        activeTab === tab?.id
                          ? 'bg-primary/10 text-primary border border-primary/20' :'hover:bg-white/5 text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <Icon name={tab?.icon} size={18} />
                      <span className="font-medium">{tab?.label}</span>
                    </button>
                  ))}
                </nav>

                {/* Project Stats */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Status</span>
                    <span className={`font-medium ${
                      project?.status === 'Live' ? 'text-trust' : 
                      project?.status === 'In Progress' ? 'text-warning' : 'text-muted-foreground'
                    }`}>
                      {project?.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Team Size</span>
                    <span className="text-foreground font-medium">{project?.teamSize}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Rating</span>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={14} fill="currentColor" className="text-warning" />
                      <span className="text-foreground font-medium">{project?.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-6">
                  {activeTab === 'overview' && (
                    <div className="space-y-6">
                      {/* Image Gallery */}
                      <div className="relative h-80 rounded-lg overflow-hidden">
                        <Image
                          src={project?.gallery?.[currentImageIndex]}
                          alt={`${project?.title} screenshot ${currentImageIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                        {project?.gallery?.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-smooth"
                            >
                              <Icon name="ChevronLeft" size={20} />
                            </button>
                            <button
                              onClick={nextImage}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-smooth"
                            >
                              <Icon name="ChevronRight" size={20} />
                            </button>
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                              {project?.gallery?.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => setCurrentImageIndex(index)}
                                  className={`w-2 h-2 rounded-full transition-smooth ${
                                    index === currentImageIndex ? 'bg-primary' : 'bg-white/30'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                      {/* Description */}
                      <div>
                        <h3 className="text-lg font-display text-foreground mb-3">Project Description</h3>
                        <p className="text-muted-foreground leading-relaxed">{project?.fullDescription}</p>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h3 className="text-lg font-display text-foreground mb-3">Technology Stack</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {project?.techStack?.map((tech, index) => (
                            <div key={index} className="flex items-center space-x-2 p-3 glass rounded-lg">
                              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                <Icon name="Code" size={16} className="text-primary" />
                              </div>
                              <span className="text-foreground font-medium">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h3 className="text-lg font-display text-foreground mb-3">Key Features</h3>
                        <div className="grid gap-3">
                          {project?.features?.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-3 p-3 glass rounded-lg">
                              <Icon name="CheckCircle" size={20} className="text-trust mt-0.5" />
                              <div>
                                <h4 className="text-foreground font-medium">{feature?.title}</h4>
                                <p className="text-muted-foreground text-sm">{feature?.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'technical' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-display text-foreground mb-3">Architecture Overview</h3>
                        <div className="glass p-4 rounded-lg">
                          <pre className="text-sm text-muted-foreground font-code overflow-x-auto">
                            {project?.architecture}
                          </pre>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-display text-foreground mb-3">Database Design</h3>
                        <p className="text-muted-foreground mb-4">{project?.databaseDesign}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-display text-foreground mb-3">API Structure</h3>
                        <div className="space-y-3">
                          {project?.apiEndpoints?.map((endpoint, index) => (
                            <div key={index} className="glass p-4 rounded-lg">
                              <div className="flex items-center space-x-3 mb-2">
                                <span className={`px-2 py-1 rounded text-xs font-medium ${
                                  endpoint?.method === 'GET' ? 'bg-trust/10 text-trust' :
                                  endpoint?.method === 'POST' ? 'bg-primary/10 text-primary' :
                                  endpoint?.method === 'PUT'? 'bg-warning/10 text-warning' : 'bg-error/10 text-error'
                                }`}>
                                  {endpoint?.method}
                                </span>
                                <code className="text-foreground font-code">{endpoint?.path}</code>
                              </div>
                              <p className="text-muted-foreground text-sm">{endpoint?.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'challenges' && (
                    <div className="space-y-6">
                      {project?.challenges?.map((challenge, index) => (
                        <div key={index} className="glass p-6 rounded-lg">
                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon name="AlertTriangle" size={20} className="text-warning" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-display text-foreground mb-2">{challenge?.title}</h4>
                              <p className="text-muted-foreground mb-4">{challenge?.problem}</p>
                              <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-trust/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <Icon name="CheckCircle" size={20} className="text-trust" />
                                </div>
                                <div>
                                  <h5 className="text-foreground font-medium mb-2">Solution</h5>
                                  <p className="text-muted-foreground">{challenge?.solution}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'impact' && (
                    <div className="space-y-6">
                      {/* Metrics Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {project?.metrics?.map((metric, index) => (
                          <div key={index} className="glass p-6 rounded-lg text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                              <Icon name={metric?.icon} size={24} className="text-primary" />
                            </div>
                            <div className="text-2xl font-display text-foreground mb-1">{metric?.value}</div>
                            <div className="text-muted-foreground text-sm">{metric?.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* User Feedback */}
                      <div>
                        <h3 className="text-lg font-display text-foreground mb-4">User Feedback</h3>
                        <div className="space-y-4">
                          {project?.feedback?.map((item, index) => (
                            <div key={index} className="glass p-4 rounded-lg">
                              <div className="flex items-center space-x-3 mb-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                                  <Icon name="User" size={16} color="white" />
                                </div>
                                <div>
                                  <div className="text-foreground font-medium">{item?.user}</div>
                                  <div className="text-muted-foreground text-sm">{item?.role}</div>
                                </div>
                                <div className="flex items-center space-x-1 ml-auto">
                                  {[...Array(5)]?.map((_, i) => (
                                    <Icon
                                      key={i}
                                      name="Star"
                                      size={14}
                                      fill={i < item?.rating ? "currentColor" : "none"}
                                      className="text-warning"
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="text-muted-foreground text-sm italic">"{item?.comment}"</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Learning Outcomes */}
                      <div>
                        <h3 className="text-lg font-display text-foreground mb-4">Learning Outcomes</h3>
                        <div className="space-y-3">
                          {project?.learningOutcomes?.map((outcome, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <Icon name="BookOpen" size={18} className="text-accent mt-1" />
                              <p className="text-muted-foreground">{outcome}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;