import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext'; // Import the useUser hook
import Navbar from '../components/Navbar'; // Import Navbar for consistency

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
            navigate('/Login'); // Redirect to home or another page
        } else {
            alert('Invalid OTP');
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-transparent flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-[#262C35] py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <h2 className="mt-6 text-center bg-transparent text-3xl font-bold tracking-tight text-white">
                            Verify Your OTP
                        </h2>
                        <form className="space-y-6 bg-transparent" onSubmit={handleSubmit}>
                            <div className='bg-transparent'>
                                <label 
                                    htmlFor="otp" 
                                    className="block text-sm bg-transparent font-medium text-gray-400"
                                >
                                    Enter OTP
                                </label>
                                <div className="mt-1 bg-transparent">
                                    <input
                                        id="otp"
                                        type="text"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        placeholder="Enter OTP"
                                        required
                                        className="block w-full appearance-none rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:text-sm border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Verify OTP
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OtpVerification;
