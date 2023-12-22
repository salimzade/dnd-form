import React from "react";
import ReactDOM from "react-dom/client";
import { ComponentProvider } from "./context";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ComponentProvider>
      <App />
    </ComponentProvider>
  </React.StrictMode>
);