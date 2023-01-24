import PdfWS from '../components/PdfWS.jsx';
import PdfSurf from '../components/PdfSurf.jsx';
import PdfFoil from '../components/PdfFoil.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';
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
// import { OrderPDF } from '../components/OrderPDF.jsx';
import SurfSpecs from './SurfSpecs.jsx';
import FoilSpecs from './FoilSpecs.jsx';
import WindsurfSpecs from './WindsurfSpecs.jsx';
import { Axios } from '../utils/helpers.js';

// const regexFt = /'/ig;
// const regexIn = /"/ig;

export default function NewCustomerOrder({ customer, newCustomer, setNewCustomer }) {
  const [active, setActive] = useState(0);
  const [boardType, setBoardType] = useState('Surf');
  const [orderNum, setOrderNum] = useState('');

  useEffect(() => {
    form.setFieldValue('firstName', customer.firstName);
    form.setFieldValue('lastName', customer.lastName);
  }, [])

  const form = useForm({
    initialValues: {
      intro: 'walk in',
      customerType: 'retail',
      firstName: '',
      lastName: '',
      orderType: 'surf',
      approvedBy: '',
      phone: '',
      email: '',
      address: '',
      weight: 0,
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
      logo:'',
      inserts: '',
      rearStrap: '',
      strapWidth: 0,
      stance: 0,
      leash: '',
      pads: '',
      waveLocation: '',
      finFromTail: '',
      boxLocation: '',
      rearInsertsFromTail: '',
      handle: false,
    },

    // transformValues: (values) => ({
    //   rearStrap: `${values.rearStrap.replaceAll(regexFt, "ft").replaceAll(regexIn, "in")}`
    // }),

    validate: (values) => {
      if (active === 0) {
        return {
          firstName: values.firstName.trim().length < 2 ? 'Name must include at least 2 characters' : null,
          lastName: values.lastName.trim().length < 2 ? 'Name must include at least 2 characters' : null,
          approvedBy: ((values.customerType === 'team' || values.customerType === 'gratis') && values.approvedBy === '') ? 'Must select approval for team and gratis riders': null,
        }
      }
      if (active === 1) {
        return {
          email: (/^\S+@\S+$/.test(values.email) || values.phone.trim().length > 8 || values.address.trim().length > 8) ? null : 'must fill at least one field',
          // phone: (values.phone.trim().length < 8 && /^\S+@\S+$/.test(values.email) && ) ? 'must fill at least one field' : null,
        }
      }
      if(active === 2) {
        return ({
          weight: values.weight < 30 ? 'Enter valid weight' : null,
          heightFt: values.heightFt <= 0 ? 'Enter valid height' : null,
          heightIn: values.heightIn < 0 ? 'Enter valid height' : null,
          level: values.level === '' ? 'Level must be picked' : null,
        })
      }
      if(active === 3) {

        const commonValidationValues = {
          style: values.style === '' ? 'Style must be picked' : null,
          volume: values.volume <= 0 ? 'Enter valid volume' : null,
          blank: values.blank === '' ? 'Blank must be picked' : null,
          construction: values.construction === '' ? 'Construction must be picked' : null,
          boardColor: values.boardColor === '' ? 'Board color must be picked' : null,
          logo: values.logo === '' ? 'Logo color must be picked' : null,
          inserts: values.inserts === '' ? 'Inserts must be picked' : null,
          waveLocation: values.waveLocation === '' ? 'Location must be picked' : null,
          pads: values.pads === '' ? 'Pick pads' : null,
          stance: values.stance <= 0 ? 'Enter valid stance' : null,
          boxType: values.boxType === '' ? 'Box type must be picked' : null,
          strapWidth: values.strapWidth <= 0 ? 'Strap width must be picked' : null,
        }

        const surfValidationValues = {
          tail: values.tail === '' ? 'Tail must be picked' : null,
          lengthFt: values.lengthFt <= 0 ? 'Enter valid length' : null,
          lengthIn: values.lengthIn < 0 ? 'Enter valid length' : null,
          finSetup: values.finSetup === '' ? 'Fin setup must be picked' : null,
          boxColor: values.boxColor === '' ? 'Box color must be picked' : null,
          rearStrap: values.rearStrap === '' ? 'Rear Strap must be picked' : null,
          leash: values.leash === '' ? 'Pick leash' : null,
        }

        const windsurfValidationValues = {
          tail: values.tail === '' ? 'Tail must be picked' : null,
          finSetup: values.finSetup === '' ? 'Fin setup must be picked' : null,
        }

        const foilValidationValues = {
          leash: values.leash === '' ? 'Pick leash' : null,
          boxLocation: values.boxLocation === '' ? 'Must be entered' : null,
          rearInsertsFromTail: values.rearInsertsFromTail === '' ? 'Pick one' : null,
        }


        if (values.orderType === 'surf') {
          return ({
            ...commonValidationValues, ...surfValidationValues
          })
        } else if (values.orderType === 'windsurf') {
          return({
            ...commonValidationValues, ...windsurfValidationValues
          })
        } else {
          return({
            ...commonValidationValues, ...foilValidationValues
          })
        }
      }
      return {};
    },
  });

  // form.setFieldValue('firstName', customer.firstName);
  // form.setFieldValue('lastName', customer.lastName);

  // goes to next step in form, if it's validated
  const nextStep = () => {
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current;
      }
      return current < 4 ? current + 1 : current;
    });
    setBoardType(form.values.orderType)
  };

  // save rider info to database
    const toBoardSpecs = () => {
      setActive((current) => {
        if (form.validate().hasErrors) {
          return current;
        }
        return current < 4 ? current + 1 : current;
      });
    }

  //post values to database
  //WIP > CHANGED ALL FORM.VALUES TO VALUES
  const storeNewCustomerOrder = () => {
    Axios.post('/customers', form.values)
    .then((result) => {
      setNewCustomer(result.data);
      let customerId = result.data._id;
      let customerName = result.data.firstName + ' ' + result.data.lastName;
      let date = new Date();
      Axios.post('/orders', { ...form.values, customerId, customerName, date })
        .then((result) => {
          console.log(result.data.orderId);
          setOrderNum(`FM00${result.data.orderId}`)
        })
    })
    .catch(err => console.log(err));
  }

  // finishes order and post to database if the form is complete
  const finishOrder = () => {
    if (!form.validate().hasErrors) {
      if (orderNum === '' || orderNum === undefined) {
        storeNewCustomerOrder();
      }
      // else update order!
      setActive((current) => {
        if (form.validate().hasErrors) {
          return current;
        }
        return current < 4 ? current + 1 : current;
      });
    }
  }

  // goes to previous step in form
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  // cannot navigate to next step, using stepper, if not validated
  const changeToActive = (val) => {
    setActive((current) => {
      if (form.validate().hasErrors) {
        return val < current ? val : current;
      }
      return current;
    })
    setBoardType(form.values.orderType);
  };

  const handleGeneratePdf = () => {
    window.print();
  };


  return (
    <div>
      <a href={`/`}>Home</a>
      <Container>
          <h1>New Customer Order</h1>
          <Stepper color="dark" size="sm" active={active} breapoint='sm' onStepClick={(val) => changeToActive(val)}>
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
              <Radio.Group
                name='order type'
                label='Order Type'
                withAsterisk
                onChange={() => console.log('change')}
                {...form.getInputProps('orderType')}
              >
                <Radio size='sm' value='surf' label='Surf'/>
                <Radio size='sm' value='windsurf' label='Windsurf'/>
                <Radio size='sm' value='foil' label='Foil'/>
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
                  min={0}
                  max={12}
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
              {boardType === "surf" ? (
                <SurfSpecs form={form}/>
              ) : boardType === "windsurf" ? (<WindsurfSpecs form={form}/>) : (<FoilSpecs form={form}/>)}
            </Stepper.Step>

          <Stepper.Completed>
            {boardType === "surf" ? (
                <PdfSurf values={form.values} orderNum={orderNum} customer={newCustomer}/>
              ) : boardType === "windsurf" ?
              (<PdfWS values={form.values} orderNum={orderNum} customer={newCustomer}/>) : (<PdfFoil values={form.values} orderNum={orderNum} customer={newCustomer}/>)
            }
          </Stepper.Completed>
          </Stepper>
          <Group position="right" mt="xl">
            {(active !== 0 && active < 3) && (
              <Button color="dark" variant="default" onClick={prevStep}>
                Back
              </Button>
            )}
            {active < 3 && <Button color="dark" onClick={nextStep}>Next step</Button>}
            {active === 3 && <Button color="dark" onClick={finishOrder}>Finish Order</Button>}
            {active > 3 && <Button color="dark" onClick={handleGeneratePdf}>Save/Print</Button>}
          </Group>
      </Container>
    </div>
  )
};