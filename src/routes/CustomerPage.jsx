import { useLocation } from 'react-router-dom';
import { useEffect } from "react";

export default function CustomerPage() {
  const location = useLocation();
  const customer = location.state.customer;

  useEffect(() => {console.log(customer)}, [])

  return (
    <div>
      {customer.firstName}
    </div>
  )
}