import { Button } from '@mantine/core';
import { useRef, useEffect, useState } from 'react';
import './output.css';

//surf output

const now = new Date()
const date = now.toISOString().slice(0, 10)

export default function PdfSurf({ form, orderNum }) {
  const myref = useRef(null);

  //posts the order into the database, gets back the orderNumber
  useEffect(()=>{}, []);

  return(
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
          <p>{`Order Number: ${orderNum}`}</p>
          <p>{`Intro: ${form.values.intro}`}</p>
          <p>{`Order Type: ${form.values.orderType}`}</p>
        </div>
        {/* RIDER INFO */}
        <div id='rider1'>
          <p>{`Weight: ${form.values.weight}lbs`}</p>
          <p>{`Height: ${form.values.heightFt}ft ${form.values.heightIn}in`}</p>
        </div>
        <div id='rider2'>
          <p>{`Level: ${form.values.level}`}</p>
          <p>{`Location: ${form.values.waveLocation}`}</p>
        </div>
        {/* BOARD SPECS */}
        <div id='boardSpecs1'>
          <p>{`Style: ${form.values.style}`}</p>
          <p>{`Length: ${form.values.lengthFt}ft ${form.values.lengthIn}`}</p>
          <p>{`Box: ${form.values.boxType}`}</p>
          <p>{`Inserts: ${form.values.inserts}`}</p>
          <p>{`Board Color: ${form.values.boardColor}`}</p>
          <p>{`Leash: ${form.values.leash}`}</p>
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
          <p>{`Rear Strap From Tail: ${form.values.rearStrap}`}</p>
        </div>
        <div id="notes">
          Notes:
        </div>
        <img id="image" src='/surfBoard.jpeg'/>
      </div>
  )
}