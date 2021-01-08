import React from "react";

import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Container from "../components/Container";

function Main() {
  return (
    <>
      <Carousel />
      <Container marginTop="2px">
        <Card width="599px" height="200px" marginRight="2px">
          card1
        </Card>
        <Card width="599px" height="200px">
          card2
        </Card>
      </Container>
    </>
  );
}

export default Main;
