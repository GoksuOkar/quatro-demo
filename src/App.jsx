import {
  BrowserRouter as Router, Routes, Route
 } from "react-router-dom";

 import PrivateRoute from "./utils/PrivateRoute";
 import Home from "./routes/home";
 import Login from "./routes/Login";
 import Orders from "./routes/Orders";

 export default function App () {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route element={<Home />} path="/" exact/>
            <Route element={<Orders />} path="/orders" exact/>
          </Route>
          <Route element={<Login />} path="/login"/>
        </Routes>
      </Router>
    </div>
  )
 }
