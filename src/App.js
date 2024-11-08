import React, { useState } from 'react'; //useState for react hooks
import { Navbar } from './Navbar/Navbar.js';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';
import { FoodDialog } from './FoodDialogue/FoodDialogue';
import { GlobalStyle } from './Styles/GlobalStyles';
import { Order } from './Order/Order';
import { useTitle } from './Hooks/useTitle';

import { useOpenFood } from './Hooks/useOpenFood';
import { useOrders } from './Hooks/useOrders';

function App () {
  const openFood = useOpenFood();
  const orders = useOrders();
  useTitle({ ...openFood, ...orders})
    return (
      <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
        <Navbar />
        <Order {...orders} {...openFood} />
        <Banner />
        <Menu {...openFood} />
      </>
    );
  }

export default App;