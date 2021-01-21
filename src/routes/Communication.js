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
                <NavLink to="/communication/">
                  <Listitem
                    height="50px"
                    fontColor="#14406c"
                    fontSize="18px"
                    label="건의사항"
                  ></Listitem>
                </NavLink>
              </Button>
              <Button backgroundColor="white">
                <NavLink to="/communication/petition">
                  <Listitem
                    height="50px"
                    fontColor="#14406c"
                    fontSize="18px"
                    label="회칙 개정 요구 청원"
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
          <Route exact path="/communication/">
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
                  건의사항
                </Text>
              </Container>
              <Container
                horizontalAlign="left"
                verticalAlign="flex-start"
                fd="column"
              >
                <Text fontSize="32px" marginTop="30px">
                  건의사항
                </Text>
                <Text fontSize="24px" marginTop="30px">
                  혼인과 가족생활은 개인의 존엄과 양성의 평등을 기초로 성립되고
                  유지되어야 하며, 국가는 이를 보장한다. 국회의원은 국회에서
                  직무상 행한 발언과 표결에 관하여 국회외에서 책임을 지지
                  아니한다.
                </Text>
              </Container>
            </Container>
          </Route>
          <Route path="/communication/petition">
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
                  회칙 개정 요구 청원
                </Text>
              </Container>
              <Container
                horizontalAlign="left"
                verticalAlign="flex-start"
                fd="column"
              >
                <Text fontSize="32px" marginTop="30px">
                  회칙 개정 요구 청원
                </Text>
                <Text fontSize="24px" marginTop="30px">
                  국회에 제출된 법률안 기타의 의안은 회기중에 의결되지 못한
                  이유로 폐기되지 아니한다. 다만, 국회의원의 임기가 만료된
                  때에는 그러하지 아니하다. 국회의원은 국회에서 직무상 행한
                  발언과 표결에 관하여 국회외에서 책임을 지지 아니한다.
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
