import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import MainRoutes from "./routes";
import "@fontsource/press-start-2p";
import { GlobalStyle } from "./assets/styles/globalStyle";
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <MainRoutes />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
