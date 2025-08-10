const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const itemRoutes = require('./routes/itemRoutes');

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/items', itemRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'MERN CRUD API is running!' });
});

// MongoDB connection
const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI environment variable is required');
    }
    
    console.log('🔗 Connecting to MongoDB Atlas...');
    
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // 30 second timeout for production
      socketTimeoutMS: 45000, // 45 second socket timeout
      retryWrites: true,
      w: 'majority'
    });
    
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.log('⚠️  Server will start without database connection');
    console.log('📝 To fix database connection:');
    console.log('1. Check your internet connection');
    console.log('2. Verify MongoDB Atlas credentials and whitelist your IP');
    console.log('3. Ensure MONGODB_URI is properly set in .env file\n');
    return false;
  }
};

// Start server (with or without database)
const startServer = async () => {
  await connectDB(); // Try to connect but don't exit on failure
  
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📱 Frontend should be running on http://localhost:3000`);
  });
};

startServer();

module.exports = app;