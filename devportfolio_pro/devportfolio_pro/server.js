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

app.post('/api/contact', (req, res) => {
  const { name, email, message, company, subject, phone, projectType, timeline, budget, additionalInfo } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Create detailed email content
  let emailContent = `You have received a new message from your portfolio contact form.\n\n`;
  emailContent += `Name: ${name}\n`;
  emailContent += `Email: ${email}\n`;
  if (company) emailContent += `Company: ${company}\n`;
  if (phone) emailContent += `Phone: ${phone}\n`;
  if (projectType) emailContent += `Project Type: ${projectType}\n`;
  if (timeline) emailContent += `Timeline: ${timeline}\n`;
  if (budget) emailContent += `Budget: ${budget}\n`;
  emailContent += `\nMessage:\n${message}\n`;
  
  if (additionalInfo) {
    emailContent += `\nAdditional Information:\n`;
    if (additionalInfo.role) emailContent += `Role: ${additionalInfo.role}\n`;
    emailContent += `Submitted At: ${additionalInfo.submittedAt}\n`;
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'suman.tati2005@gmail.com',
    replyTo: email,
    subject: subject || `New Portfolio Contact Form Message from ${name}`,
    text: emailContent,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ success: false, message: 'An error occurred while sending the message. Please try again later.' });
    }
    console.log('Email sent successfully: ' + info.response);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});