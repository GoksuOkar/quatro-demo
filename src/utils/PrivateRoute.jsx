import { Navigate, Outlet } from "react-router-dom";
import Home from "../routes/home";

export default function PrivateRoute () {
  const auth = {'token': true};

  return (
    auth.token ? <Outlet /> : <Navigate to="/login"/>
  )
}
