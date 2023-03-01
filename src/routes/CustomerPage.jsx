import { useLocation } from 'react-router-dom';
import { useEffect } from "react";
import { Container, Center } from '@mantine/core';
import CustomerEditForm from '../components/CustomerEditForm';

export default function CustomerPage() {
  const location = useLocation();
  const customer = location.state.customer;

  return (
    <Container>
      <CustomerEditForm customerValues={customer} />
    </Container>
  )
}