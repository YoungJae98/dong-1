/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Logo from "./Logo";
import Container from "./Container";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineYoutube,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const StyledHeader = styled.div`
  background-color: ${(props) => props.backgroundColor || "#14406c"};
  color: ${(props) => props.fontColor || "white"};

  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};

  width: ${(props) => props.width || "1200px"};
  height: ${(props) => props.height || "100px"};

  display: flex;
  flex-direction: ${(props) => props.fd || "row"};
  align-items: ${(props) => props.verticalAlign || "center"};
  justify-content: ${(props) => props.horizontalAlign || "center"};
`;

export function Header({
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
}) {
  return (
    <Container backgroundColor="#14406c" zIndex={10}>
      <StyledHeader
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
        <Container height="100px" horizontalAlign="left">
          <Link to="/">
            <Logo />
          </Link>
        </Container>
        <Container
          height="100px"
          horizontalAlign="flex-end"
          paddingRight="30px"
        >
          <a
            href="https://www.instagram.com/?hl=ko"
            target="_blank"
            style={{ marginRight: "10px" }}
          >
            <AiOutlineInstagram size="50" />
          </a>
          <a
            href="https://www.facebook.com/sejongclubunion"
            target="_blank"
            style={{ marginRight: "10px" }}
          >
            <AiOutlineFacebook size="50" />
          </a>
          <a href="https://www.instagram.com/?hl=ko" target="_blank">
            <AiOutlineYoutube size="50" />
          </a>
        </Container>
      </StyledHeader>
    </Container>
  );
}

Header.propTypes = {
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

Header.defaultProps = {};

export default Header;
