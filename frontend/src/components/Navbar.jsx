import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
    
    if (token) {
      const userInfo = JSON.parse(localStorage.getItem('user'));
      if (userInfo && userInfo.name) {
        setUserName(userInfo.name);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUserName('');
    navigate('/'); // Changed this to navigate to home page ('/')
  };

  return (
    <div>
      <nav className='bg-[#262C35] flex justify-between w-full align-middle items-center'>
        <h1 className='text-white text-4xl bg-[#262C35] p-4'>POST-A-BID</h1>
        <div className='flex justify-between gap-2 bg-[#262C35]'>
          {!isAuthenticated ? (
            <>
              {location.pathname !== '/otp-verification' && (
                <>
                  {location.pathname !== '/login' && (
                    <button 
                      onClick={() => navigate('/login')} 
                      className='bg-[#FE8D32] text-white p-2 px-5 rounded-full m-3'
                    >
                      Login
                    </button>
                  )}
                  {location.pathname !== '/signup' && (
                    <button 
                      onClick={() => navigate('/signup')} 
                      className='bg-[#367BFE] text-white p-2 px-5 rounded-full m-3'
                    >
                      Signup
                    </button>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              <button 
                onClick={() => navigate('/profile')} 
                className='bg-[#367BFE] text-white p-2 px-5 rounded-full m-3'
              >
                {userName || 'User'}
              </button>
              <button 
                onClick={handleLogout} 
                className='bg-[#FE8D32] text-white p-2 px-5 rounded-full m-3'
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;