import React, { useState } from 'react'; //useState for react hooks
import { Navbar } from './Navbar/Navbar.js';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';
import { FoodDialog } from './FoodDialogue/FoodDialogue';
import { GlobalStyle } from './Styles/GlobalStyles';

function App () {
  const [openFood, setOpenFood] = useState();
    return (
      <>
      <GlobalStyle />
        <FoodDialog openFood={openFood} setOpenFood={setOpenFood} />
      <Navbar />
      <Banner />
      <Menu setOpenFood={setOpenFood} />
      </>
    );
  }

export default App;