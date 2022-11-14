import { Select } from '@mantine/core';

export default function SurfSpecs({ form }) {
  return (
    <>
      <Select
        label="Style"
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
    </>
  )
}