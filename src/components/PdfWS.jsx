import { Button } from '@mantine/core';
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import './output.css';
import { capitalizeFirstLetter } from "../utils/helpers.js";

//windsurf output

const now = new Date()
const date = now.toISOString().slice(0, 10)

export default function PdfWS({ values, orderNum, customer }) {
  const myref = useRef(null);

  //posts the order into the database, gets back the orderNumber
  useEffect(()=>{
    axios.post()
  }, []);

  let name = capitalizeFirstLetter(customer.firstName + " " + customer.lastName);

  return(
      <div
       className="printme"
       id="container"
      >
        <div id="intro1">
          <p><b>Date:</b>{` ${date}`}</p>
          <p><b>Name:</b>{` ${name}`}</p>
          <p><b>Phone:</b>{` ${customer.phone}`}</p>
          <p><b>Address:</b>{` ${customer.address}`}</p>
        </div>
        <div id="intro2">
          <p><b>Order Number:</b>{` ${orderNum}`}</p>
          <p><b>Intro:</b>{` ${values.intro}`}</p>
          <p><b>Order Type:</b>{` ${values.orderType}`}</p>
        </div>
        {/* RIDER INFO */}
        <div id='rider1'>
          <p><b>Weight:</b>{` ${customer.weight}lbs`}</p>
          <p><b>Height:</b>{` ${customer.heightFt}ft ${customer.heightIn}in`}</p>
        </div>
        <div id='rider2'>
          <p><b>Level:</b>{` ${customer.level}`}</p>
          <p><b>Location:</b>{` ${values.waveLocation}`}</p>
        </div>
        {/* BOARD SPECS */}
        <div id='boardSpecs1'>
          <p><b>Style:</b>{` ${values.style}`}</p>
          <p><b>Length:</b>{` ${values.lengthFt}ft ${values.lengthIn}`}</p>
          <p><b>Box:</b>{` ${values.boxType}`}</p>
          <p><b>Inserts:</b>{` ${values.inserts}`}</p>
          <p><b>Board Color:</b>{` ${values.boardColor}`}</p>
          <p><b>Fin Box From Tail:</b>{` ${values.finFromTail}`}</p>
        </div>

        <div id='boardSpecs2'>
          <p><b>Tail:</b>{` ${values.tail}`}</p>
          <p><b>Width:</b>{` ${values.width}`}</p>
          <p><b>Fin Setup:</b>{` ${values.finSetup}`}</p>
          <p><b>Stance:</b>{` ${values.stance}`}</p>
          <p><b>Logos Color:</b>{` ${values.logo}`}</p>
          <p><b>Pads:</b>{` ${values.pads}`}</p>
        </div>

        <div id='boardSpecs3'>
          <p><b>Blank:</b>{` ${values.blank}`}</p>
          <p><b>Thickness:</b>{` ${values.thickness}`}</p>
          <p><b>Straps Width:</b>{` ${values.strapWidth}`}</p>
          <p><b>Construction:</b>{` ${values.construction}`}</p>
          <p><b>Volume:</b>{` ${values.volume}`}</p>
          <p><b>Rear Inserts From Tail:</b>{` ${values.rearInsertsFromTail}`}</p>
        </div>
        <div id="notes">
          <b>Notes:</b>
        </div>
        <img id="image" src='/surfBoard.jpeg'/>
      </div>
  )
}