import React from "react";
import Container from "../components/Container";

import makers from "../assets/images/makers.png";
import { useMediaQuery } from "react-responsive";

function Makers() {
  const isMobile = useMediaQuery({ query: "(max-width: 501px)" });
  return (
    <Container height="710px">
      <img src={makers} alt="" height={isMobile ? "300px" : "500px"} />
    </Container>
  );
}

export default Makers;
