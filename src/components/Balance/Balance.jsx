import "./Balance.css";
import { useSelector } from "react-redux";

const Balance = () => {
  const money = useSelector((state) => state.money.money);

  return (
    <div className="balance">
      <span>${money}</span>
    </div>
  );
};

export default Balance;
