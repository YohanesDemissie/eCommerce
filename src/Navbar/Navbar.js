import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from '../Styles/colors';
import { Title } from '../Styles/title';

const NavbarStyled = styled.div`
    background-color: ${pizzaRed};
    padding: 10px;
`

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  font-family: 'Great Vibes', cursive;
`

export function Navbar() {
  return <NavbarStyled>
    <Logo>
      Demissie Armadillo
    </Logo>
  </NavbarStyled>
}