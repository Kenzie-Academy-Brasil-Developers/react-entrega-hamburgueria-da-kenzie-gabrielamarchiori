import Product from "../Product";
import "./style.css";

function ProductsList({ filteredProducts, handleClick }) {
  
  return (
    <div className="Cards">
      <div className="Container-card">
        <ul className="Page-cards">
          {filteredProducts?.map((element) => (
            <Product
              nome={element.name}
              categoria={element.category}
              preco={element.price}
              imagem={element.img}
              key={element.id}
              handleClick={handleClick}
              id={element.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductsList;
