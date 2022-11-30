import { Group, Center, Container, Stack, Button } from '@mantine/core';

export default function Home() {
  return (
    <Container>
      <Center>
        <h1>Forward Maui</h1>
      </Center>
      <Stack>
        <Center>search bar</Center>
        <Center>ORDERS</Center>
        <Center>
          <Button>New Customer</Button>
          <Button>Current Customer</Button>
        </Center>
        <Center>
          <a href={`new-order`}>New order</a>
        </Center>
      </Stack>
    </Container>
  )
}