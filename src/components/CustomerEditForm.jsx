import { useForm } from '@mantine/form';
import { useEffect } from "react";
import {Container, TextInput, Textarea} from '@mantine/core';

export default function CustomerEditForm({customerValues}) {
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
      <TextInput
        label="First Name:"
        {...form.getInputProps("firstName")}
      />
      <TextInput
        label="Last Name:"
        {...form.getInputProps("lastName")}
      />
      <TextInput
        label="Email:"
        {...form.getInputProps("email")}
      />
      <TextInput
        label="Phone Number:"
        placeholder="808-888-8888"
        {...form.getInputProps("phone")}
      />
      <Textarea label="Address:" {...form.getInputProps("address")} />
    </Container>
  );
}