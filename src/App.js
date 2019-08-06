import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components'
import { Navbar } from './Navbar/Navbar.js';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }

  .title {
    font-family: 'Cinzel', serif;
    font-size: 50px;
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
        <div>
          ITS A MIYAH MARIOOO!
          LETSAH GOOHW!
        </div>
      </>
    );
  }
}

export default App;
