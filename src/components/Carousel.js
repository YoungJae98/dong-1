import React from "react";
import { Carousel } from "react-responsive-carousel";

function MyCarousel({ images }) {
  const reverse_images = images.reverse();
  return (
    <Carousel
      showThumbs={false}
      // autoPlay
      infiniteLoop={true}
      showStatus={false}
      dynamicHeight={true}
      interval={2000}
    >
      {reverse_images.map((image, index) => (
        <div key={index}>
          <img src={image} alt="" />
        </div>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
