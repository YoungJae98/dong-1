import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;

  display: flex;
  flex-direction: ${(props) => props.fd || "row"};
  align-items: ${(props) => props.verticalAlign || "center"};
  justify-content: ${(props) => props.horizontalAlign || "space-around"};

  width: ${(props) => props.width};
`;

function List({ width, fd, verticalAlign, horizontalAlign, children }) {
  return (
    <StyledList
      width={width}
      fd={fd}
      verticalAlign={verticalAlign}
      horizontalAlign={horizontalAlign}
    >
      {children}
    </StyledList>
  );
}

export default List;
