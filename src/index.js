import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { cofigureStor } from "./store/store";
import { Root } from "./Root";

const store = cofigureStor();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>
);
