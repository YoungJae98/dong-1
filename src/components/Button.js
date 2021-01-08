import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  background-color: ${(props) => (props.primary ? "red" : "")};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor || "black"};

  margin-top:${(props) => props.marginTop};
  margin-bottom:${(props) => props.marginBottom};
  margin-left:${(props) => props.marginLeft};
  margin-right:${(props) => props.marginRight};

  ${(props) =>
    props.size === "small" &&
    css`
      width: 4rem;
      height: 3rem;
    `}
  ${(props) =>
    props.size === "medium" &&
    css`
      width: 8rem;
      height: 6rem;
    `}
  ${(props) =>
    props.size === "large" &&
    css`
      width: 12rem;
      height: 9rem;
    `}

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  outline:none;
  border:none;
  border-radius:5px;

  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.hoverBackgrounColor || "green"};
    color: ${(props) => props.hoverFontColor || "white"};
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
  label,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  width,
  height,
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
    >
      {label}
    </StyledButton>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
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
