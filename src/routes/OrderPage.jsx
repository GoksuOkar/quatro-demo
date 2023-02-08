import { useState } from 'react';
import PdfFoil from '../components/pdfs/PdfFoil';
import PdfWS from '../components/pdfs/PdfWS';
import PdfSurf from '../components/pdfs/PdfSurf';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Center, Button, Group } from '@mantine/core';
import CurrentCustomerOrder from '../components/CurrentCustomerOrder';
import { getLastTwoDigitsOfYear } from "../utils/helpers.js";

let year = getLastTwoDigitsOfYear();

export default function OrderPage() {
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const order = location.state.order;
  const customer = location.state.customer;
  const orderNum = location.state.order.orderId;

  const handleEdit = () => {
    setEdit(true);
  }

  const print = () => {
    window.print();
  }

  return (
    <Center>
      {
        !edit ? (
          <Container>
            {
              order.orderType === "surf" ? <PdfSurf values={order} orderNum={orderNum} customer={customer}/> : order.orderType === "windsurf" ?<PdfWS values={order} orderNum={orderNum} customer={customer}/> : <PdfFoil values={order} orderNum={orderNum} customer={customer}/>
            }
            <Center>
              <Group>
                <Button color="dark" onClick={print}>Print/Save</Button>
                <Button color="dark" onClick={() => navigate('/')}>Go Home</Button>
                <Button color="dark" onClick={handleEdit}>Edit</Button>
              </Group>
            </Center>
          </Container>
        ) : (
          <CurrentCustomerOrder values={order} customer={customer}/>
        )
      }
    </Center>
  )
}