import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CertificationBadges = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const certifications = [
  {
    id: 1,
    name: 'Python Foundation Certification',
    issuer: 'Infosys Springboard',
    date: '2024-07-15',
    category: 'programming',
    level: 'Foundation',
    icon: 'Code',
    gradient: 'from-green-400 to-blue-500',
    verificationUrl: 'https://infyspringboard.onwingspan.com',
    skills: ['Python Basics', 'Data Types', 'Loops', 'Functions'],
    description: 'Fundamentals of Python programming including syntax, data structures, and logic building.',
    credentialId: 'INFY-PY-2024-001'
  },
  {
    id: 2,
    name: 'Prompt Engineering for AI',
    issuer: 'DeepLearning.AI / OpenAI',
    date: '2024-06-20',
    category: 'AI',
    level: 'Intermediate',
    icon: 'Bot',
    gradient: 'from-indigo-500 to-purple-500',
    verificationUrl: 'https://coursera.org/verify/prompt-cert-id',
    skills: ['Prompt Design', 'LLM Behavior', 'Few-shot Learning'],
    description: 'Understanding how to design, refine, and evaluate prompts to get optimal responses from large language models.',
    credentialId: 'PROMPT-ENGG-2024-002'
  },
  {
    id: 3,
    name: 'Career Edge – Knockdown the Lockdown',
    issuer: 'TCS iON',
    date: '2024-05-10',
    category: 'career',
    level: 'General',
    icon: 'Briefcase',
    gradient: 'from-orange-400 to-red-400',
    verificationUrl: 'https://learning.tcsionhub.in',
    skills: ['Communication', 'Soft Skills', 'Resume Building', 'Time Management'],
    description: 'Skill-building program focusing on personality development, corporate etiquette, and career readiness.',
    credentialId: 'TCS-EDGE-2024-003'
  },
  {
    id: 4,
    name: 'Internship - Full Stack Web Development',
    issuer: 'Addwise Tech Innovations',
    date: '2024-05-19',
    category: 'internship',
    level: 'Intermediate',
    icon: 'Laptop',
    gradient: 'from-blue-600 to-blue-800',
    verificationUrl: '',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'MongoDB', 'Node.js','Express.js'],
    description: 'Contributed to real-time web applications using the MERN stack, developed dashboards, and deployed full-stack features.',
    credentialId: 'INTERN-ADDWISE-2024-004'
  }
];


  const categories = [
    { id: 'all', name: 'All Certifications', icon: 'Award' },
    { id: 'programming', name: 'Programming', icon: 'Code' },
    { id: 'AI', name: 'AI/ML', icon: 'Brain' },
    { id: 'career', name: 'Career Development', icon: 'Briefcase' },
    { id: 'internship', name: 'Internships', icon: 'Laptop' }
  ];

  const filteredCertifications = selectedCategory === 'all' 
    ? certifications 
    : certifications?.filter(cert => cert?.category === selectedCategory);

  const getLevelColor = (level) => {
    switch (level) {
      case 'Foundation': return 'text-blue-400';
      case 'Intermediate': return 'text-yellow-400';
      case 'Advanced': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const handleVerify = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-br from-accent to-trust rounded-lg flex items-center justify-center">
          <Icon name="Award" size={18} color="white" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">Technical Certifications</h3>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories?.map((category) => (
          <Button
            key={category?.id}
            variant={selectedCategory === category?.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category?.id)}
            iconName={category?.icon}
            iconPosition="left"
            iconSize={16}
            className={selectedCategory === category?.id ? "btn-primary" : "btn-glass"}
          >
            {category?.name}
          </Button>
        ))}
      </div>
      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertifications?.map((cert, index) => (
          <motion.div
            key={cert?.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card-glass hover-lift hover-glow group"
          >
            {/* Badge Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert?.gradient} flex items-center justify-center shadow-glow`}>
                  <Icon name={cert?.icon} size={24} color="white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm leading-tight">{cert?.name}</h4>
                  <p className="text-xs text-muted-foreground">{cert?.issuer}</p>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-xs font-medium ${getLevelColor(cert?.level)}`}>
                  {cert?.level}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {cert?.description}
            </p>

            {/* Skills */}
            <div className="mb-4">
              <h5 className="text-xs font-medium text-foreground mb-2">Skills Covered</h5>
              <div className="flex flex-wrap gap-1">
                {cert?.skills?.slice(0, 3)?.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 text-xs bg-white/10 text-foreground rounded-md border border-white/20"
                  >
                    {skill}
                  </span>
                ))}
                {cert?.skills?.length > 3 && (
                  <span className="px-2 py-1 text-xs text-muted-foreground">
                    +{cert?.skills?.length - 3} more
                  </span>
                )}
              </div>
            </div>

            {/* Certification Details */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Issued:</span>
                <span className="text-foreground">{new Date(cert.date)?.toLocaleDateString()}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Credential ID:</span>
                <span className="text-foreground font-mono">{cert?.credentialId}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleVerify(cert?.verificationUrl)}
                iconName="ExternalLink"
                iconPosition="left"
                iconSize={14}
                className="btn-glass flex-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Verify
              </Button>
              <Button
                variant="ghost"
                size="icon"
                iconName="Share"
                iconSize={16}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>
        ))}
      </div>
      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="card-glass text-center">
          <div className="text-2xl font-bold text-foreground">{certifications?.length}</div>
          <div className="text-sm text-muted-foreground">Total Certifications</div>
        </div>
        <div className="card-glass text-center">
          <div className="text-2xl font-bold text-foreground">
            {certifications?.filter(c => c?.level === 'Advanced')?.length}
          </div>
          <div className="text-sm text-muted-foreground">Advanced Level</div>
        </div>
        <div className="card-glass text-center">
          <div className="text-2xl font-bold text-foreground">
            {new Set(certifications.map(c => c.issuer))?.size}
          </div>
          <div className="text-sm text-muted-foreground">Issuers</div>
        </div>
        <div className="card-glass text-center">
          <div className="text-2xl font-bold text-foreground">2024</div>
          <div className="text-sm text-muted-foreground">Latest Year</div>
        </div>
      </div>
    </div>
  );
};

export default CertificationBadges;