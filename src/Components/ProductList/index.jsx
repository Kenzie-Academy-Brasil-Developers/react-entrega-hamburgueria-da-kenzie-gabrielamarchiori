import "./style.css";
import Product from "../Product";

function ProductList({ filteredProducts, handleClick }) {
  console.log(filteredProducts);
  return (
    <div className="Cards">
      <div className="Container-card">
        <ul className="Page-cards">
          {filteredProducts.map((element) => (
            <Product
              name={element.name}
              category={element.category}
              price={element.price}
              key={element.id}
              handleClick={handleClick}
              img={element.img}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductList;
