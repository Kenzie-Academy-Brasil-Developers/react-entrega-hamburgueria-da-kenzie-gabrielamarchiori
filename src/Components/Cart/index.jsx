import "./style.css";
import { ButtonRemove } from "../../Styles/buttons";

function Cart({ currentSale, setCurrentSale }) {

  const soma = currentSale.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + Number(valorAtual.preco)
  },0)

  function removeItem(index) {
    const itemRemoved = currentSale.filter((item, innerIndex) => {
      return innerIndex !== index;
    });

    setCurrentSale(itemRemoved);
  }

  function removeAll() {
    setCurrentSale([]);
  }

  return (
    <div className="Cart">
      <div className="Container-cart">
        <h2>Carrinho de Compras</h2>

        {currentSale.length > 0 ? (
          <div className="Full-cart">
            <ul className="body-car">
              {currentSale.map((element, id) => (
                <li key={id}>
                  <div className="left-car">
                    <figure>
                      <img src={element.imagem} alt={element.nome} />
                    </figure>
                    <div className="info">
                      <h3>{element.nome}</h3>
                      <p>{element.categoria}</p>
                    </div>
                  </div>
                  <button onClick={() => removeItem(id)}>Remover</button>
                </li>
              ))}
            </ul>
            <div className="Foot">
              <div className="Total-money">
                <p>Total:</p>
                <p>R$ {soma}.00</p>
              </div>
              <ButtonRemove onClick={() => removeAll()} className="btnRemoveAll">
                Remover todos
              </ButtonRemove>
            </div>
          </div>
        ) : (
          <div className="Empty-cart">
            <h3>Sua sacola está vazia</h3>
            <p>Adicione Itens</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
