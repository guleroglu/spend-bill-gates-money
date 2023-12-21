import "./Product.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBasket, sellBasket } from "../../features/money/moneySlice";

const Product = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const formattedPrice = item.price.toFixed(2).toString();

  const handleBuyProduct = () => {
    dispatch(
      addBasket({ itemId: item.id, quantity: parseInt(quantity, 10) || 0 })
    );
  };

  const handleSellProduct = () => {
    console.log("e");
    dispatch(
      sellBasket({ itemId: item.id, quantity: parseInt(quantity, 10) || 0 })
    );
  };

  return (
    <div className="productCard">
      <div className="productCardInfo">
        <img src={item.image} alt="" className="productImg" />
        <h2>{item.name}</h2>
        <span>${formattedPrice}</span>
      </div>

      <div className="productControls">
        <button
          className="sellButton"
          disabled={quantity <= 0}
          onClick={handleSellProduct}
        >
          Sell
        </button>
        <input
          type="number"
          placeholder="0"
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
        />
        <button
          onClick={handleBuyProduct}
          className="buyButton"
          disabled={quantity <= 0}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Product;
