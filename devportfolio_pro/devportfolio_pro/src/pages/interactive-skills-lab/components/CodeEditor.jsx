import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CodeEditor = ({ selectedSkill, onClose }) => {
  const [activeTab, setActiveTab] = useState('code');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const codeExamples = {
    'React': {
      code: `import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">
        Interactive Counter
      </h2>
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -
        </button>
        <span className="text-2xl font-bold">{count}</span>
        <button 
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;`,
      output: `<div class="p-4 bg-white rounded-lg shadow">
  <h2 class="text-xl font-bold mb-4">Interactive Counter</h2>
  <div class="flex items-center space-x-4">
    <button class="px-4 py-2 bg-red-500 text-white rounded">-</button>
    <span class="text-2xl font-bold">0</span>
    <button class="px-4 py-2 bg-blue-500 text-white rounded">+</button>
  </div>
</div>`
    },
    'JavaScript': {
      code: `// Advanced JavaScript Concepts Demo
class DataProcessor {
  constructor(data) {
    this.data = data;
  }
  
  // Using modern ES6+ features
  async processData() {
    const results = await Promise.all(
      this.data.map(async (item) => {
        const processed = await this.transform(item);
        return { ...item, processed };
      })
    );
    
    return results.filter(item => item.processed);
  }
  
  transform(item) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(item.value * 2);
      }, 100);
    });
  }
}

// Usage example
const processor = new DataProcessor([
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 30 }
]);

processor.processData().then(console.log);`,
      output: `[
  { id: 1, value: 10, processed: 20 },
  { id: 2, value: 20, processed: 40 },
  { id: 3, value: 30, processed: 60 }
]`
    },
    'Python': {
      code: `# Python Data Analysis Example
import pandas as pd
import numpy as np
from datetime import datetime

class DataAnalyzer:
    def __init__(self, data):
        self.df = pd.DataFrame(data)
    
    def analyze_trends(self):
        """Analyze data trends and patterns"""
        summary = {
            'total_records': len(self.df),
            'avg_value': self.df['value'].mean(),
            'max_value': self.df['value'].max(),
            'trend': self.calculate_trend()
        }
        return summary
    
    def calculate_trend(self):
        """Calculate trend direction"""
        if len(self.df) < 2:
            return 'insufficient_data'
        
        slope = np.polyfit(range(len(self.df)), self.df['value'], 1)[0]
        return 'increasing' if slope > 0 else 'decreasing'

# Example usage
data = [
    {'date': '2024-01-01', 'value': 100},
    {'date': '2024-01-02', 'value': 120},
    {'date': '2024-01-03', 'value': 140}
]

analyzer = DataAnalyzer(data)
result = analyzer.analyze_trends()
print(result)`,
      output: `{
  'total_records': 3,
  'avg_value': 120.0,
  'max_value': 140,
  'trend': 'increasing'
}`
    },
    'Node.js': {
      code: `// Express.js API with MongoDB Integration
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.sendStatus(401);
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// API Routes
app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/users', authenticateToken, async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
      output: `Server running on port 3000

POST /api/users
{
  "message": "User created successfully"
}

GET /api/users
[
  {
    "_id": "64a7b8c9d1e2f3g4h5i6j7k8",
    "username": "john_doe",
    "email": "john@example.com",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
]`
    }
  };

  useEffect(() => {
    if (selectedSkill && codeExamples?.[selectedSkill?.name]) {
      setCode(codeExamples?.[selectedSkill?.name]?.code);
      setOutput(codeExamples?.[selectedSkill?.name]?.output);
    }
  }, [selectedSkill]);

  const handleRunCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setActiveTab('output');
    }, 1500);
  };

  const tabs = [
    { id: 'code', label: 'Code', icon: 'Code' },
    { id: 'output', label: 'Output', icon: 'Terminal' },
    { id: 'docs', label: 'Documentation', icon: 'BookOpen' }
  ];

  return (
    <AnimatePresence>
      {selectedSkill && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass-card w-full max-w-6xl h-[80vh] flex flex-col"
            onClick={(e) => e?.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${selectedSkill?.gradient} flex items-center justify-center`}>
                  <Icon name={selectedSkill?.icon} size={20} color="white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">{selectedSkill?.name} Interactive Demo</h2>
                  <p className="text-sm text-muted-foreground">Live code editor and execution environment</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRunCode}
                  loading={isRunning}
                  iconName="Play"
                  iconPosition="left"
                  iconSize={16}
                  className="btn-glass"
                >
                  Run Code
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  iconName="X"
                  iconSize={20}
                />
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center space-x-1 px-6 py-3 border-b border-border">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                    activeTab === tab?.id
                      ? 'bg-primary/20 text-primary border border-primary/30' :'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span>{tab?.label}</span>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden">
              {activeTab === 'code' && (
                <div className="h-full p-6">
                  <div className="h-full bg-slate-900 rounded-lg border border-border overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-border">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-xs text-slate-400">{selectedSkill?.name?.toLowerCase()}.{selectedSkill?.name === 'Python' ? 'py' : selectedSkill?.name === 'JavaScript' ? 'js' : 'jsx'}</span>
                    </div>
                    <div className="p-4 h-full overflow-auto">
                      <pre className="text-sm text-slate-300 font-code leading-relaxed">
                        <code>{code}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'output' && (
                <div className="h-full p-6">
                  <div className="h-full bg-slate-900 rounded-lg border border-border overflow-hidden">
                    <div className="flex items-center px-4 py-2 bg-slate-800 border-b border-border">
                      <Icon name="Terminal" size={16} className="text-green-400 mr-2" />
                      <span className="text-sm text-slate-300">Output</span>
                    </div>
                    <div className="p-4 h-full overflow-auto">
                      <pre className="text-sm text-green-400 font-code leading-relaxed">
                        <code>{output}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'docs' && (
                <div className="h-full p-6 overflow-auto">
                  <div className="prose prose-invert max-w-none">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      {selectedSkill?.name} Documentation
                    </h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>{selectedSkill?.description}</p>
                      <div>
                        <h4 className="text-foreground font-medium mb-2">Key Features:</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {selectedSkill?.technologies?.map((tech, index) => (
                            <li key={index}>{tech}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-foreground font-medium mb-2">Experience Level:</h4>
                        <p>{selectedSkill?.experience} of hands-on development experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CodeEditor;