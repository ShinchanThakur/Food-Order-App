import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';

function App() {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = _ => {
    setShowCart(true);
  }
  const hideCartHandler = _ => {
    setShowCart(false);
  }
  const tempCartItem = { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 };
  return (
    <>
      {showCart && <Cart cart={[{ ...tempCartItem }]} onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
