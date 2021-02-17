import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  background-color: ${(props) => (props.primary ? "red" : "")};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor || "black"};

  font-family: ${(props) => props.font || "SeoulMedium"};
  font-size: ${(props) => props.fontSize || "21px"};

  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};

  outline: none;
  border: ${(props) => props.border || "none"};

  border-radius: ${(props) => props.borderRadius};

  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.hoverBackgrounColor};
    color: ${(props) => props.hoverFontColor};
    ${(props) =>
      props.hoverUnderline &&
      "text-decoration:underline; text-underline-position: under;"}
  }
`;

export function Button({
  primary,
  backgroundColor,
  hoverBackgrounColor,
  fontColor,
  hoverFontColor,
  size,
  fontSize,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  width,
  height,
  onClick,
  className,
  font,
  borderRadius,
  border,
  hoverUnderline,
  children,
}) {
  return (
    <StyledButton
      primary={primary}
      backgroundColor={backgroundColor}
      hoverBackgrounColor={hoverBackgrounColor}
      fontColor={fontColor}
      hoverFontColor={hoverFontColor}
      size={size}
      fontSize={fontSize}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      width={width}
      height={height}
      onClick={onClick}
      className={className}
      font={font}
      border={border}
      borderRadius={borderRadius}
      hoverUnderline={hoverUnderline}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string,
  onClick: PropTypes.func,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};

export default Button;
