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

  const [newCustomer, setNewCustomer] = useState({});
  const searchRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    Axios.get('/customers').then((res) => setCustomers(res.data));
  }, [])

  const goToOrders = () => {
    navigate('/orders');
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
              <Button color="dark" onClick={goToOrders}>View Orders</Button>
            </Center>
            <Space h="lg"/>
            <Stack>
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
          </Stack>
        </>
      )}
        {(customer._id === undefined && customer.firstName)&& <NewCustomerOrder
      customer={customer} newCustomer={newCustomer} setNewCustomer={setNewCustomer}/>}
        {customer._id && <CurrentCustomerOrder customer={customer}/>}
    </Container>
  )
}