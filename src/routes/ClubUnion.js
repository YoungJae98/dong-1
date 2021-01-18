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

function ClubUnion() {
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
            <Text fontColor="#14406c" fontSize="18px" fontWeight="bold">
              총동아리연합회 소개
            </Text>
          </Container>
          <Remote width="200px" paddingTop="20px" paddingBottom="20px">
            <List fd="column">
              <Button backgroundColor="white" onClick={() => {}}>
                <NavLink to="/clubunion/">
                  <Listitem
                    height="50px"
                    fontColor="#14406c"
                    fontSize="18px"
                    label="인사말"
                  ></Listitem>
                </NavLink>
              </Button>
              <Button backgroundColor="white" onClick={() => {}}>
                <NavLink to="/clubunion/introduce">
                  <Listitem
                    height="50px"
                    fontColor="#14406c"
                    fontSize="18px"
                    label="회장단 및 국장 소개"
                  ></Listitem>
                </NavLink>
              </Button>
              <Button backgroundColor="white" paddingBottom="20px">
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
          backgroundColor=""
          width="900px"
          fd="column"
          marginLeft="30px"
        >
          <Route exact path="/clubunion/">
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
                  인사말
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
                  인사말 김훈래를 국회로
                </Text>
                <Text fontSize="24px" marginTop="30px">
                  국회의원은 그 지위를 남용하여 국가·공공단체 또는 기업체와의
                  계약이나 그 처분에 의하여 재산상의 권리·이익 또는 직위를
                  취득하거나 타인을 위하여 그 취득을 알선할 수 없다. 군사법원의
                  조직·권한 및 재판관의 자격은 법률로 정한다. 일반사면을
                  명하려면 국회의 동의를 얻어야 한다. 헌법에 의하여 체결·공포된
                  조약과 일반적으로 승인된 국제법규는 국내법과 같은 효력을
                  가진다.
                </Text>
              </Container>
            </Container>
          </Route>
          <Route path="/clubunion/introduce">
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
                  회장단 및 국장 소개
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
                  국장 소개
                </Text>
                <Text fontSize="24px" marginTop="30px">
                  대통령의 국법상 행위는 문서로써 하며, 이 문서에는 국무총리와
                  관계 국무위원이 부서한다. 군사에 관한 것도 또한 같다. 대법원과
                  각급법원의 조직은 법률로 정한다. 대통령은 국가의 안위에
                  관계되는 중대한 교전상태에 있어서 국가를 보위하기 위하여
                  긴급한 조치가 필요하고 국회의 집회가 불가능한 때에 한하여
                  법률의 효력을 가지는 명령을 발할 수 있다.
                </Text>
              </Container>
            </Container>
          </Route>
          <Route path="/clubunion/way2us">
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
                  찾아오시는 길
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
                  네이버 지도 삽입
                </Text>
                <Text fontSize="24px" marginTop="30px">
                  탄핵소추의 의결을 받은 자는 탄핵심판이 있을 때까지 그
                  권한행사가 정지된다. 국회의원은 국가이익을 우선하여 양심에
                  따라 직무를 행한다. 대한민국은 통일을 지향하며, 자유민주적
                  기본질서에 입각한 평화적 통일 정책을 수립하고 이를 추진한다.
                  모든 국민은 주거의 자유를 침해받지 아니한다. 주거에 대한
                  압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한
                  영장을 제시하여야 한다.
                </Text>
              </Container>
            </Container>
          </Route>
        </Container>
      </Container>
    </>
  );
}

export default ClubUnion;
