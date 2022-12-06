import { useForm } from '@mantine/form';
import { TextInput, Center, Button, Stack } from '@mantine/core';
import axios from 'axios';

const customer = {
  firstName: 'goksu',
  lastName: 'okar',
}

export default function CheckCustomer({ setCustomer, setOpened }) {
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
    if (!form.validate().hasErrors) {
      axios.get(`/customers/${firstName}-${lastName}`, {baseURL:'http://localhost:3000'})
        .then((result) => {
          console.log(result);
          if (result.data) {
            setCustomer(result.data);
            setOpened(false);
          } else {
            setCustomer(values);
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
        onSubmit={form.onSubmit(
          (values) => handleClick(values)
          )}
      >
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
          <Button type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Stack>
  )
}