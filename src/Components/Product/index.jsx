import "./style.css";
import {Nome, Categoria, Preco,} from '../../Styles/typography'
import { ButtonAdd } from "../../Styles/buttons";

function Product({ categoria, nome, preco, imagem, handleClick, id }) {
  return (
    <li className="product">
      <figure>
        <img src={imagem} alt={nome} />
      </figure>
      <Nome>{nome}</Nome>
      <Categoria>{categoria}</Categoria>
      <Preco>
        R$ {preco.toString().length < 3 ? `${preco}.00` : `${preco}`}
      </Preco>
      <ButtonAdd
        onClick={() => handleClick(imagem, nome, categoria, preco, id)}
      >
        Adicionar
      </ButtonAdd>
    </li>
  );
}

export default Product;
