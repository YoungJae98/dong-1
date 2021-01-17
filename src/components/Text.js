import React from "react";

import styled from "styled-components";

const StyledText = styled.p`
  font-size: ${(props) => props.fontSize || "15px"};
  color: ${(props) => props.fontColor || "black"};
  font-family: ${(props) => props.fontFamily || "NanumGothic"};
  font-weight: ${(props) => props.fontWeight || "bold"};

  margin: 0;
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
`;

function Text({
  fontSize,
  fontColor,
  fontFamily,
  fontWeight,
  marginLeft,
  marginTop,
  children,
}) {
  return (
    <StyledText
      fontSize={fontSize}
      fontColor={fontColor}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      marginLeft={marginLeft}
      marginTop={marginTop}
    >
      {children}
    </StyledText>
  );
}

export default Text;
