import React from "react";

import Card from "../components/Card";
import Container from "../components/Container";
import MyCarousel from "../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Main() {
  return (
    <Container fd="column">
      <MyCarousel />
      <Container marginTop="20px">
        <Card width="599px" height="200px" marginRight="20px">
          인기 청원 목록
        </Card>
        <Card width="599px" height="200px">
          card2
        </Card>
      </Container>
      <Container marginTop="20px">
        <Card width="599px" height="200px" marginRight="20px">
          card3
        </Card>
        <Card width="599px" height="200px">
          card4
        </Card>
      </Container>
      <Container marginTop="20px">
        <Card width="599px" height="200px" marginRight="20px">
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
