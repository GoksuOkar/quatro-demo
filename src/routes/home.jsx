import { Group } from '@mantine/core';

export default function Home() {
  return (
    <div>
      <h1>Forward Maui</h1>
      <Group>
        <div>search bar</div>
        <a href={`new-order`}>New order</a>
      </Group>
    </div>
  )
}