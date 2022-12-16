import * as React from 'react';
import { useLocation } from 'react-router-dom';

export default function Orders() {
  const location = useLocation();

  return (
    <div>
      {location.state.orders.map((order) => (
        <p key={order.orderId}>{order.orderType}</p>
      ))}
    </div>
  )
}