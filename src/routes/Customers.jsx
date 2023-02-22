import { useLocation } from 'react-router-dom';
import { Table, Center, Container } from '@mantine/core';
import { convertDate, capitalizeFirstLetter } from '../utils/helpers.js';


export default function Customers() {
  const location = useLocation();
  const customers = location.state.customers;

  const rows = customers.map((customer) => (
    <tr key={customer._id}>
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