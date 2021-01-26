import React from "react";
import { Link, Route } from "react-router-dom";

import logo_inversed from "../assets/logo_reversed.png";
import hello from "../assets/hello.png";
import president from "../assets/images/president.png";
import vicepresident from "../assets/images/vice.png";
import plan1 from "../assets/images/plan1.png";
import plan2 from "../assets/images/plan2.png";
import communication from "../assets/images/communication.png";
import policy_business from "../assets/images/policy-business.png";
import promotion from "../assets/images/promotion.png";

import Button from "../components/Button";
import Container from "../components/Container";
import List from "../components/List";
import Listitem from "../components/Listitem";
import Remote from "../components/Remote";
import Text from "../components/Text";
import Way2Us from "../components/Way2Us";

function ClubUnion() {
  return (
    <>
      <Container height="1200px" backgroundColor="">
        <Container width="200px" verticalAlign="baseline">
          <Container
            width="200px"
            height="198px"
            fd="column"
            verticalAlign="baseline"
            position="sticky"
            marginTop="100px"
          >
            <Container
              width="220px"
              height="50px"
              horizontalAlign="left"
              verticalAlign="flex-end"
            >
              <img src={logo_inversed} alt="" width="40px" />
              <Text fontColor="#14406c" fontSize="18px" fontFamily="Arial">
                총동아리연합회 소개
              </Text>
            </Container>
            <Remote width="200px" paddingTop="10px" paddingBottom="10px">
              <List fd="column">
                <Button backgroundColor="white">
                  <Link to="/clubunion/">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      fontSize="18px"
                      label="인사말"
                    ></Listitem>
                  </Link>
                </Button>
                <Button backgroundColor="white">
                  <Link to="/clubunion/introduce">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      fontSize="18px"
                      label="회장단 및 국장 소개"
                    ></Listitem>
                  </Link>
                </Button>
                <Button backgroundColor="white">
                  <Link to="/clubunion/way2us">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      fontSize="18px"
                      label="찾아오시는 길"
                    ></Listitem>
                  </Link>
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
          <Route exact path="/clubunion/">
            <Container
              height="40px"
              marginTop="50px"
              marginLeft="20px"
              width="840px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
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
                <img src={hello} alt="sejong" width="500px" />
              </Container>
              <Container
                horizontalAlign="left"
                verticalAlign="flex-start"
                fd="column"
              >
                <Text fontSize="24px" marginTop="30px">
                  안녕하십니까 세종대 학우 여러분
                </Text>
              </Container>
            </Container>
          </Route>
          <Route path="/clubunion/introduce">
            <Container
              height="40px"
              marginTop="50px"
              marginLeft="20px"
              width="840px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
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
              paddingLeft="30px"
              paddingRight="30px"
              paddingTop="30px"
              width="840px"
            >
              <Container
                verticalAlign="flex-start"
                height="50px"
                className="introduce-buttons"
              >
                <Link to="/clubunion/introduce/">
                  <Button
                    backgroundColor="#14406c"
                    fontColor="white"
                    fontSize="20px"
                    width="120px"
                    height="50px"
                    marginLeft="3px"
                    borderRadius="7px"
                    hoverBackgrounColor="white"
                    hoverFontColor="#14406c"
                  >
                    회장
                  </Button>
                </Link>
                <Link to="/clubunion/introduce/vicepresident">
                  <Button
                    backgroundColor="#14406c"
                    fontColor="white"
                    fontSize="20px"
                    width="120px"
                    height="50px"
                    marginLeft="3px"
                    borderRadius="7px"
                    hoverBackgrounColor="white"
                    hoverFontColor="#14406c"
                  >
                    부회장
                  </Button>
                </Link>
                <Link to="/clubunion/introduce/plan1">
                  <Button
                    backgroundColor="#14406c"
                    fontColor="white"
                    fontSize="20px"
                    width="120px"
                    height="50px"
                    marginLeft="3px"
                    borderRadius="7px"
                    hoverBackgrounColor="white"
                    hoverFontColor="#14406c"
                  >
                    기획1국
                  </Button>
                </Link>
                <Link to="/clubunion/introduce/plan2">
                  <Button
                    backgroundColor="#14406c"
                    fontColor="white"
                    fontSize="20px"
                    width="120px"
                    height="50px"
                    marginLeft="3px"
                    borderRadius="7px"
                    hoverBackgrounColor="white"
                    hoverFontColor="#14406c"
                  >
                    기획2국
                  </Button>
                </Link>
                <Link to="/clubunion/introduce/communication">
                  <Button
                    backgroundColor="#14406c"
                    fontColor="white"
                    fontSize="20px"
                    width="120px"
                    height="50px"
                    marginLeft="3px"
                    borderRadius="7px"
                    hoverBackgrounColor="white"
                    hoverFontColor="#14406c"
                  >
                    소통국
                  </Button>
                </Link>
                <Link to="/clubunion/introduce/policy-business">
                  <Button
                    backgroundColor="#14406c"
                    fontColor="white"
                    fontSize="20px"
                    width="120px"
                    height="50px"
                    marginLeft="3px"
                    borderRadius="7px"
                    hoverBackgrounColor="white"
                    hoverFontColor="#14406c"
                  >
                    정책/사무국
                  </Button>
                </Link>
                <Link to="/clubunion/introduce/promotion">
                  <Button
                    backgroundColor="#14406c"
                    fontColor="white"
                    fontSize="20px"
                    width="120px"
                    height="50px"
                    marginLeft="3px"
                    borderRadius="7px"
                    hoverBackgrounColor="white"
                    hoverFontColor="#14406c"
                  >
                    홍보국
                  </Button>
                </Link>
              </Container>
              <Route exact path="/clubunion/introduce/">
                <Container
                  fd="column"
                  verticalAlign="left"
                  horizontalAlign="flex-start"
                  marginTop="30px"
                >
                  <img src={president} alt="" width="500px" />
                  <Text fontSize="24px" marginTop="20px">
                    안녕하세요 저는 회장이에요
                  </Text>
                </Container>
              </Route>
              <Route path="/clubunion/introduce/vicepresident">
                <Container
                  fd="column"
                  verticalAlign="left"
                  horizontalAlign="flex-start"
                  marginTop="30px"
                >
                  <img src={vicepresident} alt="" width="500px" />
                  <Text fontSize="24px" marginTop="20px">
                    안녕하세요 저는 부회장이에요
                  </Text>
                </Container>
              </Route>
              <Route path="/clubunion/introduce/plan1">
                <Container
                  fd="column"
                  verticalAlign="left"
                  horizontalAlign="flex-start"
                  marginTop="30px"
                >
                  <img src={plan1} alt="" width="500px" />
                  <Text fontSize="24px" marginTop="20px">
                    안녕하세요 저는 기획1국장이에요
                  </Text>
                </Container>
              </Route>
              <Route path="/clubunion/introduce/plan2">
                <Container
                  fd="column"
                  verticalAlign="left"
                  horizontalAlign="flex-start"
                  marginTop="30px"
                >
                  <img src={plan2} alt="" width="500px" />
                  <Text fontSize="24px" marginTop="20px">
                    안녕하세요 저는 기획2국장이에요
                  </Text>
                </Container>
              </Route>
              <Route path="/clubunion/introduce/communication">
                <Container
                  fd="column"
                  verticalAlign="left"
                  horizontalAlign="flex-start"
                  marginTop="30px"
                >
                  <img src={communication} alt="" width="500px" />
                  <Text fontSize="24px" marginTop="20px">
                    안녕하세요 저는 소통국장이에요
                  </Text>
                </Container>
              </Route>
              <Route path="/clubunion/introduce/policy-business">
                <Container
                  fd="column"
                  verticalAlign="left"
                  horizontalAlign="flex-start"
                  marginTop="30px"
                >
                  <img src={policy_business} alt="" width="500px" />
                  <Text fontSize="24px" marginTop="20px">
                    안녕하세요 저는 정책/사무국장이에요
                  </Text>
                </Container>
              </Route>
              <Route path="/clubunion/introduce/promotion">
                <Container
                  fd="column"
                  verticalAlign="left"
                  horizontalAlign="flex-start"
                  marginTop="30px"
                >
                  <img src={promotion} alt="" width="500px" />
                  <Text fontSize="24px" marginTop="20px">
                    안녕하세요 저는 홍보국장이에요
                  </Text>
                </Container>
              </Route>
            </Container>
          </Route>
          <Route path="/clubunion/way2us">
            <Container
              height="40px"
              marginTop="50px"
              marginLeft="20px"
              width="840px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
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
                <Way2Us />
                <Text marginTop="20px" fontSize="32px">
                  어린이대공원역 6번 출구
                </Text>
                <Text marginTop="20px" fontSize="32px">
                  세종대학교 학생회관 000호
                </Text>
              </Container>
              <Container
                horizontalAlign="left"
                verticalAlign="flex-start"
                fd="column"
              ></Container>
            </Container>
          </Route>
        </Container>
      </Container>
    </>
  );
}

export default ClubUnion;
