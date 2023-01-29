import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const [type, setType] = useState("all");
  const [numOfPages, setNumOfPages] = useState(0);
  const [orders, setOrders] = useState([]);
  const [displayed, setDisplayed] = useState([])
  const searchRef = useRef(null);

  useEffect(() => {
    const types = ["surf", "windsurf", "foil"];
    if (types.includes(type)) {
      Axios.get(`/orders/${type}`)
        .then((res) => {
          setOrders(res.data)
          setNumOfPages(res.data.length)
        })
        .catch((err) => {console.log(err)})
    } else {
      Axios.get(`/orders`)
        .then((res) => {
          setOrders(res.data)
          setNumOfPages(res.data.length)
        })
        .catch((err) => {console.log(err)})
    }
  }, [type])

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
    <Container>
      <a href={`/`}>Home</a>
      <Group>
        <Radio.Group
        value={type}
        onChange={setType}
        spacing="xs"
      >
        <Radio value="all" label="All" />
        <Radio value="surf" label="Surf" />
        <Radio value="windsurf" label="Windsurf" />
        <Radio value="foil" label="Foil" />
      </Radio.Group>
        <form>
          <Group>
            <TextInput placeholder="search order" ref={searchRef}/>
            <Button color="dark" type="submit">submit</Button>
          </Group>
        </form>
      </Group>
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
      {numOfPages > 20 ? (
        <Center>
          <Pagination
            page={activePage}
            onChange={setPage}
            total={numOfPages / 20}
            color="gray"
            size="sm"
            radius="xs"
          />
        </Center>
        ) : null}
    </Container>
  )
}