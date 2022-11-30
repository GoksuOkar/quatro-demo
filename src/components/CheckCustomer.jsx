import { useForm } from '@mantine/form';
import { TextInput, Center, Button, Stack } from '@mantine/core';
import axios from 'axios';

const customer = {
  firstName: 'goksu',
  lastName: 'okar',
}

export default function CheckCustomer({ setCustomer, setOpened, setCurrent }) {
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
    if (!form.validate().hasErrors) {
      console.log(form.values);
      setCustomer(values);
      setOpened(false);
      setCurrent(true);
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
        <Center>
          <Button type="submit">
            Submit
          </Button>
        </Center>
      </form>
    </Stack>
  )
}