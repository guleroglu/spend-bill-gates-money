import Balance from "./components/Balance/Balance";
import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList/ProductsList";
import Receipt from "./components/Receipt/Receipt";

function App() {
  return (
    <div className="App">
      <Header />
      <Balance />
      <ProductsList />
      <Receipt />
    </div>
  );
}

export default App;
