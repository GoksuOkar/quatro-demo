import ReactDOM from "react-dom/client";
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Home from "./routes/home";
import NewOrder from "./routes/NewOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/new-order",
    element: <NewOrder />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
