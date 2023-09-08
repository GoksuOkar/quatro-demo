import { useForm } from '@mantine/form';
import { TextInput, Center, Button, Stack } from '@mantine/core';
import { Axios } from '../utils/helpers.js';
import axios from 'axios';

export default function CheckCustomer({ setCustomer, setOpened, customer }) {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: ""
    },

    //gets rid of white space around if any
    transformValues: (values) => ({
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
    }),

    validate: (values) => {
      return {
        firstName: values.firstName.trim().length < 2 ? 'Name must include at least 2 characters' : null,
        lastName: values.lastName.trim().length < 2 ? 'Name must include at least 2 characters' : null,
      }
    }
  })

  // handles submission, setting state for customer name
  const handleClick = (values) => {
    let { firstName, lastName } = values;
    firstName = firstName.toLowerCase();
    lastName = lastName.toLowerCase();
    if (!form.validate().hasErrors) {
      Axios.get(`/customers/${firstName}-${lastName}`)
        .then((result) => {
          if (result.data) {
            setCustomer(result.data);
            setOpened(false);
          } else {
            console.log(result.data);
            setCustomer({firstName, lastName});
            setOpened(false);
          }
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <Stack>
      <Center>Enter Customer Name</Center>
      <form 
        onSubmit={form.onSubmit((values) => { 
          handleClick(values) 
        })}>
        <Stack>
        <TextInput
            placeholder="type here"
            label="First Name"
            {...form.getInputProps('firstName')}
          />
          <TextInput
            placeholder="type here"
            label="Last Name"
            {...form.getInputProps('lastName')}
          />
          <Button color="dark" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}