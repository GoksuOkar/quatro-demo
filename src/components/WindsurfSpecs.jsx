import { Select, NumberInput, TextInput, Group } from '@mantine/core';

export default function WindsurfSpecs({ form }) {
  return (
    <>
      <Select
        label="Style:"
        allowDeselect
        placeholder="style"
        data={[
          { value: 'Wave Symmetrical', label: 'Wave Symmetrical' },
          { value: 'Wave Asymmetrical', label: 'Wave Asymmetrical' },
          { value: 'Freeride', label: 'Freeride' },
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
          placeholder="style"
          data={[
            { value: 'Squash', label: 'Squash' },
            { value: 'Round Pin', label: 'Round Pin' },
            { value: 'Swallow', label: 'Swallow' },
            { value: 'Asymmetric', label: 'Asymmetric' },
          ]}
          {...form.getInputProps('tail')}
        />
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
            { value: 'Regulas', label: 'Regulas' },
            { value: 'Ultra Lite', label: 'Ultra Lite' },
            { value: 'Pro', label: 'Pro' },
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
          label="Rear Strap From Tail:"
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
          data={[
            { value: 'black', label: 'Black' },
            { value: 'white', label: 'White' },
            { value: 'no leash', label: 'No Leash' },
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