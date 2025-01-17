import React, { useState } from "react";

const Sidebar = ({ onToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    onToggle(!isCollapsed); // Notify parent about the state change
  };

  return (
    <div
      className={`h-screen bg-[#262C35] text-white ${
        isCollapsed ? "w-16" : "w-64"
      } fixed transition-all duration-300`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="p-2 m-2 text-gray-300 hover:bg-gray-700 rounded"
      >
        {isCollapsed ? "▶" : "◀"}
      </button>

      {/* Sidebar Content */}
      <div className={`p-4 ${isCollapsed ? "hidden" : ""} bg-transparent`}>

      <div className="flex p-3 rounded-2xl bg-[#D9D9D9] items-center mb-2">
              <img
                src='https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8'
                alt='alt'
                className="w-16 h-16 rounded-full object-cover mr-3"
              />
              <div className="bg-transparent">  
                <p className="text-lg bg-transparent font-semibold text-gray-800">Suzan Mansuri</p>
            
              </div>
            </div>
        
        <ul className="bg-transparent space-y-2">
          <li className="p-2 hover:bg-gray-700 bg-transparent cursor-pointer">Home</li>
          <li className="p-2 hover:bg-gray-700 bg-transparent cursor-pointer">Profile</li>
          <li className="p-2 hover:bg-gray-700 bg-transparent cursor-pointer">Settings</li>
          <li className="p-2 hover:bg-gray-700 bg-transparent cursor-pointer">Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
