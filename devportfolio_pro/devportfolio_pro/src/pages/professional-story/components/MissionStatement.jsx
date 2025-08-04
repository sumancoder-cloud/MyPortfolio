import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionStatement = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-secondary/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-accent/20 rounded-full"></div>
      </div>

      <div className="relative glass-card p-8 lg:p-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-6 shadow-glow">
              <Icon name="Target" size={28} color="white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-display text-gradient mb-4">
              My Mission as a Developer
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          {/* Mission Statement */}
          <div className="space-y-6">
            <p className="text-xl lg:text-2xl text-foreground font-medium leading-relaxed">
              "Building solutions that matter, not just code that works"
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              I believe technology should enhance human experiences, solve real problems, and create meaningful impact. 
              My journey as a software developer is driven by curiosity, powered by continuous learning, and guided by 
              the principle that great code is not just functional—it's elegant, maintainable, and purposeful.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {/* Innovation */}
              <div className="glass p-6 rounded-lg hover-lift transition-smooth">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Lightbulb" size={24} color="var(--color-primary)" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Embracing new technologies and creative approaches to solve complex challenges
                </p>
              </div>

              {/* Quality */}
              <div className="glass p-6 rounded-lg hover-lift transition-smooth">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Award" size={24} color="var(--color-secondary)" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Writing clean, maintainable code that stands the test of time and scale
                </p>
              </div>

              {/* Impact */}
              <div className="glass p-6 rounded-lg hover-lift transition-smooth">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Users" size={24} color="var(--color-accent)" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Creating solutions that make a real difference in people's lives and businesses
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-6 glass rounded-lg border border-primary/20">
            <p className="text-foreground font-medium mb-2">Ready to contribute, eager to learn, excited to grow</p>
            <p className="text-sm text-muted-foreground">
              Let's build something amazing together
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;