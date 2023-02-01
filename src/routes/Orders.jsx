import { useState, useEffect, useRef } from 'react';
import * as React from 'react';
import {
  Table,
  Container,
  Alert,
  Pagination,
  TextInput,
  Button,
  Group,
  Center,
  Radio
} from '@mantine/core';
import axios from 'axios';
import OrdersTable from '../components/ordersTable';
import { Axios } from '../utils/helpers.js';

export default function Orders() {

  const [activePage, setPage] = useState(1);
  const [type, setType] = useState("all");
  const [numOfPages, setNumOfPages] = useState(0);
  const [orders, setOrders] = useState([]);
  const [display, setDisplay] = useState([]);
  const searchRef = useRef(null);

  // initial render gets all the orders
  useEffect(() => {
    Axios.get(`/orders`)
    .then((res) => {
      setOrders(res.data)
      setDisplay(res.data)
      setNumOfPages(res.data.length)
    })
    .catch((err) => {console.log(err)})
  }, [])

  const orderTypeChange = (v) => {
    let types = ["surf", "windsurf", "foil"];
    console.log(types.includes(v));
    if (types.includes(v)) {
      let newDisplay = orders.filter((order) => (order.orderType == v));
      setDisplay(newDisplay);
      setNumOfPages(newDisplay.length);
      setType(v);
    } else {
      setDisplay(orders);
      setNumOfPages(orders.length);
      setType(v);
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    let name = searchRef.current.value;
    let searchResults = orders.filter((order) => (order.customerName.includes(name)));
    setDisplay(searchResults);
    setNumOfPages(searchResults.length);
  }

  return (
    <Container>
      <a href={`/`}>Home</a>
      <Group position="apart">
        <Radio.Group
        value={type}
        onChange={orderTypeChange}
        spacing="xs"
      >
        <Radio value="all" label="All" />
        <Radio value="surf" label="Surf" />
        <Radio value="windsurf" label="Windsurf" />
        <Radio value="foil" label="Foil" />
      </Radio.Group>
        <Group>
          <form onSubmit={handleSearch}>
            <TextInput placeholder="search order" ref={searchRef}/>
            <Button color="dark" type="submit">submit</Button>
          </form>
        </Group>
      </Group>
      <OrdersTable orders={display} activePage={activePage}/>
      <Center>
        <Pagination
          page={activePage}
          onChange={setPage}
          total={Math.ceil(numOfPages / 20)}
          color="gray"
          size="sm"
          radius="xs"
        />
      </Center>
    </Container>
  )
}