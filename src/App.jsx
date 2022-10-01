import { ToastContainer, toast } from "react-toastify";
import api from "./services/api";
import { useEffect, useRef, useState } from "react";
import GlobalStyle from "./Styles/global";
import "./App.css";
import { FormDefault } from "./Styles/form";
import { ButttonSearch } from "./Styles/buttons";
import Logo from "./assets/logo.png";
import ProductsList from "./Components/ProductsList";
import Cart from "./Components/Cart";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [idProduct, setIdProduct] = useState(9);

  const search = useRef(null);

  useEffect(() => {
    api
      .get(`products`)
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  function showProducts(filteredProducts) {
    const searchForm = filteredProducts.toLowerCase();

    const eachItem = products.filter((element) =>
      element.name.toLowerCase().includes(searchForm)
    );

    setFilteredProducts(eachItem);
  }

  function handleClick(imagem, nome, categoria, preco, id) {
    const productCart = {
      nome: nome,
      categoria: categoria,
      preco: preco,
      imagem: imagem,
      id: id,
    };

    setIdProduct(id);

    const found = currentSale.find((element) => element.id === id);

    if (!found) {
      setCurrentSale([...currentSale, productCart]);
      toast.success("Produto adicionado com sucesso!");
    } else {
      toast.error("Esse produto já foi adicionado!");
    }
  }

  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <header className="App-header">
        <nav className="header-nav">
          <img src={Logo} alt="" />
          <FormDefault>
            <input
              ref={search}
              type="text"
              placeholder="Digitar pesquisa"
              required
            />
            <ButttonSearch
              onClick={() =>
                showProducts(search.current.value.toLowerCase().trim())
              }
            >
              Pesquisar
            </ButttonSearch>
          </FormDefault>
        </nav>
      </header>
      <div className="Main-page">
        <div className="Container-main">
          <ProductsList
            filteredProducts={filteredProducts}
            handleClick={handleClick}
            id={products.id}
          />
          <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
        </div>
      </div>
    </div>
  );
}

export default App;
