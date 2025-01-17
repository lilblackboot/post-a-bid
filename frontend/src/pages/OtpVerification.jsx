import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext'; // Import the useUser hook

const OtpVerification = () => {
    const { userEmail } = useUser(); // Get the userEmail from context
    const [otp, setOtp] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/verify-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: userEmail, otp }) // Use the actual email
        });

        if (response.ok) {
            navigate('/login'); // Redirect to home or another page
        } else {
            alert('Invalid OTP');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                required
            />
            <button type="submit">Verify OTP</button>
        </form>
    );
};

export default OtpVerification;