import React from "react";
import { NavLink, Route } from "react-router-dom";
import logo_inversed from "../assets/logo_reversed.png";
import hello from "../assets/hello.png";
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
            <Text fontColor="#14406c" fontSize="18px" fontWeight="bold">
              정보
            </Text>
          </Container>
          <Remote width="200px" paddingTop="20px" paddingBottom="20px">
            <List fd="column">
              <Button backgroundColor="white" onClick={() => {}}>
                <NavLink to="/information">
                  <Listitem
                    height="50px"
                    fontColor="#14406c"
                    fontSize="18px"
                    label="공약 이행도"
                  ></Listitem>
                </NavLink>
              </Button>
              <Button backgroundColor="white" onClick={() => {}}>
                <NavLink to="/information/alliance">
                  <Listitem
                    height="50px"
                    fontColor="#14406c"
                    fontSize="18px"
                    label="제휴사업"
                  ></Listitem>
                </NavLink>
              </Button>
              <Button backgroundColor="white" paddingBottom="20px">
                <NavLink to="/information/seoul">
                  <Listitem
                    height="50px"
                    fontColor="#14406c"
                    fontSize="18px"
                    label="서동협"
                  ></Listitem>
                </NavLink>
              </Button>
              <Button backgroundColor="white" paddingBottom="20px">
                <NavLink to="/information/report">
                  <Listitem
                    height="50px"
                    fontColor="#14406c"
                    fontSize="18px"
                    label="예결산 보고"
                  ></Listitem>
                </NavLink>
              </Button>
              <Button backgroundColor="white" paddingBottom="20px">
                <NavLink to="/information/meetinglog">
                  <Listitem
                    height="50px"
                    fontColor="#14406c"
                    fontSize="18px"
                    label="회의록"
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
          <Route exact path="/information/">
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
                height="100px"
                width="840px"
                horizontalAlign="left"
                borderBottom="2px solid #14406c"
                marginBottom="30px"
              >
                <Text fontColor="#14406c" fontSize="32px">
                  공약 이행도
                </Text>
              </Container>
            </Container>
          </Route>
          <Route exact path="/information/alliance">
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
                  제휴 사업
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
                  제휴 사업
                </Text>
                <Text fontSize="24px" marginTop="30px">
                  평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여
                  민주평화통일자문회의를 둘 수 있다. 헌법재판소의 장은 국회의
                  동의를 얻어 재판관중에서 대통령이 임명한다.
                </Text>
              </Container>
            </Container>
          </Route>
          <Route exact path="/information/seoul">
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
                  서동협
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
                  서동협
                </Text>
                <Text fontSize="24px" marginTop="30px">
                  국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에
                  관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여
                  국가안전보장회의를 둔다.
                </Text>
              </Container>
            </Container>
          </Route>
          <Route exact path="/information/report">
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
                  예결산 보고
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
                  예결산 보고
                </Text>
                <Text fontSize="24px" marginTop="30px">
                  탄핵결정은 공직으로부터 파면함에 그친다. 그러나, 이에 의하여
                  민사상이나 형사상의 책임이 면제되지는 아니한다. 헌법개정안이
                  제2항의 찬성을 얻은 때에는 헌법개정은 확정되며, 대통령은 즉시
                  이를 공포하여야 한다.
                </Text>
              </Container>
            </Container>
          </Route>
          <Route exact path="/information/meetinglog">
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
                  회의록
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
                  회의록
                </Text>
                <Text fontSize="24px" marginTop="30px">
                  공무원인 근로자는 법률이 정하는 자에 한하여 단결권·단체교섭권
                  및 단체행동권을 가진다. 지방자치단체는 주민의 복리에 관한
                  사무를 처리하고 재산을 관리하며, 법령의 범위안에서 자치에 관한
                  규정을 제정할 수 있다.
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
