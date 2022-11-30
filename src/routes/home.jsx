import { Group, Center, Container, Stack, Button, TextInput, Modal } from '@mantine/core';
import { useState } from 'react';
import NewOrder from './NewOrder';
import CheckCustomer from '../components/CheckCustomer';

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [customer, setCustomer] = useState({});
  const [current, setCurrent] = useState(false);

  return (
    <Container>
      {!current && (
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
                <CheckCustomer setCustomer={setCustomer} setOpened={setOpened} setCurrent={setCurrent}/>
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
        {current && <NewOrder customer={customer}/>}
        {/* <Center>
          <a href={`new-order`}>
            <Button variant="outline" color="dark">New Customer</Button>
          </a>
        </Center>
        <Center>
          <Button variant="outline" color="dark">Current Customer</Button>
        </Center> */}
    </Container>
  )
}