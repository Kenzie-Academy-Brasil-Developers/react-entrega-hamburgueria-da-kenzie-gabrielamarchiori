import "./style.css";

function Product({ categoria, nome, preco, imagem, handleClick, id }) {
  return (
    <li className="product">
      <figure>
        <img src={imagem} alt={nome} />
      </figure>
      <h2>{nome}</h2>
      <p>{categoria}</p>
      <span>
        R$ {preco.toString().length < 3 ? `${preco}.00` : `${preco}`}
      </span>
      <button
        onClick={() => handleClick(imagem, nome, categoria, preco, id)}
      >
        Adicionar
      </button>
    </li>
  );
}

export default Product;
