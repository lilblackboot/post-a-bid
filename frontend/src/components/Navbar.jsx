import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  return (
    <div>
        <nav className='bg-[#262C35] flex justify-between align-middle items-center'>
            <h1 className='text-white text-4xl bg-[#262C35] p-4'>POST-A-BID</h1>
            <div className='flex justify-between gap-2 bg-[#262C35]'>
                {location.pathname !== '/otp-verification' && ( // Conditionally render buttons
                    <>
                        <button onClick={() => navigate('/login')} className='bg-[#FE8D32] text-white p-2 px-5 rounded-full m-3'>Login</button>
                        <button onClick={() => navigate('/signup')} className='bg-[#367BFE] text-white p-2 px-5 rounded-full m-3'>Signup</button>
                    </>
                )}
            </div>
        </nav>
    </div>
  );
}

export default Navbar;
