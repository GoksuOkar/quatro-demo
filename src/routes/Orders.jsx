import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { Table } from '@mantine/core';

export default function Orders() {
  const location = useLocation();

  const convertDate = (d) => {
    let date = new Date(d);
    return date.toISOString().slice(0, 10);
  };

  function capitalizeFirstLetter(string) {
    let words = string.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
  }

  const rows = location.state.orders.map((o) => (
    <tr key={o.orderId}>
      <td>{convertDate(o.date)}</td>
      <td>{capitalizeFirstLetter(o.customerName)}</td>
      <td>{capitalizeFirstLetter(o.orderType)}</td>
      <td>FM00{o.orderId}</td>
    </tr>
  ))

  //TODO: TURN THESE INTO A STACK VIEW WITH ORDER DATE, CUSTOMER NAME, ORDER TYPE, ORDERNUMBER
  //WHEN A STACK IS CLICKED, RENDER THE PDF FORM ACCORDING TO WHICH ORDERTYPE IT IS
  return (
    <Table>
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
  )
}