import { useState } from 'react';
import PdfFoil from '../components/PdfFoil';
import PdfWS from '../components/PdfWS';
import PdfSurf from '../components/PdfSurf';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Center, Button, Group } from '@mantine/core';

export default function OrderPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const order = location.state.order;
  const customer = location.state.customer;
  const orderNum = `FM00${order.orderId}`;

  return (
    <Center>
      <Container>
        {
          order.orderType === "surf" ? <PdfSurf values={order} orderNum={orderNum} customer={customer}/> : order.orderType === "windsurf" ?<PdfWS values={order} orderNum={orderNum} customer={customer}/> : <PdfFoil values={order} orderNum={orderNum} customer={customer}/>
        }
        <Center>
          <Group>
            <Button color="dark" onClick={() => window.print()}>Print/Save</Button>
            <Button color="dark" onClick={() => navigate('/')}>Go Home</Button>
            <Button color="dark">Edit</Button>
          </Group>
        </Center>
      </Container>
    </Center>
  )
}