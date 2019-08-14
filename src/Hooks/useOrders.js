import { useState } from 'react';

export function useOrders() {
  const [orders, setOrders] = useState([]); //useState sets dedfault state as the array, returning the state accross the application for other components to update state and return state
  return {
    orders,
    setOrders
  };
}