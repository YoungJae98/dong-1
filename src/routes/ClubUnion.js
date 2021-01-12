import React from "react";
import { NavLink, Route } from "react-router-dom";
import logo_inversed from "../assets/logo_reversed.png";
import Sejonglogo from "../assets/Sejonglogo.png";
import Button from "../components/Button";

import Container from "../components/Container";
import List from "../components/List";
import Listitem from "../components/Listitem";
import Remote from "../components/Remote";
import Text from "../components/Text";

function ClubUnion() {
  return (
    <Container height="1200px" backgroundColor="#FAFAFA">
      <Container
        backgroundColor="#FAFAFA"
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
          <Text fontColor="#14406c" fontSize="18px" fontWeight="bold">
            총동아리연합회 소개
          </Text>
        </Container>
        <Remote width="200px" paddingTop="20px" paddingBottom="20px">
          <List fd="column">
            {/* list item foreach로 고치기 필요 */}
            <Button backgroundColor="#FAFAFA" onClick={() => {}}>
              <NavLink to="/clubunion/hello">
                <Listitem
                  height="50px"
                  fontColor="#14406c"
                  fontSize="18px"
                  label="인사말"
                ></Listitem>
              </NavLink>
            </Button>
            <Button backgroundColor="#FAFAFA" onClick={() => {}}>
              <NavLink to="/clubunion/introduce">
                <Listitem
                  height="50px"
                  fontColor="#14406c"
                  fontSize="18px"
                  label="회장단 및 국장 소개"
                ></Listitem>
              </NavLink>
            </Button>
            <Button backgroundColor="#FAFAFA" paddingBottom="20px">
              <NavLink to="/clubunion/way2us">
                <Listitem
                  height="50px"
                  fontColor="#14406c"
                  fontSize="18px"
                  label="찾아오시는 길"
                ></Listitem>
              </NavLink>
            </Button>
          </List>
        </Remote>
      </Container>
      <Container
        backgroundColor="#FAFAFA"
        width="1000px"
        fd="column"
        marginLeft="30px"
      >
        <Route path="/clubunion/hello">
          <Container
            backgroundColor="#FAFAFA"
            height="100px"
            horizontalAlign="left"
          >
            <Text fontColor="#14406c" fontSize="32px" marginLeft="30px">
              인사말
            </Text>
          </Container>
          <Container
            backgroundColor="white"
            border="1px solid #14406c"
            borderRadius="15px"
            fd="column"
            horizontalAlign="left"
            verticalAlign="flex-start"
          >
            <Container marginTop="50px" marginLeft="50px" fd="column">
              <Text>안녕 난 훈래야</Text>
              <img src={Sejonglogo} alt="sejong" width="500px" />
            </Container>
          </Container>
        </Route>
        <Route path="/clubunion/introduce">
          <Container
            backgroundColor="#FAFAFA"
            height="100px"
            horizontalAlign="left"
          >
            <Text fontColor="#14406c" fontSize="32px" marginLeft="30px">
              회장단 및 국장 소개
            </Text>
          </Container>
          <Container
            backgroundColor="white"
            border="1px solid #14406c"
            borderRadius="15px"
            fd="column"
            horizontalAlign="left"
            verticalAlign="flex-start"
          >
            <Container marginTop="50px" marginLeft="50px" fd="column">
              <Text>회장은 누구고 부회장은 누구고 국장들은 누구다</Text>
              <img src={Sejonglogo} alt="sejong" width="500px" />
            </Container>
          </Container>
        </Route>
        <Route path="/clubunion/way2us">
          <Container
            backgroundColor="#FAFAFA"
            height="100px"
            horizontalAlign="left"
          >
            <Text fontColor="#14406c" fontSize="32px" marginLeft="30px">
              찾아오시는 길
            </Text>
          </Container>
          <Container
            backgroundColor="white"
            border="1px solid #14406c"
            borderRadius="15px"
            fd="column"
            horizontalAlign="left"
            verticalAlign="flex-start"
          >
            <Container marginTop="50px" marginLeft="50px" fd="column">
              <Text>이렇게해서 저렇게 오면 되지 않을까?</Text>
              <img src={Sejonglogo} alt="sejong" width="500px" />
            </Container>
          </Container>
        </Route>
      </Container>
    </Container>
  );
}

export default ClubUnion;
