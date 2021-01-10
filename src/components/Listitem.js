import React from "react";
import styled from "styled-components";

const StyledListitem = styled.li`
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};

  color: ${(props) => props.fontColor};
  font-weight: bold;
  font-size: ${(props) => props.fontSize || "21px"};

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: ${(props) => props.borderBottom};

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor};
    color: ${(props) => props.hoverColor};
    cursor: ${(props) => props.hoverCursor};
  }
`;

function Listitem({
  label,
  fontSize,
  fontColor,
  hoverBackgroundColor,
  hoverColor,
  hoverCursor,
  borderBottom,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}) {
  return (
    <StyledListitem
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      fontSize={fontSize}
      fontColor={fontColor}
      hoverBackgroundColor={hoverBackgroundColor}
      hoverColor={hoverColor}
      hoverCursor={hoverCursor}
      borderBottom={borderBottom}
    >
      {label}
    </StyledListitem>
  );
}

export default Listitem;
