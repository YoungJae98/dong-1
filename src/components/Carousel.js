import React from "react";
import { Carousel } from "react-responsive-carousel";

import c1 from "../assets/images/carousel/carousel1.jpg";
import c2 from "../assets/images/carousel/carousel2.jpg";
import c3 from "../assets/images/carousel/carousel3.jpg";

function MyCarousel() {
  return (
    <Carousel
      showThumbs={false}
      // autoPlay
      infiniteLoop={true}
      showStatus={false}
      dynamicHeight={true}
      interval={2000}
    >
      <div>
        <img src={c1} alt="" />
      </div>
      <div>
        <img src={c2} alt="" />
      </div>
      <div>
        <img src={c3} alt="" />
      </div>
    </Carousel>
  );
}

export default MyCarousel;
