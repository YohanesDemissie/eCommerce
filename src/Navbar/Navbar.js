import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from '../Styles/colors';
import { Title } from '../Styles/title';

const NavbarStyled = styled.div`
    background-color: ${pizzaRed};
    padding: 10px;
    position: fixed;
    width: 100%;
    z-index: 999;
`

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  font-family: 'Great Vibes', cursive;
  text-shadow: 1px 1px 1px black;
`

export function Navbar() {
  return (
    <NavbarStyled>
      <Logo>
        Demissies' Pizzeria 
        <span role="img" aria-label="pizza slice">🍕</span>
      </Logo>
    </NavbarStyled>
  )
}