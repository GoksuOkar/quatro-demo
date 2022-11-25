import { Button } from '@mantine/core';
import { jsPDF } from "jspdf";
import { useRef } from 'react';

//windsurf output

export default function PdfSurf({ form }) {
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
    <div>

      <div ref={myref}>
        <div
          id="intro">
            <div>
              <p>{`Name: ${form.values.firstName} ${form.values.lastName}`}</p>
              <p>{`Phone: ${form.values.phone}`}</p>
              <p>{`Address: ${form.values.address}`}</p>
            </div>
            <div>
              <p>{`Date: ${new Date(Date.now()).toString}`}</p>
              <p>{`Intro: ${form.values.intro}`}</p>
              <p>{`Order Type: ${form.values.orderType}`}</p>
              <p>{`Current Customer: ${form.values.current}`}</p>
            </div>
        </div>
        {/* RIDER INFO */}
        <div
          id='riderInfo'
        >
          <div>
            <p>{`Weight: ${form.values.weight}lbs`}</p>
            <p>{`Height: ${form.values.heightFt}ft ${form.values.In}in`}</p>
          </div>
          <div>
            <p>{`Level: ${form.values.level}`}</p>
            <p>{`Location: ${form.values}`}</p>
          </div>
        </div>
        {/* BOARD SPECS */}
        <div
          id='boardSpecs'
        >
          <div>
            <p>{`Style: ${form.values.style}`}</p>
            <p>{`Length: ${form.values.lengthFt}ft ${form.values.lengthIn}`}</p>
            <p>{`Box: ${form.values.boxType}`}</p>
            <p>{`Inserts: ${form.values.inserts}`}</p>
            <p>{`Board Color: ${form.values.boardColor}`}</p>
          </div>

          <div>
            <p>{`Tail: ${form.values.tail}`}</p>
            <p>{`Width: ${form.values.width}`}</p>
            <p>{`Fin Setup: ${form.values.finSetup}`}</p>
            <p>{`Stance: ${form.values.stance}`}</p>
            <p>{`Logos Color: ${form.values.logo}`}</p>
          </div>

          <div>
            <p>{`Blank: ${form.values.blank}`}</p>
            <p>{`Thickness: ${form.values.thickness}`}</p>
            <p>{`Straps Width: ${form.values.strapWidth}`}</p>
          </div>
          <div>
            <p>{`Construction: ${form.values.construction}`}</p>
            <p>{`Volume: ${form.values.volume}`}</p>
            <p>{`Pads: ${form.values.pads}`}</p>
            <p>{`Rear Inserts From Tail: ${form.values.rearInsertsFromTail}`}</p>
            <p>{`Fin Box From Tail: ${form.values.finFromTail}`}</p>
          </div>
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