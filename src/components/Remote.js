import React from "react";
import styled from "styled-components";

const StyledRemote = styled.div`
  background-color: ${(props) => props.backgroundColor || "white"};

  border-radius: 5px;

  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};

  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height};

  display: flex;
  flex-direction: ${(props) => props.fd || "row"};
  align-items: ${(props) => props.verticalAlign || "center"};
  justify-content: ${(props) => props.horizontalAlign || "center"};
`;

function Remote({
  backgroundColor,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  width,
  height,
  fd,
  verticalAlign,
  horizontalAlign,
  children,
}) {
  return (
    <StyledRemote
      backgroundColor={backgroundColor}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      width={width}
      height={height}
      fd={fd}
      verticalAlign={verticalAlign}
      horizontalAlign={horizontalAlign}
    >
      {children}
    </StyledRemote>
  );
}

export default Remote;
