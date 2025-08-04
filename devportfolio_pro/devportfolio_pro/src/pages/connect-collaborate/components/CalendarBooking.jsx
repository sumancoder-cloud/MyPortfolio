import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CalendarBooking = () => {
  const [selectedMeetingType, setSelectedMeetingType] = useState('phone-screen');

  const meetingTypes = [
    {
      id: 'phone-screen',
      title: 'Phone Screen',
      duration: '30 minutes',
      description: 'Initial conversation about opportunities and mutual fit',
      icon: 'Phone',
      color: 'from-primary to-primary/80'
    },
    {
      id: 'technical-interview',
      title: 'Technical Interview',
      duration: '60 minutes',
      description: 'Deep dive into technical skills and problem-solving approach',
      icon: 'Code2',
      color: 'from-secondary to-secondary/80'
    },
    {
      id: 'portfolio-review',
      title: 'Portfolio Review',
      duration: '45 minutes',
      description: 'Walkthrough of projects and technical decisions',
      icon: 'FolderOpen',
      color: 'from-accent to-accent/80'
    },
    {
      id: 'coffee-chat',
      title: 'Coffee Chat',
      duration: '30 minutes',
      description: 'Casual conversation about career goals and industry insights',
      icon: 'Coffee',
      color: 'from-trust to-trust/80'
    }
  ];

  // Generate dynamic available slots for the next 7 days
  const generateAvailableSlots = () => {
    const slots = [];
    const today = new Date();
    const timeSlots = ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];
    
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends for professional meetings
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        timeSlots.forEach(time => {
          slots.push({
            date: date.toISOString().split('T')[0],
            time: time,
            timezone: 'IST',
            available: Math.random() > 0.3 // 70% chance of being available
          });
        });
      }
    }
    return slots.filter(slot => slot.available).slice(0, 8); // Show max 8 slots
  };

  const availableSlots = generateAvailableSlots();

  const handleBookMeeting = (meetingType) => {
    // Simulate calendar booking integration
    const calendlyUrl = `https://calendly.com/suman-tati2005${meetingType}`;
    window.open(calendlyUrl, '_blank');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="glass-card">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-conversion to-conversion/80 rounded-lg flex items-center justify-center">
          <Icon name="Calendar" size={20} color="white" />
        </div>
        <div>
          <h3 className="text-xl font-display text-foreground">Schedule a Meeting</h3>
          <p className="text-sm text-muted-foreground">Book time for interviews or discussions</p>
        </div>
      </div>
      {/* Current Availability Status */}
      <div className="mb-6 p-4 bg-trust/10 border border-trust/20 rounded-lg">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-trust rounded-full animate-pulse"></div>
          <div>
            <p className="text-trust font-medium">Available for interviews</p>
            <p className="text-sm text-muted-foreground">
              Timezone: IST (UTC+5:30) • Response time: Within 24 hours
            </p>
          </div>
        </div>
      </div>
      {/* Meeting Types */}
      <div className="space-y-4 mb-6">
        <h4 className="font-medium text-foreground">Choose Meeting Type</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {meetingTypes?.map((meeting) => (
            <div
              key={meeting?.id}
              className={`p-4 rounded-lg border transition-smooth cursor-pointer ${
                selectedMeetingType === meeting?.id
                  ? 'border-primary bg-primary/10' :'border-border hover:border-primary/50 hover:bg-white/5'
              }`}
              onClick={() => setSelectedMeetingType(meeting?.id)}
            >
              <div className="flex items-start space-x-3">
                <div className={`w-8 h-8 bg-gradient-to-br ${meeting?.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon name={meeting?.icon} size={16} color="white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h5 className="font-medium text-foreground">{meeting?.title}</h5>
                    <span className="text-xs text-muted-foreground">{meeting?.duration}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{meeting?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Quick Availability Preview */}
      <div className="mb-6">
        <h4 className="font-medium text-foreground mb-3">Next Available Slots</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {availableSlots?.slice(0, 8)?.map((slot, index) => (
            <div
              key={index}
              className="p-2 text-center border border-border rounded-lg hover:border-primary/50 hover:bg-white/5 transition-smooth cursor-pointer"
            >
              <div className="text-xs text-muted-foreground">{formatDate(slot?.date)}</div>
              <div className="text-sm font-medium text-foreground">{slot?.time}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Calendar Integration */}
      <div className="space-y-4">
        <a href="https://calendly.com/suman-tati2005">
        <Button
          variant="default"
          fullWidth
          onClick={() => handleBookMeeting(selectedMeetingType)}
          iconName="ExternalLink"
          iconPosition="right"
          className="btn-conversion"
        >
          Book {meetingTypes?.find(m => m?.id === selectedMeetingType)?.title}
        </Button></a>

        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Powered by Calendly • Automatic timezone detection • Calendar invites included
          </p>
        </div>
      </div>
      {/* Interview Preferences */}
      <div className="mt-6 pt-6 border-t border-border">
        <h4 className="font-medium text-foreground mb-3">Interview Preferences</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-3 bg-white/5 rounded-lg">
            <Icon name="Video" size={20} className="mx-auto mb-2 text-primary" />
            <p className="text-sm font-medium text-foreground">Video Calls</p>
            <p className="text-xs text-muted-foreground">Google Meet, Zoom</p>
          </div>
          <div className="text-center p-3 bg-white/5 rounded-lg">
            <Icon name="Code2" size={20} className="mx-auto mb-2 text-secondary" />
            <p className="text-sm font-medium text-foreground">Live Coding</p>
            <p className="text-xs text-muted-foreground">CodePen, Repl.it</p>
          </div>
          <div className="text-center p-3 bg-white/5 rounded-lg">
            <Icon name="FileText" size={20} className="mx-auto mb-2 text-accent" />
            <p className="text-sm font-medium text-foreground">Take-home</p>
            <p className="text-xs text-muted-foreground">GitHub projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarBooking;