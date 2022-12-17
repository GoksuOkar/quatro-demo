import { useState } from 'react';
import PdfFoil from '../components/PdfFoil';
import PdfWS from '../components/PdfWS';
import PdfSurf from '../components/PdfSurf';
import { useLocation } from 'react-router-dom';

export default function OrderPage() {
  const location = useLocation();
  const order = location.state.order;
  const customer = location.state.customer;
  const orderNum = `FM00${order.orderId}`;

  if (order.orderType === "surf") {
    return <PdfSurf values={order} orderNum={orderNum} customer={customer}/>
  } else if (order.orderType === "windsurf") {
    return <PdfWS values={order} orderNum={orderNum} customer={customer}/>
  } else {
    return <PdfFoil values={order} orderNum={orderNum} customer={customer}/>
  }
}