import { Select, NumberInput, TextInput, Group } from '@mantine/core';

export default function SurfSpecs({ form }) {
  return (
    <>
      <Select
        label="Style:"
        allowDeselect
        placeholder="style"
        data={[
          { value: 'STD SHORT', label: 'STD SHORT' },
          { value: 'STEP-UP', label: 'STEP-UP' },
          { value: 'FISH', label: 'FISH' },
          { value: 'MINI TANKER', label: 'MINI TANKER' },
          { value: 'LONG BOARD', label: 'LONG BOARD' },
          { value: 'GUN', label: 'GUN' },
          { value: 'TOW', label: 'TOW' },
          { value: 'GROVELER', label: 'GROVELER' },
          { value: 'SUP', label: 'SUP' },
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
          label="Tail:"
          allowDeselect
          placeholder="pick one"
          data={[
            { value: 'squash', label: 'squash' },
            { value: 'round pin', label: 'round pin' },
            { value: 'swallow', label: 'swallow' },
            { value: 'thumb', label: 'thumb' },
            { value: 'fish', label: 'fish' },
          ]}
          {...form.getInputProps('tail')}
        />
          <Select
          label="Blank:"
          placeholder="pick one"
          allowDeselect
          defaultValue="PU"
          data={[
            { value: 'PU', label: 'PU' },
            { value: 'EPS', label: 'EPS' },
            { value: 'Custom', label: 'Custom' },
          ]}
          {...form.getInputProps('blank')}
        />
          <Select
          label="Construction:"
          placeholder="pick one"
          allowDeselect
          data={[
            { value: 'STD PU', label: 'STD PU' },
            { value: 'Carbon Wrap PU', label: 'Carbon Wrap PU' },
            { value: 'STD EPS', label: 'STD EPS' },
            { value: 'Carbon Wrap EPS', label: 'Carbon Wrap EPS' },
            { value: 'Custom', label: 'Custom' },
            { value: '4+4/4', label: '4+4/4' },
            { value: '4+4/6', label: '4+4/6' },
            { value: '6+4/4', label: '6+4/4' },
            { value: '6+4/6', label: '6+4/6' },
          ]}
          {...form.getInputProps('construction')}
        />
          <NumberInput
          label="Stance:"
          placeholder={11}
          {...form.getInputProps('stance')}
          min={11}
          max={20}
        />
        </Group>

        <Group>
        <Select
          placeholder='pick one'
          label="Logo:"
          allowDeselect
          data={[
            { value: 'black', label: 'black' },
            { value: 'blue', label: 'blue' },
            { value: 'red', label: 'red' },
            { value: 'white', label: 'white' },
            { value: 'any', label: 'any' },
          ]}
          {...form.getInputProps('logo')}
        />
        <Select
          label="Board Color:"
          placeholder='pick one'
          allowDeselect
          data={[
            { value: 'Natural White', label: 'Natural White' },
            { value: 'Clear Carbon', label: 'Clear Carbon' },
            { value: 'Tint', label: 'Tint' },
            { value: 'Custom', label: 'Custom' },
          ]}
          {...form.getInputProps('boardColor')}
        />
        <Select
          label="Fin Setup:"
          placeholder='pick one'
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
          placeholder='pick one'
          allowDeselect
          data={[
            { value: 'FCS II', label: 'FCS II' },
            { value: 'Futures', label: 'Futures' },
            { value: 'A Box', label: 'A Box' },
            { value: 'US Box', label: 'US Box' },
          ]}
          {...form.getInputProps('boxType')}
        />
        <Select
          label="Box Color:"
          placeholder='pick one'
          allowDeselect
          data={[
            { value: 'black', label: 'black' },
            { value: 'blue', label: 'blue' },
            { value: 'red', label: 'red' },
            { value: 'white', label: 'white' },
            { value: 'any', label: 'any' },
          ]}
          {...form.getInputProps('boxColor')}
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
            label="Rear Strap From Tail:"
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
            {...form.getInputProps('rearStrap')}
          />
          <Select
            label="Strap Width:"
            placeholder='pick one'
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
              { value: 'none', label: 'none' },
            ]}
            {...form.getInputProps('strapWidth')}
          />
        </Group>

        <Group>
        <Select
          label="Leash:"
          placeholder='pick one'
          data={[
            { value: 'black', label: 'Black' },
            { value: 'white', label: 'White' },
            { value: 'no leash', label: 'No Leash' },
          ]}
          {...form.getInputProps('leash')}
        />
        <Select
          label="Pads:"
          placeholder='pick one'
          data={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
            { value: 'custom', label: 'Custom' },
          ]}
          {...form.getInputProps('pads')}
        />
        <Select
          label="Wave/Location:"
          placeholder='pick one'
          data={[
            { value: 'steep/hollow point break', label: 'Steep/Hollor Point Break'},
            { value: 'punchy beach break', label: 'Punchy Beach Break'},
            { value: 'ankle waist high mush', label: 'Ankle Waist High Mush'},
            { value: 'xl-xxl', label: 'xl-xxl' },
            { value: 'Peahi', label: 'Peahi' },
            { value: 'Other', label: 'Other' },
          ]}
          {...form.getInputProps('waveLocation')}
        />
        </Group>
    </>
  )
}