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
    <div className="bg" />
    <App />
    {/* <div id="group1" class="parallax__group">
        <div class="parallax__layer parallax__layer--base">
          <div class="title">Base Layer</div>
        </div>
      </div>
      <div id="group2" class="parallax__group">
        <div class="parallax__layer parallax__layer--base">
          <div class="title">Base Layer</div>
        </div>
        <div class="parallax__layer parallax__layer--back">
          <div class="title">Background Layer</div>
        </div>
      </div> */}
  </BrowserRouter>,
  document.getElementById("root")
);
