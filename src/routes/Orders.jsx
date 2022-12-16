import * as React from 'react';
import { useLocation } from 'react-router-dom';

export default function Orders() {
  const location = useLocation();

  //TODO: TURN THESE INTO A STACK VIEW WITH ORDER DATE, CUSTOMER NAME, ORDER TYPE, ORDERNUMBER
  //WHEN A STACK IS CLICKED, RENDER THE PDF FORM ACCORDING TO WHICH ORDERTYPE IT IS
  return (
    <div>
      {location.state.orders.map((order) => (
        <p key={order.orderId}>{order.orderType}</p>
      ))}
    </div>
  )
}