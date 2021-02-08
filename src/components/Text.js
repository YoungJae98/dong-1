import React from "react";

import styled from "styled-components";

const StyledText = styled.p`
  font-size: ${(props) => props.fontSize || "15px"};
  color: ${(props) => props.fontColor};
  font-family: ${(props) => props.fontFamily || "SeoulBold"};
  font-weight: ${(props) => props.fontWeight};

  margin: 0;
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};

  ${(props) => props.clubName && "font-size:30px; margin-top:20px"}
  ${(props) =>
    props.clubSummary &&
    "font-size:18px; margin-top:10px; font-family:SeoulLight"}
  ${(props) =>
    props.doneAct &&
    "text-decoration-line:line-through; text-decoration-color: pink; "}
  ${(props) =>
    props.doneActV && "font-weight:bold; color:pink; margin-left:5px; "}
`;

function Text({
  fontSize,
  fontColor,
  fontFamily,
  fontWeight,
  marginLeft,
  marginTop,
  clubName,
  clubSummary,
  doneAct,
  doneActV,
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
      clubName={clubName}
      clubSummary={clubSummary}
      doneAct={doneAct}
      doneActV={doneActV}
    >
      {children}
    </StyledText>
  );
}

export default Text;
