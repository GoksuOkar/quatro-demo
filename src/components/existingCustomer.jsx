import { Stack, Card, Input } from '@mantine/core';
import { capitalizeFirstLetter } from '../utils/helpers.js';
import { useState } from 'react';

export default function ExistingCustomer({customers, setExistingOpened, setCustomer}) {
  const [customersHere, setCustomersHere] = useState(customers);

  const filterCustomer = (string) => {
    let newCustomers = [];
    for (let i = 0; i < customers.length; i++) {
      let firstName = customers[i].firstName.toLowerCase();
      let lastName = customers[i].lastName.toLowerCase();
      if (firstName.includes(string) || lastName.includes(string)) {
        newCustomers.push(customers[i])
      }
    }
    setCustomersHere(newCustomers);
  }

  const handleClick = (customer) => {
    setCustomer(customer);
  }

  return (
    <Stack>
      <Input
        onChange={(e) => filterCustomer((e.target.value).toLowerCase())}
      />
      {customersHere.map((customer) => (
        <Card
          key={customer._id}
          onClick={() => handleClick(customer)}
        >
          {`${capitalizeFirstLetter(customer.firstName)} ${capitalizeFirstLetter(customer.lastName)}`}
        </Card>
      ))}
    </Stack>
  )
}