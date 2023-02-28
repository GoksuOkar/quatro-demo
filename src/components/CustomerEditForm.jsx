import { useForm } from '@mantine/form';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Container, Center, TextInput, Textarea, Button, Group, Stack} from '@mantine/core';

export default function CustomerEditForm({customerValues}) {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      weight: 0,
      heightFt: 0,
      heightIn: 0,
      level: "",
    },
  });

  useEffect(() => {
    form.setValues(customerValues);
  }, [customerValues]);

  return (
    <Container>
      <Stack spacing="lg">
        <Center>
          <h1>Customer Form</h1>
        </Center>
        <TextInput label="First Name:" {...form.getInputProps("firstName")} />
        <TextInput label="Last Name:" {...form.getInputProps("lastName")} />
        <TextInput label="Email:" {...form.getInputProps("email")} />
        <TextInput
          label="Phone Number:"
          placeholder="808-888-8888"
          {...form.getInputProps("phone")}
        />
        <Textarea label="Address:" {...form.getInputProps("address")} />

        <Group spacing="lg" position="right">
          <Button color="dark">Save</Button>
          <Button color="dark" onClick={() => {navigate(-1)}}>Back</Button>
        </Group>
      </Stack>
    </Container>
  );
}