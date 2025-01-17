import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import PostGrid from '../components/PostGrid';
import Sidebar from '../components/SideBar';
import { useState } from 'react';
function Home() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleToggle = (collapsed) => {
    setIsSidebarCollapsed(collapsed);
  };
  
  return (
   <>

<div className="flex">
      {/* Sidebar */}
      <Sidebar onToggle={handleToggle} />

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          isSidebarCollapsed ? "ml-16" : "ml-64"
        } flex-1`}
      >
       <Navbar />
      <SearchBar />
      <div>
        <PostGrid /> 
      </div>
      </div>
    </div>


   
   </>
  );
}

export default Home;