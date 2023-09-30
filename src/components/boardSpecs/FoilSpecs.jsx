import { Select, NumberInput, TextInput, Space, Group, Grid, Stack, Checkbox, Radio, Container, Textarea, Title } from '@mantine/core';

export default function FoilSpecs({ form }) {
  return (
    <>
      <Title order={3} mb={3}>FOIL</Title>
      <Group>
        <Select
          label="Style:"
          withAsterisk
          allowDeselect
          placeholder="pick one"
          data={[
            { value: "GINXU", label: "GINXU" },
            { value: "STD Wing", label: "STD Wing" },
            { value: "Down Wind", label: "Down Wind" },
            { value: "Down Wind/Dragonfly", label: "Down Wind/Dragonfly" },
            { value: "Prone", label: "Prone" },
            { value: "SUP/Sweeper", label: "SUP/Sweeper" },
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
        <NumberInput label="Length(ft):" {...form.getInputProps("lengthFt")} />
        <NumberInput
          label="Length(in):"
          precision={2}
          step={0.5}
          {...form.getInputProps("lengthIn")}
        />
        <NumberInput
          label="Tow Weight (if applicable):"
          placeholder="0"
          step={5}
          min={0}
          {...form.getInputProps("towWeight")}
        />
      </Group>
      <Group>
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
        <NumberInput
          label="Volume(lt):"
          withAsterisk
          placeholder="lt"
          precision={2}
          step={10}
          {...form.getInputProps("volume")}
        />
        </Group>
        <Group>
        <Select
          label="Construction:"
          withAsterisk
          placeholder="pick one"
          allowDeselect
          data={[
            { value: "STD Carbon EPS", label: "STD Carbon EPS" },
            { value: "Custom", label: "Custom" },
          ]}
          {...form.getInputProps("construction")}
        />
        <TextInput
          label="Board Color:"
          withAsterisk
          placeholder="type here"
          {...form.getInputProps("boardColor")}
        />
        <Select
          label="Blank:"
          withAsterisk
          placeholder="pick one"
          allowDeselect
          data={[
            { value: "EPS/Sandwich", label: "EPS/Sandwich" },
            { value: "EPS Custom", label: "EPS Custom" },
            { value: "Other", label: "Other" },
          ]}
          {...form.getInputProps("blank")}
        />
      </Group>
      <Group>
        <TextInput
          label="Stance:"
          placeholder="12"
          {...form.getInputProps("stance")}
        />
        <TextInput
          label="Logo:"
          withAsterisk
          placeholder="type here"
          {...form.getInputProps("logo")}
        />
        <Select
          label="Box Type:"
          withAsterisk
          placeholder="pick one"
          allowDeselect
          data={[
            { value: "STD Foil Plate", label: "STD Foil Plate" },
            { value: "Long Foil Plate", label: "Long Foil Plate" },
            { value: "Tuttle", label: "Tuttle" },
          ]}
          {...form.getInputProps("boxType")}
        />
      </Group>
      <Group>
        <TextInput
          label="Box Location"
          withAsterisk
          placeholder="type here"
          {...form.getInputProps("boxLocation")}
        />
        <TextInput
          label="Pads Color:"
          withAsterisk
          placeholder="type here"
          {...form.getInputProps("pads")}
        />
        <TextInput
          label="Foil Type:"
          placeholder="type here"
          {...form.getInputProps("foilType")}
        />
      </Group>

      <Group>
        <Select
          label="Inserts:"
          withAsterisk
          placeholder="pick one"
          allowDeselect
          data={[
            { value: "single", label: "single" },
            { value: "double", label: "double" },
            { value: "regular", label: "regular" },
            { value: "goofy", label: "goofy" },
            { value: "Y", label: "Y" },
            { value: "see notes", label: "see notes" },
            { value: "none", label: "none" },
          ]}
          {...form.getInputProps("inserts")}
        />
        <TextInput
          label="Rear Inserts From Tail:"
          withAsterisk
          placeholder="type here"
          {...form.getInputProps("rearInsertsFromTail")}
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
            { value: "Harbor Freeride", label: "Harbor Freeride" },
            { value: "Offshore", label: "Offshore" },
            { value: "Wave", label: "Wave" },
            { value: "xl-xxl", label: "xl-xxl" },
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
        <NumberInput
          label="Board Weight:"
          placeholder="lbs"
          {...form.getInputProps("boardWeight")}
        />
        </Group>
        
      <Space h="md" />
      <Group align="center" spacing={80}>
        <Radio.Group
          name="Leash"
          label="Leash:"
          // orientation='vertical'
          {...form.getInputProps("leash")}
        >
          <Radio size="sm" value="Deck" label="Deck" />
          <Radio size="sm" value="Bottom" label="Bottom" />
          <Radio size="sm" value="No" label="No" />
        </Radio.Group>
        <Radio.Group
          name="Handle"
          label="Handle:"
          {...form.getInputProps("handle")}
        >
          <Radio size="sm" value="Deck" label="Deck" />
          <Radio size="sm" value="Bottom" label="Bottom" />
          <Radio size="sm" value="No" label="No" />
        </Radio.Group>
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