import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: `Suman shows great potential in full-stack development and consistently delivers quality work. His dedication to learning new technologies and implementing best practices is commendable. He has been a valuable addition to our development team.`,
      author: "Technical Mentor",
      role: "Senior Developer",
      company: "Addwise Tech Innovations",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      project: "Full Stack Web Development",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      duration: "8+ months"
    },
    {
      id: 2,
      quote: `Suman's AI projects demonstrate strong technical understanding and practical application of computer vision concepts. His drowsiness detection system shows excellent implementation of OpenCV and machine learning principles.`,
      author: "Project Reviewer",
      role: "AI/ML Engineer",
      company: "Open Source Community",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      project: "AI Drowsiness Detection",
      technologies: ["Python", "OpenCV", "dlib", "Flask"],
      duration: "Personal Project"
    },
    {
      id: 3,
      quote: `The GPS tracking application with QR code integration shows innovative thinking and solid JavaScript fundamentals. The implementation is clean and the user experience is well thought out.`,
      author: "Code Reviewer",
      role: "Frontend Developer",
      company: "Developer Community",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      rating: 5,
      project: "GPS Tracking with QR Code",
      technologies: ["JavaScript", "HTML5", "Geolocation API"],
      duration: "Personal Project"
    },
    {
      id: 4,
      quote: `Suman's TypeScript implementation in the TO-DO application demonstrates good understanding of type safety and modern development practices. The code quality and attention to detail are impressive.`,
      author: "Technical Reviewer",
      role: "Full Stack Developer",
      company: "GitHub Community",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5,
      project: "TO-DO List Application",
      technologies: ["TypeScript", "HTML5", "CSS3"],
      duration: "Personal Project"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[activeTestimonial];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}
      />
    ));
  };

  return (
    <div className="glass-card">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-trust to-secondary rounded-lg flex items-center justify-center">
            <Icon name="MessageSquare" size={20} color="white" />
          </div>
          <div>
            <h2 className="text-2xl font-display text-foreground">Professional Testimonials</h2>
            <p className="text-muted-foreground">What colleagues and mentors say about my work</p>
          </div>
        </div>

        {/* Testimonial Counter */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">
              {activeTestimonial + 1} of {testimonials?.length}
            </span>
            <div className="flex space-x-1">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-smooth ${
                    index === activeTestimonial ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              iconName="ChevronLeft"
              iconSize={20}
              className="w-8 h-8"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              iconName="ChevronRight"
              iconSize={20}
              className="w-8 h-8"
            />
          </div>
        </div>
      </div>
      <div className="p-6">
        {/* Main Testimonial */}
        <div className="space-y-6 animate-fade-in" key={currentTestimonial?.id}>
          {/* Quote */}
          <div className="relative">
            <Icon 
              name="Quote" 
              size={32} 
              className="absolute -top-2 -left-2 text-primary/30" 
            />
            <blockquote className="text-lg text-muted-foreground leading-relaxed pl-8 italic">
              "{currentTestimonial?.quote}"
            </blockquote>
          </div>

          {/* Author Info */}
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border flex-shrink-0">
              <Image
                src={currentTestimonial?.avatar}
                alt={currentTestimonial?.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-foreground text-lg">
                    {currentTestimonial?.author}
                  </h4>
                  <p className="text-primary font-medium">{currentTestimonial?.role}</p>
                  <p className="text-sm text-muted-foreground">{currentTestimonial?.company}</p>
                </div>
                <div className="flex items-center space-x-1">
                  {renderStars(currentTestimonial?.rating)}
                </div>
              </div>

              {/* Project Details */}
              <div className="bg-surface border border-border rounded-lg p-4 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <Icon name="FolderOpen" size={16} className="text-primary" />
                      <span className="text-sm font-medium text-foreground">Project</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{currentTestimonial?.project}</p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <Icon name="Clock" size={16} className="text-secondary" />
                      <span className="text-sm font-medium text-foreground">Duration</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{currentTestimonial?.duration}</p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <Icon name="Code" size={16} className="text-trust" />
                      <span className="text-sm font-medium text-foreground">Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {currentTestimonial?.technologies?.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-muted border border-border rounded text-xs text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Testimonials Summary */}
        <div className="mt-8 pt-6 border-t border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Icon name="Users" size={20} className="mr-2 text-primary" />
            Testimonial Summary
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">
                {testimonials?.length}
              </div>
              <div className="text-sm text-muted-foreground">Professional References</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-trust mb-1">
                {(testimonials?.reduce((acc, t) => acc + t?.rating, 0) / testimonials?.length)?.toFixed(1)}
              </div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-1">
                100%
              </div>
              <div className="text-sm text-muted-foreground">Would Recommend</div>
            </div>
          </div>

          {/* Quick Access to All Testimonials */}
          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {testimonials?.map((testimonial, index) => (
                <button
                  key={testimonial?.id}
                  onClick={() => setActiveTestimonial(index)}
                  className={`p-3 rounded-lg border transition-smooth text-left ${
                    index === activeTestimonial
                      ? 'border-primary bg-primary/10' :'border-border bg-surface hover:bg-surface/80'
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <Image
                        src={testimonial?.avatar}
                        alt={testimonial?.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground truncate">
                      {testimonial?.author}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">
                    {testimonial?.role}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;