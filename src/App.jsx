import { useState, useEffect } from 'react'
import './App.css'
import GlobalStyle from './Styles/global'
import api from "./services/api";

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    api
      .get(`products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <GlobalStyle/>
      <h1>teste</h1>
    </div>
  )
}

export default App
