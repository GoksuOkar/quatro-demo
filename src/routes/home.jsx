import { Group, Center, Container, Stack } from '@mantine/core';

export default function Home() {
  return (
    <Container>
      <Center>
        <h1>Forward Maui</h1>
      </Center>
      <Stack>
        <Center>search bar</Center>
        <Center>
          <a href={`new-order`}>New order</a>
        </Center>
      </Stack>
    </Container>
  )
}