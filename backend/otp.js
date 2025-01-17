const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Store OTP temporarily (in-memory for simplicity)
let otpStore = {};

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
        user: 'postabid48@gmail.com',
        pass: 'fzstjmrkzfzhukbu'
    }
});

// Function to send OTP
const sendOtp = async (email) => {
    const otp = crypto.randomInt(100000, 999999).toString(); // Generate a 6-digit OTP

    // Send OTP email
    const mailOptions = {
        from: 'postabid48@gmail.com',
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`
    };

    try {
        await transporter.sendMail(mailOptions);
        otpStore[email] = otp; // Store OTP
        return { success: true, message: 'OTP sent successfully' };
    } catch (error) {
        console.error('Error sending OTP:', error);
        return { success: false, message: 'Error sending OTP' };
    }
};

// Function to verify OTP
const verifyOtp = (email, otp) => {

    if (otpStore[email] && otpStore[email] === otp) {
        delete otpStore[email]; // Clear OTP after verification
        return { success: true, message: 'OTP verified successfully' };
    } else {
        return { success: false, message: 'Invalid OTP' };
    }
};

module.exports = { sendOtp, verifyOtp };

// const testEmail = async () => {
//     const result = await sendOtp('abhinavpankajakshan34@gmail.com');
//     console.log(result);
// };
// testEmail();