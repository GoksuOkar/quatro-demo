import { Select, NumberInput, TextInput, Space, Group, Grid, Stack, Checkbox, Radio, Container } from '@mantine/core';

export default function FoilSpecs({ form }) {
  return (
    <>
      <h3>FOIL</h3>
      <Select
        label="Style:"
        allowDeselect
        placeholder='pick one'
        data={[
          { value: 'GINXU', label: 'GINXU' },
          { value: 'STD Wing', label: 'STD Wing' },
          { value: 'Down Wind', label: 'Down Wind' },
          { value: 'SUP/Sweeper', label: 'SUP/Sweeper' },
        ]}
        {...form.getInputProps('style')}
      />

        <Group>
          <NumberInput
            label='Length(ft):'
            {...form.getInputProps('lengthFt')}
          />
          <NumberInput
            label='Length(in):'
            {...form.getInputProps('lengthIn')}
          />
          <NumberInput
            label="Width(in):"
            placeholder='inches'
            {...form.getInputProps('width')}
          />
          <NumberInput
            label="Thickness(in):"
            placeholder='inches'
            {...form.getInputProps('thickness')}
          />
          <NumberInput
            label="Volume(lt):"
            placeholder='lt'
            {...form.getInputProps('volume')}
          />
        </Group>
        <Group>
          <Select
          label="Blank:"
          placeholder='pick one'
          allowDeselect
          data={[
            { value: 'EPS/Sandwich', label: 'EPS/Sandwich' },
            { value: 'EPS Custom', label: 'EPS Custom' },
            { value: 'Other', label: 'Other' },
          ]}
          {...form.getInputProps('blank')}
        />
          <Select
          label="Construction:"
          placeholder='pick one'
          allowDeselect
          data={[
            { value: 'STD Carbon EPS', label: 'STD Carbon EPS' },
            { value: 'Custom', label: 'Custom' },
          ]}
          {...form.getInputProps('construction')}
        />
          <NumberInput
          label="Stance:"
          {...form.getInputProps('stance')}
          min={11}
          max={20}
        />
        </Group>

        <Group>
          <Select
            label="Logo:"
            placeholder='pick one'
            allowDeselect
            data={[
              { value: 'black', label: 'black' },
              { value: 'blue', label: 'blue' },
              { value: 'red', label: 'red' },
              { value: 'white', label: 'white' },
              { value: 'Production Team', label: 'Production Team' },
            ]}
            {...form.getInputProps('logo')}
          />
          <Select
            label="Board Color:"
            placeholder='pick one'
            allowDeselect
            data={[
              { value: 'Tint', label: 'Tint' },
              { value: 'Clear Carbon Const Lines', label: 'Clear Carbon Const Lines' },
              { value: 'Paint', label: 'Paint' },
              { value: 'Custom', label: 'Custom' },
            ]}
            {...form.getInputProps('boardColor')}
          />
          <Select
            label="Box Type:"
            placeholder='pick one'
            allowDeselect
            data={[
              { value: 'STD Foil Plate', label: 'STD Foil Plate' },
              { value: 'Long Foil Plate', label: 'Long Foil Plate' },
              { value: 'Tuttle', label: 'Tuttle' },
            ]}
            {...form.getInputProps('boxType')}
          />
          <TextInput
            label='Box Location'
            placeholder='type in inches'
            {...form.getInputProps('boxLocation') }
          />
        </Group>

        <Group>
          <Select
            label="Inserts:"
            placeholder='pick one'
            allowDeselect
            data={[
              { value: 'single', label: 'single' },
              { value: 'double', label: 'double' },
              { value: 'single/double', label: 'single/double' },
              { value: 'see notes', label: 'see notes' },
              { value: 'none', label: 'none' },
            ]}
            {...form.getInputProps('inserts')}
          />
          <Select
            label="Rear Inserts From Tail:"
            placeholder='pick one'
            allowDeselect
            data={[
              { value: '6', label: '6' },
              { value: '7', label: '7' },
              { value: '7 1/2', label: '7 1/2' },
              { value: '8', label: '8' },
              { value: '8 1/2', label: '8 1/2' },
              { value: '9', label: '9' },
              { value: '9 1/2', label: '9 1/2' },
              { value: 'see notes', label: 'see notes' },
              { value: 'none', label: 'none' },
            ]}
            {...form.getInputProps('rearInsertsFromTail')}
          />
          <Select
            label="Strap Width:"
            placeholder='pick one'
            allowDeselect
            data={[
              { value: '5', label: '5' },
              { value: '5 1/4', label: '5 1/4' },
              { value: '5 1/2', label: '5 1/2' },
              { value: '5 3/4', label: '5 3/4' },
              { value: '6', label: '6' },
              { value: '6 1/4', label: '6 1/4' },
              { value: '6 1/2', label: '6 1/2' },
              { value: 'see notes', label: 'see notes' },
              { value: null, label: 'none' },
            ]}
            {...form.getInputProps('strapWidth')}
          />
          <Select
            label="Wave/Location:"
            placeholder='pick one'
            data={[
              { value: 'Harbor Freeride', label: 'Harbor Freeride'},
              { value: 'Offshore', label: 'Offshore'},
              { value: 'Wave', label: 'Wave'},
              { value: 'xl-xxl', label: 'xl-xxl' },
              { value: 'Other', label: 'Other' },
            ]}
            {...form.getInputProps('waveLocation')}
          />
        </Group>
        <Group align="center" spacing={80}>
          <Radio.Group
            name='Leash'
            label='Leash:'
            // orientation='vertical'
            {...form.getInputProps('leash')}
          >
            <Radio size='sm' value='Deck' label='Deck'/>
            <Radio size='sm' value='Bottom' label='Bottom'/>
            <Radio size='sm' value='No' label='No'/>
          </Radio.Group>
          <Radio.Group
            name='Pads'
            label='Pads:'
            {...form.getInputProps('pads')}
          >
            <Radio size='sm' value='Yes' label='Yes'/>
            <Radio size='sm' value='No' label='No'/>
            <Radio size='sm' value='Custom' label='Custom'/>
          </Radio.Group>
        </Group>
        <Space h="md"/>
        <Checkbox
          labelPosition="left"
          label="Handle:"
          {...form.getInputProps('handle', {type: 'Checkbox'})}
        />
    </>
  )
}