import React, { useState } from 'react';
import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartProvider';


function App() {
  const [cartIsShown,SetCartIsShown] = useState(false)

  const onCloseHandler = () => {
    SetCartIsShown(false)
}

const onShowHandler = () => {
  SetCartIsShown(true)
}

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={onCloseHandler}/>}
      <Header onClick={onShowHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;