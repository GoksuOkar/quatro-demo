import { Select, NumberInput, TextInput, Group, Textarea, Title } from '@mantine/core';

export default function WindsurfSpecs({ form }) {
  return (
    <>
      <Title order={3} mb={3}>WINDSURF</Title>
      <Group>
        <Select
          label="Style:"
          withAsterisk
          allowdeselect="true"
          placeholder="pick one"
          data={[
            { value: "Wave Symmetrical", label: "Wave Symmetrical" },
            { value: "Wave Asymmetrical", label: "Wave Asymmetrical" },
            { value: "Freeride", label: "Freeride" },
          ]}
          {...form.getInputProps("style")}
        />
        <TextInput
          label="Invoice Number:"
          placeholder="type here"
          {...form.getInputProps("invoiceNum")}
        />
        <Select
          label="Rush:"
          withAsterisk
          placeholder="pick one"
          data={[
            { value: "yes", label: "yes" },
            { value: "no", label: "no" },
          ]}
          {...form.getInputProps("rush")}
        />
      </Group>

      <Group>
        <NumberInput
          label="Volume(lt):"
          withAsterisk
          placeholder="lt"
          step={10}
          precision={2}
          {...form.getInputProps("volume")}
        />
        <NumberInput
          label="Tow Weight (if applicable):"
          placeholder="0"
          step={5}
          min={0}
          {...form.getInputProps("towWeight")}
        />
        <NumberInput label="Length(ft):" {...form.getInputProps("lengthFt")} />
      </Group>

      <Group>
        
        <NumberInput
          label="Length(in):"
          precision={2}
          step={0.5}
          {...form.getInputProps("lengthIn")}
        />
        <NumberInput
          label="Width(in):"
          placeholder="inches"
          precision={2}
          step={0.5}
          {...form.getInputProps("width")}
        />
        <NumberInput
          label="Thickness(in):"
          placeholder="inches"
          precision={2}
          step={0.5}
          {...form.getInputProps("thickness")}
        />
      </Group>

      <Group>
        <Select
          label="Tail:"
          withAsterisk
          allowdeselect="true"
          placeholder="pick one"
          data={[
            { value: "Squash", label: "Squash" },
            { value: "Round Pin", label: "Round Pin" },
            { value: "Swallow", label: "Swallow" },
            { value: "Asymmetric", label: "Asymmetric" },
          ]}
          {...form.getInputProps("tail")}
        />
        <Select
          label="Blank:"
          withAsterisk
          placeholder="pick one"
          allowdeselect="true"
          data={[
            { value: "EPS/Sandwich", label: "EPS/Sandwich" },
            { value: "EPS Custom", label: "EPS Custom" },
            { value: "Other", label: "Other" },
          ]}
          {...form.getInputProps("blank")}
        />
        <Select
          label="Construction:"
          withAsterisk
          placeholder="pick one"
          allowdeselect="true"
          data={[
            { value: "Regular", label: "Regular" },
            { value: "Ultra Lite", label: "Ultra Lite" },
            { value: "Pro", label: "Pro" },
            { value: "Custom", label: "Custom" },
          ]}
          {...form.getInputProps("construction")}
        />
      </Group>

      <Group>
        <Select
          label="Logo:"
          withAsterisk
          placeholder="pick one"
          allowDeselect="true"
          data={[
            { value: "black", label: "black" },
            { value: "blue", label: "blue" },
            { value: "red", label: "red" },
            { value: "white", label: "white" },
            { value: "Production Team", label: "Production Team" },
          ]}
          {...form.getInputProps("logo")}
        />
        <TextInput
          label="Board Color:"
          withAsterisk
          placeholder="type here"
          allowdeselect="true"
          {...form.getInputProps("boardColor")}
        />
        <TextInput
          label="Pads Color:"
          withAsterisk
          placeholder="type here"
          {...form.getInputProps("pads")}
        />
        
        </Group>

        

        <Group>
        <Select
          label="Fin Setup:"
          withAsterisk
          placeholder="pick one"
          allowdeselect="true"
          data={[
            { value: "Thruster", label: "Thruster" },
            { value: "Quad", label: "Quad" },
            { value: "Twin", label: "Twin" },
            { value: "Single", label: "Single" },
            { value: "Five Fin", label: "Five Fin" },
          ]}
          {...form.getInputProps("finSetup")}
        />
          <Select
            label="Box Type:"
            withAsterisk
            placeholder="pick one"
            allowdeselect="true"
            data={[
              { value: "US", label: "US" },
              { value: "Power Box", label: "Power Box" },
              { value: "Custom Mix", label: "Custom Mix" },
            ]}
            {...form.getInputProps("boxType")}
          />
          <TextInput
            label="Stance:"
            placeholder="12"
            {...form.getInputProps("stance")}
          />
          
        </Group>
        
        <Group>
          <TextInput
            label="Fin Box From Tail"
            placeholder="type here"
            {...form.getInputProps("finFromTail")}
          />
          <Select
            label="Inserts:"
            withAsterisk
            placeholder="pick one"
            allowdeselect="true"
            data={[
              { value: "single", label: "single" },
              { value: "double", label: "double" },
              { value: "single/double", label: "single/double" },
              { value: "see notes", label: "see notes" },
              { value: "none", label: "none" },
            ]}
            {...form.getInputProps("inserts")}
          />
          <TextInput
            label="Rear Strap From Tail:"
            placeholder="type here"
            {...form.getInputProps("rearStrap")}
          />
          <TextInput
            label="Strap Width:"
            withAsterisk
            placeholder="type here"
            {...form.getInputProps("strapWidth")}
          />
        </Group>
         
      


      <Group>
        
        <Select
          label="Wave/Location:"
          withAsterisk
          placeholder="pick one"
          data={[
            { value: "Hookipa", label: "Hookipa" },
            { value: "Kanaha", label: "Kanaha" },
            { value: "Side/On Shore", label: "Side On Shore" },
            { value: "Freeride", label: "Freeride" },
            { value: "Other", label: "Other" },
          ]}
          {...form.getInputProps("waveLocation")}
        />
        <Select
          label="Airbrush:"
          withAsterisk
          placeholder="pick one"
          data={[
            { value: "yes", label: "yes" },
            { value: "no", label: "no" },
          ]}
          {...form.getInputProps("airbrush")}
        />
        <TextInput
          label="Board Weight:"
          placeholder="lbs"
          {...form.getInputProps("boardWeight")}
        />
      </Group>
      <Textarea
        mt={3}
        placeholder="type here"
        label="Notes:"
        radius="md"
        size="md"
        {...form.getInputProps("notes")}
      />
    </>
  );
}