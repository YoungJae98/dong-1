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
              소통
            </Text>
          </Container>
          <Remote width="200px" paddingTop="20px" paddingBottom="20px">
            <List fd="column">
              <Button backgroundColor="white">
                <NavLink to="/document/">
                  <Listitem
                    height="50px"
                    fontColor="#14406c"
                    fontSize="18px"
                    label="자료1"
                  ></Listitem>
                </NavLink>
              </Button>
              <Button backgroundColor="white">
                <NavLink to="/document/d2">
                  <Listitem
                    height="50px"
                    fontColor="#14406c"
                    fontSize="18px"
                    label="자료2"
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
          <Route exact path="/document/">
            <Container
              backgroundColor="white"
              border="1px solid #14406c"
              borderRadius="15px"
              fd="column"
              horizontalAlign="left"
              verticalAlign="flex-start"
              marginTop="30px"
              paddingLeft="30px"
              paddingRight="30px"
              width="840px"
            >
              <Container
                height="200px"
                width="840px"
                horizontalAlign="left"
                borderBottom="2px solid #14406c"
                marginBottom="30px"
              >
                <Text fontColor="#14406c" fontSize="32px">
                  자료1
                </Text>
              </Container>
              <Container
                horizontalAlign="left"
                verticalAlign="flex-start"
                fd="column"
              >
                <Text fontSize="32px" marginTop="30px">
                  자료1
                </Text>
                <Text fontSize="24px" marginTop="30px">
                  국회가 재적의원 과반수의 찬성으로 계엄의 해제를 요구한 때에는
                  대통령은 이를 해제하여야 한다. 대법원장의 임기는 6년으로 하며,
                  중임할 수 없다. 대법원장은 국회의 동의를 얻어 대통령이
                  임명한다.
                </Text>
              </Container>
            </Container>
          </Route>
          <Route path="/document/d2">
            <Container
              backgroundColor="white"
              border="1px solid #14406c"
              borderRadius="15px"
              fd="column"
              horizontalAlign="left"
              verticalAlign="flex-start"
              marginTop="30px"
              paddingLeft="30px"
              paddingRight="30px"
              width="840px"
            >
              <Container
                height="200px"
                width="840px"
                horizontalAlign="left"
                borderBottom="2px solid #14406c"
                marginBottom="30px"
              >
                <Text fontColor="#14406c" fontSize="32px">
                  자료2
                </Text>
              </Container>
              <Container
                horizontalAlign="left"
                verticalAlign="flex-start"
                fd="column"
              >
                <Text fontSize="32px" marginTop="30px">
                  자료2
                </Text>
                <Text fontSize="24px" marginTop="30px">
                  신체장애자 및 질병·노령 기타의 사유로 생활능력이 없는 국민은
                  법률이 정하는 바에 의하여 국가의 보호를 받는다. 선거와
                  국민투표의 공정한 관리 및 정당에 관한 사무를 처리하기 위하여
                  선거관리위원회를 둔다.
                </Text>
              </Container>
            </Container>
          </Route>
        </Container>
      </Container>
    </>
  );
}

export default Main;
