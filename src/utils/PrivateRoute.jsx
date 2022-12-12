import { Navigate, Outlet } from "react-router-dom";
import Home from "../routes/Home";

export default function PrivateRoute () {
  const auth = {'token': false};

  return (
    auth.token ? <Outlet /> : <Navigate to="/login"/>
  )
}