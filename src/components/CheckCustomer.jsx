import { useForm } from '@mantine/form';
import { TextInput, Center, Button, Stack } from '@mantine/core';

export default function CheckCustomer() {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: ""
    },
    validate: (values) => {
      return {
        firstName: values.firstName.trim().length < 2 ? 'Name must include at least 2 characters' : null,
        lastName: values.lastName.trim().length < 2 ? 'Name must include at least 2 characters' : null,
      }
    }
  })

  const handleClick = () => {
    if (!form.validate().hasErrors) {
      console.log(form.values);
      //make axios call here
    }
  }

  return (
    <Stack>
      <Center>Enter Customer Name</Center>
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
        <Button onClick={handleClick}>
          Submit
        </Button>
      </Center>
    </Stack>
  )
}