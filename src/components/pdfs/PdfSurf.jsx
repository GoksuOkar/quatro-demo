import { Button, Title, Avatar } from '@mantine/core';
import { useRef, useEffect, useState } from 'react';
import './output.css';
import { capitalizeFirstLetter, convertDate } from "../../utils/helpers.js";
import myAvatar from '../../pictures/black-avatar.jpg'

//surf output

export default function PdfSurf({ values, orderNum, customer }) {
  const myref = useRef(null);

  let name = capitalizeFirstLetter(customer.firstName + " " + customer.lastName);

  return (
    <>
      <div className='outer-box'>

        <div className='title-box'>
          <div className='order-type-heading'>
            <div className='order-title'>{capitalizeFirstLetter(values.orderType)}</div>
          </div>
          <div className='order-date'>
            <span>Order Created</span>
            {convertDate(values.createdAt)}
          </div>
        </div>

        <div className='contact-box'>
          <div className='avatar-info'>
            <Avatar src={myAvatar} size='80px'></Avatar>
            <span>Customer Information</span>
          </div>
          <div className='c-info-in-box'>
            {/* One */}
            <div className='contact-info'>
              <div className='one-data'>
                <span>Name </span>
                {name}
              </div>
              <div className='one-data'>
                <span>Phone </span>
                {customer.phone === "na" ? <div>&nbsp;</div> : customer.phone}
              </div>
              <div className='one-data'>
                <span>Email </span>
                {customer.email === "na" ? null: customer.email}
              </div>
            </div>
            {/* Two */}
            <div className='contact-info'>
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
                {capitalizeFirstLetter(customer.level)}
              </div>
            </div>

            {/* Three */}
            <div className='contact-info'>
              <div className='one-data'>
                <span>Location </span>
                {capitalizeFirstLetter(values.waveLocation)}
              </div>
              <div className='one-data'>
                <span>Order #</span>
                {orderNum}
              </div>
              <div className='one-data'>
                <span>Invoice #</span>
                {values.invoiceNum === '' ? <div>&nbsp;</div> : values.invoiceNum}
              </div>
            </div>

          </div>
        </div>
          
      </div>
    </>
  );
}