import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = _ => {
    setShowCart(true);
  }
  const hideCartHandler = _ => {
    setShowCart(false);
  }
  return (
    <CartProvider>
      {showCart && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
