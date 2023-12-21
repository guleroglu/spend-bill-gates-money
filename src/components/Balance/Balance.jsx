import "./Balance.css";
import { useSelector } from "react-redux";

const Balance = () => {
  const money = useSelector((state) => state.money.money);
 const convertedMoney = new Intl.NumberFormat("en-US", {
   style: "currency",
   currency: "USD",
 });
  return (
    <div className="balance">
      <span>{convertedMoney.format(money)}</span>
    </div>
  );
};

export default Balance;
