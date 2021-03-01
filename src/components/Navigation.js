/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import logo_reversed from "../assets/images/logo_reversed.png";
import logo from "../assets/images/logo.png";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";

import List from "./List";
import Listitem from "./Listitem";
import { Link, useHistory } from "react-router-dom";
import {} from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "../components/Container";
import Button from "./Button";
import { useMediaQuery } from "react-responsive";
import Text from "./Text";

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
  isLogin,
  setisLogin,
  admin,
}) {
  const [sticky, setsticky] = useState(false);
  const logoutProcess = () => {
    fetch("http://sejongclubunion.com:3001/api/account/logout", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setisLogin(false);
      });
  };
  const history = useHistory();
  const redirectToHome = () => {
    history.push("/");
  };
  useEffect(() => {
    if (main) {
      window.onscroll = () => {
        const offset = window.scrollY;
        const stickyLimit = 150;
        if (offset >= stickyLimit) {
          setsticky(true);
        } else {
          setsticky(false);
        }
      };
    }
  }, [main]);
  const isPC = useMediaQuery({ query: "(min-width : 1240px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  return (
    <Container width="100%" height="60px" zIndex={1000}>
      <Container
        width="100%"
        height="60px"
        backgroundColor={!isPC ? "#14406c" : main ? "white" : "#14406c"}
        zIndex={10}
        position={isMobile ? "fixed" : main ? (sticky ? "fixed" : "") : "fixed"}
      >
        {isPC ? (
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
                <div
                  className="submenu"
                  style={{ backgroundColor: main ? "white" : "#14406c" }}
                >
                  <div className="navigation-uparrow" />
                  <div>
                    <Link to="/clubunion" onClick={() => setMain(false)}>
                      <Button
                        height="40px"
                        width="183px"
                        backgroundColor="white"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        fontSize="18px"
                        className="navigation-submenu-button"
                        font="SeoulLight"
                      >
                        총동아리연합회
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
                        backgroundColor="white"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        fontSize="18px"
                        className="navigation-submenu-button"
                        font="SeoulLight"
                      >
                        집행부 소개
                      </Button>
                    </Link>
                  </div>
                  <div>
                    <Link to="/clubunion/way2us" onClick={() => setMain(false)}>
                      <Button
                        height="40px"
                        width="183px"
                        backgroundColor="white"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        fontSize="18px"
                        className="navigation-submenu-button"
                        font="SeoulLight"
                      >
                        찾아오시는 길
                      </Button>
                    </Link>
                  </div>
                </div>
              </StyledNavButton>
              <StyledNavButton>
                <Listitem label="중앙동아리 소개" />
                <div
                  className="submenu2"
                  style={{ backgroundColor: main ? "white" : "#14406c" }}
                >
                  <div className="navigation-uparrow" />
                  <div>
                    <Link to="/centralclub/" onClick={() => setMain(false)}>
                      <Button
                        height="40px"
                        width="183px"
                        backgroundColor="white"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        fontSize="18px"
                        className="navigation-submenu-button"
                        font="SeoulLight"
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
                        backgroundColor="white"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        fontSize="18px"
                        className="navigation-submenu-button"
                        font="SeoulLight"
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
                        backgroundColor="white"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        fontSize="18px"
                        className="navigation-submenu-button"
                        font="SeoulLight"
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
                        backgroundColor="white"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        fontSize="18px"
                        className="navigation-submenu-button"
                        font="SeoulLight"
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
                        backgroundColor="white"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        fontSize="18px"
                        className="navigation-submenu-button"
                        font="SeoulLight"
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
                        backgroundColor="white"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        fontSize="18px"
                        className="navigation-submenu-button"
                        font="SeoulLight"
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
                        backgroundColor="white"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        fontSize="18px"
                        className="navigation-submenu-button"
                        font="SeoulLight"
                      >
                        학술 분과
                      </Button>
                    </Link>
                  </div>
                </div>
              </StyledNavButton>
              <StyledNavButton>
                <Listitem label="정보" />
                <div
                  className="submenu3"
                  style={{ backgroundColor: main ? "white" : "#14406c" }}
                >
                  <div className="navigation-uparrow" />
                  <div>
                    <Link to="/information/" onClick={() => setMain(false)}>
                      <Button
                        height="40px"
                        width="183px"
                        backgroundColor="white"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        fontSize="18px"
                        className="navigation-submenu-button"
                        font="SeoulLight"
                      >
                        공약 이행도
                      </Button>
                    </Link>
                  </div>
                  <div>
                    <Button
                      height="40px"
                      width="183px"
                      backgroundColor="white"
                      fontColor="#14406c"
                      hoverBackgrounColor="#14406c"
                      hoverFontColor="white"
                      fontSize="18px"
                      className="navigation-submenu-button"
                      font="SeoulLight"
                      onClick={() => {
                        alert("준비중입니다.");
                      }}
                    >
                      제휴 사업
                    </Button>
                  </div>
                  <div>
                    <Button
                      height="40px"
                      width="183px"
                      backgroundColor="white"
                      fontColor="#14406c"
                      hoverBackgrounColor="#14406c"
                      hoverFontColor="white"
                      fontSize="18px"
                      className="navigation-submenu-button"
                      font="SeoulLight"
                      onClick={() => {
                        alert("준비중입니다.");
                      }}
                    >
                      서동협
                    </Button>
                  </div>
                  <div>
                    <Link
                      to="/information/report"
                      onClick={() => setMain(false)}
                    >
                      <Button
                        height="40px"
                        width="183px"
                        backgroundColor="white"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        fontSize="18px"
                        className="navigation-submenu-button"
                        font="SeoulLight"
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
                        backgroundColor="white"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        fontSize="18px"
                        className="navigation-submenu-button"
                        font="SeoulLight"
                      >
                        회의록
                      </Button>
                    </Link>
                  </div>
                </div>
              </StyledNavButton>
              <StyledNavButton>
                <Listitem label="소통" />
                <div
                  className="submenu3"
                  style={{ backgroundColor: main ? "white" : "#14406c" }}
                >
                  <div className="navigation-uparrow" />
                  <div>
                    <Link to="/communication/" onClick={() => setMain(false)}>
                      <Button
                        height="40px"
                        width="183px"
                        backgroundColor="white"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        fontSize="18px"
                        className="navigation-submenu-button"
                        font="SeoulLight"
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
                        backgroundColor="white"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        fontSize="18px"
                        className="navigation-submenu-button"
                        font="SeoulLight"
                      >
                        회칙 개정 요구 청원
                      </Button>
                    </Link>
                  </div>
                </div>
              </StyledNavButton>
              <StyledNavButton>
                <Listitem label="자료" />
                <div
                  className="submenu3"
                  style={{ backgroundColor: main ? "white" : "#14406c" }}
                >
                  <div className="navigation-uparrow" />
                  <div>
                    <Link to="/document/" onClick={() => setMain(false)}>
                      <Button
                        height="40px"
                        width="183px"
                        backgroundColor="white"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        fontSize="18px"
                        className="navigation-submenu-button"
                        font="SeoulLight"
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
                        backgroundColor="white"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        fontSize="18px"
                        className="navigation-submenu-button"
                        font="SeoulLight"
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
              <div
                className="submenu4"
                style={{ backgroundColor: main ? "white" : "#14406c" }}
              >
                <div className="navigation-uparrow2" />
                {isLogin ? (
                  <>
                    <div>
                      <Button
                        height="40px"
                        width="100px"
                        backgroundColor="white"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        fontSize="18px"
                        className="navigation-submenu-button"
                        font="SeoulLight"
                        onClick={() => {
                          logoutProcess();
                          redirectToHome();
                        }}
                      >
                        로그아웃
                      </Button>
                    </div>
                    {admin ? (
                      <div>
                        <Link to="/manage/" onClick={() => setMain(false)}>
                          <Button
                            height="40px"
                            width="100px"
                            backgroundColor="white"
                            fontColor="#14406c"
                            hoverBackgrounColor="#14406c"
                            hoverFontColor="white"
                            fontSize="18px"
                            className="navigation-submenu-button"
                            font="SeoulLight"
                          >
                            관리
                          </Button>
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <Link to="/mypage/" onClick={() => setMain(false)}>
                          <Button
                            height="40px"
                            width="100px"
                            backgroundColor="white"
                            fontColor="#14406c"
                            hoverBackgrounColor="#14406c"
                            hoverFontColor="white"
                            fontSize="18px"
                            className="navigation-submenu-button"
                            font="SeoulLight"
                          >
                            마이페이지
                          </Button>
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <div>
                    <Link to="/signin/" onClick={() => setMain(false)}>
                      <Button
                        height="40px"
                        width="100px"
                        backgroundColor="white"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        fontSize="18px"
                        className="navigation-submenu-button"
                        font="SeoulLight"
                      >
                        로그인
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </StyledNavButton>
          </StyledNavigation>
        ) : (
          <Container horizontalAlign="space-between">
            <Button
              width="50px"
              height="50px"
              backgroundColor="#14406c"
              className="mobile-menu-btn"
              onClick={() => {
                document
                  .querySelector(".mobile-menu-container")
                  .classList.toggle("invisible");
              }}
              padding="0"
            >
              <AiOutlineMenu size="24" color="white" />
            </Button>
            <Container
              className="mobile-menu-container invisible"
              backgroundColor="#14406c"
              position="absolute"
              top="60px"
              height="400px"
              fd="column"
            >
              <Container
                fd="column"
                horizontalAlign="flex-start"
                marginTop="10px"
                width="80%"
                height="60px"
                borderBottom="1px solid white"
              >
                <Text fontFamily="SeoulLight" fontColor="white" fontSize="18px">
                  총동아리연합회 소개
                </Text>
                <Container height="40px">
                  <Link
                    to="/clubunion"
                    onClick={() => {
                      document
                        .querySelector(".mobile-menu-container")
                        .classList.toggle("invisible");
                    }}
                  >
                    <Text fontFamily="SeoulLight" fontColor="white">
                      총동아리연합회
                    </Text>
                  </Link>
                  <Link
                    to="/clubunion/introduce"
                    onClick={() => {
                      document
                        .querySelector(".mobile-menu-container")
                        .classList.toggle("invisible");
                    }}
                  >
                    <Text
                      marginLeft="10px"
                      fontFamily="SeoulLight"
                      fontColor="white"
                    >
                      집행부소개
                    </Text>
                  </Link>
                  <Link
                    to="/clubunion/way2us"
                    onClick={() => {
                      document
                        .querySelector(".mobile-menu-container")
                        .classList.toggle("invisible");
                    }}
                  >
                    <Text
                      marginLeft="10px"
                      fontFamily="SeoulLight"
                      fontColor="white"
                    >
                      찾아오시는길
                    </Text>
                  </Link>
                </Container>
              </Container>
              <Container
                fd="column"
                horizontalAlign="flex-start"
                marginTop="10px"
                width="80%"
                height="80px"
                borderBottom="1px solid white"
              >
                <Text fontFamily="SeoulLight" fontColor="white" fontSize="18px">
                  중앙동아리 소개
                </Text>
                <Container height="30px">
                  <Link
                    to="/centralclub"
                    onClick={() => {
                      document
                        .querySelector(".mobile-menu-container")
                        .classList.toggle("invisible");
                    }}
                  >
                    <Text fontFamily="SeoulLight" fontColor="white">
                      동방배치도
                    </Text>
                  </Link>
                  <Link
                    to="/centralclub/show"
                    onClick={() => {
                      document
                        .querySelector(".mobile-menu-container")
                        .classList.toggle("invisible");
                    }}
                  >
                    <Text
                      marginLeft="10px"
                      fontFamily="SeoulLight"
                      fontColor="white"
                    >
                      공연분과
                    </Text>
                  </Link>
                  <Link
                    to="/centralclub/culture"
                    onClick={() => {
                      document
                        .querySelector(".mobile-menu-container")
                        .classList.toggle("invisible");
                    }}
                  >
                    <Text
                      marginLeft="10px"
                      fontFamily="SeoulLight"
                      fontColor="white"
                    >
                      문화분과
                    </Text>
                  </Link>
                  <Link
                    to="/centralclub/volunteer"
                    onClick={() => {
                      document
                        .querySelector(".mobile-menu-container")
                        .classList.toggle("invisible");
                    }}
                  >
                    <Text
                      marginLeft="10px"
                      fontFamily="SeoulLight"
                      fontColor="white"
                    >
                      봉사 분과
                    </Text>
                  </Link>
                </Container>
                <Container height="30px">
                  <Link
                    to="/centralclub/religion"
                    onClick={() => {
                      document
                        .querySelector(".mobile-menu-container")
                        .classList.toggle("invisible");
                    }}
                  >
                    <Text
                      marginLeft="10px"
                      fontFamily="SeoulLight"
                      fontColor="white"
                    >
                      종교분과
                    </Text>
                  </Link>
                  <Link
                    to="/centralclub/physical"
                    onClick={() => {
                      document
                        .querySelector(".mobile-menu-container")
                        .classList.toggle("invisible");
                    }}
                  >
                    <Text
                      marginLeft="10px"
                      fontFamily="SeoulLight"
                      fontColor="white"
                    >
                      체육분과
                    </Text>
                  </Link>
                  <Link
                    to="/centralclub/academic"
                    onClick={() => {
                      document
                        .querySelector(".mobile-menu-container")
                        .classList.toggle("invisible");
                    }}
                  >
                    <Text
                      marginLeft="10px"
                      fontFamily="SeoulLight"
                      fontColor="white"
                    >
                      학술분과
                    </Text>
                  </Link>
                </Container>
              </Container>
              <Container
                fd="column"
                horizontalAlign="flex-start"
                marginTop="10px"
                width="80%"
                height="60px"
                borderBottom="1px solid white"
              >
                <Text fontFamily="SeoulLight" fontColor="white" fontSize="18px">
                  정보
                </Text>
                <Container height="40px">
                  <Link
                    to="/information/"
                    onClick={() => {
                      document
                        .querySelector(".mobile-menu-container")
                        .classList.toggle("invisible");
                    }}
                  >
                    <Text fontFamily="SeoulLight" fontColor="white">
                      공약이행도
                    </Text>
                  </Link>
                  <Link
                    to="/information/report"
                    onClick={() => {
                      document
                        .querySelector(".mobile-menu-container")
                        .classList.toggle("invisible");
                    }}
                  >
                    <Text
                      marginLeft="10px"
                      fontFamily="SeoulLight"
                      fontColor="white"
                    >
                      예결산보고
                    </Text>
                  </Link>
                  <Link
                    to="/information/meetinglog"
                    onClick={() => {
                      document
                        .querySelector(".mobile-menu-container")
                        .classList.toggle("invisible");
                    }}
                  >
                    <Text
                      marginLeft="10px"
                      fontFamily="SeoulLight"
                      fontColor="white"
                    >
                      회의록
                    </Text>
                  </Link>
                </Container>
              </Container>
              <Container
                fd="column"
                horizontalAlign="flex-start"
                marginTop="10px"
                width="80%"
                height="60px"
                borderBottom="1px solid white"
              >
                <Text fontFamily="SeoulLight" fontColor="white" fontSize="18px">
                  소통
                </Text>
                <Container height="40px">
                  <Link
                    to="/communication/"
                    onClick={() => {
                      document
                        .querySelector(".mobile-menu-container")
                        .classList.toggle("invisible");
                    }}
                  >
                    <Text fontFamily="SeoulLight" fontColor="white">
                      건의사항
                    </Text>
                  </Link>
                  <Link
                    to="/communication/petition"
                    onClick={() => {
                      document
                        .querySelector(".mobile-menu-container")
                        .classList.toggle("invisible");
                    }}
                  >
                    <Text
                      marginLeft="10px"
                      fontFamily="SeoulLight"
                      fontColor="white"
                    >
                      회칙개정요구청원
                    </Text>
                  </Link>
                </Container>
              </Container>
              <Container
                fd="column"
                horizontalAlign="flex-start"
                marginTop="10px"
                width="80%"
                height="60px"
              >
                <Text fontFamily="SeoulLight" fontColor="white" fontSize="18px">
                  자료
                </Text>
                <Container height="40px">
                  <Link
                    to="/document/"
                    onClick={() => {
                      document
                        .querySelector(".mobile-menu-container")
                        .classList.toggle("invisible");
                    }}
                  >
                    <Text fontFamily="SeoulLight" fontColor="white">
                      회칙
                    </Text>
                  </Link>
                  <Link
                    to="/document/form"
                    onClick={() => {
                      document
                        .querySelector(".mobile-menu-container")
                        .classList.toggle("invisible");
                    }}
                  >
                    <Text
                      marginLeft="10px"
                      fontFamily="SeoulLight"
                      fontColor="white"
                    >
                      제출서류양식
                    </Text>
                  </Link>
                </Container>
              </Container>
            </Container>
            <Link to="/">
              <Button
                width="50px"
                height="50px"
                backgroundColor="#14406c"
                borderRadius="50%"
                className="mobile-login-btn"
                onClick={() => {}}
                padding="0"
              >
                <AiFillHome size="24" color="white" />
              </Button>
            </Link>
            <Button
              width="50px"
              height="50px"
              backgroundColor="#14406c"
              className="mobile-login-btn"
              onClick={() => {
                document
                  .querySelector(".mobile-login-container")
                  .classList.toggle("invisible");
              }}
              padding="0"
            >
              <BsFillPersonFill size="24" color="white" />
              <Container
                className="mobile-login-container invisible"
                backgroundColor="white"
                position="absolute"
                height="300px"
              ></Container>
            </Button>
          </Container>
        )}
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
