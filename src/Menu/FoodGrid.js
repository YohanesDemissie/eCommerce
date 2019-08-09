import styled from 'styled-components';
import { Title } from '../Styles/title';

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`

export const FoodLabel = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px;
`
// Take the Title style component and customize for the pizza titles below
export const Food = styled(Title)`
  height: 100px;
  padding: 10px;
  font-size: 20px;
  background-image: ${({img}) => `url(${img});` }
  background-position: center;
  background-size: cover;
  filter: contrast(75%);
  border-radius: 7px;
  box-shadow: 0px 0px 10px 0px grey;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`
//backgorund image allows to take in an image and pass it in as a url property to dynamically render and style images