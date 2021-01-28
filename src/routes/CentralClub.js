import React, { useEffect, useState } from "react";
import { NavLink, Route } from "react-router-dom";

import sejong from "../assets/images/Sejonglogo.png";
import logo_inversed from "../assets/logo_reversed.png";
import clubroomlayout from "../assets/images/clubroomlayout.png";

import Button from "../components/Button";
import Container from "../components/Container";
import List from "../components/List";
import Listitem from "../components/Listitem";
import Remote from "../components/Remote";
import Text from "../components/Text";

function CentralClub() {
  const [showClub, setShowClub] = useState([]);
  const [physicalClub, setPhysicalClub] = useState([]);
  const [volunteerClub, setVolunteerClub] = useState([]);
  const [cultureClub, setCultureClub] = useState([]);
  const [academicClub, setAcademicClub] = useState([]);
  const [religionClub, setReligionClub] = useState([]);
  useEffect(() => {
    setShowClub([
      { clubID: 1, clubName: "늘혬코러스", clubLogo: sejong },
      { clubID: 2, clubName: "더블랙", clubLogo: sejong },
      { clubID: 3, clubName: "소리더하기", clubLogo: sejong },
      { clubID: 4, clubName: "소울트레인", clubLogo: sejong },
      { clubID: 5, clubName: "세종극회", clubLogo: sejong },
      { clubID: 6, clubName: "인트로", clubLogo: sejong },
      { clubID: 7, clubName: "터벌림", clubLogo: sejong },
      { clubID: 8, clubName: "페이지7", clubLogo: sejong },
      { clubID: 9, clubName: "한울림", clubLogo: sejong },
    ]);
    setPhysicalClub([
      { clubID: 1, clubName: "러쉬", clubLogo: sejong },
      { clubID: 2, clubName: "발파람", clubLogo: sejong },
      { clubID: 3, clubName: "브라운스킨", clubLogo: sejong },
      { clubID: 4, clubName: "STC", clubLogo: sejong },
      { clubID: 5, clubName: "요트부", clubLogo: sejong },
      { clubID: 6, clubName: "세종킹스", clubLogo: sejong },
      { clubID: 7, clubName: "최강유도", clubLogo: sejong },
      { clubID: 8, clubName: "JUMP", clubLogo: sejong },
      { clubID: 9, clubName: "TSP", clubLogo: sejong },
    ]);
    setVolunteerClub([
      { clubID: 1, clubName: "SELS", clubLogo: sejong },
      { clubID: 2, clubName: "죽순회", clubLogo: sejong },
    ]);
    setCultureClub([
      { clubID: 1, clubName: "마스터", clubLogo: sejong },
      { clubID: 2, clubName: "율", clubLogo: sejong },
      { clubID: 3, clubName: "유스호스텔", clubLogo: sejong },
      { clubID: 4, clubName: "한손", clubLogo: sejong },
      { clubID: 5, clubName: "미즈", clubLogo: sejong },
      { clubID: 6, clubName: "두바퀴", clubLogo: sejong },
      { clubID: 7, clubName: "BAMBOO", clubLogo: sejong },
    ]);
    setAcademicClub([
      { clubID: 1, clubName: "별무리", clubLogo: sejong },
      { clubID: 2, clubName: "세종서회", clubLogo: sejong },
      { clubID: 3, clubName: "인터페이스", clubLogo: sejong },
      { clubID: 4, clubName: "UNSA", clubLogo: sejong },
      { clubID: 5, clubName: "KUSA", clubLogo: sejong },
      { clubID: 6, clubName: "유마프랜", clubLogo: sejong },
      { clubID: 7, clubName: "세종문학회", clubLogo: sejong },
    ]);
    setReligionClub([
      { clubID: 1, clubName: "레지나", clubLogo: sejong },
      { clubID: 2, clubName: "IVF", clubLogo: sejong },
      { clubID: 3, clubName: "JYM", clubLogo: sejong },
      { clubID: 4, clubName: "CAM", clubLogo: sejong },
      { clubID: 5, clubName: "C.C.C", clubLogo: sejong },
      { clubID: 6, clubName: "KSGI", clubLogo: sejong },
    ]);
  }, []);
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
                      hoverUnderline
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
                      hoverUnderline
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
                      hoverUnderline
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
                      hoverUnderline
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
                      hoverUnderline
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
                      hoverUnderline
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
                      hoverUnderline
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
              borderRadius="8px"
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
              borderRadius="8px"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              width="840px"
              display="block"
            >
              <Container
                width="840px"
                height="100px"
                horizontalAlign="flex-end"
              >
                <Text fontSize="18px" fontColor="grey" fontFamily="Arial">
                  동아리 로고를 클릭하시면 각 동아리 페이지로 이동합니다.
                </Text>
              </Container>
              {physicalClub.map((club, index) => {
                return (
                  <Container
                    width="420px"
                    height="200px"
                    display="inline-block"
                    key={club.clubID}
                    className="club-container"
                    borderBottom={
                      index === showClub.length - 1 ? "none" : "2px solid grey"
                    }
                  >
                    <Container className="club-contents-container">
                      <Container
                        className="club-image-container"
                        width="150px"
                        height="150px"
                      >
                        <img src={club.clubLogo} alt="" width="150px" />
                      </Container>
                      <Container
                        className="club-info-container"
                        fd="column"
                        verticalAlign="flex-start"
                        paddingLeft="30px"
                      >
                        <Text fontSize="18px" fontFamily="Arial">
                          {club.clubName}
                        </Text>
                        <Text fontFamily="Arial">
                          {club.clubName}의 한 줄 소개
                        </Text>
                      </Container>
                    </Container>
                  </Container>
                );
              })}
            </Container>
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
              borderRadius="8px"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              width="840px"
              display="block"
            >
              <Container
                width="840px"
                height="100px"
                horizontalAlign="flex-end"
              >
                <Text fontSize="18px" fontColor="grey" fontFamily="Arial">
                  동아리 로고를 클릭하시면 각 동아리 페이지로 이동합니다.
                </Text>
              </Container>
              {cultureClub.map((club, index) => {
                return (
                  <Container
                    width="420px"
                    height="200px"
                    display="inline-block"
                    key={club.clubID}
                    className="club-container"
                    borderBottom={
                      index === cultureClub.length - 1
                        ? "none"
                        : "2px solid grey"
                    }
                  >
                    <Container className="club-contents-container">
                      <Container
                        className="club-image-container"
                        width="150px"
                        height="150px"
                      >
                        <img src={club.clubLogo} alt="" width="150px" />
                      </Container>
                      <Container
                        className="club-info-container"
                        fd="column"
                        verticalAlign="flex-start"
                        paddingLeft="30px"
                      >
                        <Text fontSize="18px" fontFamily="Arial">
                          {club.clubName}
                        </Text>
                        <Text fontFamily="Arial">
                          {club.clubName}의 한 줄 소개
                        </Text>
                      </Container>
                    </Container>
                  </Container>
                );
              })}
            </Container>
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
              borderRadius="8px"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              width="840px"
              display="block"
            >
              <Container
                width="840px"
                height="100px"
                horizontalAlign="flex-end"
              >
                <Text fontSize="18px" fontColor="grey" fontFamily="Arial">
                  동아리 로고를 클릭하시면 각 동아리 페이지로 이동합니다.
                </Text>
              </Container>
              {showClub.map((club, index) => {
                return (
                  <Container
                    width="420px"
                    height="200px"
                    display="inline-block"
                    key={club.clubID}
                    className="club-container"
                    borderBottom={
                      index === showClub.length - 1 ? "none" : "2px solid grey"
                    }
                  >
                    <Container className="club-contents-container">
                      <Container
                        className="club-image-container"
                        width="150px"
                        height="150px"
                      >
                        <img src={club.clubLogo} alt="" width="150px" />
                      </Container>
                      <Container
                        className="club-info-container"
                        fd="column"
                        verticalAlign="flex-start"
                        paddingLeft="30px"
                      >
                        <Text fontSize="18px" fontFamily="Arial">
                          {club.clubName}
                        </Text>
                        <Text fontFamily="Arial">
                          {club.clubName}의 한 줄 소개
                        </Text>
                      </Container>
                    </Container>
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
              borderRadius="8px"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              width="840px"
              display="block"
            >
              <Container
                width="840px"
                height="100px"
                horizontalAlign="flex-end"
              >
                <Text fontSize="18px" fontColor="grey" fontFamily="Arial">
                  동아리 로고를 클릭하시면 각 동아리 페이지로 이동합니다.
                </Text>
              </Container>
              {academicClub.map((club, index) => {
                return (
                  <Container
                    width="420px"
                    height="200px"
                    display="inline-block"
                    key={club.clubID}
                    className="club-container"
                    borderBottom={
                      index === academicClub.length - 1
                        ? "none"
                        : "2px solid grey"
                    }
                  >
                    <Container className="club-contents-container">
                      <Container
                        className="club-image-container"
                        width="150px"
                        height="150px"
                      >
                        <img src={club.clubLogo} alt="" width="150px" />
                      </Container>
                      <Container
                        className="club-info-container"
                        fd="column"
                        verticalAlign="flex-start"
                        paddingLeft="30px"
                      >
                        <Text fontSize="18px" fontFamily="Arial">
                          {club.clubName}
                        </Text>
                        <Text fontFamily="Arial">
                          {club.clubName}의 한 줄 소개
                        </Text>
                      </Container>
                    </Container>
                  </Container>
                );
              })}
            </Container>
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
              borderRadius="8px"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              width="840px"
              display="block"
            >
              <Container
                width="840px"
                height="100px"
                horizontalAlign="flex-end"
              >
                <Text fontSize="18px" fontColor="grey" fontFamily="Arial">
                  동아리 로고를 클릭하시면 각 동아리 페이지로 이동합니다.
                </Text>
              </Container>
              {religionClub.map((club, index) => {
                return (
                  <Container
                    width="420px"
                    height="200px"
                    display="inline-block"
                    key={club.clubID}
                    className="club-container"
                    borderBottom={
                      index === showClub.length - 1 ? "none" : "2px solid grey"
                    }
                  >
                    <Container className="club-contents-container">
                      <Container
                        className="club-image-container"
                        width="150px"
                        height="150px"
                      >
                        <img src={club.clubLogo} alt="" width="150px" />
                      </Container>
                      <Container
                        className="club-info-container"
                        fd="column"
                        verticalAlign="flex-start"
                        paddingLeft="30px"
                      >
                        <Text fontSize="18px" fontFamily="Arial">
                          {club.clubName}
                        </Text>
                        <Text fontFamily="Arial">
                          {club.clubName}의 한 줄 소개
                        </Text>
                      </Container>
                    </Container>
                  </Container>
                );
              })}
            </Container>
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
              borderRadius="8px"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              width="840px"
              display="block"
            >
              <Container
                width="840px"
                height="100px"
                horizontalAlign="flex-end"
              >
                <Text fontSize="18px" fontColor="grey" fontFamily="Arial">
                  동아리 로고를 클릭하시면 각 동아리 페이지로 이동합니다.
                </Text>
              </Container>
              {volunteerClub.map((club, index) => {
                return (
                  <Container
                    width="420px"
                    height="200px"
                    display="inline-block"
                    key={club.clubID}
                    className="club-container"
                    borderBottom="2px solid grey"
                  >
                    <Container className="club-contents-container">
                      <Container
                        className="club-image-container"
                        width="150px"
                        height="150px"
                      >
                        <img src={club.clubLogo} alt="" width="150px" />
                      </Container>
                      <Container
                        className="club-info-container"
                        fd="column"
                        verticalAlign="flex-start"
                        paddingLeft="30px"
                      >
                        <Text fontSize="18px" fontFamily="Arial">
                          {club.clubName}
                        </Text>
                        <Text fontFamily="Arial">
                          {club.clubName}의 한 줄 소개
                        </Text>
                      </Container>
                    </Container>
                  </Container>
                );
              })}
            </Container>
          </Route>
        </Container>
      </Container>
    </>
  );
}

export default CentralClub;
