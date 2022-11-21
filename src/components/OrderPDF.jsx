

export default function OrderPDF({ form }) {
  return (
    <Document>
      <Page size="A4">
        <Text>{form.values.firstName}</Text>
      </Page>
    </Document>
  )
};