import { Button } from '@mantine/core';
import { jsPDF } from "jspdf";
import { useRef } from 'react';
import './output.css';

//windsurf output

const now = new Date()
const date = now.toISOString().slice(0, 10)

export default function PdfWS({ form }) {
  const myref = useRef(null);

  const handleGeneratePdf = () => {
    // const pdf = new jsPDF('p', 'mm', [297, 210]);
    // pdf.html(document.getElementById('container'), {
    //   callback: async function(pdf) {
    //     window.open(pdf.output('bloburl')); // to debug
    //   }
    // });

    // // Adding the fonts
    // doc.addSvgAsImage("../surfboard.svg", 30, 30, 100, 100);

    // doc.html(myref.current, {
    //   async callback(doc) {
    //     // save the document as a PDF with name of Memes
    //     doc.save("formOutput");
    //   }
    // });
    window.print();
  };
  return(
    <div>
      <div
       className="printme"
       id="container"
      >
        <div id="intro1">
          <p>{`Date: ${date}`}</p>
          <p>{`Name: ${form.values.firstName} ${form.values.lastName}`}</p>
          <p>{`Phone: ${form.values.phone}`}</p>
          <p>{`Address: ${form.values.address}`}</p>
        </div>
        <div id="intro2">
          <p>{`Intro: ${form.values.intro}`}</p>
          <p>{`Order Type: ${form.values.orderType}`}</p>
          <p>{`Current Customer: ${form.values.current}`}</p>
        </div>
        {/* RIDER INFO */}
        <div id='rider1'>
          <p>{`Weight: ${form.values.weight}lbs`}</p>
          <p>{`Height: ${form.values.heightFt}ft ${form.values.In}in`}</p>
        </div>
        <div id='rider2'>
          <p>{`Level: ${form.values.level}`}</p>
          <p>{`Location: ${form.values}`}</p>
        </div>
        {/* BOARD SPECS */}
        <div id='boardSpecs1'>
          <p>{`Style: ${form.values.style}`}</p>
          <p>{`Length: ${form.values.lengthFt}ft ${form.values.lengthIn}`}</p>
          <p>{`Box: ${form.values.boxType}`}</p>
          <p>{`Inserts: ${form.values.inserts}`}</p>
          <p>{`Board Color: ${form.values.boardColor}`}</p>
          <p>{`Fin Box From Tail: ${form.values.finFromTail}`}</p>
        </div>

        <div id='boardSpecs2'>
          <p>{`Tail: ${form.values.tail}`}</p>
          <p>{`Width: ${form.values.width}`}</p>
          <p>{`Fin Setup: ${form.values.finSetup}`}</p>
          <p>{`Stance: ${form.values.stance}`}</p>
          <p>{`Logos Color: ${form.values.logo}`}</p>
          <p>{`Pads: ${form.values.pads}`}</p>
        </div>

        <div id='boardSpecs3'>
          <p>{`Blank: ${form.values.blank}`}</p>
          <p>{`Thickness: ${form.values.thickness}`}</p>
          <p>{`Straps Width: ${form.values.strapWidth}`}</p>
          <p>{`Construction: ${form.values.construction}`}</p>
          <p>{`Volume: ${form.values.volume}`}</p>
          <p>{`Rear Inserts From Tail: ${form.values.rearInsertsFromTail}`}</p>
        </div>
      </div>
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