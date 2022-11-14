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
  Select
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { Carousel } from '@mantine/carousel';
import { useState } from 'react';
import SurfSpecs from '../components/SurfSpecs.jsx';
// import FoilSpecs from '../components/FoilSpecs.jsx';
// import WindsurfSpecs from '../components/WindsurfSpecs.jsx';

export default function NewOrder() {
  const [active, setActive] = useState(0);
  const [boardType, setBoardType] = useState(null);

  const form = useForm({
    initialValues: {
      intro: '',
      customerType: '',
      firstName: '',
      lastName: '',
      current: false,
      orderType: '',
      approvedBy: '',
      phone: '',
      email: '',
      address: '',
      weight: null,
      height: null,
      level: '',
      style: '',
      length: 0,
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
      waves: '',
      finFromTail: '',
      boxLocation: '',
      rearInsertsFromTail: '',
      handle: false,
    },

    validate: (values) => {
      if (active === 1) {
        return {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        }
      }

      return {};
    },
  });

  const nextStep = () => {
    setActive(active + 1)
    setBoardType(form.values.orderType)
  };

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));


  return (
    <Container>
      <h1>NEW ORDER FORM</h1>
        <Stepper active={active} breapoint='sm'>
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
            <NumberInput
              label="Height:"
              hideControls
              placeholder="Height in inches"
              {...form.getInputProps('height')}
            />
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
            ) : boardType === "Windsurf" ? (<div>windsurf</div>) : (<div>foil</div>)}
          </Stepper.Step>

        </Stepper>
        <Group position="right" mt="xl">
          {active !== 0 && (
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
          )}
          {active !== 3 && <Button onClick={nextStep}>Next step</Button>}
        </Group>
    </Container>
  )
};