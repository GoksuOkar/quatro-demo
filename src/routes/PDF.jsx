import { jsPDF } from "jspdf";
import {useRef} from 'react';
import { Center, Container, Table, Divider, Title, Text, Button } from '@mantine/core';

export default function PDF({ form }) {
  const myref = useRef(null);
  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px"
    });

    // Adding the fonts
    doc.addSvgAsImage("../surfboard.svg", 30, 30, 100, 100);

    doc.html(myref.current, {
      async callback(doc) {
        // save the document as a PDF with name of Memes
        doc.save("formOutput");
      }
    });
  };
  return(
    <div ref={myref}>
      <div style={{
        fontSize:'10px'
      }} id="intro">
        <p>{"Intro: " + form.values.intro}</p>
        <p>{"Name: " + form.values.firstName + ' ' + form.values.lastName}</p>
        <p>{"Current Customer: " + form.values.current}</p>
        <p>{`Order Type: ${form.values.orderType}`}</p>
      </div>
      {/* <img src="/surfboard.svg" /> */}
      <Button
        color="lime"
        radius="xs"
        size="xs"
        compact onClick={handleGeneratePdf}
      >
        generate pdf
      </Button>
    </div>
  )
}