import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Table, Container, Alert } from '@mantine/core';
import axios from 'axios';
import { capitalizeFirstLetter } from "../utils/helpers.js";

const Axios = axios.create({
  baseURL: 'http://localhost:3000',
});

export default function Orders() {
  const location = useLocation();
  const navigate = useNavigate();

  const convertDate = (d) => {
    let date = new Date(d);
    return date.toISOString().slice(0, 10);
  };

  function handleOrderClick(o) {
    console.log(o.orderType);
    Axios.get(`/customers/id/${o.customerId.valueOf()}`)
      .then((res) => {
          navigate('/order', {state: {customer: res.data, order: o}})
        }
      );
  };

  const rows = location.state.orders.map((o) => (
    <tr key={o.orderId} onClick={() => {handleOrderClick(o)}}>
      <td>{convertDate(o.date)}</td>
      <td>{capitalizeFirstLetter(o.customerName)}</td>
      <td>{capitalizeFirstLetter(o.orderType)}</td>
      <td>FM00{o.orderId}</td>
    </tr>
  ))

  return (
    <Container>
      <Table highlightOnHover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Customer Name</th>
            <th>Order Type</th>
            <th>Order Number</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Container>
  )
}