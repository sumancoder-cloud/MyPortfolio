import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DownloadableResources = () => {
  const [downloadCounts, setDownloadCounts] = useState({
    resume: 247,
    portfolio: 89,
    references: 34,
    certificates: 156,
    projects: 78,
    transcript: 23
  });

  const resources = [
    {
      id: 'resume',
      title: 'Professional Resume',
      description: 'Comprehensive CV with detailed experience, skills, and achievements',
      fileType: 'PDF',
      fileSize: '2.4 MB',
      lastUpdated: 'January 2025',
      icon: 'FileText',
      color: 'text-primary',
      bgColor: 'bg-primary/20',
      downloadUrl: '/assets/downloads/Amazon_SDE1_Resume.pdf',
      featured: true
    },
    // {
    //   id: 'portfolio',
    //   title: 'Project Portfolio',
    //   description: 'Detailed case studies of key projects with technical specifications',
    //   fileType: 'PDF',
    //   fileSize: '8.7 MB',
    //   lastUpdated: 'December 2024',
    //   icon: 'FolderOpen',
    //   color: 'text-secondary',
    //   bgColor: 'bg-secondary/20',
    //   downloadUrl: '/assets/downloads/portfolio-interactive.pdf',
    //   featured: true
    // },
    // {
    //   id: 'references',
    //   title: 'Professional References',
    //   description: 'Contact information and recommendation letters from supervisors',
    //   fileType: 'PDF',
    //   fileSize: '1.8 MB',
    //   lastUpdated: 'November 2024',
    //   icon: 'Users',
    //   color: 'text-trust',
    //   bgColor: 'bg-trust/20',
    //   downloadUrl: '/assets/downloads/references-pdf.pdf',
    //   featured: false
    // },
    {
      id: 'certificates',
      title: 'Certifications & Awards',
      description: 'Collection of technical certifications and achievement certificates',
      fileType: 'ZIP',
      fileSize: '12.3 MB',
      lastUpdated: 'January 2025',
      icon: 'Award',
      color: 'text-warning',
      bgColor: 'bg-warning/20',
      downloadUrl: '/assets/documents/Certifications.zip',
      featured: false
    },
    // {
    //   id: 'projects',
    //   title: 'Code Samples',
    //   description: 'Selected code snippets and mini-projects demonstrating skills',
    //   fileType: 'ZIP',
    //   fileSize: '15.6 MB',
    //   lastUpdated: 'December 2024',
    //   icon: 'Code',
    //   color: 'text-conversion',
    //   bgColor: 'bg-conversion/20',
    //   downloadUrl: '/assets/documents/Code-Samples.zip',
    //   featured: false
    // },
    // {
    //   id: 'transcript',
    //   title: 'Academic Transcript',
    //   description: 'Official academic records from SRM University AP',
    //   fileType: 'PDF',
    //   fileSize: '3.2 MB',
    //   lastUpdated: 'October 2024',
    //   icon: 'GraduationCap',
    //   color: 'text-pink-400',
    //   bgColor: 'bg-pink-500/20',
    //   downloadUrl: '/assets/documents/Academic-Transcript.pdf',
    //   featured: false
    // }
  ];

  const quickLinks = [
    {
      title: 'LinkedIn Profile',
      description: 'Professional networking and endorsements',
      icon: 'Linkedin',
      url: 'https://www.linkedin.com/in/tati-suman-yadav-938569351/',
      color: 'text-blue-400'
    },
    {
      title: 'GitHub Repository',
      description: 'Complete source code and contribution history',
      icon: 'Github',
      url: 'https://github.com/sumancoder-cloud',
      color: 'text-foreground'
    },
    
  ];

  const handleDownload = (resource) => {
    // Simulate download
    const link = document.createElement('a');
    link.href = resource?.downloadUrl;
    link.download = `${resource?.title?.replace(/\s+/g, '-')}.${resource?.fileType?.toLowerCase()}`;
    link?.click();

    // Update download count
    setDownloadCounts(prev => ({
      ...prev,
      [resource?.id]: prev?.[resource?.id] + 1
    }));

    // Show success message (you could use a toast library here)
    console.log(`Downloaded: ${resource?.title}`);
  };

  const handleQuickLinkClick = (link) => {
    window.open(link?.url, '_blank', 'noopener,noreferrer');
  };

  const featuredResources = resources?.filter(r => r?.featured);
  const otherResources = resources?.filter(r => !r?.featured);

  return (
    <div className="space-y-8">
      {/* Featured Resources */}
      <div className="glass-card">
        <div className="p-6 border-b border-border">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Download" size={20} color="white" />
            </div>
            <div>
              <h2 className="text-2xl font-display text-foreground">Essential Downloads</h2>
              <p className="text-muted-foreground">Key documents for hiring decisions</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredResources?.map((resource, index) => (
              <div
                key={resource?.id}
                className={`${resource?.bgColor} border border-border rounded-lg p-6 hover-lift transition-smooth animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${resource?.bgColor} border border-border rounded-lg flex items-center justify-center ${resource?.color}`}>
                    <Icon name={resource?.icon} size={24} />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground mb-1">Downloads</div>
                    <div className={`text-lg font-bold ${resource?.color}`}>
                      {downloadCounts?.[resource?.id]}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{resource?.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{resource?.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Icon name="File" size={12} className="mr-1" />
                        {resource?.fileType}
                      </span>
                      <span className="flex items-center">
                        <Icon name="HardDrive" size={12} className="mr-1" />
                        {resource?.fileSize}
                      </span>
                    </div>
                    <span className="flex items-center">
                      <Icon name="Calendar" size={12} className="mr-1" />
                      {resource?.lastUpdated}
                    </span>
                  </div>
                </div>

                <Button
                  variant="default"
                  fullWidth
                  onClick={() => handleDownload(resource)}
                  iconName="Download"
                  iconPosition="left"
                  iconSize={16}
                  className={`${resource?.color === 'text-primary' ? 'btn-primary' : 'btn-secondary'}`}
                >
                  Download {resource?.fileType}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Additional Resources */}
      <div className="glass-card">
        <div className="p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-trust to-warning rounded-lg flex items-center justify-center">
              <Icon name="Archive" size={20} color="white" />
            </div>
            <div>
              <h2 className="text-2xl font-display text-foreground">Additional Resources</h2>
              <p className="text-muted-foreground">Supporting documents and materials</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherResources?.map((resource, index) => (
              <div
                key={resource?.id}
                className="bg-surface border border-border rounded-lg p-4 hover-lift transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-10 h-10 ${resource?.bgColor} border border-border rounded-lg flex items-center justify-center ${resource?.color}`}>
                    <Icon name={resource?.icon} size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground text-sm">{resource?.title}</h4>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <span>{resource?.fileType}</span>
                      <span>•</span>
                      <span>{resource?.fileSize}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mb-3">{resource?.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {downloadCounts?.[resource?.id]} downloads
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownload(resource)}
                    iconName="Download"
                    iconPosition="left"
                    iconSize={14}
                    className="text-xs"
                  >
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Quick Links */}
      <div className="glass-card">
        <div className="p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-conversion to-primary rounded-lg flex items-center justify-center">
              <Icon name="ExternalLink" size={20} color="white" />
            </div>
            <div>
              <h2 className="text-2xl font-display text-foreground">Online Presence</h2>
              <p className="text-muted-foreground">Connect and explore more</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickLinks?.map((link, index) => (
              <button
                key={link?.title}
                onClick={() => handleQuickLinkClick(link)}
                className="bg-surface border border-border rounded-lg p-4 hover-lift transition-smooth text-left animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 bg-surface border border-border rounded-lg flex items-center justify-center ${link?.color}`}>
                    <Icon name={link?.icon} size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">{link?.title}</h4>
                    <p className="text-sm text-muted-foreground">{link?.description}</p>
                  </div>
                  <Icon name="ExternalLink" size={16} className="text-muted-foreground" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Download Statistics */}
      <div className="glass-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-secondary to-trust rounded-lg flex items-center justify-center">
            <Icon name="BarChart3" size={20} color="white" />
          </div>
          <div>
            <h2 className="text-2xl font-display text-foreground">Download Statistics</h2>
            <p className="text-muted-foreground">Resource engagement metrics</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">
              {2}
            </div>
            <div className="text-sm text-muted-foreground">Total Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-1">
              {4}
            </div>
            <div className="text-sm text-muted-foreground">Available Resources</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-trust mb-1">
              {10}
            </div>
            <div className="text-sm text-muted-foreground">Most Downloaded</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-warning mb-1">
              100%
            </div>
            <div className="text-sm text-muted-foreground">Availability</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadableResources;