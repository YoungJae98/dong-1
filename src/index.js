import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

ReactDOM.render(
  <BrowserRouter basename="/dong/">
    <Route component={ScrollToTop} />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);