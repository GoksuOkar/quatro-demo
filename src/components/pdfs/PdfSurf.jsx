import { Avatar } from '@mantine/core';
import { useRef, useEffect, useState } from 'react';
import './output.css';
import { capitalizeFirstLetter, convertDate, createTodaysDate, futureDate6 } from "../../utils/helpers.js";
import myAvatarPerson from '../../pictures/black-avatar.jpg'
import myAvatarBoard from '../../pictures/board-black.png'
import myAvatarPen from '../../pictures/black-pen1.png'
//surf output

export default function PdfSurf({ values, orderNum, customer }) {

  // console.log('surfValues:', values)
  const myref = useRef(null);

  let name = capitalizeFirstLetter(customer.firstName + " " + customer.lastName);

  return (
    <>
      <div className='outer-box'>

        <div className='title-box'>
          <div className='order-type-heading'>
            <div className='order-title'>{capitalizeFirstLetter(values.orderType)}</div>
          </div>
          {values.createdAt ? (
            <div className='order-date'>
              <span>Order Created</span>
              {convertDate(values.createdAt)}
          </div>) : (
            <div className='order-date'>
              <span>Order Created</span>
              {createTodaysDate()}
          </div> 
          )}
        </div>

        <div className='contact-box'>
          <div className='avatar-info'>
            <Avatar src={myAvatarPerson} size='70px'></Avatar>
            <span>Customer Information</span>
          </div>
          <div className='info-in-box'>
            {/* One */}
            <div className='general-info'>
              <div className='one-data'>
                <span>Name </span>
                {name}
              </div>
              <div className='one-data'>
                <span>Phone </span>
                {customer.phone === "na" ? <>&nbsp;</> : customer.phone}
              </div>
              <div className='one-data'>
                <span>Email </span>
                {customer.email === "na" ? <>&nbsp;</>: customer.email}
              </div>
            </div>
            {/* Two */}
            <div className='general-info'>
              <div className='one-data'>
                <span>Weight </span>
                {customer.weight}
              </div>
              <div className='one-data'>
                <span>Height </span>
                {` ${customer.heightFt}' ${customer.heightIn}`}
              </div>
              <div className='one-data'>
                <span>Level </span>
                {customer.level}
              </div>
            </div>

            {/* Three */}
            <div className='general-info'>
              <div className='one-data'>
                <span>Location </span>
                {values.waveLocation}
              </div>
              <div className='one-data'>
                <span>Order #</span>
                {orderNum}
              </div>
              <div className='one-data'>
                <span>Invoice #</span>
                {values.invoiceNum === '' ? <>&nbsp;</> : values.invoiceNum}
              </div>
            </div>

          </div>

          <div className='board-spec-box'>
            {/* Board Heading */}
            <div className='board-avatar-info'>
              <Avatar src={myAvatarBoard} size='70px'></Avatar>
              <span style={{marginLeft: '-10px'}}>Board Specs</span>
            </div>

            <div className='info-in-box'>
              {/* First Box */}
              <div className='general-info'>
                <div className='one-data'>
                  <span>Style</span>
                  {values.style}
                </div>
                <div className='one-data'>
                  <span>Construction</span>
                  {values.construction}
                </div>
                <div className='one-data'>
                  <span>Blank</span>
                  {values.blank}
                </div>
                <div className='one-data'>
                  <span>Tail</span>
                  {values.tail}
                </div>
              </div>

              {/* Second Box */}
              <div className='general-info'>
                <div className='one-data'>
                  <span>Length</span>
                  {` ${values.lengthFt}' ${values.lengthIn}`}
                </div>
                <div className='one-data'>
                  <span>Width</span>
                  {values.width}
                </div>
                <div className='one-data'>
                  <span>Thickness</span>
                  {values.thickness}
                </div>
                <div className='one-data'>
                  <span>Volume</span>
                  {values.volume}
                </div>
              </div>

              {/* Third Box */}
              <div className='general-info'>
                <div className='one-data'>
                  <span>Fin Setup</span>
                  {values.finSetup}
                </div>
                <div className='one-data'>
                  <span>Box Type</span>
                  {values.boxType}
                </div>
                <div className='one-data'>
                  <span>Box Color</span>
                  {values.boxColor}
                </div>
                <div className='one-data'>
                  <span>Board Color</span>
                  {values.boardColor === "" ? <>&nbsp;</> : values.boardColor}
                </div>
                <div className='one-data'>
                  <span>Logo Color</span>
                  {values.logo === "" ? <>&nbsp;</> : values.logo}
                </div>
              </div>

              {/* Fourth Box */}
              <div className='general-info'>
                <div className='one-data'>
                  <span>Pad</span>
                  {values.pads}
                </div>
                <div className='one-data'>
                  <span>Leash Plug</span>
                  {values.leash}
                </div>
                <div className='one-data'>
                <span>Airbrush</span>
                  {values.airbrush === '' ? <>&nbsp;</> : values.airbrush}
                </div>
                <div className='one-data'>
                  <span>Board Weight</span>
                  {values.boardWeight === '' ? <>&nbsp;</> : values.boardWeight}
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className='notes-outer-box'>
              <div className='notes-avatar-info'>
                <Avatar mr={5} src={myAvatarPen} size='70px'></Avatar>
                <span>Notes</span>
              </div>

              {/* Text Area */}
              <div className='notes-inner-div'>
                <div>{values.notes}</div>
              </div>
            </div>

            <div className='rush'>
              {values.dueDate === "" ? null : (<div className='r-div'>DUE {values.dueDate}</div>)}
            </div>

          </div>
        </div>    
      </div>
    </>
  );
}