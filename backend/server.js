// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();

// Very simple CORS configuration
app.use(cors());

// Other middleware
app.use(express.json());

// Otp function import
const { sendOtp, verifyOtp } = require('./otp');

// Test route to verify the server is working
app.get('/api/test', (req, res) => {
    res.json({ message: 'Server is working' });
});

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27018/newdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Signup Route
app.post('/api/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log('Received signup request:', { name, email }); // Log the request

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();
        console.log('User saved successfully'); // Log successful save

        res.status(201).json({
            message: 'User created successfully',
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ message: 'Error creating user' });
    }
});

// otp endpoint
app.post('/api/send-otp', async (req, res) => {
    const { email } = req.body;
    const result = await sendOtp(email);
    if (result.success) {
        res.status(200).json({ message: result.message });
    } else {
        res.status(500).json({ message: result.message });
    }
});

app.post('/api/verify-otp', (req, res) => {
    const { email, otp } = req.body;
    const result = verifyOtp(email, otp);
    if (result.success) {
        res.status(200).json({ message: result.message });
    } else {
        res.status(400).json({ message: result.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});