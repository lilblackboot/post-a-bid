import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';

function Home() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <ProductCard />
    </div>
  );
}

export default Home;