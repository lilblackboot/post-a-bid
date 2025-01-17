<<<<<<< HEAD
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
=======
import { useState } from 'react'
import{BrowserRouter ,Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Sidebar from './components/SideBar'  
function App() {

  return (
    <BrowserRouter>
      <div> 
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
       </div>
    </BrowserRouter>
  )
>>>>>>> 36c531b66b17bd39ccf25b49ceed50b440808751
}

export default App;