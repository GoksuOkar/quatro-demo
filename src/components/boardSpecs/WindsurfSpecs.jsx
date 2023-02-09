import { Select, NumberInput, TextInput, Group, Textarea } from '@mantine/core';

export default function WindsurfSpecs({ form }) {
  return (
    <>
      <h3>WINDSURF</h3>
      <Select
        label="Style:"
        allowDeselect
        placeholder='pick one'
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
          precision={2}
          step={0.5}
          {...form.getInputProps('lengthIn')}
        />
        </Group>

        <Group>
          <NumberInput
            label="Width(in):"
            placeholder='inches'
            precision={2}
            step={0.5}
            {...form.getInputProps('width')}
          />
          <NumberInput
            label="Thickness(in):"
            placeholder='inches'
            precision={2}
            step={0.5}
            {...form.getInputProps('thickness')}
          />
          <NumberInput
            label="Volume(lt):"
            placeholder='lt'
            step={10}
            precision={2}
            {...form.getInputProps('volume')}
          />
        </Group>

        <Group>
          <Select
          label="Tail:"
          allowDeselect
          placeholder='pick one'
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
            { value: 'Regular', label: 'Regular' },
            { value: 'Ultra Lite', label: 'Ultra Lite' },
            { value: 'Pro', label: 'Pro' },
            { value: 'Custom', label: 'Custom' },
          ]}
          {...form.getInputProps('construction')}
          />
          <TextInput
          label="Stance:"
          placeholder="12"
          {...form.getInputProps('stance')}
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
              { value: 'Base Color', label: 'Base Color' },
              { value: 'Clear Carbon', label: 'Clear Carbon' },
              { value: 'Tint', label: 'Tint' },
              { value: 'Paint Custom', label: 'Paint Custom' },
              { value: 'Prodution Team', label: 'Prodution Team' },
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
              { value: 'US', label: 'US' },
              { value: 'Power Box', label: 'Power Box' },
              { value: 'Custom Mix', label: 'Custom Mix' },
            ]}
            {...form.getInputProps('boxType')}
          />
        </Group>

        <Group>
          <TextInput
            label='Fin Box From Tail'
            placeholder='type here'
            {...form.getInputProps('finFromTail') }
          />
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
          <TextInput
          label="Rear Strap From Tail:"
          placeholder="type here"
          {...form.getInputProps('rearStrap')}
          />
          <TextInput
            label="Strap Width:"
            placeholder='type here'
            {...form.getInputProps('strapWidth')}
          />
        </Group>
        <Group>
        <TextInput
          label="Pads Color:"
          placeholder='type here'
          {...form.getInputProps('pads')}
        />
        <Select
          label="Wave/Location:"
          placeholder='pick one'
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
        <Textarea
          placeholder="type here"
          label="notes:"
          radius="md"
          size="md"
          {...form.getInputProps('notes')}
      />
    </>
  )
}