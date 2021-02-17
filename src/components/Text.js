import React from "react";

import styled from "styled-components";

const StyledText = styled.p`
  font-size: ${(props) => props.fontSize || "15px"};
  color: ${(props) => props.fontColor};
  font-family: ${(props) => props.fontFamily || "SeoulMedium"};
  font-weight: ${(props) => props.fontWeight};

  margin: 0;
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};

  ${(props) => props.clubName && "font-size:30px; margin-top:20px"}
  ${(props) =>
    props.clubSummary &&
    "font-size:16px; margin-top:10px; font-family:SeoulLight"}
  ${(props) => props.more && "position:absolute; right:30px;"}
  ${(props) =>
    props.underline && "text-decoration: underline solid #14406c 1px;"}
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
  more,
  underline,
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
      more={more}
      underline={underline}
    >
      {children}
    </StyledText>
  );
}

export default Text;
