import "./style.css";
import { Categoria, Nome, Preco } from "../../Styles/typograph";
import { ButtonAdd } from "../../Styles/buttons";

function Product({ categoria, nome, preco, imagem, handleClick }) {
 
  return (
    <li className="product">
      <figure>
        <img src={imagem} alt={nome} />
      </figure>
      <Nome>{nome}</Nome>
      <Categoria>{categoria}</Categoria>
      <Preco>R$ {preco}</Preco>
      <ButtonAdd>Adicionar</ButtonAdd>
    </li>
  );
}
