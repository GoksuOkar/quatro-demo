import ReactDOM from "react-dom/client";
import React from 'react';
import App from "./App";

const loginloader = function () {
  return true;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
