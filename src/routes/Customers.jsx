import { useLocation, useNavigate } from 'react-router-dom';
import { Table, Center, Container } from '@mantine/core';
import { convertDate, capitalizeFirstLetter } from '../utils/helpers.js';
import { useState } from 'react';
import CustomerEditForm from '../components/CustomerEditForm';

export default function Customers() {
  const location = useLocation();
  const navigate = useNavigate();

  const customers = location.state.customers;

  const editCustomer = (c) => {
    navigate('/customer/edit', {state: {customer: c}})
  };

  const rows = customers.map((customer) => (
    <tr key={customer._id} onClick={() => editCustomer(customer)}>
      <td>{capitalizeFirstLetter(customer.firstName)}</td>
      <td>{capitalizeFirstLetter(customer.lastName)}</td>
    </tr>
  ))

  return (
    <Center>
      <Container>
        <Table highlightOnHover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Container>
    </Center>
  );
}