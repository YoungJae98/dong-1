import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: white;
  border-radius: 2px;

  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  width: ${(props) => props.width || "1200px"};
  height: ${(props) => props.height || "400px"};

  display: flex;
  align-items: ${(props) => props.verticalAlign || "center"};
  justify-content: ${(props) => props.horizontalAlign || "center"};

  animation: fadein 0.5s;
`;
function Card({
  width,
  height,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  children,
}) {
  return (
    <StyledCard
      width={width}
      height={height}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      {children}
    </StyledCard>
  );
}

export default Card;
