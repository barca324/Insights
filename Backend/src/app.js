const express = require('express');
const cors = require('cors');

const connectDB = require('./config/database');
const errorHandler = require('./middleware/error');

// Import routes
const authRoutes = require('./routes/auth');
// const linkedinRoutes = require('./routes/linkedin');
// const youtubeRoutes = require('./routes/youtube');
// const twitterRoutes = require('./routes/twitter');
// const instagramRoutes = require('./routes/instagram');

// Initialize express app
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
// app.use('/api/linkedin', linkedinRoutes);
// app.use('/api/youtube', youtubeRoutes);
// app.use('/api/twitter', twitterRoutes);
// app.use('/api/instagram', instagramRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
