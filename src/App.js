import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components'
import { Navbar } from './Navbar/Navbar.js';
import { Banner } from './Banner/Banner';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }

  .title {
    font-family: 'Cinzel', serif;
    font-size: 100px;
    line-height: 200px;

  }

  u {
    padding-bottom: 300px;
  }

  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`

class App extends Component {
  render() {
    return (
      <>
      <Navbar />
        <div className="title">Demissie Armadio</div>
      <h3>~ where high end fashion meets quality and comfort ~</h3>
      <GlobalStyle />
      <Banner />
        <div>
          ITS A MIYAH MARIOOO!
          LETSAH GOOHW!
        </div>
      </>
    );
  }
}

export default App;
