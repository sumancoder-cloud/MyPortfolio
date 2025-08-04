const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Email configuration with your credentials
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: 'suman.tati2005@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'your-app-password-here', // Replace with your actual app password
  },
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message, phone, company, projectType, budget, timeline } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required fields.' 
      });
    }

    // Email content for you
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #007bff; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        </div>

        <div style="background: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #007bff; margin-top: 0;">Project Details</h3>
          <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
          <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
          <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
          <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
        </div>
        
        <div style="background: #e9ecef; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #007bff; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #dee2e6; margin: 30px 0;">
        <p style="color: #6c757d; font-size: 12px; text-align: center;">
          This email was sent from your portfolio contact form on ${new Date().toLocaleString()}
        </p>
      </div>
    `;

    // Email options for you
    const mailOptions = {
      from: 'suman.tati2005@gmail.com',
      to: 'suman.tati2005@gmail.com',
      subject: `Portfolio Contact: ${subject || 'New Message from ' + name}`,
      html: emailContent,
      replyTo: email
    };

    // Send email to you
    await transporter.sendMail(mailOptions);

    // Auto-reply to the sender
    const autoReplyContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #007bff;">Thank you for contacting me!</h2>
        
        <p>Hi ${name},</p>
        
        <p>Thank you for reaching out through my portfolio. I have received your message and will get back to you as soon as possible.</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #007bff; margin-top: 0;">Your Message Summary</h3>
          <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #007bff;">${message}</p>
        </div>
        
        <p>I typically respond within 24-48 hours. If your inquiry is urgent, please feel free to reach out to me directly.</p>
        
        <div style="background: #007bff; color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0;"><strong>Best regards,</strong></p>
          <p style="margin: 5px 0 0 0;">Suman Yadav</p>
          <p style="margin: 0; font-size: 14px;">Full Stack Developer</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #dee2e6; margin: 30px 0;">
        <p style="color: #6c757d; font-size: 12px; text-align: center;">
          This is an automated response. Please do not reply to this email.
        </p>
      </div>
    `;

    const autoReplyOptions = {
      from: 'suman.tati2005@gmail.com',
      to: email,
      subject: 'Thank you for contacting me - Suman Yadav',
      html: autoReplyContent
    };

    await transporter.sendMail(autoReplyOptions);

    res.json({ 
      success: true, 
      message: 'Message sent successfully! You will receive a confirmation email shortly.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.',
      error: error.message 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    message: 'Email server is running'
  });
});

app.listen(port, () => {
  console.log(`Email server is running at http://localhost:${port}`);
  console.log('Make sure to set your EMAIL_PASSWORD environment variable or update the code with your app password');
});

module.exports = app;