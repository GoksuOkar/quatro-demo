import { Select, NumberInput, TextInput, Group } from '@mantine/core';

export default function FoilSpecs({ form }) {
  return (
    <>
      <h3>WINDSURF</h3>
      <Select
        label="Style:"
        allowDeselect
        placeholder="style"
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
        </Group>

        <Group>
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
            label="Fin Setup:"
            allowDeselect
            data={[
              { value: 'Thruster', label: 'Thruster' },
              { value: 'Quad', label: 'Quad' },
              { value: 'Twin', label: 'Twin' },
              { value: 'Single', label: 'Single' },
              { value: 'Five Fin', label: 'Five Fin' },
            ]}
            {...form.getInputProps('finSetup')}
          />
          <Select
            label="Box Type:"
            allowDeselect
            data={[
              { value: 'STD Foil Plate', label: 'STD Foil Plate' },
              { value: 'Long Foil Plate', label: 'Long Foil Plate' },
              { value: 'Tuttle', label: 'Tuttle' },
            ]}
            {...form.getInputProps('boxType')}
          />
        </Group>

        <Group>
          <TextInput
            label='Fin Box From Tail'
            placeholder='please type'
            {...form.getInputProps('finFromTail') }
          />
          <Select
            label="Inserts:"
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
            allowDeselect
            defaultValue='none'
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
        </Group>

        <Group>
        <Select
          label="Leash:"
          data={[
            { value: 'Deck', label: 'Deck' },
            { value: 'Bottom', label: 'Bottom' },
            { value: null, label: 'No' },
          ]}
          {...form.getInputProps('leash')}
        />
        <Select
          label="Pads:"
          data={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
            { value: 'custom', label: 'Custom' },
          ]}
          {...form.getInputProps('pads')}
        />
        <Select
          label="Wave/Location:"
          data={[
            { value: 'Hookipa', label: 'Hookipa'},
            { value: 'Kanaha', label: 'Kanaha'},
            { value: 'Side/On Shore', label: 'Side On Shore'},
            { value: 'Freeride', label: 'Freeride' },
            { value: 'Other', label: 'Other' },
          ]}
          {...form.getInputProps('waveLocation')}
        />
        </Group>
    </>
  )
}