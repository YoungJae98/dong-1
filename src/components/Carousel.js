import React from "react";
import { Carousel } from "react-responsive-carousel";

function MyCarousel({ images }) {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop={true}
      showStatus={false}
      dynamicHeight={true}
      interval={4000}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt="" />
        </div>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
