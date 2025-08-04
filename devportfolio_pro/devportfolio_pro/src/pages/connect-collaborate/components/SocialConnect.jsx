import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SocialConnect = () => {
  const socialPlatforms = [
    {
      name: 'LinkedIn',
      username: 'Tati Suman Yadav',
      description: 'Professional updates and career highlights',
      url: 'https://www.linkedin.com/in/tati-suman-yadav-938569351/',
      icon: 'Linkedin',
      color: 'from-blue-500 to-blue-600',
      stats: '500+ connections'
    },
    {
      name: 'GitHub',
      username: 'sumancoder-cloud',
      description: 'Code repositories and open source contributions',
      url: 'https://github.com/sumancoder-cloud',
      icon: 'Github',
      color: 'from-gray-700 to-gray-800',
      stats: '15+ repositories'
    },
    {
  name: 'Instagram',
  username: 'sumanyadav_tati',
  description: 'Visual stories & project highlights',
  url: 'https://instagram.com/sumanyadav_tati',
  icon: 'Instagram',
  color: 'from-pink-500 via-red-500 to-yellow-500',
  stats: '450+ followers'
}

  ];

  const quickActions = [
    {
      title: 'Send Email',
      description: 'Direct email communication',
      action: 'mailto:suman.tati2005@gmail.com?subject=Opportunity Discussion',
      icon: 'Mail',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'WhatsApp',
      description: 'Quick message or call',
      action: 'https://wa.me/917997596790?text=Hi%20Suman,%20I%20found%20your%20portfolio',
      icon: 'MessageCircle',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Phone Call',
      description: 'Direct phone conversation',
      action: 'tel:+917997596790',
      icon: 'Phone',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleQuickAction = (action) => {
    if (action?.startsWith('mailto:') || action?.startsWith('tel:')) {
      window.location.href = action;
    } else {
      window.open(action, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="space-y-6">
      {/* Social Platforms */}
      <div className="glass-card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg flex items-center justify-center">
            <Icon name="Share2" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-xl font-display text-foreground">Social Presence</h3>
            <p className="text-sm text-muted-foreground">Connect across platforms</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {socialPlatforms?.map((platform) => (
            <div
              key={platform?.name}
              className="p-4 border border-border rounded-lg hover:border-primary/50 hover:bg-white/5 transition-smooth cursor-pointer group"
              onClick={() => handleSocialClick(platform?.url)}
            >
              <div className="flex items-start space-x-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${platform?.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon name={platform?.icon} size={20} color="white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-foreground">{platform?.name}</h4>
                    <Icon name="ExternalLink" size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground">{platform?.username}</p>
                  <p className="text-xs text-muted-foreground mt-1">{platform?.description}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-primary">{platform?.stats}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Quick Actions */}
      <div className="glass-card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center">
            <Icon name="Zap" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-xl font-display text-foreground">Quick Connect</h3>
            <p className="text-sm text-muted-foreground">Instant communication options</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions?.map((action) => (
            <Button
              key={action?.title}
              variant="outline"
              onClick={() => handleQuickAction(action?.action)}
              className="h-auto p-4 flex-col items-start text-left hover-lift"
            >
              <div className="flex items-center space-x-3 w-full mb-2">
                <div className={`w-8 h-8 bg-gradient-to-br ${action?.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon name={action?.icon} size={16} color="white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground">{action?.title}</h4>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{action?.description}</p>
            </Button>
          ))}
        </div>
      </div>
      {/* Response Time Expectations */}
      <div className="glass-card">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-trust to-trust/80 rounded-lg flex items-center justify-center">
            <Icon name="Clock" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-xl font-display text-foreground">Response Times</h3>
            <p className="text-sm text-muted-foreground">What to expect</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-white/5 rounded-lg">
            <div className="text-2xl font-bold text-trust mb-1">&lt; 24h</div>
            <div className="text-sm font-medium text-foreground">Email & LinkedIn</div>
            <div className="text-xs text-muted-foreground">Business inquiries</div>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">&lt; 4h</div>
            <div className="text-sm font-medium text-foreground">WhatsApp & Phone</div>
            <div className="text-xs text-muted-foreground">Urgent matters</div>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-lg">
            <div className="text-2xl font-bold text-secondary mb-1">&lt; 1h</div>
            <div className="text-sm font-medium text-foreground">Scheduled Calls</div>
            <div className="text-xs text-muted-foreground">Interview responses</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialConnect;