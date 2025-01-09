import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className='bg-[#262C35] flex justify-between align-middle items-center'>
            <h1 className='text-white text-4xl bg-[#262C35] p-4'>POST-A-BID</h1>
            <div className='flex justify-between gap-2 bg-[#262C35]'>
                <div className='bg-[#FE8D32] text-white p-2 px-5 rounded-full m-3'>Login</div>
                <div className='bg-[#367BFE] text-white p-2 px-5 rounded-full m-3'>Signup</div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar