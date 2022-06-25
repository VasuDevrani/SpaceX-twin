import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { initialState } from "./component/reducer";
import reducer from "./component/reducer";
import { StateProvider } from "./component/StateProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App /> 
    </StateProvider>
    </BrowserRouter>
  </React.StrictMode>
);
