const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
require("./db")
const app = express();

// Dummy database to store orders
const orders = [];

// Middleware
app.use(bodyParser.json());
app.use(cors());

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  pincode: String, // Add pincode field to the schema
});

const User = require('./user')

 
app.post('/api/signup', async (req, res) => {
  try {
    const { email, password, pincode } = req.body; // Extract pincode from request body
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, pincode }); // Include pincode in user creation
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


// User login endpoint
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const token = jwt.sign({ email: user.email }, 'secretkey');
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to create a new payment order
app.post('/api/payment/orders', (req, res) => {
  try {
    const { amount } = req.body;

    // Generate a unique order ID (you can use a library like `uuid`)
    const orderId = generateOrderId();

    // Store the order in the database or memory
    orders.push({ orderId, amount });

    // Send the order ID and amount back to the client
    res.json({ orderId, amount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Helper function to generate a random order ID (dummy implementation)
function generateOrderId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
