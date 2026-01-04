const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from client build
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// API Routes
app.get('/api/habits', (req, res) => {
  // Mock data for testing
  const habits = [
    { id: 1, name: 'Wake up at 6', category: 'health', frequency: 'daily', goal: 80 },
    { id: 2, name: 'Cold shower', category: 'health', frequency: 'daily', goal: 75 },
    { id: 3, name: 'Hydrate', category: 'health', frequency: 'daily', goal: 90 },
    { id: 4, name: 'Stretching', category: 'exercise', frequency: 'daily', goal: 85 },
    { id: 5, name: 'Study', category: 'learning', frequency: 'daily', goal: 80 },
    { id: 6, name: 'Exercise', category: 'exercise', frequency: 'daily', goal: 70 }
  ];
  res.json(habits);
});

app.get('/api/habits/:id', (req, res) => {
  const { id } = req.params;
  const habit = { id: parseInt(id), name: 'Sample Habit', category: 'health', frequency: 'daily', goal: 80 };
  res.json(habit);
});

app.post('/api/habits', (req, res) => {
  const { name, category, frequency, goal } = req.body;
  const newHabit = {
    id: Date.now(),
    name,
    category,
    frequency,
    goal,
    createdAt: new Date()
  };
  res.status(201).json(newHabit);
});

app.put('/api/habits/:id', (req, res) => {
  const { id } = req.params;
  const updatedHabit = { id: parseInt(id), ...req.body, updatedAt: new Date() };
  res.json(updatedHabit);
});

app.delete('/api/habits/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Habit ${id} deleted successfully` });
});

app.get('/api/dashboard', (req, res) => {
  const dashboard = {
    totalHabits: 6,
    completedToday: 4,
    weeklyAverage: 78,
    monthlyProgress: 82,
    stats: {
      health: 4,
      exercise: 2,
      learning: 1
    }
  };
  res.json(dashboard);
});

app.get('/api/habits/:habitId/progress', (req, res) => {
  const { habitId } = req.params;
  const progress = {
    habitId: parseInt(habitId),
    month: 'January 2026',
    totalDays: 31,
    completedDays: 25,
    completionRate: 80.6,
    dailyData: Array.from({ length: 31 }, (_, i) => ({
      date: `2026-01-${String(i + 1).padStart(2, '0')}`,
      completed: Math.random() > 0.2
    }))
  };
  res.json(progress);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found', path: req.path });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Habit Tracker Server running on http://localhost:${PORT}`);
  console.log(`📊 API Health Check: http://localhost:${PORT}/api/health`);
  console.log(`🎯 Dashboard: http://localhost:${PORT}/api/dashboard`);
  console.log(`📋 Habits: http://localhost:${PORT}/api/habits`);
  console.log(`\nEnvironment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
