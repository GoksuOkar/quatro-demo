import { Button } from '@mantine/core';
import { useRef, useEffect, useState } from 'react';
import './output.css';
import { capitalizeFirstLetter } from "../../utils/helpers.js";

//foil output

const now = new Date()
const date = now.toISOString().slice(0, 10)

export default function PdfFoil({ values, orderNum, customer }) {
  const myref = useRef(null);
  let name = capitalizeFirstLetter(customer.firstName + " " + customer.lastName);

  return (
    <div className="printme" id="printcontents">
      <div className="child">
        <p>
          <b>Name:</b>
          {` ${name}`}
        </p>
        {customer.phone === "" ? null : (
          <>
            <b>Phone:</b>
            <p style={{ marginTop: 0 }}>{customer.phone}</p>
          </>
        )}
        {customer.address === "" ? null : (
          <>
            <b>Address:</b>
            <p style={{ marginTop: 0 }}>{customer.address}</p>
          </>
        )}
        {customer.email === "" ? null : (
          <>
            <b>Email:</b>
            <p style={{ marginTop: 0 }}>{customer.email}</p>
          </>
        )}
      </div>
      <div className="child">
        <p>
          <b>Weight:</b>
          {` ${customer.weight}lbs`}
        </p>
        <p>
          <b>Height:</b>
          {` ${customer.heightFt}ft ${customer.heightIn}in`}
        </p>
        <p>
          <b>Level:</b>
          {` ${customer.level}`}
        </p>
        <p>
          <b>Location:</b>
          {` ${values.waveLocation}`}
        </p>
      </div>
      <div className="child">
        <p>
          <b>Date:</b>
          {` ${date}`}
        </p>
        <p>
          <b>Order Type:</b>
          {` ${values.orderType}`}
        </p>
        <p>
          <b>Order Number:</b>
          {` ${orderNum}`}
        </p>
        <p>
          <b>Invoice Number:</b>
          {` ${values.invoiceNum}`}
        </p>
        <p>
          <b>Intro:</b>
          {` ${values.intro}`}
        </p>
      </div>
      {/* RIDER INFO */}
      {/* BOARD SPECS */}
      <div className="child">
        <p>
          <b>Style:</b>
          {` ${values.style}`}
        </p>
        <p>
          <b>Foil Type:</b>
          {` ${values.foilType}`}
        </p>
        <p>
          <b>Length:</b>
          {` ${values.lengthFt}ft ${values.lengthIn}in`}
        </p>
        <p>
          <b>Box:</b>
          {` ${values.boxType}`}
        </p>
        <p>
          <b>Inserts:</b>
          {` ${values.inserts}`}
        </p>
        <p>
          <b>Board Color:</b>
          {` ${values.boardColor}`}
        </p>
        <p>
          <b>Box Location:</b>
          {` ${values.boxLocation}`}
        </p>
      </div>

      <div className="child">
        <p>
          <b>Tail:</b>
          {` ${values.tail}`}
        </p>
        <p>
          <b>Width:</b>
          {` ${values.width}`}
        </p>
        <p>
          <b>Leash:</b>
          {` ${values.leash}`}
        </p>
        <p>
          <b>Handle:</b>
          {` ${values.handle}`}
        </p>
        <p>
          <b>Stance:</b>
          {` ${values.stance}`}
        </p>
        <p>
          <b>Logos Color:</b>
          {` ${values.logo}`}
        </p>
        <p>
          <b>Pads:</b>
          {` ${values.pads}`}
        </p>
      </div>

      <div className="child">
        <p>
          <b>Tow Weight:</b>
          {` ${values.towWeight}`}
        </p>
        <p>
          <b>Blank:</b>
          {` ${values.blank}`}
        </p>
        <p>
          <b>Thickness:</b>
          {` ${values.thickness}`}
        </p>
        <p>
          <b>Straps Width:</b>
          {` ${values.strapWidth}`}
        </p>
        <p>
          <b>Construction:</b>
          {` ${values.construction}`}
        </p>
        <p>
          <b>Volume:</b>
          {` ${values.volume}`}
        </p>
        <p>
          <b>Rear Inserts From Tail:</b>
          {` ${values.rearInsertsFromTail}`}
        </p>
      </div>
      <div className="child" id="notes">
        <b>Notes:</b>
        <p>{values.notes}</p>
      </div>
      <div className="child">
        <img id="image" src="/surfBoard.jpeg" />
      </div>
    </div>
  );
}