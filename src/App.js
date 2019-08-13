import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyles';
import { Navbar } from './Navbar/Navbar.js';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';

function App () {
    return (
      <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <Menu />
      </>
    );
  }

export default App;