import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ResourceCenter = () => {
  const [downloadCounts, setDownloadCounts] = useState({
    resume: 247,
    portfolio: 89,
    references: 34
  });

  const resources = [
    {
      id: 'resume',
      title: 'Resume / CV',
      description: 'Comprehensive resume with technical skills and experience',
      formats: [
        { type: 'PDF', size: '245 KB', optimized: 'Print & Digital' }
      ],
      icon: 'FileText',
      color: 'from-primary to-primary/80',
      lastUpdated: '2025-01-03'
    },
    // {
    //   id: 'portfolio',
    //   title: 'Portfolio Summary',
    //   description: 'Project highlights and technical achievements overview',
    //   formats: [
    //     { type: 'PDF', size: '1.2 MB', optimized: 'Visual Presentation' },
    //     { type: 'Interactive', size: 'Online', optimized: 'Live Demos' }
    //   ],
    //   icon: 'FolderOpen',
    //   color: 'from-secondary to-secondary/80',
    //   lastUpdated: '2025-01-02'
    // },
    // {
    //   id: 'references',
    //   title: 'References & Recommendations',
    //   description: 'Professional references and LinkedIn recommendations',
    //   formats: [
    //     { type: 'PDF', size: '156 KB', optimized: 'Contact Information' }
    //   ],
    //   icon: 'Users',
    //   color: 'from-accent to-accent/80',
    //   lastUpdated: '2024-12-28'
    // }
  ];

  const digitalAssets = [
    {
      title: 'Digital Business Card',
      description: 'Save contact information directly to your phone',
      action: 'Add to Contacts',
      icon: 'CreditCard',
      color: 'from-trust to-trust/80'
    },
    // {
    //   title: 'QR Code',
    //   description: 'Quick access to portfolio and contact information',
    //   action: 'Download QR',
    //   icon: 'QrCode',
    //   color: 'from-conversion to-conversion/80'
    // },
    // {
    //   title: 'Email Signature',
    //   description: 'Professional email signature with portfolio link',
    //   action: 'Copy Signature',
    //   icon: 'Mail',
    //   color: 'from-warning to-warning/80'
    // }
  ];

  const handleDownload = (resourceId, format) => {
    // Simulate download
    setDownloadCounts(prev => ({
      ...prev,
      [resourceId]: prev?.[resourceId] + 1
    }));
    
    // Create download link
    const link = document.createElement('a');
    
    // Map to actual file paths
    let filePath = '';
    let fileName = '';
    
    if (resourceId === 'resume') {
      // Use your actual resume file
      filePath = '/assets/downloads/Amazon_SDE1_Resume.pdf';
      fileName = `T-Suman-Yadav-Resume-${format?.type}.pdf`;
    } else if (resourceId === 'portfolio') {
      // For portfolio files (you can add these later)
      filePath = `/assets/downloads/portfolio-${format?.type?.toLowerCase()?.replace(' ', '-')}.pdf`;
      fileName = `T-Suman-Yadav-Portfolio-${format?.type}.pdf`;
    } else if (resourceId === 'references') {
      // For references file (you can add this later)
      filePath = '/assets/downloads/references-pdf.pdf';
      fileName = `T-Suman-Yadav-References.pdf`;
    }
    
    link.href = filePath;
    link.download = fileName;
    link?.click();
  };

  const handleDigitalAsset = (asset) => {
    switch (asset?.title) {
      case 'Digital Business Card':
        // Create vCard
        const vCard = `BEGIN:VCARD
VERSION:3.0
FN:T Suman Yadav
ORG:Software Developer
TITLE:Full Stack Developer
EMAIL:suman.tati2005@gmail.com
TEL:+91-7997596790

END:VCARD`;
        const blob = new Blob([vCard], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'T-Suman-Yadav.vcf';
        link?.click();
        break;
      // case 'QR Code':
      //   // Generate QR code download
      //   const qrLink = document.createElement('a');
      //   qrLink.href = '/assets/images/portfolio-qr-code.png';
      //   qrLink.download = 'T-Suman-Yadav-Portfolio-QR.png';
      //   qrLink?.click();
      //   break;
      // case 'Email Signature':
      //   // Copy email signature to clipboard
      //   const signature = `T Suman Yadav\nFull Stack Developer\n📧 tsuman.yadav@example.com\n📱 +91-9876543210\n🌐 https://tsumanyadav.dev\n💼 https://linkedin.com/in/tsuman-yadav`;
      //   navigator.clipboard?.writeText(signature);
      //   break;
    }
  };

  return (
    <div className="space-y-6">
      {/* Main Resources */}
      <div className="glass-card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <Icon name="Download" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-xl font-display text-foreground">Download Resources</h3>
            <p className="text-sm text-muted-foreground">Essential documents and materials</p>
          </div>
        </div>

        <div className="space-y-6">
          {resources?.map((resource) => (
            <div key={resource?.id} className="border border-border rounded-lg p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${resource?.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon name={resource?.icon} size={24} color="white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium text-foreground">{resource?.title}</h4>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="Download" size={14} />
                      <span>{downloadCounts?.[resource?.id]} downloads</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-2">{resource?.description}</p>
                  <p className="text-xs text-muted-foreground">
                    Last updated: {new Date(resource.lastUpdated)?.toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {resource?.formats?.map((format, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    onClick={() => handleDownload(resource?.id, format)}
                    className="h-auto p-3 flex-col items-start text-left hover-lift"
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="font-medium text-foreground">{format?.type}</span>
                      <span className="text-xs text-muted-foreground">{format?.size}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{format?.optimized}</span>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Digital Assets */}
      <div className="glass-card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center">
            <Icon name="Smartphone" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-xl font-display text-foreground">Digital Assets</h3>
            <p className="text-sm text-muted-foreground">Quick access and sharing tools</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {digitalAssets?.map((asset, index) => (
            <div key={index} className="p-4 border border-border rounded-lg hover:border-primary/50 hover:bg-white/5 transition-smooth">
              <div className="flex items-start space-x-3 mb-4">
                <div className={`w-10 h-10 bg-gradient-to-br ${asset?.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon name={asset?.icon} size={20} color="white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground mb-1">{asset?.title}</h4>
                  <p className="text-sm text-muted-foreground">{asset?.description}</p>
                </div>
              </div>
              <Button
                variant="outline"
                fullWidth
                onClick={() => handleDigitalAsset(asset)}
                iconName="Download"
                iconPosition="left"
                iconSize={16}
              >
                {asset?.action}
              </Button>
            </div>
          ))}
        </div>
      </div>
      {/* Usage Statistics */}
      <div className="glass-card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg flex items-center justify-center">
            <Icon name="BarChart3" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-xl font-display text-foreground">Resource Analytics</h3>
            <p className="text-sm text-muted-foreground">Download and engagement metrics</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white/5 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">10</div>
            <div className="text-sm text-muted-foreground">Total Downloads</div>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-lg">
            <div className="text-2xl font-bold text-secondary mb-1">89%</div>
            <div className="text-sm text-muted-foreground">PDF Preference</div>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-lg">
            <div className="text-2xl font-bold text-accent mb-1">10</div>
            <div className="text-sm text-muted-foreground">Unique Visitors</div>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-lg">
            <div className="text-2xl font-bold text-trust mb-1">2</div>
            <div className="text-sm text-muted-foreground">This Week</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCenter;