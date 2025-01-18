import React, { useState } from "react";
import { HiOutlineMenu, HiHome, HiCog, HiOutlineLogout } from "react-icons/hi";

const Sidebar = ({ onToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    onToggle(!isCollapsed); // Notify parent about the state change
  };

  const menuItems = [
    { name: "Home", icon: <HiHome className="w-6 bg-transparent h-6" /> },
    { name: "Settings", icon: <HiCog className="w-6 bg-transparent h-6" /> },
    {
      name: "Logout",
      icon: <HiOutlineLogout className="w-6 bg-transparent h-6" />,
    },
  ];

  return (
    <div
      className={`h-screen bg-[#262C35] text-white ${
        isCollapsed ? "w-16" : "w-64"
      } fixed transition-all duration-300`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="p-2 m-2 text-gray-300 bg-transparent rounded"
      >
        <HiOutlineMenu className="h-8 bg-transparent w-8"/>
      </button>

      {/* Sidebar Content */}
      <div className={`p-4 ${isCollapsed ? "hidden" : ""} bg-transparent`}>
        <div className="flex p-3 rounded-2xl bg-[#D9D9D9] items-center mb-2">
          <img
            src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
            alt="alt"
            className="w-16 h-16 rounded-full object-cover mr-3"
          />
          <div className="bg-transparent">
            <p className="text-lg bg-transparent font-semibold text-gray-800">
              Suzan Mansuri
            </p>
          </div>
        </div>
        <div
          className={`h-screen bg-transparent text-white ${
            isCollapsed ? "w-16" : "w-60"
          } fixed transition-all duration-300`}
        >
          {/* Menu Items */}
          <ul className="mt-4 bg-transparent space-y-2 pr-2">
            {menuItems.map((item, index) => (
              <li
              key={index}
              className="flex items-center p-2 bg-transparent hover:bg-gray-700 rounded cursor-pointer"
            >
              {/* Icon: Always Visible */}
              <div className="mr-4 flex justify-center items-center w-6 h-6">
                {item.icon}
              </div>
      
              {/* Text: Visible Only When Not Collapsed */}
              {!isCollapsed && (
                <span className="bg-transparent transition-opacity duration-300">
                  {item.name}
                </span>
              )}
            </li>
            ))}
          </ul>
        </div>

       
      </div>
    </div>
  );
};

export default Sidebar;
