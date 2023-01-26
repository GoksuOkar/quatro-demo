import { Group, Center, Container, Stack, Button, TextInput, Modal, Alert, Space } from '@mantine/core';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NewCustomerOrder from '../components/NewCustomerOrder';
import ExistingCustomer from '../components/existingCustomer';
import CheckCustomer from '../components/CheckCustomer';
import CurrentCustomerOrder from '../components/CurrentCustomerOrder';
import { Axios } from '../utils/helpers.js';


export default function Home() {
  const [customers, setCustomers] = useState([]);
  const [opened, setOpened] = useState(false);
  const [existingOpened, setExistingOpened] = useState(false);
  const [customer, setCustomer] = useState({});
  const [orders, setOrders] = useState([]);
  const [newCustomer, setNewCustomer] = useState({});
  const searchRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    Axios.get('/customers').then((res) => setCustomers(res.data));
  }, [])

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
              <TextInput placeholder="search order" ref={searchRef}/>
              <Button color="dark" onClick={handleSubmit}>submit</Button>
            </Center>
            <Space h="lg"/>
            <Center>
              New Order
            </Center>
            <Center>
              <Group>
                <Modal
                  opened={opened}
                  onClose={() => setOpened(false)}
                >
                  <CheckCustomer setCustomer={setCustomer} setOpened={setOpened} customer={customer}/>
                </Modal>
                <Button
                  color="dark"
                  variant="outline"
                  onClick={() => setOpened(true)}
                >
                  New Customer
                </Button>
                <Modal
                  opened={existingOpened}
                  onClose={() => setExistingOpened(false)}
                >
                  <ExistingCustomer
                    customers={customers}
                    setExistingOpened={setExistingOpened}
                    setCustomer={setCustomer}
                  />
                </Modal>
                <Button
                  color="dark"
                  variant="outline"
                  onClick={() => setExistingOpened(true)}
                >
                  Existing Customer
                </Button>
              </Group>
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