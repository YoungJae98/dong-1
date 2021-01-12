import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;

  display: flex;
  flex-direction: ${(props) => props.fd || "row"};
  align-items: ${(props) => props.verticalAlign || "center"};
  justify-content: ${(props) => props.horizontalAlign || "space-around"};

  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};

  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
`;

function List({
  width,
  height,
  fd,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  verticalAlign,
  horizontalAlign,
  children,
}) {
  return (
    <StyledList
      width={width}
      height={height}
      fd={fd}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      verticalAlign={verticalAlign}
      horizontalAlign={horizontalAlign}
    >
      {children}
    </StyledList>
  );
}

export default List;
