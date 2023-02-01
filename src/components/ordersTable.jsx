import {Table} from '@mantine/core';
import axios from 'axios';
import { capitalizeFirstLetter } from "../utils/helpers.js";
import { useNavigate } from 'react-router-dom';
import { Axios } from '../utils/helpers.js';

const convertDate = (d) => {
  let date = new Date(d);
  return date.toISOString().slice(0, 10);
};

export default function OrdersTable ({ orders, activePage }) {
  const navigate = useNavigate();

  const goToOrder = (o) => {
    Axios.get(`/customers/id/${o.customerId.valueOf()}`)
      .then((res) => {
          navigate('/order', {state: {customer: res.data, order: o}})
        }
      );
  };

  let start = (activePage - 1) * 20;
  let end = start + 20;

  const rows = orders.slice(start, end).map((o) => (
    <tr key={o.orderId} onClick={() => {goToOrder(o)}}>
      <td>{convertDate(o.date)}</td>
      <td>{capitalizeFirstLetter(o.customerName)}</td>
      <td>{capitalizeFirstLetter(o.orderType)}</td>
      <td>{o.orderId}</td>
    </tr>
  ))

  return (
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
  )
}