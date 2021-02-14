/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import logo_reversed from "../assets/images/logo_reversed.png";
import logo from "../assets/images/logo.png";
import { BsFillPersonFill } from "react-icons/bs";

import List from "./List";
import Listitem from "./Listitem";
import { Link } from "react-router-dom";
import {} from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "../components/Container";
import Button from "./Button";

const StyledNavigation = styled.div`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor || "#14406c"};

  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  padding-top: ${(props) => props.paddingTop};
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
`;

const StyledNavButton = styled.div`
  &:hover {
    cursor: default;
    & > .submenu {
      display: block;
    }
    & > .submenu2 {
      display: block;
    }
    & > .submenu3 {
      display: block;
    }
    & > .submenu4 {
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
  setMain,
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
    }
  }, [main]);
  return (
    <Container width="100%" height="60px" zIndex={1000}>
      <Container
        width="100%"
        height="60px"
        backgroundColor={main ? "white" : "#14406c"}
        zIndex={10}
        position={main ? (sticky ? "fixed" : "") : "fixed"}
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
          <Link to="/" onClick={() => setMain(true)}>
            <Container width="60px" height="60px">
              <img
                src={main ? logo_reversed : logo}
                className="App-logo"
                alt="logo"
                height="50px"
              />
            </Container>
          </Link>
          <List width="800px" fontColor={main ? "#14406c" : "white"}>
            <StyledNavButton>
              <Listitem label="총동아리연합회 소개" />
              <div className="submenu">
                <div className="navigation-uparrow"></div>
                <div>
                  <Link to="/clubunion" onClick={() => setMain(false)}>
                    <Button
                      height="40px"
                      width="183px"
                      backgroundColor="#14406c"
                      fontColor="white"
                      fontSize="21px"
                      font="SeoulBold"
                      className="navigation-submenu-button"
                    >
                      인사말
                    </Button>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/clubunion/introduce"
                    onClick={() => setMain(false)}
                  >
                    <Button
                      height="40px"
                      width="183px"
                      backgroundColor="#14406c"
                      fontColor="white"
                      fontSize="21px"
                      font="SeoulBold"
                      className="navigation-submenu-button"
                    >
                      회장단 및 국장 소개
                    </Button>
                  </Link>
                </div>
                <div>
                  <Link to="/clubunion/way2us" onClick={() => setMain(false)}>
                    <Button
                      height="40px"
                      width="183px"
                      backgroundColor="#14406c"
                      fontColor="white"
                      fontSize="21px"
                      font="SeoulBold"
                      className="navigation-submenu-button"
                    >
                      찾아오시는 길
                    </Button>
                  </Link>
                </div>
              </div>
            </StyledNavButton>
            <StyledNavButton>
              <Listitem label="중앙동아리 소개" />
              <div className="submenu2">
                <div className="navigation-uparrow"></div>
                <div>
                  <Link to="/centralclub/" onClick={() => setMain(false)}>
                    <Button
                      height="40px"
                      width="183px"
                      backgroundColor="#14406c"
                      fontColor="white"
                      fontSize="21px"
                      font="SeoulBold"
                      className="navigation-submenu-button"
                    >
                      동방 배치도
                    </Button>
                  </Link>
                </div>
                <div>
                  <Link to="/centralclub/show" onClick={() => setMain(false)}>
                    <Button
                      height="40px"
                      width="183px"
                      backgroundColor="#14406c"
                      fontColor="white"
                      fontSize="21px"
                      font="SeoulBold"
                      className="navigation-submenu-button"
                    >
                      공연 분과
                    </Button>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/centralclub/culture"
                    onClick={() => setMain(false)}
                  >
                    <Button
                      height="40px"
                      width="183px"
                      backgroundColor="#14406c"
                      fontColor="white"
                      fontSize="21px"
                      font="SeoulBold"
                      className="navigation-submenu-button"
                    >
                      문화 분과
                    </Button>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/centralclub/volunteer"
                    onClick={() => setMain(false)}
                  >
                    <Button
                      height="40px"
                      width="183px"
                      backgroundColor="#14406c"
                      fontColor="white"
                      fontSize="21px"
                      font="SeoulBold"
                      className="navigation-submenu-button"
                    >
                      봉사 분과
                    </Button>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/centralclub/religion"
                    onClick={() => setMain(false)}
                  >
                    <Button
                      height="40px"
                      width="183px"
                      backgroundColor="#14406c"
                      fontColor="white"
                      fontSize="21px"
                      font="SeoulBold"
                      className="navigation-submenu-button"
                    >
                      종교 분과
                    </Button>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/centralclub/physical"
                    onClick={() => setMain(false)}
                  >
                    <Button
                      height="40px"
                      width="183px"
                      backgroundColor="#14406c"
                      fontColor="white"
                      fontSize="21px"
                      font="SeoulBold"
                      className="navigation-submenu-button"
                    >
                      체육 분과
                    </Button>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/centralclub/academic"
                    onClick={() => setMain(false)}
                  >
                    <Button
                      height="40px"
                      width="183px"
                      backgroundColor="#14406c"
                      fontColor="white"
                      fontSize="21px"
                      font="SeoulBold"
                      className="navigation-submenu-button"
                    >
                      학술 분과
                    </Button>
                  </Link>
                </div>
              </div>
            </StyledNavButton>
            <StyledNavButton
              to="/information"
              activeStyle={{ color: "BurlyWood" }}
            >
              <Listitem label="정보" />
              <div className="submenu3">
                <div className="navigation-uparrow"></div>
                <div>
                  <Link to="/information/" onClick={() => setMain(false)}>
                    <Button
                      height="40px"
                      width="183px"
                      backgroundColor="#14406c"
                      fontColor="white"
                      fontSize="21px"
                      font="SeoulBold"
                      className="navigation-submenu-button"
                    >
                      공약 이행도
                    </Button>
                  </Link>
                </div>
                <div>
                  <Button
                    height="40px"
                    width="183px"
                    backgroundColor="#14406c"
                    fontColor="white"
                    fontSize="21px"
                    font="SeoulBold"
                    className="navigation-submenu-button"
                    onClick={() => {
                      alert("준비중입니다.");
                    }}
                  >
                    제휴 사업
                  </Button>
                </div>
                <div>
                  <Link to="/information/seoul" onClick={() => setMain(false)}>
                    <Button
                      height="40px"
                      width="183px"
                      backgroundColor="#14406c"
                      fontColor="white"
                      fontSize="21px"
                      font="SeoulBold"
                      className="navigation-submenu-button"
                    >
                      서동협
                    </Button>
                  </Link>
                </div>
                <div>
                  <Link to="/information/report" onClick={() => setMain(false)}>
                    <Button
                      height="40px"
                      width="183px"
                      backgroundColor="#14406c"
                      fontColor="white"
                      fontSize="21px"
                      font="SeoulBold"
                      className="navigation-submenu-button"
                    >
                      예결산 보고
                    </Button>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/information/meetinglog"
                    onClick={() => setMain(false)}
                  >
                    <Button
                      height="40px"
                      width="183px"
                      backgroundColor="#14406c"
                      fontColor="white"
                      fontSize="21px"
                      font="SeoulBold"
                      className="navigation-submenu-button"
                    >
                      회의록
                    </Button>
                  </Link>
                </div>
              </div>
            </StyledNavButton>
            <StyledNavButton>
              <Listitem label="소통" />
              <div className="submenu3">
                <div className="navigation-uparrow"></div>
                <div>
                  <Link to="/communication/" onClick={() => setMain(false)}>
                    <Button
                      height="40px"
                      width="183px"
                      backgroundColor="#14406c"
                      fontColor="white"
                      fontSize="21px"
                      font="SeoulBold"
                      className="navigation-submenu-button"
                    >
                      건의 사항
                    </Button>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/communication/petition"
                    onClick={() => setMain(false)}
                  >
                    <Button
                      height="40px"
                      width="183px"
                      backgroundColor="#14406c"
                      fontColor="white"
                      fontSize="21px"
                      font="SeoulBold"
                      className="navigation-submenu-button"
                    >
                      회칙 개정 요구 청원
                    </Button>
                  </Link>
                </div>
              </div>
            </StyledNavButton>
            <StyledNavButton>
              <Listitem label="자료" />
              <div className="submenu3">
                <div className="navigation-uparrow"></div>
                <div>
                  <Link to="/document/" onClick={() => setMain(false)}>
                    <Button
                      height="40px"
                      width="183px"
                      backgroundColor="#14406c"
                      fontColor="white"
                      fontSize="21px"
                      font="SeoulBold"
                      className="navigation-submenu-button"
                    >
                      회칙
                    </Button>
                  </Link>
                </div>
                <div>
                  <Link to="/document/form" onClick={() => setMain(false)}>
                    <Button
                      height="40px"
                      width="183px"
                      backgroundColor="#14406c"
                      fontColor="white"
                      fontSize="21px"
                      font="SeoulBold"
                      className="navigation-submenu-button"
                    >
                      제출서류 양식
                    </Button>
                  </Link>
                </div>
              </div>
            </StyledNavButton>
          </List>
          <StyledNavButton width="32px" backgroundColor="white">
            <BsFillPersonFill size="32" color={main ? "#14406c" : "white"} />
            <div className="submenu4">
              <div className="navigation-uparrow2"></div>
              <div>
                <Link to="/signin/" onClick={() => setMain(false)}>
                  <Button
                    height="40px"
                    width="100px"
                    backgroundColor="#14406c"
                    fontColor="white"
                    fontSize="21px"
                    font="SeoulBold"
                    className="navigation-submenu-button"
                  >
                    로그인
                  </Button>
                </Link>
              </div>
            </div>
          </StyledNavButton>
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
