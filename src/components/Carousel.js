import React from "react";
import styled from "styled-components";

const StyledCarousel = styled.div`
  background-color: green;
  z-index: 1;

  margin-top: ${(props) => props.marginTop || "2px"};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "400px"};

  display: flex;
  align-items: ${(props) => props.verticalAlign || "center"};
  justify-content: ${(props) => props.horizontalAlign || "center"};
`;

function Carousel() {
  return <StyledCarousel></StyledCarousel>;
}

export default Carousel;
