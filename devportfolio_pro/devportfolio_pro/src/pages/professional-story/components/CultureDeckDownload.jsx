import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CultureDeckDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadCount, setDownloadCount] = useState(247);

  const cultureDeckFeatures = [
    {
      title: "Work Style Analysis",
      description: "Detailed breakdown of my preferred work environments, communication patterns, and productivity rhythms",
      icon: "BarChart3"
    },
    {
      title: "Team Collaboration",
      description: "Examples of successful team projects, conflict resolution approaches, and mentoring experiences",
      icon: "Users"
    },
    {
      title: "Growth Mindset",
      description: "Learning philosophy, adaptation strategies, and continuous improvement methodologies",
      icon: "TrendingUp"
    },
    {
      title: "Values & Principles",
      description: "Core values that guide my professional decisions and ethical considerations in development",
      icon: "Heart"
    },
    {
      title: "Communication Style",
      description: "Preferred communication channels, feedback mechanisms, and presentation approaches",
      icon: "MessageCircle"
    },
    {
      title: "Innovation Approach",
      description: "How I approach creative problem-solving, experimentation, and technology adoption",
      icon: "Lightbulb"
    }
  ];

  const testimonials = [
    // {
    //   name: "Sarah Chen",
    //   role: "Senior Developer",
    //   company: "TechCorp Solutions",
    //   content: "T Suman\'s culture deck gave us incredible insights into his work style. It made the interview process much more focused and helped us understand how he\'d fit with our team.",
    //   avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    // },
    // {
    //   name: "Michael Rodriguez",
    //   role: "Engineering Manager",
    //   company: "InnovateLabs",
    //   content: "The depth of self-awareness shown in this culture deck is impressive. It demonstrates maturity and thoughtfulness that we value in our team members.",
    //   avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    // }
  ];

  const handleDownload = async () => {
    setIsDownloading(true);
    
    // Simulate download process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Create a PDF download using existing portfolio PDF
    const link = document.createElement('a');
    link.href = '/assets/downloads/portfolio-pdf.pdf';
    link.download = 'T-Suman-Yadav-Culture-Deck.pdf';
    link?.click();
    
    setDownloadCount(prev => prev + 1);
    setIsDownloading(false);
  };

  return (
    <div>
      
    </div>
    // <div className="space-y-8">
    //   {/* Header */}
    //   <div className="text-center">
    //     <h2 className="text-3xl lg:text-4xl font-display text-gradient mb-4">
    //       Culture Deck
    //     </h2>
    //     <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
    //       A comprehensive guide to understanding my work style, values, and team collaboration approach
    //     </p>
    //   </div>
    //   {/* Main Download Section */}
    //   <div className="glass-card p-8 lg:p-12">
    //     <div className="max-w-4xl mx-auto">
    //       <div className="grid lg:grid-cols-2 gap-8 items-center">
    //         {/* Left Side - Preview */}
    //         <div className="space-y-6">
    //           <div className="relative">
    //             <div className="glass p-6 rounded-lg border border-primary/20 shadow-glow">
    //               <div className="flex items-center space-x-4 mb-4">
    //                 <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
    //                   <Icon name="FileText" size={24} color="white" />
    //                 </div>
    //                 <div>
    //                   <h3 className="text-xl font-display text-foreground">Culture Deck 2025</h3>
    //                   <p className="text-sm text-muted-foreground">T Suman Yadav • 24 pages</p>
    //                 </div>
    //               </div>
                  
    //               <div className="space-y-3">
    //                 <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
    //                   <div className="h-full bg-gradient-to-r from-primary to-secondary w-3/4 rounded-full"></div>
    //                 </div>
    //                 <div className="flex justify-between text-xs text-muted-foreground">
    //                   <span>Work Style Analysis</span>
    //                   <span>75% Complete</span>
    //                 </div>
    //               </div>
    //             </div>
                
    //             {/* Floating Stats */}
    //             <div className="absolute -top-4 -right-4 glass px-3 py-2 rounded-full border border-accent/30">
    //               <div className="flex items-center space-x-2">
    //                 <Icon name="Download" size={14} color="var(--color-accent)" />
    //                 <span className="text-xs text-accent font-medium">{downloadCount} downloads</span>
    //               </div>
    //             </div>
    //           </div>

    //           {/* Download Button */}
    //           <div className="text-center">
    //             <Button
    //               variant="default"
    //               size="lg"
    //               onClick={handleDownload}
    //               loading={isDownloading}
    //               iconName="Download"
    //               iconPosition="left"
    //               className="btn-conversion shadow-conversion px-8"
    //             >
    //               {isDownloading ? 'Preparing Download...' : 'Download Culture Deck'}
    //             </Button>
                
    //             <p className="text-xs text-muted-foreground mt-2">
    //               PDF • 2.4 MB • Updated January 2025
    //             </p>
    //           </div>
    //         </div>

            /* Right Side - Features */
            // <div className="space-y-4">
            //   <h3 className="text-xl font-display text-foreground mb-6">What's Inside</h3>
              
            //   {cultureDeckFeatures?.map((feature, index) => (
            //     <div key={index} className="flex items-start space-x-3 p-3 glass rounded-lg hover-lift transition-smooth">
            //       <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
            //         <Icon name={feature?.icon} size={16} color="var(--color-primary)" />
            // //       </div>
            // //       <div>
            // //         <h4 className="font-semibold text-foreground text-sm mb-1">{feature?.title}</h4>
            // //         <p className="text-xs text-muted-foreground leading-relaxed">{feature?.description}</p>
            // //       </div>
            // //     </div>
            //   ))}
            //{/* </div>
        //   </div>
        // </div>
     
      /* Testimonials */
    /* <div className="glass-card p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display text-foreground mb-2">What Hiring Managers Say</h3>
            <p className="text-muted-foreground">Feedback from professionals who've reviewed my culture deck</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials?.map((testimonial, index) => (
              <div key={index} className="glass p-6 rounded-lg hover-lift transition-smooth">
                <div className="flex items-start space-x-4">
                  <img
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="flex-1">
                    <div className="mb-3">
                      <h4 className="font-semibold text-foreground">{testimonial?.name}</h4>
                      <p className="text-sm text-primary">{testimonial?.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial?.company}</p>
                    </div>
                    <blockquote className="text-sm text-muted-foreground italic leading-relaxed">
                      "{testimonial?.content}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      Additional Resources
      <div className="glass-card p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display text-foreground mb-2">Additional Resources</h3>
            <p className="text-muted-foreground">More materials to help you understand my professional approach</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-lg hover-lift transition-smooth text-center">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="FileUser" size={20} color="var(--color-secondary)" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Resume</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Comprehensive overview of my technical skills and experience
              </p>
              <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
                Download PDF
              </Button>
            </div>

            <div className="glass p-6 rounded-lg hover-lift transition-smooth text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Github" size={20} color="var(--color-accent)" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Portfolio</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Live projects and code samples demonstrating my capabilities
              </p>
              <Button variant="outline" size="sm" iconName="ExternalLink" iconPosition="left">
                View Projects
              </Button>
            </div>

            <div className="glass p-6 rounded-lg hover-lift transition-smooth text-center">
              <div className="w-12 h-12 bg-conversion/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" size={20} color="var(--color-conversion)" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Interview</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Schedule a conversation to discuss opportunities
              </p>
              <Button variant="default" size="sm" iconName="Calendar" iconPosition="left" className="btn-conversion">
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </div>*/
   //</div> 
  );
 };

export default CultureDeckDownload;