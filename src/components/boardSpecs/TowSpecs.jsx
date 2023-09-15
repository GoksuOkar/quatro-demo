import { Select, TextInput, Group, Textarea } from '@mantine/core';

export default function TowSpecs({ form }) {
  return (
    <>
      <Group>
        <TextInput
          label="Invoice Number:"
          placeholder="type here"
          {...form.getInputProps("invoiceNum")}
        />
      </Group>

      <Group>
        <TextInput
          withAsterisk
          placeholder='feet'
          label="Length(ft):"
          {...form.getInputProps("lengthFt")}
        />
        <TextInput
          label="Length(in):"
          placeholder='inches'
          {...form.getInputProps("lengthIn")}
        />
        <TextInput
          label="Tow Weight:"
          {...form.getInputProps("towWeight")}
        />
      </Group>

      <Group>
        <TextInput
          label="Width(in):"
          placeholder="inches"
          {...form.getInputProps("width")}
        />
        <TextInput
          label="Thickness(in):"
          placeholder="inches"
          {...form.getInputProps("thickness")}
        />
        <TextInput
          label="Volume(lt):"
          withAsterisk
          placeholder="lt"
          {...form.getInputProps("volume")}
        />
      </Group>

      <Group>
        <Select
          label="Tail:"
          withAsterisk
          allowDeselect
          placeholder="pick one"
          data={[
            { value: "squash", label: "squash" },
            { value: "round pin", label: "round pin" },
            { value: "swallow", label: "swallow" },
            { value: "thumb", label: "thumb" },
            { value: "fish", label: "fish" },
          ]}
          {...form.getInputProps("tail")}
        />
        <Select
          label="Blank:"
          withAsterisk
          placeholder="pick one"
          allowDeselect
          defaultValue="PU"
          data={[
            { value: "PU", label: "PU" },
            { value: "EPS", label: "EPS" },
            { value: "Custom", label: "Custom" },
            { value: "Pu Tow", label: "Pu Tow" }
          ]}
          {...form.getInputProps("blank")}
        />
        <Select
          label="Construction:"
          placeholder="pick one"
          withAsterisk
          allowDeselect
          data={[
            { value: "STD PU", label: "STD PU" },
            { value: "Carbon Wrap PU", label: "Carbon Wrap PU" },
            { value: "STD EPS", label: "STD EPS" },
            { value: "Carbon Wrap EPS", label: "Carbon Wrap EPS" },
            { value: "Custom", label: "Custom" },
            { value: "4+4/4", label: "4+4/4" },
            { value: "4+4/6", label: "4+4/6" },
            { value: "6+4/4", label: "6+4/4" },
            { value: "6+4/6", label: "6+4/6" },
          ]}
          {...form.getInputProps("construction")}
        />
      </Group>

      <Group>
        <Select
          placeholder="pick one"
          label="Logo:"
          withAsterisk
          allowDeselect
          data={[
            { value: "black", label: "black" },
            { value: "blue", label: "blue" },
            { value: "red", label: "red" },
            { value: "white", label: "white" },
            { value: "any", label: "any" },
          ]}
          {...form.getInputProps("logo")}
        />
        <TextInput
          label="Board Color:"
          placeholder="type here"
          withAsterisk
          {...form.getInputProps("boardColor")}
        />
        <Select
          label="Fin Setup:"
          placeholder="pick one"
          withAsterisk
          allowDeselect
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
          placeholder="pick one"
          withAsterisk
          allowDeselect
          data={[
            { value: "FCS II", label: "FCS II" },
            { value: "Futures", label: "Futures" },
            { value: "A Box", label: "A Box" },
            { value: "US Box", label: "US Box" },
          ]}
          {...form.getInputProps("boxType")}
        />
        <Select
          label="Box Color:"
          placeholder="pick one"
          withAsterisk
          allowDeselect
          data={[
            { value: "black", label: "black" },
            { value: "blue", label: "blue" },
            { value: "red", label: "red" },
            { value: "white", label: "white" },
            { value: "any", label: "any" },
          ]}
          {...form.getInputProps("boxColor")}
        />
        <TextInput
          label="Stance:"
          placeholder="12"
          {...form.getInputProps("stance")}
        />
      </Group>

      <Group>
        <Select
          withAsterisk
          label="Inserts:"
          placeholder="pick one"
          allowDeselect
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
          withAsterisk
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
          label="Leash Plug:"
          withAsterisk
          placeholder="pick one"
          data={[
            { value: "yes", label: "yes" },
            { value: "no", label: "no" },
          ]}
          {...form.getInputProps("leash")}
        />
        <Select
          label="Install Pad:"
          withAsterisk
          placeholder="pick one"
          data={[
            { value: "yes", label: "yes" },
            { value: "no", label: "no" },
          ]}
          {...form.getInputProps("pads")}
        />
        <Select
          label="Wave/Location:"
          withAsterisk
          placeholder="pick one"
          data={[
            { value: "steep/hollow point break", label: "Steep/Hollow Point Break" },
            { value: "punchy beach break", label: "Punchy Beach Break" },
            { value: "ankle waist high mush", label: "Ankle Waist High Mush" },
            { value: "Xl-XXL", label: "XL-XXL" },
            { value: "Peahi", label: "Peahi" },
            { value: "Outer Sprecks", label: "Outer Sprecks" },
            { value: "Other", label: "Other" },
          ]}
          {...form.getInputProps("waveLocation")}
        />
      </Group>
      <Group>
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
      </Group>
      <Textarea
        placeholder="type here"
        label="notes:"
        radius="md"
        size="md"
        {...form.getInputProps("notes")}
      />
    </>
  )
    
}