import React from "react";
import { Link, NavLink, Route } from "react-router-dom";

import logo_inversed from "../assets/images/logo_reversed.png";
import hello from "../assets/hello.png";
import president from "../assets/images/people/president.png";
import vicepresident from "../assets/images/people/vice.png";
import plan1 from "../assets/images/people/plan1.png";
import plan2 from "../assets/images/people/plan2.png";
import communication from "../assets/images/people/communication.png";
import policy_business from "../assets/images/people/policy-business.png";
import promotion from "../assets/images/people/promotion.png";
import v1 from "../assets/images/visual/visual1.jpg";

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
      <Container height="145px">
        <img src={v1} alt="" />
      </Container>
      <Container height="1200px" backgroundColor="">
        <Container width="200px" verticalAlign="baseline">
          <Container
            width="200px"
            height="198px"
            fd="column"
            verticalAlign="baseline"
            position="sticky"
            marginTop="90px"
          >
            <Container
              width="220px"
              height="50px"
              horizontalAlign="left"
              verticalAlign="flex-end"
            >
              <img src={logo_inversed} alt="" width="40px" />
              <Text fontColor="#14406c" fontSize="21px" marginLeft="5px">
                총동아리연합회 소개
              </Text>
            </Container>
            <Remote
              width="200px"
              paddingTop="10px"
              paddingBottom="10px"
              marginTop="10px"
            >
              <List fd="column">
                <Button backgroundColor="white">
                  <NavLink to="/clubunion/">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="총동아리연합회"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white">
                  <Link to="/clubunion/introduce">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="집행부 소개"
                      hoverUnderline
                    ></Listitem>
                  </Link>
                </Button>
                <Button backgroundColor="white">
                  <Link to="/clubunion/way2us">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="찾아오시는 길"
                      hoverUnderline
                    ></Listitem>
                  </Link>
                </Button>
              </List>
            </Remote>
          </Container>
        </Container>
        <Container
          width="1062px"
          fd="column"
          marginLeft="30px"
          verticalAlign="flex-start"
          className="right-container"
        >
          <Route exact path="/clubunion/">
            <Container
              height="40px"
              marginTop="80px"
              marginLeft="20px"
              width="1000px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                총동아리연합회
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              borderRadius="5px"
              fd="column"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              paddingTop="30px"
              marginTop="30px"
              width="1000px"
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
              marginTop="80px"
              marginLeft="20px"
              width="1000px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                집행부 소개
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              borderRadius="5px"
              fd="column"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              paddingTop="30px"
              marginTop="30px"
              width="1000px"
            >
              <Container
                verticalAlign="flex-start"
                height="50px"
                className="introduce-buttons"
              >
                <Link to="/clubunion/introduce/">
                  <Button
                    backgroundColor="white"
                    fontColor="#14406c"
                    fontSize="21px"
                    width="140px"
                    height="40px"
                    border="2px solid #14406c"
                    marginLeft="-2px"
                    hoverUnderline
                  >
                    회장
                  </Button>
                </Link>
                <Link to="/clubunion/introduce/vicepresident">
                  <Button
                    backgroundColor="white"
                    fontColor="#14406c"
                    fontSize="21px"
                    width="140px"
                    height="40px"
                    border="2px solid #14406c"
                    marginLeft="-2px"
                    hoverUnderline
                  >
                    부회장
                  </Button>
                </Link>
                <Link to="/clubunion/introduce/plan1">
                  <Button
                    backgroundColor="white"
                    fontColor="#14406c"
                    fontSize="21px"
                    width="140px"
                    height="40px"
                    border="2px solid #14406c"
                    marginLeft="-2px"
                    hoverUnderline
                  >
                    기획1국
                  </Button>
                </Link>
                <Link to="/clubunion/introduce/plan2">
                  <Button
                    backgroundColor="white"
                    fontColor="#14406c"
                    fontSize="21px"
                    width="140px"
                    height="40px"
                    border="2px solid #14406c"
                    marginLeft="-2px"
                    hoverUnderline
                  >
                    기획2국
                  </Button>
                </Link>
                <Link to="/clubunion/introduce/communication">
                  <Button
                    backgroundColor="white"
                    fontColor="#14406c"
                    fontSize="21px"
                    width="140px"
                    height="40px"
                    border="2px solid #14406c"
                    marginLeft="-2px"
                    hoverUnderline
                  >
                    소통국
                  </Button>
                </Link>
                <Link to="/clubunion/introduce/policy-business">
                  <Button
                    backgroundColor="white"
                    fontColor="#14406c"
                    fontSize="21px"
                    width="140px"
                    height="40px"
                    border="2px solid #14406c"
                    marginLeft="-2px"
                    hoverUnderline
                  >
                    정책/사무국
                  </Button>
                </Link>
                <Link to="/clubunion/introduce/promotion">
                  <Button
                    backgroundColor="white"
                    fontColor="#14406c"
                    fontSize="21px"
                    width="140px"
                    height="40px"
                    border="2px solid #14406c"
                    marginLeft="-2px"
                    hoverUnderline
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
              marginTop="80px"
              marginLeft="20px"
              width="1000px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                찾아오시는 길
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              borderRadius="5px"
              fd="column"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              paddingTop="30px"
              marginTop="30px"
              width="1000px"
            >
              <Container
                fd="column"
                horizontalAlign="left"
                verticalAlign="flex-start"
              >
                <Way2Us />
                <Text marginTop="20px" fontSize="24px">
                  지하철 7호선 어린이대공원역 6번 출구 세종대학교 학생회관 408호
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
