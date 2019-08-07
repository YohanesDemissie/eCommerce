import React from 'react';
import styled from 'styled-components';
import { foods } from '../Data/FoodData';
import { Food, FoodGrid, FoodLabel } from './FoodGrid';

const MenuStyled = styled.div`
  height: 200px;
  margin: 0px 400px 0px 20px;
`

export function Menu() {
  return <MenuStyled>
    <h1>Menu</h1>
    <FoodGrid>
      {foods.map(food => (
        <Food img={food.img}>
          <FoodLabel>
            {food.name}
          </FoodLabel>
        </Food>
      ))}
    </FoodGrid>
  </MenuStyled>
}