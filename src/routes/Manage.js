import React from "react";
import { NavLink, Route, useHistory } from "react-router-dom";

import logo_inversed from "../assets/images/logo_reversed.png";
import v2 from "../assets/images/visual/visual2.jpg";

import Listitem from "../components/Listitem";
import Button from "../components/Button";
import Container from "../components/Container";
import Text from "../components/Text";
import Remote from "../components/Remote";
import List from "../components/List";

function Manage({ admin }) {
  const history = useHistory();
  const redirectToHome = () => {
    history.push("/");
  };
  if (admin)
    return (
      <>
        <Container height="145px">
          <img src={v2} alt="" />
        </Container>
        <Container height="1400px" backgroundColor="">
          <Container width="200px" verticalAlign="baseline">
            <Container
              width="200px"
              height="366px"
              fd="column"
              verticalAlign="baseline"
              position="sticky"
              marginTop="8px"
            >
              <Container
                height="50px"
                horizontalAlign="left"
                verticalAlign="flex-end"
              >
                <img src={logo_inversed} alt="" width="40px" />
                <Text
                  fontColor="#14406c"
                  fontSize="21px"
                  fontFamily="SeoulBold"
                >
                  관리
                </Text>
              </Container>
              <Remote width="200px" paddingTop="10px" paddingBottom="10px">
                <List fd="column">
                  <Button backgroundColor="white">
                    <NavLink to="/manage/">
                      <Listitem
                        height="40px"
                        fontColor="#14406c"
                        label="공약 이행도"
                        hoverUnderline
                      ></Listitem>
                    </NavLink>
                  </Button>
                  <Button backgroundColor="white">
                    <NavLink to="/manage/report">
                      <Listitem
                        height="40px"
                        fontColor="#14406c"
                        label="예결산 보고"
                        hoverUnderline
                      ></Listitem>
                    </NavLink>
                  </Button>
                  <Button backgroundColor="white">
                    <NavLink to="/manage/meetinglog">
                      <Listitem
                        height="40px"
                        fontColor="#14406c"
                        label="회의록"
                        hoverUnderline
                      ></Listitem>
                    </NavLink>
                  </Button>
                  <Button backgroundColor="white">
                    <NavLink to="/manage/suggestion">
                      <Listitem
                        height="40px"
                        fontColor="#14406c"
                        label="건의 사항"
                        hoverUnderline
                      ></Listitem>
                    </NavLink>
                  </Button>
                  <Button backgroundColor="white">
                    <NavLink to="/manage/petition">
                      <Listitem
                        height="40px"
                        fontColor="#14406c"
                        label="회칙 개정 요구 청원"
                        hoverUnderline
                      ></Listitem>
                    </NavLink>
                  </Button>
                  <Button backgroundColor="white">
                    <NavLink to="/manage/forms">
                      <Listitem
                        height="40px"
                        fontColor="#14406c"
                        label="제출 서류 양식"
                        hoverUnderline
                      ></Listitem>
                    </NavLink>
                  </Button>
                  <Button backgroundColor="white">
                    <NavLink to="/manage/carousel">
                      <Listitem
                        height="40px"
                        fontColor="#14406c"
                        label="메인 슬라이드 이미지"
                        hoverUnderline
                      ></Listitem>
                    </NavLink>
                  </Button>
                </List>
              </Remote>
            </Container>
          </Container>
          <Container
            backgroundColor=""
            width="1062px"
            fd="column"
            marginLeft="30px"
            verticalAlign="flex-start"
          >
            <Route exact path="/manage/">
              <Container
                height="40px"
                marginTop="20px"
                marginLeft="20px"
                width="1000px"
                horizontalAlign="left"
              >
                <Text fontColor="#14406c" fontSize="32px">
                  공약 이행도
                </Text>
              </Container>
              <Container
                backgroundColor="white"
                border="1px solid #14406c"
                borderRadius="8px"
                fd="column"
                horizontalAlign="left"
                verticalAlign="flex-start"
                paddingLeft="30px"
                paddingRight="30px"
                paddingTop="30px"
                width="1000px"
              ></Container>
            </Route>
            <Route exact path="/manage/report">
              <Container
                height="40px"
                marginTop="20px"
                marginLeft="20px"
                width="1000px"
                horizontalAlign="left"
              >
                <Text fontColor="#14406c" fontSize="32px">
                  예결산 보고
                </Text>
              </Container>
              <Container
                backgroundColor="white"
                border="1px solid #14406c"
                borderRadius="8px"
                fd="column"
                horizontalAlign="left"
                verticalAlign="flex-start"
                paddingLeft="30px"
                paddingRight="30px"
                paddingTop="30px"
                width="1000px"
              ></Container>
            </Route>
            <Route exact path="/manage/meetinglog">
              <Container
                height="40px"
                marginTop="20px"
                marginLeft="20px"
                width="1000px"
                horizontalAlign="left"
              >
                <Text fontColor="#14406c" fontSize="32px">
                  회의록
                </Text>
              </Container>
              <Container
                backgroundColor="white"
                border="1px solid #14406c"
                borderRadius="8px"
                fd="column"
                horizontalAlign="left"
                verticalAlign="flex-start"
                paddingLeft="30px"
                paddingRight="30px"
                paddingTop="30px"
                width="1000px"
              ></Container>
            </Route>
            <Route exact path="/manage/suggestion">
              <Container
                height="40px"
                marginTop="20px"
                marginLeft="20px"
                width="1000px"
                horizontalAlign="left"
              >
                <Text fontColor="#14406c" fontSize="32px">
                  건의 사항
                </Text>
              </Container>
              <Container
                backgroundColor="white"
                border="1px solid #14406c"
                borderRadius="8px"
                fd="column"
                horizontalAlign="left"
                verticalAlign="flex-start"
                paddingLeft="30px"
                paddingRight="30px"
                paddingTop="30px"
                width="1000px"
              ></Container>
            </Route>
            <Route exact path="/manage/petition">
              <Container
                height="40px"
                marginTop="20px"
                marginLeft="20px"
                width="1000px"
                horizontalAlign="left"
              >
                <Text fontColor="#14406c" fontSize="32px">
                  회칙 개정 요구 청원
                </Text>
              </Container>
              <Container
                backgroundColor="white"
                border="1px solid #14406c"
                borderRadius="8px"
                fd="column"
                horizontalAlign="left"
                verticalAlign="flex-start"
                paddingLeft="30px"
                paddingRight="30px"
                paddingTop="30px"
                width="1000px"
              ></Container>
            </Route>
            <Route exact path="/manage/forms">
              <Container
                height="40px"
                marginTop="20px"
                marginLeft="20px"
                width="1000px"
                horizontalAlign="left"
              >
                <Text fontColor="#14406c" fontSize="32px">
                  제출 서류 양식
                </Text>
              </Container>
              <Container
                backgroundColor="white"
                border="1px solid #14406c"
                borderRadius="8px"
                fd="column"
                horizontalAlign="left"
                verticalAlign="flex-start"
                paddingLeft="30px"
                paddingRight="30px"
                paddingTop="30px"
                width="1000px"
              ></Container>
            </Route>
            <Route exact path="/manage/carousel">
              <Container
                height="40px"
                marginTop="20px"
                marginLeft="20px"
                width="1000px"
                horizontalAlign="left"
              >
                <Text fontColor="#14406c" fontSize="32px">
                  메인 슬라이드 이미지
                </Text>
              </Container>
              <Container
                backgroundColor="white"
                border="1px solid #14406c"
                borderRadius="8px"
                fd="column"
                horizontalAlign="left"
                verticalAlign="flex-start"
                paddingLeft="30px"
                paddingRight="30px"
                paddingTop="30px"
                width="1000px"
              ></Container>
            </Route>
          </Container>
        </Container>
      </>
    );
  else {
    alert("로그인 정보가 없습니다.");
    redirectToHome();
  }
}

export default Manage;
