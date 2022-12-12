import {
  BrowserRouter as Router, Routes, Route
 } from "react-router-dom";

 import Home from "./routes/Home";
 import Login from "./routes/Login";

 export default function App () {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" exact/>
          <Route element={<Login />} path="/login"/>
        </Routes>
      </Router>
    </div>
  )
 }