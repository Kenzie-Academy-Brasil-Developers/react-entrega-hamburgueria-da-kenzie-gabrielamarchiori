import "./App.css";
import api from "./services/api";
import { useEffect, useState } from "react";
import GlobalStyle from "./Styles/global";
import Logo from './assets/logo.png';
import { FormDefault } from "./Styles/form";
import { ButttonSearch } from "./Styles/buttons";


function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  

  useEffect(() => {
    api
      .get(`products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  function showProducts(search) {
    const searchForm = search.toLowerCase();

    const eachItem = products.map((element) => {
      return element.name;
    });

    eachItem.forEach((element) => {
      if (element.toLowerCase().includes(searchForm)) {
        console.log(element);
        return element;
      }
    });
  }

  // function handleClick(imagem, nome, categoria, preco) {
  //   const productCart = {
  //     nome: nome,
  //     categoria: categoria,
  //     preco: preco,
  //     imagem: imagem,
  //   };
  //   console.log(productCart)
  // }

  return (
    <div className="App">
      <GlobalStyle/>
      <header className="App-header">
        <nav className="header-nav">
          <img src={Logo} alt="" />
          <FormDefault
            onSubmit={(event) => {
              event.preventDefault();
              showProducts(filteredProducts);
            }}
          >
            <input
              onChange={(event) => setFilteredProducts(event.target.value)}
              type="text"
              placeholder="Digitar pesquisa"
            />
            <ButttonSearch>Pesquisar</ButttonSearch>
          </FormDefault>
        </nav>
      </header>
      <div className="Main-page">
        {/* <ProductsList
          products={products}
        />
        <Cart currentSale={currentSale} /> */}
      </div>
    </div>
  )
}

export default App
