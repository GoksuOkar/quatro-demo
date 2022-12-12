import { Group, Center, Container, Stack, Button, TextInput, Modal } from '@mantine/core';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NewCustomerOrder from '../components/NewCustomerOrder';
import CheckCustomer from '../components/CheckCustomer';
import CurrentCustomerOrder from '../components/CurrentCustomerOrder';
import { Navigate } from "react-router-dom";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [customer, setCustomer] = useState({});
  const [orders, setOrders] = useState([]);
  const [newCustomer, setNewCustomer] = useState({});

  const auth = {'token': true};

  const Axios = axios.create({baseURL: 'http://localhost:3000'});

  const handleCustomerOrdersView = (name) => {
    //seperate to first name and last name
    //Axios.get(`/orders/${firstName}-${lastName}`)
  }

  return (
    auth.token ? (
      <Container>
        {customer.firstName === undefined && (
          <>
            <Center>
              <h1>Forward Maui</h1>
            </Center>
            <Stack>
              <Center>
                <TextInput placeholder="search"/>
                <Button color="dark" type="submit">submit</Button>
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
    ) : <Navigate to="/login"/>
  )
}