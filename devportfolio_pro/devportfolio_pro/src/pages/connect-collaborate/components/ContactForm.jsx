import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    projectType: '',
    timeline: '',
    message: '',
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const roleOptions = [
    { value: 'frontend', label: 'Frontend Developer' },
    { value: 'fullstack', label: 'Full Stack Developer' },
    { value: 'backend', label: 'Backend Developer' },
    { value: 'mobile', label: 'Mobile Developer' },
    { value: 'devops', label: 'DevOps Engineer' },
    { value: 'intern', label: 'Internship Opportunity' },
    { value: 'freelance', label: 'Freelance Project' },
    { value: 'collaboration', label: 'Open Source Collaboration' }
  ];

  const projectTypeOptions = [
    { value: 'web-app', label: 'Web Application' },
    { value: 'mobile-app', label: 'Mobile Application' },
    { value: 'api', label: 'API Development' },
    { value: 'ecommerce', label: 'E-commerce Platform' },
    { value: 'dashboard', label: 'Admin Dashboard' },
    { value: 'landing', label: 'Landing Page' },
    { value: 'other', label: 'Other' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (Within 1 week)' },
    { value: 'short', label: 'Short Term (1-4 weeks)' },
    { value: 'medium', label: 'Medium Term (1-3 months)' },
    { value: 'long', label: 'Long Term (3+ months)' },
    { value: 'ongoing', label: 'Ongoing Partnership' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Prepare form data for submission
      const submissionData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        subject: `${formData.role ? roleOptions.find(r => r.value === formData.role)?.label + ' - ' : ''}${formData.projectType ? projectTypeOptions.find(p => p.value === formData.projectType)?.label : 'General Inquiry'}`,
        message: formData.message,
        phone: formData.phone || '',
        projectType: formData.projectType ? projectTypeOptions.find(p => p.value === formData.projectType)?.label : '',
        timeline: formData.timeline ? timelineOptions.find(t => t.value === formData.timeline)?.label : '',
        budget: formData.budget || '',
        additionalInfo: {
          role: formData.role ? roleOptions.find(r => r.value === formData.role)?.label : '',
          newsletter: formData.newsletter,
          submittedAt: new Date().toISOString()
        }
      };

      // Send to email API
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          role: '',
          projectType: '',
          timeline: '',
          message: '',
          newsletter: false
        });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-card">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
          <Icon name="MessageSquare" size={20} color="white" />
        </div>
        <div>
          <h3 className="text-xl font-display text-foreground">Let's Connect</h3>
          <p className="text-sm text-muted-foreground">Start a conversation about opportunities</p>
        </div>
      </div>
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg flex items-center space-x-3">
          <Icon name="CheckCircle" size={20} color="var(--color-success)" />
          <div>
            <p className="text-success font-medium">Message sent successfully!</p>
            <p className="text-sm text-success/80">I'll get back to you within 24 hours.</p>
          </div>
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-lg flex items-center space-x-3">
          <Icon name="AlertCircle" size={20} color="var(--color-error)" />
          <div>
            <p className="text-error font-medium">Failed to send message</p>
            <p className="text-sm text-error/80">Please try again or use alternative contact methods.</p>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            name="name"
            placeholder="Your full name"
            value={formData?.name}
            onChange={handleInputChange}
            required
          />
          
          <Input
            label="Email Address"
            type="email"
            name="email"
            placeholder="your.email@company.com"
            value={formData?.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Company/Organization"
            type="text"
            name="company"
            placeholder="Your company name"
            value={formData?.company}
            onChange={handleInputChange}
          />
          
          <Select
            label="Role/Opportunity Type"
            placeholder="Select opportunity type"
            options={roleOptions}
            value={formData?.role}
            onChange={(value) => handleSelectChange('role', value)}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Project Type"
            placeholder="Select project type"
            options={projectTypeOptions}
            value={formData?.projectType}
            onChange={(value) => handleSelectChange('projectType', value)}
          />
          
          <Select
            label="Timeline"
            placeholder="Select timeline"
            options={timelineOptions}
            value={formData?.timeline}
            onChange={(value) => handleSelectChange('timeline', value)}
          />
        </div>

        <div>
          <label className="form-label">Message</label>
          <textarea
            name="message"
            placeholder="Tell me about your project, role requirements, or collaboration ideas..."
            value={formData?.message}
            onChange={handleInputChange}
            rows={5}
            className="form-input w-full resize-none"
            required
          />
        </div>

        <Checkbox
          label="Subscribe to my newsletter for development updates and insights"
          checked={formData?.newsletter}
          onChange={(e) => handleInputChange(e)}
          name="newsletter"
        />

        <Button
          type="submit"
          variant="default"
          fullWidth
          loading={isSubmitting}
          iconName="Send"
          iconPosition="right"
          className="btn-conversion"
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;