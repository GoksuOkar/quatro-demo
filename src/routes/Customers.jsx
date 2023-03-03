import { useLocation, useNavigate } from 'react-router-dom';
import { Table, Center, Container } from '@mantine/core';
import { convertDate, capitalizeFirstLetter, Axios } from '../utils/helpers.js';
import { useState, useEffect } from 'react';
import CustomerEditForm from '../components/CustomerEditForm';

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get('/customers').then((res) => setCustomers(res.data));
  }, [])

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
    <div>
      <a href={`/`}>Home</a>
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
    </div>
  );
}