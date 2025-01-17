import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import { UserProvider } from './UserContext'; // Ensure this import is correct
import './App.css'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OtpVerification from './pages/OtpVerification';
import Sidebar from './components/SideBar'  

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