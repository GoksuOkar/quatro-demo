import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Table, Container, Alert, Pagination, TextInput, Button, Group, Center } from '@mantine/core';
import axios from 'axios';
import { capitalizeFirstLetter } from "../utils/helpers.js";
import { Axios } from '../utils/helpers.js';

const convertDate = (d) => {
  let date = new Date(d);
  return date.toISOString().slice(0, 10);
};

export default function Orders() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePage, setPage] = useState(1);
  const [orders, setOrders] = useState([]);
  const searchRef = useRef(null);


  const goToOrder = (o) => {
    Axios.get(`/customers/id/${o.customerId.valueOf()}`)
      .then((res) => {
          navigate('/order', {state: {customer: res.data, order: o}})
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let input = searchRef.current.value.toLowerCase();
    if (input === "surf" || input === "windsurf" || input === "foil") {
      Axios.get(`/orders/${input}`).then((res) => {
        console.log(res.data);
        if (Array.isArray(res.data) && res.data.length > 0) {
          setOrders(res.data);
        } else {
          alert("Orders not found");
        }
      })
    } else {
      let inputModified = input.split(' ');
      let firstName = inputModified[0];
      let lastName = inputModified[1];
      Axios.get(`customers/${firstName}-${lastName}/orders`).then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setOrders(res.data);
        } else {
          alert("Customer Not Found. Make sure you entered the first and last name.")
        }
      });
    }
  }

  const rows = orders.map((o) => (
    <tr key={o.orderId} onClick={() => {goToOrder(o)}}>
      <td>{convertDate(o.date)}</td>
      <td>{capitalizeFirstLetter(o.customerName)}</td>
      <td>{capitalizeFirstLetter(o.orderType)}</td>
      <td>FM00{o.orderId}</td>
    </tr>
  ))

  return (
    <Container>
      <a href={`/`}>Home</a>
      <Center>
        <form onSubmit={handleSubmit}>
          <Group>
            <TextInput placeholder="search order" ref={searchRef}/>
            <Button color="dark" type="submit">submit</Button>
          </Group>
        </form>
      </Center>
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
      {orders.length > 20 ? <Pagination page={activePage} onChange={setPage} total={orders.length / 20}/> : null}
    </Container>
  )
}