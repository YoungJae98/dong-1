import React from "react";
import styled from "styled-components";

import dummy from "../assets/carousel1.png";

const StyledCarousel = styled.div`
  background-color: pink;

  margin-top: ${(props) => props.marginTop || "2px"};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "600px"};

  display: flex;
  align-items: ${(props) => props.verticalAlign || "center"};
  justify-content: ${(props) => props.horizontalAlign || "center"};
`;

function Carousel() {
  return (
    <StyledCarousel>
      <img src={dummy} alt="" />
    </StyledCarousel>
  );
}

export default Carousel;
