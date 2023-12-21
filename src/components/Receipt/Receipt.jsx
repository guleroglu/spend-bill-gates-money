import "./Receipt.css";
import { useSelector } from "react-redux";
const Receipt = () => {
  const productCart = useSelector((state) => state.money.basket);
  const total = useSelector((state) => state.money.total);

  const soldProducts = productCart.filter((product) => product.quantity > 0);

  return (
    <div className="receiptContainer">
      <h1>Your Receipt</h1>
      <ul className="receiptList">
        {soldProducts.map((product) => (
          <li key={product.id} className="receiptListItem">
            <h3>{product.name}</h3>
            <span>x{product.quantity}</span>
            <span>${product.price * product.quantity}</span>
          </li>
        ))}
      </ul>
      <div className="border"></div>
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};

export default Receipt;
