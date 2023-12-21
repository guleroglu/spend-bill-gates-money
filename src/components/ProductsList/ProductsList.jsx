import Product from "../Product/Product";
import "./ProductsList.css";
import { useSelector } from "react-redux";

const ProductsList = () => {
  const products = useSelector((state) => state.money.items);

  return (
    <div className="productsWrapper">
      {products.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductsList;
