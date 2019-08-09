import React from 'react';
import styled from 'styled-components';
import { foods } from '../Data/FoodData';
import { Food, FoodGrid, FoodLabel } from './FoodGrid';

const MenuStyled = styled.div`
  height: 200px;
  margin: 0px 400px 0px 20px;
`
// Each object is a key which is the section name(pizza, sides, wings, etc.), amnd an value which is an array
// entries creaties an array of key value pairs (array of arrays).
// then loop through the foods from that section
export function Menu() {
  return <MenuStyled>
    {Object.entries(foods).map(([sectionName, foods]) => (
      <>
        <h1> {sectionName} </h1>
        <FoodGrid>
          {foods.map(food => (
            <Food img={food.img}>
              <FoodLabel>
                {food.name}
              </FoodLabel>
            </Food>
          ))}
        </FoodGrid>
      </>
    ))}
  </MenuStyled>
}