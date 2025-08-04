import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const SkillsPreview = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      id: 'python',
      name: 'Python',
      icon: 'Code2',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      demo: {
        title: 'AI Drowsiness Detection',
        code: `import cv2
import dlib
from scipy.spatial import distance

class DrowsinessDetector:
    def __init__(self):
        self.detector = dlib.get_frontal_face_detector()
        self.predictor = dlib.shape_predictor("shape_predictor_68_face_landmarks.dat")
        self.EAR_THRESHOLD = 0.25
        
    def eye_aspect_ratio(self, eye):
        A = distance.euclidean(eye[1], eye[5])
        B = distance.euclidean(eye[2], eye[4])
        C = distance.euclidean(eye[0], eye[3])
        ear = (A + B) / (2.0 * C)
        return ear
        
    def detect_drowsiness(self, frame):
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = self.detector(gray)
        
        for face in faces:
            landmarks = self.predictor(gray, face)
            # Extract eye coordinates and calculate EAR
            left_eye = self.extract_eye_points(landmarks, "left")
            right_eye = self.extract_eye_points(landmarks, "right")
            
            left_ear = self.eye_aspect_ratio(left_eye)
            right_ear = self.eye_aspect_ratio(right_eye)
            ear = (left_ear + right_ear) / 2.0
            
            if ear < self.EAR_THRESHOLD:
                return True  # Drowsiness detected
        return False`,
        preview: (
          <div className="glass-card p-4 rounded-lg">
            <h4 className="font-semibold text-blue-400">Drowsiness Detection</h4>
            <p className="text-sm text-muted-foreground mt-1">AI • Computer Vision • Safety System</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Detection Accuracy</span>
              <span className="text-blue-400 font-semibold">95%</span>
            </div>
            <div className="mt-2 w-full h-2 bg-blue-400/20 rounded-full">
              <motion.div
                className="h-full bg-blue-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '95%' }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </div>
          </div>
        )
      }
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: 'Zap',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      demo: {
        title: 'GPS Tracking System',
        code: `class GPSTracker {
  constructor() {
    this.watchId = null;
    this.locationHistory = [];
    this.isTracking = false;
  }
  
  startTracking() {
    if (navigator.geolocation) {
      this.watchId = navigator.geolocation.watchPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            timestamp: new Date(),
            accuracy: position.coords.accuracy
          };
          
          this.locationHistory.push(location);
          this.updateMap(location);
          this.saveToStorage();
        },
        (error) => {
          console.error('GPS Error:', error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
      this.isTracking = true;
    }
  }
  
  generateQRCode(deviceId) {
    return QRCode.toDataURL(deviceId);
  }
}`,
        preview: (
          <div className="glass-card p-4 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-yellow-400">GPS Tracking</h4>
              <Icon name="MapPin" size={16} className="text-yellow-400" />
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-yellow-400/20 p-2 rounded">
                <div className="text-yellow-400 font-medium">Accuracy</div>
                <div className="text-foreground">±3m</div>
              </div>
              <div className="bg-yellow-400/20 p-2 rounded">
                <div className="text-yellow-400 font-medium">QR Success</div>
                <div className="text-foreground">100%</div>
              </div>
            </div>
          </div>
        )
      }
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      icon: 'Code',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      demo: {
        title: 'TO-DO List Application',
        code: `interface Task {
  id: string;
  title: string;
  description?: string;
  priority: 'high' | 'medium' | 'low';
  dueDate?: Date;
  completed: boolean;
  category: string;
}

class TaskManager {
  private tasks: Task[] = [];
  private storage: Storage;
  
  constructor() {
    this.storage = localStorage;
    this.loadTasks();
  }
  
  addTask(task: Omit<Task, 'id'>): Task {
    const newTask: Task = {
      ...task,
      id: this.generateId(),
    };
    
    this.tasks.push(newTask);
    this.saveTasks();
    return newTask;
  }
  
  updateTask(id: string, updates: Partial<Task>): Task | null {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) return null;
    
    this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updates };
    this.saveTasks();
    return this.tasks[taskIndex];
  }
}`,
        preview: (
          <div className="glass-card p-4 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-blue-500">Task Manager</h4>
              <Icon name="CheckSquare" size={16} className="text-blue-500" />
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Type Safety:</span>
                <span className="text-green-400">100%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Code Quality:</span>
                <span className="text-blue-500">Excellent</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Maintainability:</span>
                <span className="text-green-400">High</span>
              </div>
            </div>
          </div>
        )
      }
    },
    {
      id: 'php',
      name: 'PHP',
      icon: 'Server',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      demo: {
        title: 'User Authentication System',
        code: `<?php
class UserAuth {
    private $db;
    private $pepper = 'your-secret-pepper';
    
    public function __construct($database) {
        $this->db = $database;
    }
    
    public function register($email, $password, $username) {
        // Validate input
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new Exception('Invalid email format');
        }
        
        // Hash password with bcrypt
        $hashedPassword = password_hash($password . $this->pepper, PASSWORD_BCRYPT);
        
        // Prepare statement to prevent SQL injection
        $stmt = $this->db->prepare(
            "INSERT INTO users (email, password, username, created_at) VALUES (?, ?, ?, NOW())"
        );
        
        if ($stmt->execute([$email, $hashedPassword, $username])) {
            $this->sendVerificationEmail($email);
            return true;
        }
        return false;
    }
    
    public function login($email, $password) {
        $stmt = $this->db->prepare("SELECT * FROM users WHERE email = ? AND verified = 1");
        $stmt->execute([$email]);
        $user = $stmt->fetch();
        
        if ($user && password_verify($password . $this->pepper, $user['password'])) {
            session_start();
            $_SESSION['user_id'] = $user['id'];
            return true;
        }
        return false;
    }
}`,
        preview: (
          <div className="glass-card p-4 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-purple-400">Auth System</h4>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Security:</span>
                <span className="text-green-400">bcrypt + Salt</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">SQL Injection:</span>
                <span className="text-green-400">Protected</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Email Verification:</span>
                <span className="text-purple-400">Enabled</span>
              </div>
            </div>
          </div>
        )
      }
    },
    {
      id: 'react',
      name: 'React.js',
      icon: 'Code',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      demo: {
        title: 'MERN Stack Development',
        code: `import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/api/tasks');
      setTasks(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setLoading(false);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    try {
      const response = await axios.post('/api/tasks', {
        title: newTask,
        completed: false,
        createdAt: new Date()
      });
      
      setTasks([...tasks, response.data]);
      setNewTask('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div className="task-dashboard">
      <h2>MERN Task Manager</h2>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task..."
        />
        <button type="submit">Add Task</button>
      </form>
      
      {loading ? (
        <div>Loading tasks...</div>
      ) : (
        <div className="tasks-list">
          {tasks.map(task => (
            <div key={task._id} className="task-item">
              {task.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};`,
        preview: (
          <div className="glass-card p-4 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-cyan-400">MERN Stack</h4>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">MongoDB:</span>
                <span className="text-green-400">Connected</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Express API:</span>
                <span className="text-cyan-400">Running</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">React Frontend:</span>
                <span className="text-cyan-400">Active</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Node.js:</span>
                <span className="text-green-400">v18.x</span>
              </div>
            </div>
          </div>
        )
      }
    }
  ];

  const handleSkillClick = (skillId) => {
    // Navigate to skills lab with specific skill focused
    window.location.href = `/interactive-skills-lab?focus=${skillId}`;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display text-gradient mb-6">
            Interactive Skills Lab
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just read about my skills—experience them. Hover over each technology to see live demonstrations and code examples.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {skills?.map((skill, index) => (
            <motion.div
              key={skill?.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredSkill(skill?.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <motion.div
                className={`glass-card p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  hoveredSkill === skill?.id ? 'scale-105 shadow-glow' : ''
                }`}
                onClick={() => handleSkillClick(skill?.id)}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 ${skill?.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon name={skill?.icon} size={24} className={skill?.color} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {skill?.name}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  Hover to see live demonstration
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)]?.map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < 4 ? skill?.color?.replace('text-', 'bg-') : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <Icon name="ArrowUpRight" size={16} className="text-muted-foreground" />
                </div>
              </motion.div>

              {/* Hover Demo */}
              <AnimatePresence>
                {hoveredSkill === skill?.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 mt-4 z-20"
                  >
                    <div className="glass-card p-6 rounded-xl border border-primary/20">
                      <h4 className="font-semibold text-foreground mb-3">
                        {skill?.demo?.title}
                      </h4>
                      
                      {/* Live Preview */}
                      <div className="mb-4">
                        {skill?.demo?.preview}
                      </div>

                      {/* Code Snippet */}
                      <div className="bg-slate-900/50 rounded-lg p-4 font-code text-xs">
                        <pre className="text-muted-foreground leading-relaxed overflow-x-auto">
                          <code>{skill?.demo?.code?.slice(0, 200)}...</code>
                        </pre>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xs text-muted-foreground">
                          Click to explore more
                        </span>
                        <Icon name="ExternalLink" size={14} className={skill?.color} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button
            onClick={() => window.location.href = '/interactive-skills-lab'}
            className="btn-conversion px-8 py-4 rounded-xl font-semibold text-lg hover-lift shadow-conversion inline-flex items-center space-x-2"
          >
            <span>Explore Full Skills Lab</span>
            <Icon name="ArrowRight" size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsPreview;