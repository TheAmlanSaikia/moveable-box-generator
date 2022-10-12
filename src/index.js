import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BoxProvider } from "./Context/BoxContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BoxProvider>
      <App />
    </BoxProvider>
  </React.StrictMode>
);
