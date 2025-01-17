import React, { useState } from "react";

const Sidebar = ({ onToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    onToggle(!isCollapsed); // Notify parent about the state change
  };

  return (
    <div
      className={`h-screen bg-gray-800 text-white ${
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
      <div className={`p-4 ${isCollapsed ? "hidden" : ""}`}>
        <h1 className="text-lg font-bold border-b border-gray-700 mb-4">
          Sidebar Title
        </h1>
        <ul className="space-y-2">
          <li className="p-2 hover:bg-gray-700 cursor-pointer">Home</li>
          <li className="p-2 hover:bg-gray-700 cursor-pointer">Profile</li>
          <li className="p-2 hover:bg-gray-700 cursor-pointer">Settings</li>
          <li className="p-2 hover:bg-gray-700 cursor-pointer">Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
