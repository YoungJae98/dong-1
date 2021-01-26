import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";

import logo_inversed from "../assets/logo_reversed.png";
import clubroomlayout from "../assets/images/clubroomlayout.png";

import Button from "../components/Button";
import Container from "../components/Container";
import List from "../components/List";
import Listitem from "../components/Listitem";
import Remote from "../components/Remote";
import Text from "../components/Text";

function CentralClub() {
  const [showClub, setshowClub] = useState([
    { clubID: 1, clubName: "세종극회" },
    { clubID: 2, clubName: "한울림" },
    { clubID: 3, clubName: "인트로" },
  ]);
  return (
    <>
      <Container height="1200px" backgroundColor="">
        <Container width="200px" verticalAlign="baseline">
          <Container
            width="200px"
            height="366px"
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
                중앙동아리 소개
              </Text>
            </Container>
            <Remote width="200px" paddingTop="10px" paddingBottom="10px">
              <List fd="column">
                <Button backgroundColor="white">
                  <NavLink to="/centralclub/">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      fontSize="18px"
                      label="동방 배치도"
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white">
                  <NavLink to="/centralclub/show">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      fontSize="18px"
                      label="공연 분과"
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white">
                  <NavLink to="/centralclub/culture">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      fontSize="18px"
                      label="문화 분과"
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white">
                  <NavLink to="/centralclub/volunteer">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      fontSize="18px"
                      label="봉사 분과"
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white">
                  <NavLink to="/centralclub/religion">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      fontSize="18px"
                      label="종교 분과"
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white">
                  <NavLink to="/centralclub/physical">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      fontSize="18px"
                      label="체육 분과"
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white" onClick={() => {}}>
                  <NavLink to="/centralclub/academic">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      fontSize="18px"
                      label="학술 분과"
                    ></Listitem>
                  </NavLink>
                </Button>
              </List>
            </Remote>
          </Container>
        </Container>
        <Container
          backgroundColor=""
          width="900px"
          fd="column"
          marginLeft="30px"
          verticalAlign="flex-start"
        >
          <Route exact path="/centralclub/">
            <Container
              height="40px"
              marginTop="50px"
              marginLeft="20px"
              width="840px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                동방 배치도
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
            >
              <Container
                fd="column"
                horizontalAlign="left"
                verticalAlign="flex-start"
              >
                <img src={clubroomlayout} alt="sejong" width="500px" />
              </Container>
            </Container>
          </Route>
          <Route path="/centralclub/physical">
            <Container
              height="40px"
              marginTop="50px"
              marginLeft="20px"
              width="840px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                체육 분과
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
              width="840px"
            ></Container>
          </Route>
          <Route path="/centralclub/culture">
            <Container
              height="40px"
              marginTop="50px"
              marginLeft="20px"
              width="840px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                문화 분과
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
              width="840px"
            ></Container>
          </Route>
          <Route path="/centralclub/show">
            <Container
              height="40px"
              marginTop="50px"
              marginLeft="20px"
              width="840px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                공연 분과
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
              width="840px"
            >
              {showClub.map((club) => {
                return (
                  <Container>
                    <Text>{club.clubName}</Text>
                  </Container>
                );
              })}
            </Container>
          </Route>
          <Route path="/centralclub/academic">
            <Container
              height="40px"
              marginTop="50px"
              marginLeft="20px"
              width="840px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                학술 분과
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
              width="840px"
            ></Container>
          </Route>
          <Route path="/centralclub/religion">
            <Container
              height="40px"
              marginTop="50px"
              marginLeft="20px"
              width="840px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                종교 분과
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
              width="840px"
            ></Container>
          </Route>
          <Route path="/centralclub/volunteer">
            <Container
              height="40px"
              marginTop="50px"
              marginLeft="20px"
              width="840px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                봉사 분과
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
              width="840px"
            ></Container>
          </Route>
        </Container>
      </Container>
    </>
  );
}

export default CentralClub;
