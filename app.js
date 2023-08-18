// src/app.js
const express = require('express');
// const router = require('./routes')
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose')
const categoryRoutes = require('./src/routes/categoryRoutes');
// const productRoutes = require('./src/routes/productRoutes');
// const userRoutes = require('./src/routes/userRoutes');
// const cartRoutes = require('./src/routes/cartRoutes');
// const orderRoutes = require('./src/routes/orderRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle database connection events
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
// Use your routes
app.use('/categories', categoryRoutes);
// app.use('/products', productRoutes);
// app.use('/users', userRoutes);
// app.use('/cart', cartRoutes);
// app.use('/orders', orderRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
