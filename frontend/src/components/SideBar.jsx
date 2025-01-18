import React, { useState, useEffect } from "react";
import { HiOutlineMenu, HiHome, HiCog, HiOutlineLogout, HiLogin } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ onToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    onToggle(!isCollapsed);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/');
  };

  const getMenuItems = () => {
    const baseItems = [
      { 
        name: "Home", 
        icon: <HiHome className="w-8 h-8 bg-transparent" />,
        onClick: () => navigate('/')
      },
      { 
        name: "Settings", 
        icon: <HiCog className="w-8 h-8 bg-transparent" />,
        onClick: () => navigate('/settings')
      },
    ];

    if (isAuthenticated) {
      return [...baseItems, { 
        name: "Logout", 
        icon: <HiOutlineLogout className="w-8 h-8 bg-transparent" />,
        onClick: handleLogout
      }];
    } else {
      return [...baseItems, { 
        name: "Login", 
        icon: <HiLogin className="w-8 h-8 bg-transparent" />,
        onClick: () => navigate('/login')
      }];
    }
  };

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
        {/* Menu Items */}
        <ul className="mt-4 bg-transparent space-y-2">
          {getMenuItems().map((item, index) => (
            <li
              key={index}
              onClick={item.onClick}
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