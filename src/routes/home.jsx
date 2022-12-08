import { Group, Center, Container, Stack, Button, TextInput, Modal } from '@mantine/core';
import { useState, useEffect } from 'react';
import NewCustomerOrder from '../components/NewCustomerOrder';
import CheckCustomer from '../components/CheckCustomer';
import CurrentCustomerOrder from '../components/CurrentCustomerOrder';

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [customer, setCustomer] = useState({});

  return (
    <Container>
      {customer.firstName === undefined && (
        <>
          <Center>
            <h1>Forward Maui</h1>
          </Center>
          <Stack>
            <Center>
              <TextInput placeholder="search"/>
            </Center>
            <Center>
              <Modal
                opened={opened}
                onClose={() => setOpened(false)}
              >
                <CheckCustomer setCustomer={setCustomer} setOpened={setOpened}/>
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
       customer={customer} setCustomer={setCustomer}/>}
        {customer._id && <CurrentCustomerOrder customer={customer}/>}
    </Container>
  )
}