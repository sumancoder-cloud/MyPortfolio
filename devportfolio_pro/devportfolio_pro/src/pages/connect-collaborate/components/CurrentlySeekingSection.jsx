import React from 'react';
import Icon from '../../../components/AppIcon';

const CurrentlySeekingSection = () => {
  const seekingData = {
    roleTypes: [
      {
        title: 'Full Stack Developer',
        preference: 'Primary',
        description: 'React, Node.js, and modern web technologies',
        icon: 'Code2',
        color: 'from-primary to-primary/80'
      },
      {
        title: 'Frontend Developer',
        preference: 'Open to',
        description: 'React, TypeScript, and UI/UX focused roles',
        icon: 'Monitor',
        color: 'from-secondary to-secondary/80'
      },
      {
        title: 'Software Engineer',
        preference: 'Interested',
        description: 'Product development and system design',
        icon: 'Cpu',
        color: 'from-accent to-accent/80'
      }
    ],
    companyTypes: [
      {
        type: 'Startups',
        size: '10-100 employees',
        appeal: 'High growth potential and diverse responsibilities',
        icon: 'Rocket',
        preference: 'Preferred'
      },
      {
        type: 'Mid-size Tech',
        size: '100-1000 employees',
        appeal: 'Established processes with innovation opportunities',
        icon: 'Building2',
        preference: 'preferred'
      },
      {
        type: 'Enterprise',
        size: '1000+ employees',
        appeal: 'Large-scale systems and structured learning',
        icon: 'Building',
        preference: 'preferred'
      }
    ],
    workPreferences: [
      {
        type: 'Remote',
        description: 'Fully remote with occasional team meetups',
        availability: 'Available',
        icon: 'Home',
        color: 'text-trust'
      },
      {
        type: 'Hybrid',
        description: '2-3 days in office, flexible schedule',
        availability: 'Preferred',
        icon: 'MapPin',
        color: 'text-primary'
      },
      {
        type: 'On-site',
        description: 'Full-time office presence',
        availability: 'Location dependent',
        icon: 'Building2',
        color: 'text-secondary'
      }
    ],
    // timeline: {
    //   availability: 'Immediately available',
    //   noticePeriod: 'No notice period required',
    //   startDate: 'Can start within 1-2 weeks',
    //   commitment: 'Looking for long-term opportunities (2+ years)'
    // }
  };

  const getPreferenceColor = (preference) => {
    switch (preference?.toLowerCase()) {
      case 'primary': case'preferred':
        return 'text-trust bg-trust/10 border-trust/20';
      case 'open to': case'available':
        return 'text-primary bg-primary/10 border-primary/20';
      case 'interested': case'selective':
        return 'text-secondary bg-secondary/10 border-secondary/20';
      default:
        return 'text-muted-foreground bg-white/5 border-border';
    }
  };

  return (
    <div className="space-y-6">
      {/* Role Types */}
      <div className="glass-card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <Icon name="Target" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-xl font-display text-foreground">Role Preferences</h3>
            <p className="text-sm text-muted-foreground">Positions I'm actively seeking</p>
          </div>
        </div>

        <div className="space-y-4">
          {seekingData?.roleTypes?.map((role, index) => (
            <div key={index} className="p-4 border border-border rounded-lg hover:border-primary/50 hover:bg-white/5 transition-smooth">
              <div className="flex items-start space-x-4">
                <div className={`w-10 h-10 bg-gradient-to-br ${role?.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon name={role?.icon} size={20} color="white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-foreground">{role?.title}</h4>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPreferenceColor(role?.preference)}`}>
                      {role?.preference}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{role?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Company Types */}
      <div className="glass-card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center">
            <Icon name="Building2" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-xl font-display text-foreground">Company Preferences</h3>
            <p className="text-sm text-muted-foreground">Organization types and sizes</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {seekingData?.companyTypes?.map((company, index) => (
            <div key={index} className="p-4 border border-border rounded-lg hover:border-primary/50 hover:bg-white/5 transition-smooth">
              <div className="flex items-center space-x-3 mb-3">
                <Icon name={company?.icon} size={20} className="text-primary" />
                <div>
                  <h4 className="font-medium text-foreground">{company?.type}</h4>
                  <p className="text-xs text-muted-foreground">{company?.size}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{company?.appeal}</p>
              <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPreferenceColor(company?.preference)}`}>
                {company?.preference}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Work Preferences */}
      <div className="glass-card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg flex items-center justify-center">
            <Icon name="MapPin" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-xl font-display text-foreground">Work Arrangements</h3>
            <p className="text-sm text-muted-foreground">Location and schedule preferences</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {seekingData?.workPreferences?.map((work, index) => (
            <div key={index} className="p-4 border border-border rounded-lg text-center hover:border-primary/50 hover:bg-white/5 transition-smooth">
              <Icon name={work?.icon} size={24} className={`mx-auto mb-3 ${work?.color}`} />
              <h4 className="font-medium text-foreground mb-2">{work?.type}</h4>
              <p className="text-sm text-muted-foreground mb-3">{work?.description}</p>
              <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPreferenceColor(work?.availability)}`}>
                {work?.availability}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Timeline & Availability */}
      {/* <div className="glass-card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-trust to-trust/80 rounded-lg flex items-center justify-center">
            <Icon name="Calendar" size={20} color="white" />
          </div>
          {/* <div>
            <h3 className="text-xl font-display text-foreground">Availability Timeline</h3>
            <p className="text-sm text-muted-foreground">Current status and expectations</p>
          </div> */}
        {/* </div> */} 

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-trust/10 border border-trust/20 rounded-lg">
              <Icon name="CheckCircle" size={20} className="text-trust" />
              <div>
                <p className="font-medium text-foreground">{seekingData?.timeline?.availability}</p>
                <p className="text-sm text-muted-foreground">{seekingData?.timeline?.noticePeriod}</p>
              </div>
            </div>
            
          </div>
          
        </div> */}
      </div>
    // </div>
  );
};

export default CurrentlySeekingSection;