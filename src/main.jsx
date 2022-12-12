import ReactDOM from "react-dom/client";
import React from 'react';
import App from "./App";

const loginloader = function () {
  return true;
}

// const router = createBrowserRouter([
//   {
//     path: "/login",
//     element: <Login />,
//     loader: loginloader,

//   },
//   {
//     path: "/",
//     element: <Home />,
//   }
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
