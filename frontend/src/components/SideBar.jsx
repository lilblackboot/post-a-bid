import React, { useState } from "react";
import { HiOutlineMenu, HiHome, HiCog, HiOutlineLogout } from "react-icons/hi";

const Sidebar = ({ onToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    onToggle(!isCollapsed); // Notify parent about the state change
  };

  const menuItems = [
    { name: "Home", icon: <HiHome className="w-8 h-8 bg-transparent" /> },
    { name: "Settings", icon: <HiCog className="w-8 h-8 bg-transparent" /> },
    { name: "Logout", icon: <HiOutlineLogout className="w-8 h-8 bg-transparent" /> },
  ];

  return (
    <div
      className={`h-full bg-[#262C35] text-white fixed transition-[width,background-color] duration-500 ease-in-out ${
        isCollapsed ? "w-18" : "w-64"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="p-2 m-2 text-gray-300 bg-transparent rounded hover:bg-gray-600 focus:outline-none"
      >
        <HiOutlineMenu className="h-8 bg-transparent w-8" />
      </button>

      {/* Sidebar Content */}
      <div className="p-4 bg-transparent">
        {/* User Profile */}
       

        {/* Menu Items */}
        <ul className="mt-4 bg-transparent space-y-2">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center bg-transparent p-2 hover:bg-gray-700 rounded cursor-pointer transition-all duration-700 ease-in-out"
            >
              {/* Icon: Always Visible */}
              <div className="flex bg-transparent justify-center items-center w-6 h-6 my-4">
                {item.icon}
              </div>

              {/* Text: Visible Only When Not Collapsed */}
              {!isCollapsed && (
                <span className="ml-4 bg-transparent transition-opacity duration-700 ease-in-out">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
