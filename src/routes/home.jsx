import { Group, Center, Container, Stack, Button, Modal, Alert, Space, Text } from '@mantine/core';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NewCustomerOrder from '../components/NewCustomerOrder';
import CustomerListModal from '../components/CustomerListModal';
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

  const goToCustomers = () => {
    navigate('/customers', {state: {customers: customers}});
  }

  return (
    <div className='home'>
      {customer.firstName === undefined && (
        <>
          <Center mb="35px" >
            <div className='title'>Forward Maui</div>
          </Center>
          <Stack>
            <Center>
              <Group spacing="lg">
                <button className='voc-button' onClick={goToOrders}>View Orders</button>
                <button className='voc-button' onClick={goToCustomers}>View Customers</button>
              </Group>
            </Center>
            <Space h="lg" />
            <Stack
              sx={(theme) => ({
                paddingTop: "5px",
                paddingBottom: "10px",
                borderColor: "white",
              })}
            >
              <Center>
                <div className='sub-text'>New Order</div>
              </Center>
              <Center>
                <Group>
                  <Modal opened={opened} onClose={() => setOpened(false)}>
                    <CheckCustomer
                      setCustomer={setCustomer}
                      setOpened={setOpened}
                      customer={customer}
                    />
                  </Modal>
                  <button className='n-e-c-button' onClick={() => setOpened(true)}>New Customer</button>
                  <Modal
                    opened={existingOpened}
                    onClose={() => setExistingOpened(false)}
                  >
                    <CustomerListModal
                      customers={customers}
                      setExistingOpened={setExistingOpened}
                      setCustomer={setCustomer}
                    />
                  </Modal>
                  <button className='n-e-c-button' onClick={() => setExistingOpened(true)}>Existing Customer</button>
                </Group>
              </Center>
            </Stack>
          </Stack>
        </>
      )}
      {customer._id === undefined && customer.firstName && (
        <NewCustomerOrder
          customer={customer}
          newCustomer={newCustomer}
          setNewCustomer={setNewCustomer}
        />
      )}
      {customer._id && <CurrentCustomerOrder customer={customer} />}
    </div>
  );
}