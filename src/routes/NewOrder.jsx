import {
  TextInput,
  NumberInput,
  Textarea,
  Checkbox,
  Radio,
  Button,
  Group,
  Container,
  Space,
  Divider,
  Stepper,
  Select,
  Code
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { Carousel } from '@mantine/carousel';
import { useState } from 'react';
import SurfSpecs from '../components/SurfSpecs.jsx';
import FoilSpecs from '../components/FoilSpecs.jsx';
import WindsurfSpecs from '../components/WindsurfSpecs.jsx';

export default function NewOrder() {
  const [active, setActive] = useState(0);
  const [boardType, setBoardType] = useState('Surf');

  const form = useForm({
    initialValues: {
      intro: '',
      customerType: '',
      firstName: '',
      lastName: '',
      current: false,
      orderType: 'Surf',
      approvedBy: '',
      phone: '',
      email: '',
      address: '',
      weight: null,
      heightFt: 0,
      heightIn: 0,
      level: '',
      style: '',
      lengthFt: 0,
      lengthIn:0,
      width: 0,
      thickness: 0,
      volume: 0,
      tail: '',
      blank: '',
      construction: '',
      boardColor: '',
      finSetup: '',
      boxType: '',
      boxColor: '',
      inserts: '',
      rearStrap: '',
      strapWidth: 0,
      stance: '',
      leash: '',
      pads: '',
      waveLocation: '',
      finFromTail: '',
      boxLocation: '',
      rearInsertsFromTail: '',
      handle: false,
    },

    transformValues: (values) => ({
      height: `${values.heightFt}ft ${values.heightIn}`,
      length: `${values.lengthFt}ft ${values.lengthIn}`
    }),

    validate: (values) => {
      if (active === 0) {
        return {
          firstName: values.firstName.trim().length < 2 ? 'Name must include at least 2 characters' : null,
        }
      }
      if (active === 1) {
        return {
          email: /^\S+@\S+$/.test(values.email) ? null : 'Invalid email',
        }
      }
      return {};
    },
  });

  // goes to next step in form, if it's validated
  const nextStep = () => {
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current;
      }
      return current < 3 ? current + 1 : current;
    });
    setBoardType(form.values.orderType)
  };

  // goes to previous step in form
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  // cannot navigate to next step, using stepper, if not validated
  const changeToActive = (val) => {
    setActive((current) => {
      if (form.validate().hasErrors) {
        return val < current ? val : current;
      }
      return val;
    })
    setBoardType(form.values.orderType);
  };


  return (
    <Container>
      <h1>NEW ORDER FORM</h1>
        <Stepper active={active} breapoint='sm' onStepClick={(val) => changeToActive(val)}>
          <Stepper.Step description='Intro'>
            <Radio.Group
              name='intro'
              defaultValue={['walk in']}
              label='INTRO'
              withAsterisk
              {...form.getInputProps('intro')}
            >
              <Radio size='sm' value='walk in' label='walk in'/>
              <Radio size='sm' value='phone' label='phone'/>
              <Radio size='sm' value='email' label='email'/>
              <Radio size='sm' value='website' label='website'/>
            </Radio.Group>
            <Group>
              <TextInput
                withAsterisk
                label="First Name"
                {...form.getInputProps('firstName')}
              />
              <TextInput
                withAsterisk
                label="Last Name"
                {...form.getInputProps('lastName')}
              />
            </Group>
            <Space h="md"/>
            <Checkbox
              label="This is a new customer"
              {...form.getInputProps('current', {type: 'Checkbox'})}
            />
            <Radio.Group
              name='order type'
              defaultValue={['walk in']}
              label='Order Type'
              withAsterisk
              onChange={() => console.log('change')}
              {...form.getInputProps('orderType')}
            >
              <Radio size='sm' value='Surf' label='Surf'/>
              <Radio size='sm' value='Windsurf' label='Windsurf'/>
              <Radio size='sm' value='Foil' label='Foil'/>
            </Radio.Group>
            <Radio.Group
              name='customer type'
              defaultValue={['retail']}
              label='Customer Type'
              withAsterisk
              {...form.getInputProps('customerType')}
            >
              <Radio size='sm' value='retail' label='Retail'/>
              <Radio size='sm' value='team' label='Team'/>
              <Radio size='sm' value='gratis' label='Gratis'/>
              <Radio size='sm' value='wholesale' label='Wholesale'/>
            </Radio.Group>

            <Select
              label="Approved By (only for team and gratis orders)"
              allowDeselect
              placeholder="Approved by"
              data={[
                { value: 'lalo', label: 'Lalo' },
                { value: 'francisco', label: 'Francisco' },
                { value: 'pascal', label: 'Pascal' },
                { value: 'keith', label: 'Keith' },
              ]}
              {...form.getInputProps('approvedBy')}
            />
          </Stepper.Step>

          <Stepper.Step description='contact info'>
            <TextInput
              withAsterisk
              label="Customer Email"
              placeholder="customer@email.com"
              {...form.getInputProps('email')}
            />
            <TextInput
              label="Phone Number"
              {...form.getInputProps('phone')}
            />
            <Textarea
              placeholder='customer address'
              label='Address'
              {...form.getInputProps('address')}
            />
          </Stepper.Step>

          <Stepper.Step description="rider info">
            <NumberInput
              label="Weight:"
              hideControls
              placeholder="weight in lb"
              {...form.getInputProps('weight')}
            />
            <Group>
              <NumberInput
                label="Ft:"
                placeholder="ft"
                {...form.getInputProps('heightFt')}
              />
              <NumberInput
                label="Inch:"
                placeholder="in"
                {...form.getInputProps('heightIn')}
              />
            </Group>
            <Select
              label="Level"
              allowDeselect
              placeholder="pick one"
              data={[
                { value: 'entry', label: 'entry' },
                { value: 'intermediate', label: 'intermediate' },
                { value: 'advanced', label: 'advanced' },
                { value: 'pro', label: 'pro' },
              ]}
              {...form.getInputProps('level')}
            />
          </Stepper.Step>

          <Stepper.Step description="Board Specs">
            {boardType === "Surf" ? (
              <SurfSpecs form={form}/>
            ) : boardType === "Windsurf" ? (<WindsurfSpecs form={form}/>) : (<FoilSpecs form={form}/>)}
          </Stepper.Step>

        <Stepper.Completed>
          Completed! Form values:
          <Code block mt="xl">
            {JSON.stringify(form.values, null, 2)}
          </Code>
        </Stepper.Completed>
        </Stepper>
        <Group position="right" mt="xl">
          {active !== 0 && (
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
          )}
          {active < 3 && <Button onClick={nextStep}>Next step</Button>}
          {active === 3 && <Button onClick={nextStep}>Finish Order</Button>}
        </Group>
    </Container>
  )
};