import { Button } from '@mantine/core';
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import './output.css';

//windsurf output

const now = new Date()
const date = now.toISOString().slice(0, 10)

export default function PdfWS({ form, orderNum, customer }) {
  const myref = useRef(null);

  //posts the order into the database, gets back the orderNumber
  useEffect(()=>{
    axios.post()
  }, []);

  return(
      <div
       className="printme"
       id="container"
      >
        <div id="intro1">
          <p><b>Date:</b>{` ${date}`}</p>
          <p><b>Name:</b>{` ${customer.firstName} ${customer.lastName}`}</p>
          <p><b>Phone:</b>{` ${customer.phone}`}</p>
          <p><b>Address:</b>{` ${customer.address}`}</p>
        </div>
        <div id="intro2">
          <p><b>Order Number:</b>{` ${orderNum}`}</p>
          <p><b>Intro:</b>{` ${form.values.intro}`}</p>
          <p><b>Order Type:</b>{` ${form.values.orderType}`}</p>
        </div>
        {/* RIDER INFO */}
        <div id='rider1'>
          <p><b>Weight:</b>{` ${customer.weight}lbs`}</p>
          <p><b>Height:</b>{` ${customer.height}`}</p>
        </div>
        <div id='rider2'>
          <p><b>Level:</b>{` ${customer.level}`}</p>
          <p><b>Location:</b>{` ${form.values.waveLocation}`}</p>
        </div>
        {/* BOARD SPECS */}
        <div id='boardSpecs1'>
          <p><b>Style:</b>{` ${form.values.style}`}</p>
          <p><b>Length:</b>{` ${form.values.lengthFt}ft ${form.values.lengthIn}`}</p>
          <p><b>Box:</b>{` ${form.values.boxType}`}</p>
          <p><b>Inserts:</b>{` ${form.values.inserts}`}</p>
          <p><b>Board Color:</b>{` ${form.values.boardColor}`}</p>
          <p><b>Fin Box From Tail:</b>{` ${form.values.finFromTail}`}</p>
        </div>

        <div id='boardSpecs2'>
          <p><b>Tail:</b>{` ${form.values.tail}`}</p>
          <p><b>Width:</b>{` ${form.values.width}`}</p>
          <p><b>Fin Setup:</b>{` ${form.values.finSetup}`}</p>
          <p><b>Stance:</b>{` ${form.values.stance}`}</p>
          <p><b>Logos Color:</b>{` ${form.values.logo}`}</p>
          <p><b>Pads:</b>{` ${form.values.pads}`}</p>
        </div>

        <div id='boardSpecs3'>
          <p><b>Blank:</b>{` ${form.values.blank}`}</p>
          <p><b>Thickness:</b>{` ${form.values.thickness}`}</p>
          <p><b>Straps Width:</b>{` ${form.values.strapWidth}`}</p>
          <p><b>Construction:</b>{` ${form.values.construction}`}</p>
          <p><b>Volume:</b>{` ${form.values.volume}`}</p>
          <p><b>Rear Inserts From Tail:</b>{` ${form.values.rearInsertsFromTail}`}</p>
        </div>
        <div id="notes">
          <b>Notes:</b>
        </div>
        <img id="image" src='/surfBoard.jpeg'/>
      </div>
  )
}