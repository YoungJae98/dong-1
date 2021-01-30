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

  ${(props) => props.clubName && "font-size:30px;"}
  ${(props) => props.clubSummary && "font-size:18px; margin-top:10px"}
  ${(props) =>
    props.donePromise &&
    "text-decoration-line:line-through; text-decoration-color: pink;"}
  ${(props) => props.donePromiseV && "font-weight:bold; color:pink;"}
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
  donePromise,
  donePromiseV,
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
      donePromise={donePromise}
      donePromiseV={donePromiseV}
    >
      {children}
    </StyledText>
  );
}

export default Text;
