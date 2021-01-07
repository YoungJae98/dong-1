import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  background-color: ${(props) => (props.primary ? "red" : "")};
  background-color: ${(props) => props.backgroundColor};

  margin-top:${(props) => props.marginTop};
  margin-bottom:${(props) => props.marginBottom};
  margin-left:${(props) => props.marginLeft};
  margin-right:${(props) => props.marginRight};

  ${(props) =>
    props.size === "small" &&
    css`
      width: 4vw;
      height: 3vh;
    `}
  ${(props) =>
    props.size === "medium" &&
    css`
      width: 8vw;
      height: 6vh;
    `}
  ${(props) =>
    props.size === "large" &&
    css`
      width: 12rem;
      height: 9rem;
    `}

  outline:none;
  border:none;
  border-radius:5px;

  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-color: green;
    color: white;
  }

`;

function Button({
  primary,
  backgroundColor,
  size,
  label,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}) {
  return (
    <StyledButton
      primary={primary}
      backgroundColor={backgroundColor}
      size={size}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
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
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};

export default Button;
