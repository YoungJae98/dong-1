/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import logo_reversed from "../assets/logo_reversed.png";
import { BsFillPersonFill } from "react-icons/bs";

import List from "./List";
import Listitem from "./Listitem";
import { Link, NavLink } from "react-router-dom";

const StyledNavigation = styled.div`
  background-color: ${(props) => props.backgroundColor || "#fafafa"};
  color: ${(props) => props.fontColor || "#14406c"};

  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  padding-top: ${(props) => props.paddingTop || "1px"};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft || "30px"};
  padding-right: ${(props) => props.paddingRight || "30px"};

  width: ${(props) => props.width || "1140px"};
  height: ${(props) => props.height || "118px"};

  display: flex;
  flex-direction: ${(props) => props.fd || "row"};
  align-items: ${(props) => props.verticalAlign || "center"};
  justify-content: ${(props) => props.horizontalAlign || "space-between"};
`;

export function Navigation({
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
    >
      <Link to="/">
        <img
          src={logo_reversed}
          className="App-logo"
          alt="logo"
          height="118px"
        />
      </Link>
      <List width="800px">
        <NavLink to="/clubunion/" activeStyle={{ color: "red" }}>
          <Listitem label="총동아리연합회 소개" />
        </NavLink>
        <NavLink to="/centralclub" activeStyle={{ color: "red" }}>
          <Listitem label="중앙동아리 소개" />
        </NavLink>
        <NavLink to="/information" activeStyle={{ color: "red" }}>
          <Listitem label="정보" />
        </NavLink>
        <NavLink to="/communication" activeStyle={{ color: "red" }}>
          <Listitem label="소통" />
        </NavLink>
        <NavLink to="/document" activeStyle={{ color: "red" }}>
          <Listitem label="자료" />
        </NavLink>
      </List>
      <a href="">
        <BsFillPersonFill size="32" />
      </a>
    </StyledNavigation>
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
