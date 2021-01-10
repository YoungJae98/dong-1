import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;

  display: flex;
  flex-direction: ${(props) => props.fd || "row"};
  align-items: ${(props) => props.verticalAlign || "center"};
  justify-content: ${(props) => props.horizontalAlign || "space-around"};

  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
`;

function List({ width, height, fd, verticalAlign, horizontalAlign, children }) {
  return (
    <StyledList
      width={width}
      height={height}
      fd={fd}
      verticalAlign={verticalAlign}
      horizontalAlign={horizontalAlign}
    >
      {children}
    </StyledList>
  );
}

export default List;
