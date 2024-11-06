import React from 'react';
import styled from 'styled-components';
import { DialogContent, DialogFooter, ConfirmButton } from '../FoodDialogue/FoodDialogue';
import { formatPrice } from '../Data/FoodData';
import { getPrice } from '../FoodDialogue/FoodDialogue';

// flex-direction allows the elememnts to stac kon each other rather side by side 
 const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  width: 340px;
  background-color: white;
  height: calc(100% - 48px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
 `;

 const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
 `

 const OrderContainer = styled.div`
  padding: 10px;
  border-bottom: 1px solid grey;
 `

 const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
 `;

 const DetailItem = styled.div`
  color: grey;
  font-size: 10px;
 `;

 export function Order({ orders, setOrders, setOpenFood }) {
   //reduce method with iterator and accumulator starting at 0
   const subTotal = orders.reduce((total, order) => {
    return total + getPrice(order)
   }, 0);
   const tax = subTotal * 0.09;
   const total = subTotal + tax;

   const deleteItem = index => {
     const newOrders = [...orders];
     newOrders.splice(index, 1);
     setOrders(newOrders);
   }

   const checkoutPayload = function() {
    console.log(orders);
    // WE CAN PRINT THE ORDER PAYLOAD BELOW WITH 'ORDERS' Array
    // orders.map((order, index) => {
    //   order.quantity
    //   order.name
    //   formatPrice(getPrice(order))
    //   order.toppings.filter(t => t.checked).map(topping => topping.name).join(", ")
    //   formatPrice(subTotal)
    //   formatPrice(tax)
    //   formatPrice(total)
    // })
    return;
   }

   return (
    <OrderStyled>
     {orders.length === 0 ? (
      <OrderContent>0 items in cart</OrderContent>
     ) : (
        <OrderContent>
          {" "}
          <OrderContainer>Your Order: </OrderContainer>{" "}
          {orders.map((order, index) => (
            <OrderContainer>
              <OrderItem>
                <div>{order.quantity}</div>
                <div>{order.name}</div>
                <div style={{cursor: 'pointer'}} onClick={() => {deleteItem(index)}}>🗑</div>
                <div>{formatPrice(getPrice(order))}</div>
              </OrderItem>
              <DetailItem>
                {order.toppings.filter(t => t.checked)
                  .map(topping => topping.name)
                  .join(", ")
                }
              </DetailItem>
              {order.choice && <DetailItem>{order.choice}</DetailItem>}
            </OrderContainer>
          ))}
          <OrderContainer>
            <OrderItem>
              <div />
              <div>Sub-Total: </div>
              <div>{formatPrice(subTotal)}</div>
            </OrderItem>
            <OrderItem>
              <div />
              <div>Tax: </div>
              <div>{formatPrice(tax)}</div>
            </OrderItem>
            <OrderItem>
              <div />
              <div>Total: </div>
              <div>{formatPrice(total)}</div>
            </OrderItem>
          </OrderContainer>
        </OrderContent>
     )}
     <DialogFooter>
      <ConfirmButton onClick={checkoutPayload}>Checkout</ConfirmButton>
     </DialogFooter>
    </OrderStyled>
  )
}