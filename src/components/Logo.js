import React from "react";
import logo from "../assets/images/main.png";

function Logo({ height }) {
  return (
    <div>
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        height={height || "100px"}
      />
    </div>
  );
}

export default Logo;
