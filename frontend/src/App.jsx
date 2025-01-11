import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import ProductCard from './components/ProductCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <SearchBar/>
      <ProductCard/>
    </>
  )
}

export default App
