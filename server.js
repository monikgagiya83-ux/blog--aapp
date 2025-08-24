const express = require('express');
const cors = require('cors');
const path = require('path');
const config = require('./config');
const bcrypt = require('bcryptjs');

const app = express();

// In-memory storage (replaces MongoDB)
global.users = [];
global.posts = [];
global.userIdCounter = 1;
global.postIdCounter = 1;

// Create a default user with hashed password
(async () => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash('password123', salt);
  
  global.users.push({
    id: global.userIdCounter++,
    name: 'Demo User',
    email: 'user@example.com',
    password: hashedPassword,
    avatar: '',
    date: new Date()
  });
  
  console.log('Default user created: user@example.com / password123');
})();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json({ extended: false }));

// Mock database connection
console.log('Using in-memory storage (no MongoDB required)');

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));

// Serve static assets in production
if (config.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(config.PORT, () => console.log(`Server started on port ${config.PORT}`));
