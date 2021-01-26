import React from "react";
import { NavLink, Route } from "react-router-dom";
import logo_inversed from "../assets/logo_reversed.png";

import Button from "../components/Button";
import Container from "../components/Container";
import List from "../components/List";
import Listitem from "../components/Listitem";
import Remote from "../components/Remote";
import Text from "../components/Text";

function Main() {
  return (
    <>
      <Container height="1200px" backgroundColor="">
        <Container width="200px" verticalAlign="baseline">
          <Container
            width="200px"
            height="282px"
            fd="column"
            verticalAlign="baseline"
            position="sticky"
            marginTop="100px"
          >
            <Container
              height="50px"
              horizontalAlign="left"
              verticalAlign="flex-end"
            >
              <img src={logo_inversed} alt="" width="40px" />
              <Text fontColor="#14406c" fontSize="18px" fontFamily="Arial">
                정보
              </Text>
            </Container>
            <Remote width="200px" paddingTop="10px" paddingBottom="10px">
              <List fd="column">
                <Button backgroundColor="white">
                  <NavLink to="/information">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      fontSize="18px"
                      label="공약 이행도"
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white">
                  <NavLink to="/information/alliance">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      fontSize="18px"
                      label="제휴사업"
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white" paddingBottom="20px">
                  <NavLink to="/information/seoul">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      fontSize="18px"
                      label="서동협"
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white" paddingBottom="20px">
                  <NavLink to="/information/report">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      fontSize="18px"
                      label="예결산 보고"
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white" paddingBottom="20px">
                  <NavLink to="/information/meetinglog">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      fontSize="18px"
                      label="회의록"
                    ></Listitem>
                  </NavLink>
                </Button>
              </List>
            </Remote>
          </Container>
        </Container>
        <Container
          width="900px"
          fd="column"
          marginLeft="30px"
          verticalAlign="flex-start"
        >
          <Route exact path="/information/">
            <Container
              height="40px"
              marginTop="50px"
              marginLeft="20px"
              width="840px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                공약 이행도
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              border="1px solid #14406c"
              borderRadius="15px"
              fd="column"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              paddingTop="30px"
              width="840px"
            ></Container>
          </Route>
          <Route exact path="/information/alliance">
            <Container
              height="40px"
              marginTop="50px"
              marginLeft="20px"
              width="840px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                제휴사업
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              border="1px solid #14406c"
              borderRadius="15px"
              fd="column"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              paddingTop="30px"
              width="840px"
            ></Container>
          </Route>
          <Route exact path="/information/seoul">
            <Container
              height="40px"
              marginTop="50px"
              marginLeft="20px"
              width="840px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                서동협
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              border="1px solid #14406c"
              borderRadius="15px"
              fd="column"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              paddingTop="30px"
              width="840px"
            ></Container>
          </Route>
          <Route exact path="/information/report">
            <Container
              height="40px"
              marginTop="50px"
              marginLeft="20px"
              width="840px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                예결산 보고
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              border="1px solid #14406c"
              borderRadius="15px"
              fd="column"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              paddingTop="30px"
              width="840px"
            ></Container>
          </Route>
          <Route exact path="/information/meetinglog">
            <Container
              height="40px"
              marginTop="50px"
              marginLeft="20px"
              width="840px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                회의록
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              border="1px solid #14406c"
              borderRadius="15px"
              fd="column"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              paddingTop="30px"
              width="840px"
            ></Container>
          </Route>
        </Container>
      </Container>
    </>
  );
}

export default Main;
