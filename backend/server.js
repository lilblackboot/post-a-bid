// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const app = express();

const corsOptions = {
    origin: 'http://localhost:5173', 
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/newdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Add a test route to verify CORS
app.get('/api/test', (req, res) => {
    res.json({ message: 'CORS is working!' });
});

  
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Email is invalid']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

// Validation middleware
const validateSignup = (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;
    const errors = {};

    if (!name?.trim()) {
        errors.name = 'Name is required';
    }

    if (!email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email is invalid';
    }

    if (!password) {
        errors.password = 'Password is required';
    } else if (password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }

    if (password !== confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length > 0) {
        return res.status(400).json({ errors });
    }

    next();
};

// Signup Route
app.post('/api/signup', validateSignup, async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log('Received signup request:', { name, email }); // Log the incoming data

        const existingUser = await User.findOne({ email });
        console.log('Existing user check:', existingUser); // Log if user exists

        if (existingUser) {
            return res.status(400).json({ 
                errors: { email: 'Email already registered' }
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });
        console.log('Attempting to save user:', newUser); // Log the user object

        const savedUser = await newUser.save();
        console.log('User saved successfully:', savedUser); // Log the saved user

        res.status(201).json({ 
            message: 'Account created successfully',
            user: {
                id: savedUser._id,
                name: savedUser.name,
                email: savedUser.email
            }
        });

    } catch (error) {
        console.error('Detailed signup error:', error); // More detailed error logging
        res.status(500).json({ 
            errors: { general: 'Error creating account. Please try again.' }
        });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
