import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';

function App() {
  const tempCartItem = { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 };
  return (
    <>
      <Cart cart={[{ ...tempCartItem }]} />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
