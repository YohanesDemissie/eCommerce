import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`

class App extends Component {
  render() {
    return (
      <>
      <h1>Welcome to Grizzy</h1>
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
