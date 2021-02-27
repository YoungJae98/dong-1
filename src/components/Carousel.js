import React from "react";
import { Carousel } from "react-responsive-carousel";

function MyCarousel({ images }) {
  console.log(images);
  return (
    <Carousel
      showThumbs={false}
      // autoPlay
      infiniteLoop={true}
      showStatus={false}
      dynamicHeight={true}
      interval={2000}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt="" height="600px" />
        </div>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
