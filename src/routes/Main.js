import React from "react";

import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Container from "../components/Container";
import { Header } from "../components/Header";
import { Navigation } from "../components/Navigation";

function Main() {
  return (
    <Container fd="column">
      <Header />
      <Navigation main />
      <Carousel />
      <Container marginTop="2px">
        <Card width="599px" height="200px" marginRight="2px">
          card1
        </Card>
        <Card width="599px" height="200px">
          card2
        </Card>
      </Container>
      <Container marginTop="2px">
        <Card width="599px" height="200px" marginRight="2px">
          card3
        </Card>
        <Card width="599px" height="200px">
          card4
        </Card>
      </Container>
      <Container marginTop="2px">
        <Card width="599px" height="200px" marginRight="2px">
          card5
        </Card>
        <Card width="599px" height="200px">
          card6
        </Card>
      </Container>
    </Container>
  );
}

export default Main;
