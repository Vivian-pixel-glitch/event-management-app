require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import route modules
const authRoutes = require('./src/routes/auth');
const eventRoutes = require('./src/routes/event');
const userRoutes = require('./src/routes/user.routes');
const bookingRoutes = require('./src/routes/bookings');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://Vivian:crownVivian1122@cluster0.hvsvxcl.mongodb.net/test=Cluster0')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
