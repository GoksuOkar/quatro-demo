import { Group, Center, Container, Stack, Button, TextInput, Modal, Alert } from '@mantine/core';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NewCustomerOrder from '../components/NewCustomerOrder';
import CheckCustomer from '../components/CheckCustomer';
import CurrentCustomerOrder from '../components/CurrentCustomerOrder';


export default function Home() {
  const [opened, setOpened] = useState(false);
  const [customer, setCustomer] = useState({});
  const [orders, setOrders] = useState([]);
  const [newCustomer, setNewCustomer] = useState({});
  const searchRef = useRef(null);

  const Axios = axios.create({baseURL: 'http://localhost:3000'});

  const navigate = useNavigate();

  const handleSubmit = () => {
    let input = searchRef.current.value.toLowerCase();
    if (input === "surf" || input === "windsurf" || input === "foil") {
      Axios.get(`/orders/${input}`).then((res) => {
        console.log(res.data);
        if (Array.isArray(res.data) && res.data.length > 0) {
          navigate('/orders', {state: {orders: res.data}})
        } else {
          alert("Orders not found");
        }
      })
    } else {
      let inputModified = input.split(' ');
      let firstName = inputModified[0];
      let lastName = inputModified[1];
      Axios.get(`/${firstName}-${lastName}/orders`).then((res) => {
        console.log(res.data);
        if (Array.isArray(res.data) && res.data.length > 0) {
          navigate('/orders', {state: {orders: res.data}})
        } else {
          alert("Customer Not Found. Make sure you entered the first and last name.")
        }
      });
    }
  }

  return (
    <Container>
      {customer.firstName === undefined && (
        <>
          <Center>
            <h1>Forward Maui</h1>
          </Center>
          <Stack>
            <Center>
              <TextInput placeholder="search" ref={searchRef}/>
              <Button color="dark" onClick={handleSubmit}>submit</Button>
            </Center>
            <Center>
              <Modal
                opened={opened}
                onClose={() => setOpened(false)}
              >
                <CheckCustomer setCustomer={setCustomer} setOpened={setOpened}  customer={customer}/>
            </Modal>
              <Button
                variant="outline"
                color="dark"
                onClick={() => setOpened(true)}
              >
                New Order
              </Button>
            </Center>
          </Stack>
        </>
      )}
        {(customer._id === undefined && customer.firstName)&& <NewCustomerOrder
      customer={customer} newCustomer={newCustomer} setNewCustomer={setNewCustomer}/>}
        {customer._id && <CurrentCustomerOrder customer={customer}/>}
    </Container>
  )
}