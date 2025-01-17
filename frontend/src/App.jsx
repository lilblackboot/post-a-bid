import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext'; // Ensure this import is correct
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OtpVerification from './pages/OtpVerification';

function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/otp-verification" element={<OtpVerification />} />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;