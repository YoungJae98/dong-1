import React from "react";
import { NavLink, Route } from "react-router-dom";
import logo_inversed from "../assets/logo_reversed.png";
import hello from "../assets/hello.png";
import Button from "../components/Button";

import Container from "../components/Container";
import List from "../components/List";
import Listitem from "../components/Listitem";
import { Navigation } from "../components/Navigation";
import Remote from "../components/Remote";
import Text from "../components/Text";

function CentralClub() {
  return (
    <>
      <Navigation />
      <Container height="1200px" backgroundColor="">
        <Container
          backgroundColor=""
          width="200px"
          fd="column"
          horizontalAlign="left"
        >
          <Container
            height="50px"
            horizontalAlign="left"
            verticalAlign="flex-end"
            marginTop="100px"
          >
            <img src={logo_inversed} alt="" width="40px" />
            <Text fontColor="#14406c" fontSize="18px">
              중앙동아리 소개
            </Text>
          </Container>
          <Remote width="200px" paddingTop="20px" paddingBottom="20px">
            <List fd="column">
              <Button backgroundColor="white" onClick={() => {}}>
                <NavLink to="/centralclub/">
                  <Listitem
                    height="50px"
                    fontColor="#14406c"
                    fontSize="18px"
                    label="동방 배치도"
                  ></Listitem>
                </NavLink>
              </Button>
              <Button backgroundColor="white" onClick={() => {}}>
                <NavLink to="/centralclub/physical">
                  <Listitem
                    height="50px"
                    fontColor="#14406c"
                    fontSize="18px"
                    label="체육 분과"
                  ></Listitem>
                </NavLink>
              </Button>
              <Button backgroundColor="white" onClick={() => {}}>
                <NavLink to="/centralclub/culture">
                  <Listitem
                    height="50px"
                    fontColor="#14406c"
                    fontSize="18px"
                    label="문화 분과"
                  ></Listitem>
                </NavLink>
              </Button>
              <Button backgroundColor="white" onClick={() => {}}>
                <NavLink to="/centralclub/show">
                  <Listitem
                    height="50px"
                    fontColor="#14406c"
                    fontSize="18px"
                    label="공연 분과"
                  ></Listitem>
                </NavLink>
              </Button>
              <Button backgroundColor="white" onClick={() => {}}>
                <NavLink to="/centralclub/academic">
                  <Listitem
                    height="50px"
                    fontColor="#14406c"
                    fontSize="18px"
                    label="학술 분과"
                  ></Listitem>
                </NavLink>
              </Button>
              <Button backgroundColor="white" onClick={() => {}}>
                <NavLink to="/centralclub/religion">
                  <Listitem
                    height="50px"
                    fontColor="#14406c"
                    fontSize="18px"
                    label="종교 분과"
                  ></Listitem>
                </NavLink>
              </Button>
              <Button backgroundColor="white" onClick={() => {}}>
                <NavLink to="/centralclub/volunteer">
                  <Listitem
                    height="50px"
                    fontColor="#14406c"
                    fontSize="18px"
                    label="봉사 분과"
                  ></Listitem>
                </NavLink>
              </Button>
            </List>
          </Remote>
        </Container>
        <Container
          backgroundColor=""
          width="900px"
          fd="column"
          marginLeft="30px"
        >
          <Route exact path="/centralclub/">
            <Container
              backgroundColor="white"
              border="1px solid #14406c"
              borderRadius="15px"
              fd="column"
              horizontalAlign="left"
              verticalAlign="flex-start"
              marginTop="30px"
              paddingLeft="30px"
            >
              <Container
                height="200px"
                width="870px"
                horizontalAlign="left"
                borderBottom="2px solid #14406c"
                marginBottom="30px"
              >
                <Text fontColor="#14406c" fontSize="32px">
                  동방 배치도
                </Text>
              </Container>
              <Container
                fd="column"
                horizontalAlign="left"
                verticalAlign="flex-start"
              >
                <img src={hello} alt="sejong" width="500px" />
              </Container>
              <Container
                horizontalAlign="left"
                verticalAlign="flex-start"
                fd="column"
              >
                <Text fontSize="32px" marginTop="30px">
                  김훈래를 국회로
                </Text>
                <Text fontSize="24px" marginTop="30px">
                  어려서부터 우리집은 가난했었고 남들 다하는 외식 몇번 한적이
                  없었고
                </Text>
              </Container>
            </Container>
          </Route>
          <Route exact path="/centralclub/physical">
            <Container
              backgroundColor="white"
              border="1px solid #14406c"
              borderRadius="15px"
              fd="column"
              horizontalAlign="left"
              verticalAlign="flex-start"
              marginTop="30px"
              paddingLeft="30px"
            >
              <Container
                height="200px"
                width="870px"
                horizontalAlign="left"
                borderBottom="2px solid #14406c"
                marginBottom="30px"
              >
                <Text fontColor="#14406c" fontSize="32px">
                  체육 분과
                </Text>
              </Container>
              <Container
                fd="column"
                horizontalAlign="left"
                verticalAlign="flex-start"
              >
                <img src={hello} alt="sejong" width="500px" />
              </Container>
              <Container
                horizontalAlign="left"
                verticalAlign="flex-start"
                fd="column"
              >
                <Text fontSize="32px" marginTop="30px">
                  김훈래를 국회로
                </Text>
                <Text fontSize="24px" marginTop="30px">
                  어려서부터 우리집은 가난했었고 남들 다하는 외식 몇번 한적이
                  없었고
                </Text>
              </Container>
            </Container>
          </Route>
          <Route exact path="/centralclub/culture">
            <Container
              backgroundColor="white"
              border="1px solid #14406c"
              borderRadius="15px"
              fd="column"
              horizontalAlign="left"
              verticalAlign="flex-start"
              marginTop="30px"
              paddingLeft="30px"
            >
              <Container
                height="200px"
                width="870px"
                horizontalAlign="left"
                borderBottom="2px solid #14406c"
                marginBottom="30px"
              >
                <Text fontColor="#14406c" fontSize="32px">
                  문화 분과
                </Text>
              </Container>
              <Container
                fd="column"
                horizontalAlign="left"
                verticalAlign="flex-start"
              >
                <img src={hello} alt="sejong" width="500px" />
              </Container>
              <Container
                horizontalAlign="left"
                verticalAlign="flex-start"
                fd="column"
              >
                <Text fontSize="32px" marginTop="30px">
                  김훈래를 국회로
                </Text>
                <Text fontSize="24px" marginTop="30px">
                  어려서부터 우리집은 가난했었고 남들 다하는 외식 몇번 한적이
                  없었고
                </Text>
              </Container>
            </Container>
          </Route>
          <Route exact path="/centralclub/show">
            <Container
              backgroundColor="white"
              border="1px solid #14406c"
              borderRadius="15px"
              fd="column"
              horizontalAlign="left"
              verticalAlign="flex-start"
              marginTop="30px"
              paddingLeft="30px"
            >
              <Container
                height="200px"
                width="870px"
                horizontalAlign="left"
                borderBottom="2px solid #14406c"
                marginBottom="30px"
              >
                <Text fontColor="#14406c" fontSize="32px">
                  공연 분과
                </Text>
              </Container>
              <Container
                fd="column"
                horizontalAlign="left"
                verticalAlign="flex-start"
              >
                <img src={hello} alt="sejong" width="500px" />
              </Container>
              <Container
                horizontalAlign="left"
                verticalAlign="flex-start"
                fd="column"
              >
                <Text fontSize="32px" marginTop="30px">
                  김훈래를 국회로
                </Text>
                <Text fontSize="24px" marginTop="30px">
                  어려서부터 우리집은 가난했었고 남들 다하는 외식 몇번 한적이
                  없었고
                </Text>
              </Container>
            </Container>
          </Route>
          <Route exact path="/centralclub/academic">
            <Container
              backgroundColor="white"
              border="1px solid #14406c"
              borderRadius="15px"
              fd="column"
              horizontalAlign="left"
              verticalAlign="flex-start"
              marginTop="30px"
              paddingLeft="30px"
            >
              <Container
                height="200px"
                width="870px"
                horizontalAlign="left"
                borderBottom="2px solid #14406c"
                marginBottom="30px"
              >
                <Text fontColor="#14406c" fontSize="32px">
                  학술 분과
                </Text>
              </Container>
              <Container
                fd="column"
                horizontalAlign="left"
                verticalAlign="flex-start"
              >
                <img src={hello} alt="sejong" width="500px" />
              </Container>
              <Container
                horizontalAlign="left"
                verticalAlign="flex-start"
                fd="column"
              >
                <Text fontSize="32px" marginTop="30px">
                  김훈래를 국회로
                </Text>
                <Text fontSize="24px" marginTop="30px">
                  어려서부터 우리집은 가난했었고 남들 다하는 외식 몇번 한적이
                  없었고
                </Text>
              </Container>
            </Container>
          </Route>
          <Route exact path="/centralclub/religion">
            <Container
              backgroundColor="white"
              border="1px solid #14406c"
              borderRadius="15px"
              fd="column"
              horizontalAlign="left"
              verticalAlign="flex-start"
              marginTop="30px"
              paddingLeft="30px"
            >
              <Container
                height="200px"
                width="870px"
                horizontalAlign="left"
                borderBottom="2px solid #14406c"
                marginBottom="30px"
              >
                <Text fontColor="#14406c" fontSize="32px">
                  종교 분과
                </Text>
              </Container>
              <Container
                fd="column"
                horizontalAlign="left"
                verticalAlign="flex-start"
              >
                <img src={hello} alt="sejong" width="500px" />
              </Container>
              <Container
                horizontalAlign="left"
                verticalAlign="flex-start"
                fd="column"
              >
                <Text fontSize="32px" marginTop="30px">
                  김훈래를 국회로
                </Text>
                <Text fontSize="24px" marginTop="30px">
                  어려서부터 우리집은 가난했었고 남들 다하는 외식 몇번 한적이
                  없었고
                </Text>
              </Container>
            </Container>
          </Route>
          <Route exact path="/centralclub/volunteer">
            <Container
              backgroundColor="white"
              border="1px solid #14406c"
              borderRadius="15px"
              fd="column"
              horizontalAlign="left"
              verticalAlign="flex-start"
              marginTop="30px"
              paddingLeft="30px"
            >
              <Container
                height="200px"
                width="870px"
                horizontalAlign="left"
                borderBottom="2px solid #14406c"
                marginBottom="30px"
              >
                <Text fontColor="#14406c" fontSize="32px">
                  봉사 분과
                </Text>
              </Container>
              <Container
                fd="column"
                horizontalAlign="left"
                verticalAlign="flex-start"
              >
                <img src={hello} alt="sejong" width="500px" />
              </Container>
              <Container
                horizontalAlign="left"
                verticalAlign="flex-start"
                fd="column"
              >
                <Text fontSize="32px" marginTop="30px">
                  김훈래를 국회로
                </Text>
                <Text fontSize="24px" marginTop="30px">
                  어려서부터 우리집은 가난했었고 남들 다하는 외식 몇번 한적이
                  없었고
                </Text>
              </Container>
            </Container>
          </Route>
        </Container>
      </Container>
    </>
  );
}

export default CentralClub;
