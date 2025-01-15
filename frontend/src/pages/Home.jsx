import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import PostGrid from '../components/PostGrid';
function Home() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div>
        <PostGrid /> 
      </div>
    </div>
  );
}

export default Home;