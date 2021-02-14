import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledContainer = styled.div`
  background-color: ${(props) => props.backgroundColor};

  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};

  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};

  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.fd || "row"};
  align-items: ${(props) => props.verticalAlign || "center"};
  justify-content: ${(props) => props.horizontalAlign || "center"};
  vertical-align: top;

  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderBottom};
  border-top: ${(props) => props.borderTop};
  border-radius: ${(props) => props.borderRadius};

  position: ${(props) => props.position};
  top: ${(props) => (props.position === "fixed" ? 0 : null)};
  top: ${(props) => (props.position === "sticky" ? "80px" : null)};
  z-index: ${(props) => props.zIndex};

  overflow-y: ${(props) => props.scroll && "scroll"};

  animation: ${(props) => props.animation || "fadein 0.3s"};
`;

export function Container({
  backgroundColor,
  size,
  fontSize,
  display,
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
  border,
  borderRadius,
  borderBottom,
  borderTop,
  position,
  zIndex,
  visual,
  scroll,
  top,
  animation,
  children,
  className,
}) {
  return (
    <StyledContainer
      backgroundColor={backgroundColor}
      size={size}
      fontSize={fontSize}
      display={display}
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
      border={border}
      borderRadius={borderRadius}
      borderBottom={borderBottom}
      borderTop={borderTop}
      position={position}
      zIndex={zIndex}
      visual={visual}
      scroll={scroll}
      top={top}
      animation={animation}
      className={className}
    >
      {children}
    </StyledContainer>
  );
}

Container.propTypes = {
  backgroundColor: PropTypes.string,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fd: PropTypes.string,
  verticalAlign: PropTypes.string,
  horizontalAlign: PropTypes.string,
};

Container.defaultProps = {};

export default Container;
