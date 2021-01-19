/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import logo_reversed from "../assets/logo_reversed.png";
import logo from "../assets/logo.png";
import { BsFillPersonFill } from "react-icons/bs";

import List from "./List";
import Listitem from "./Listitem";
import { Link, NavLink } from "react-router-dom";
import {} from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "../components/Container";
import Button from "./Button";

const StyledNavigation = styled.div`
  background-color: ${(props) => props.backgroundColor || ""};
  color: ${(props) => props.fontColor || "#14406c"};

  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  padding-top: ${(props) => props.paddingTop || "1px"};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft || "30px"};
  padding-right: ${(props) => props.paddingRight || "30px"};

  width: ${(props) => props.width || "1138px"};
  height: ${(props) => props.height || "60px"};

  display: flex;
  flex-direction: ${(props) => props.fd || "row"};
  align-items: ${(props) => props.verticalAlign || "center"};
  justify-content: ${(props) => props.horizontalAlign || "space-between"};

  border: ${(props) => props.border};

  z-index: 10;
`;

const StyledNavLink = styled(NavLink)`
  &:hover {
    & .submenu {
      display: block;
    }
  }
`;

function Navigation({
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
  border,
  main,
}) {
  const [sticky, setsticky] = useState(false);
  useEffect(() => {
    if (main) {
      window.onscroll = () => {
        const offset = window.scrollY;
        const stickyLimit = 100;
        if (offset >= stickyLimit) {
          setsticky(true);
        } else {
          setsticky(false);
        }
      };
    } else {
      setsticky(true);
    }
  }, [main]);

  return (
    <Container width="100%" height="60px">
      <Container
        width="100%"
        height="60px"
        backgroundColor={main ? "#FAFAFA" : "#14406c"}
        zIndex={10}
        position={sticky ? "fixed" : ""}
      >
        <StyledNavigation
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
          border={border}
        >
          <Link to="/">
            <img
              src={main ? logo_reversed : logo}
              className="App-logo"
              alt="logo"
              height="60px"
            />
          </Link>
          <List width="800px" fontColor={main ? "#14406c" : "white"}>
            <StyledNavLink to="/clubunion" activeStyle={{ color: "BurlyWood" }}>
              <Listitem label="총동아리연합회 소개" />
              <div className="submenu">
                <div>
                  <Button
                    height="40px"
                    width="183px"
                    backgroundColor="#14406c"
                    fontColor="white"
                    fontSize="18px"
                  >
                    <Link to="/clubunion">인사말</Link>
                  </Button>
                </div>
                <div>
                  <Button
                    height="40px"
                    width="183px"
                    backgroundColor="#14406c"
                    fontColor="white"
                    fontSize="18px"
                  >
                    <Link to="/clubunion/introduce">회장단 및 국장 소개</Link>
                  </Button>
                </div>
                <div>
                  <Button
                    height="40px"
                    width="183px"
                    backgroundColor="#14406c"
                    fontColor="white"
                    fontSize="18px"
                  >
                    <Link to="/clubunion/way2us">찾아오시는 길</Link>
                  </Button>
                </div>
              </div>
            </StyledNavLink>
            <NavLink to="/centralclub" activeStyle={{ color: "BurlyWood" }}>
              <Listitem label="중앙동아리 소개" />
            </NavLink>
            <NavLink to="/information" activeStyle={{ color: "BurlyWood" }}>
              <Listitem label="정보" />
            </NavLink>
            <NavLink to="/communication" activeStyle={{ color: "BurlyWood" }}>
              <Listitem label="소통" />
            </NavLink>
            <NavLink to="/document" activeStyle={{ color: "BurlyWood" }}>
              <Listitem label="자료" />
            </NavLink>
          </List>
          <a href="">
            <BsFillPersonFill size="32" color={main ? "#14406c" : "white"} />
          </a>
        </StyledNavigation>
      </Container>
    </Container>
  );
}

Navigation.propTypes = {
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

Navigation.defaultProps = {};

export default Navigation;
