import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CusineReducerProv } from "./Contexts/CusineReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CusineReducerProv>
    <App />
  </CusineReducerProv>
);

reportWebVitals();
