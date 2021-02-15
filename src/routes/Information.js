import React, { useEffect, useState } from "react";
import { NavLink, Route } from "react-router-dom";

import logo_inversed from "../assets/images/logo_reversed.png";
import Sejong from "../assets/images/Sejonglogo.png";
import pdf from "../assets/documents/pdf.pdf";
import promises from "../assets/documents/promises.pdf";
import v3 from "../assets/images/visual/visual3.jpg";

import Button from "../components/Button";
import Container from "../components/Container";
import List from "../components/List";
import Listitem from "../components/Listitem";
import Remote from "../components/Remote";
import Text from "../components/Text";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";

function Main() {
  const [reports, setReports] = useState([]);
  const [meetinglogs, setMeetinglogs] = useState([]);
  const [pledges, setPledges] = useState({});
  const [assignment1, setAssignment1] = useState([]);
  const [assignment2, setAssignment2] = useState([]);
  const [assignment3, setAssignment3] = useState([]);
  const [assignment4, setAssignment4] = useState([]);
  const [searchStr1, setSearchStr1] = useState("");
  const [searchStr2, setSearchStr2] = useState("");
  const [searchOption, setSearchOption] = useState(0);
  const [reportSearchResult, setReportSearchResult] = useState([]);
  const [meetinglogsSearchResult, setMeetinglogsSearchResult] = useState([]);
  //공약 받아오는 부분
  const getPledge = () => {
    fetch("http://localhost:3001/api/pledges/getPledge", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setPledges(response);
      });
  };
  const getFile = (id) => {
    fetch("http://localhost:3001/api/files/getFiles", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: {
        id: id,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  };
  useEffect(() => {
    getPledge();
    setReports([
      {
        reportId: 1,
        reportTitle: "예산안 1",
        reportDate: "2022-32-14",
        reporter: "김지우",
        reportSource: pdf,
      },
      {
        reportId: 2,
        reportTitle: "결산안 1",
        reportDate: "2024-25-39",
        reporter: "김지우",
        reportSource: pdf,
      },
      {
        reportId: 3,
        reportTitle: "예산안 2",
        reportDate: "2027-73-58",
        reporter: "김지우",
        reportSource: pdf,
      },
    ]);
    setReportSearchResult([
      {
        reportId: 1,
        reportTitle: "예산안 1",
        reportDate: "2022-32-14",
        reporter: "김지우",
        reportSource: pdf,
      },
      {
        reportId: 2,
        reportTitle: "결산안 1",
        reportDate: "2024-25-39",
        reporter: "김지우",
        reportSource: pdf,
      },
      {
        reportId: 3,
        reportTitle: "예산안 2",
        reportDate: "2027-73-58",
        reporter: "김지우",
        reportSource: pdf,
      },
    ]);
    setMeetinglogs([
      {
        meetinglogId: 1,
        meetinglogTitle: "회의록 1",
        meetinglogDate: "2022-32-14",
        meetingloger: "김지우",
        meetinglogSource: pdf,
      },
      {
        meetinglogId: 2,
        meetinglogTitle: "회의록 2",
        meetinglogDate: "2029-56-30",
        meetingloger: "김지우",
        meetinglogSource: pdf,
      },
      {
        meetinglogId: 3,
        meetinglogTitle: "회의록 3",
        meetinglogDate: "2069-57-89",
        meetingloger: "김지우",
        meetinglogSource: pdf,
      },
    ]);
    setMeetinglogsSearchResult([
      {
        meetinglogId: 1,
        meetinglogTitle: "회의록 1",
        meetinglogDate: "2022-32-14",
        meetingloger: "김지우",
        meetinglogSource: pdf,
      },
      {
        meetinglogId: 2,
        meetinglogTitle: "회의록 2",
        meetinglogDate: "2029-56-30",
        meetingloger: "김지우",
        meetinglogSource: pdf,
      },
      {
        meetinglogId: 3,
        meetinglogTitle: "회의록 3",
        meetinglogDate: "2069-57-89",
        meetingloger: "김지우",
        meetinglogSource: pdf,
      },
    ]);
  }, []);
  useEffect(() => {
    if (Object.keys(pledges).length !== 0) {
      setAssignment1(pledges["1"]);
      setAssignment2(pledges["2"]);
      setAssignment3(pledges["3"]);
      setAssignment4(pledges["4"]);
    }
  }, [pledges]);
  return (
    <>
      <Container height="145px">
        <img src={v3} alt="" />
      </Container>
      <Container height="1200px" backgroundColor="">
        <Container width="200px" verticalAlign="baseline">
          <Container
            width="200px"
            height="282px"
            fd="column"
            verticalAlign="baseline"
            position="sticky"
            marginTop="8px"
          >
            <Container
              height="50px"
              horizontalAlign="left"
              verticalAlign="flex-end"
            >
              <img src={logo_inversed} alt="" width="40px" />
              <Text fontColor="#14406c" fontSize="21px" fontFamily="SeoulBold">
                정보
              </Text>
            </Container>
            <Remote width="200px" paddingTop="10px" paddingBottom="10px">
              <List fd="column">
                <Button backgroundColor="white">
                  <NavLink to="/information">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="공약 이행도"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button
                  backgroundColor="white"
                  onClick={() => {
                    alert("준비중입니다.");
                  }}
                >
                  {/* <NavLink to="/information/alliance"> */}
                  <Listitem
                    height="40px"
                    fontColor="#14406c"
                    label="제휴사업"
                    hoverUnderline
                  ></Listitem>
                  {/* </NavLink> */}
                </Button>
                <Button backgroundColor="white">
                  <NavLink to="/information/seoul">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="서동협"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white">
                  <NavLink to="/information/report">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="예결산 보고"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white">
                  <NavLink to="/information/meetinglog">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="회의록"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
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
        >
          <Route exact path="/information/">
            <Container
              height="40px"
              marginTop="20px"
              marginLeft="20px"
              width="1000px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                공약 이행도
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              border="1px solid #14406c"
              borderRadius="8px"
              fd="column"
              horizontalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              paddingTop="30px"
              width="1000px"
            >
              <Container
                height="50px"
                className="promise-button-container"
                borderBottom="2px solid #14406c"
                horizontalAlign="flex-end"
                paddingBottom="30px"
              >
                <Text fontColor="#14406c" fontSize="28px">
                  공약집
                </Text>
                <Button
                  width="120px"
                  height="50px"
                  backgroundColor="white"
                  border="2px solid #14406c"
                  borderRadius="5px"
                  fontColor="#14406c"
                  hoverBackgrounColor="#14406c"
                  hoverFontColor="white"
                  marginLeft="15px"
                >
                  <a href={promises} target="_blank" rel="noreferrer">
                    <Text fontSize="21px">바로 보기</Text>
                  </a>
                </Button>
                <Button
                  width="120px"
                  height="50px"
                  backgroundColor="white"
                  border="2px solid #14406c"
                  borderRadius="5px"
                  fontColor="#14406c"
                  hoverBackgrounColor="#14406c"
                  hoverFontColor="white"
                  marginLeft="15px"
                >
                  <a href={promises} download>
                    pdf 다운로드
                  </a>
                </Button>
              </Container>
              <Container
                height="150px"
                className="totalPromise"
                borderBottom="2px solid #14406c"
                fd="column"
              >
                <Text fontSize="28px" fontColor="#14406c">
                  전체 공약 이행도
                </Text>
                <Container
                  className="progressBar-container"
                  height="40px"
                  position="relative"
                  marginTop="10px"
                >
                  <Container
                    backgroundColor="Gainsboro"
                    className="progressBar-background"
                    position="relative"
                    horizontalAlign="flex-start"
                  >
                    <Container
                      position="absolute"
                      className="progressBar-content"
                      backgroundColor="#a8bec9"
                      width={`${
                        ((assignment1.filter((act) => act.p_status === 1)
                          .length +
                          assignment2.filter((act) => act.p_status === 1)
                            .length +
                          assignment3.filter((act) => act.p_status === 1)
                            .length +
                          assignment4.filter((act) => act.p_status === 1)
                            .length) /
                          (assignment1.length +
                            assignment2.length +
                            assignment3.length +
                            assignment4.length)) *
                        1000
                      }px`}
                    >
                      <Text fontSize="21px" fontColor="#14406c">
                        {(
                          ((assignment1.filter((act) => act.p_status === 1)
                            .length +
                            assignment2.filter((act) => act.p_status === 1)
                              .length +
                            assignment3.filter((act) => act.p_status === 1)
                              .length +
                            assignment4.filter((act) => act.p_status === 1)
                              .length) /
                            (assignment1.length +
                              assignment2.length +
                              assignment3.length +
                              assignment4.length)) *
                          100
                        ).toFixed(2)}
                        %
                      </Text>
                    </Container>
                  </Container>
                  <div
                    className="totalProgress"
                    style={{ width: "360px", height: "220px" }}
                  >
                    <div className="totalProgress-uparrow" />
                    <div className="totalProgress-uparrow-cover" />
                    <Container fd="column" horizontalAlign="flex-start">
                      <Text
                        fontSize="21px"
                        fontColor="#14406c"
                        marginTop="15px"
                      >
                        전체 공약 이행도
                      </Text>
                      <Text
                        fontColor="#14406c"
                        fontSize="21px"
                        marginTop="10px"
                      >
                        과제1&nbsp;
                        {`${parseInt(
                          (assignment1.filter((act) => act.p_status === 1)
                            .length /
                            assignment1.length) *
                            100
                        )}%`}
                      </Text>
                      <Text
                        fontColor="#14406c"
                        fontSize="21px"
                        marginTop="10px"
                      >
                        과제2&nbsp;
                        {`${parseInt(
                          (assignment2.filter((act) => act.p_status === 1)
                            .length /
                            assignment2.length) *
                            100
                        )}%`}
                      </Text>
                      <Text
                        fontColor="#14406c"
                        fontSize="21px"
                        marginTop="10px"
                      >
                        과제3&nbsp;
                        {`${parseInt(
                          (assignment3.filter((act) => act.p_status === 1)
                            .length /
                            assignment3.length) *
                            100
                        )}%`}
                      </Text>
                      <Text
                        fontColor="#14406c"
                        fontSize="21px"
                        marginTop="10px"
                      >
                        과제4&nbsp;
                        {`${parseInt(
                          (assignment4.filter((act) => act.p_status === 1)
                            .length /
                            assignment4.length) *
                            100
                        )}%`}
                      </Text>
                      <Text
                        fontColor="#14406c"
                        fontSize="21px"
                        marginTop="10px"
                      >
                        합계&nbsp;
                        {`(${
                          assignment1.filter((act) => act.p_status === 1)
                            .length +
                          assignment2.filter((act) => act.p_status === 1)
                            .length +
                          assignment3.filter((act) => act.p_status === 1)
                            .length +
                          assignment4.filter((act) => act.p_status === 1).length
                        } / ${
                          assignment1.length +
                          assignment2.length +
                          assignment3.length +
                          assignment4.length
                        }) ${parseInt(
                          ((assignment1.filter((act) => act.p_status === 1)
                            .length +
                            assignment2.filter((act) => act.p_status === 1)
                              .length +
                            assignment3.filter((act) => act.p_status === 1)
                              .length +
                            assignment4.filter((act) => act.p_status === 1)
                              .length) /
                            (assignment1.length +
                              assignment2.length +
                              assignment3.length +
                              assignment4.length)) *
                            100
                        )}%`}
                      </Text>
                    </Container>
                  </div>
                </Container>
              </Container>
              <Text marginTop="30px" fontColor="#14406c" fontSize="28px">
                과제별 공약 이행도
              </Text>
              <Container
                height="80px"
                className="assignment1Progress"
                fd="column"
                horizontalAlign="flex-start"
                verticalAlign="flex-start"
                marginTop="10px"
              >
                <Text fontSize="21px" fontColor="#14406c">
                  과제1 동아리와 총동연을 밀접하게
                </Text>
                <Container
                  className="progressBar-container"
                  height="40px"
                  marginTop="10px"
                  position="relative"
                  verticalAlign="flex-start"
                  horizontalAlign="flex-start"
                >
                  <Container
                    backgroundColor="Gainsboro"
                    className="progressBar-background"
                    position="relative"
                    horizontalAlign="flex-start"
                  >
                    <Container
                      position="absolute"
                      className="progressBar-content"
                      backgroundColor="#a8bec9"
                      width={`${
                        (1000 *
                          assignment1.filter((act) => act.p_status === 1)
                            .length) /
                        assignment1.length
                      }px`}
                    >
                      <Text fontColor="#14406c" fontSize="21px">{`${parseInt(
                        (assignment1.filter((act) => act.p_status === 1)
                          .length /
                          assignment1.length) *
                          100
                      )}%`}</Text>
                    </Container>
                  </Container>
                  <div
                    className="subProgress"
                    style={{ width: "360px", height: "280px" }}
                  >
                    <Container fd="column" horizontalAlign="flex-start">
                      <Text
                        fontSize="21px"
                        fontColor="#14406c"
                        marginTop="15px"
                      >
                        과제1 동아리와 총동연을 밀접하게
                      </Text>
                      {assignment1.map((act, index) => (
                        <Container horizontalAlign="flex-start" key={act.p_id}>
                          <Text
                            marginLeft="10px"
                            doneAct={act.p_status}
                            fontSize="21px"
                          >
                            행동{index + 1}&nbsp;
                          </Text>
                          <Text doneAct={act.p_status} fontSize="21px">
                            {act.p_name}
                          </Text>
                          {act.p_status ? <Text doneActV>V</Text> : null}
                        </Container>
                      ))}
                    </Container>
                    <div className="subProgress-downarrow" />
                    <div className="subProgress-downarrow-cover" />
                  </div>
                </Container>
              </Container>
              <Container
                height="80px"
                className="assignment2Progress"
                fd="column"
                horizontalAlign="flex-start"
                verticalAlign="flex-start"
                marginTop="10px"
              >
                <Text fontSize="21px" fontColor="#14406c">
                  과제2 분과 살리기
                </Text>
                <Container
                  className="progressBar-container"
                  height="40px"
                  position="relative"
                  marginTop="10px"
                >
                  <Container
                    backgroundColor="Gainsboro"
                    className="progressBar-background"
                    position="relative"
                    horizontalAlign="flex-start"
                  >
                    <Container
                      position="absolute"
                      className="progressBar-content"
                      backgroundColor="#a8bec9"
                      width={`${
                        (1000 *
                          assignment2.filter((act) => act.p_status === 1)
                            .length) /
                        assignment2.length
                      }px`}
                    >
                      <Text fontColor="#14406c" fontSize="21px">{`${
                        (assignment2.filter((act) => act.p_status === 1)
                          .length /
                          assignment2.length) *
                        100
                      }%`}</Text>
                    </Container>
                  </Container>
                  <div
                    className="subProgress-big"
                    style={{ width: "420px", height: "200px" }}
                  >
                    <Container fd="column" horizontalAlign="flex-start">
                      <Text
                        fontSize="21px"
                        fontColor="#14406c"
                        marginTop="15px"
                      >
                        과제2 분과 살리기
                      </Text>
                      {assignment2.map((act, index) => (
                        <Container horizontalAlign="flex-start" key={act.p_id}>
                          <Text
                            marginLeft="10px"
                            doneAct={act.p_status}
                            fontSize="21px"
                          >
                            행동{index + 1}&nbsp;
                          </Text>
                          <Text doneAct={act.p_status} fontSize="21px">
                            {act.p_name}
                          </Text>
                          {act.p_status ? <Text doneActV>V</Text> : null}
                        </Container>
                      ))}
                    </Container>
                    <div className="subProgress-big-downarrow" />
                    <div className="subProgress-big-downarrow-cover" />
                  </div>
                </Container>
              </Container>
              <Container
                height="80px"
                className="assignment2Progress"
                fd="column"
                horizontalAlign="flex-start"
                verticalAlign="flex-start"
                marginTop="10px"
              >
                <Text fontSize="21px" fontColor="#14406c">
                  과제3 동아리 알리기
                </Text>
                <Container
                  className="progressBar-container"
                  position="relative"
                  height="40px"
                  marginTop="10px"
                >
                  <Container
                    backgroundColor="Gainsboro"
                    className="progressBar-background"
                    position="relative"
                    horizontalAlign="flex-start"
                  >
                    <Container
                      position="absolute"
                      className="progressBar-content"
                      backgroundColor="#a8bec9"
                      width={`${
                        (1000 *
                          assignment3.filter((act) => act.p_status === 1)
                            .length) /
                        assignment3.length
                      }px`}
                    >
                      <Text fontColor="#14406c" fontSize="21px">{`${
                        (assignment3.filter((act) => act.p_status === 1)
                          .length /
                          assignment3.length) *
                        100
                      }%`}</Text>
                    </Container>
                  </Container>
                  <div
                    className="subProgress"
                    style={{ width: "360px", height: "200px" }}
                  >
                    <Container fd="column" horizontalAlign="flex-start">
                      <Text
                        fontSize="21px"
                        fontColor="#14406c"
                        marginTop="15px"
                      >
                        과제3 동아리 알리기
                      </Text>
                      {assignment3.map((act, index) => (
                        <Container horizontalAlign="flex-start" key={act.p_id}>
                          <Text
                            marginLeft="10px"
                            doneAct={act.p_status}
                            fontSize="21px"
                          >
                            행동{index + 1}&nbsp;
                          </Text>
                          <Text doneAct={act.p_status} fontSize="21px">
                            {act.p_name}
                          </Text>
                          {act.p_status ? <Text doneActV>V</Text> : null}
                        </Container>
                      ))}
                    </Container>
                    <div className="subProgress-downarrow" />
                    <div className="subProgress-downarrow-cover" />
                  </div>
                </Container>
              </Container>
              <Container
                height="80px"
                className="assignment2Progress"
                fd="column"
                horizontalAlign="flex-start"
                verticalAlign="flex-start"
                marginTop="10px"
              >
                <Text fontSize="21px" fontColor="#14406c">
                  과제4 동아리 활동성 증진
                </Text>
                <Container
                  className="progressBar-container"
                  height="40px"
                  position="relative"
                  marginTop="10px"
                >
                  <Container
                    backgroundColor="Gainsboro"
                    className="progressBar-background"
                    position="relative"
                    horizontalAlign="flex-start"
                  >
                    <Container
                      position="absolute"
                      className="progressBar-content"
                      backgroundColor="#a8bec9"
                      width={`${
                        (1000 *
                          assignment4.filter((act) => act.p_status === 1)
                            .length) /
                        assignment4.length
                      }px`}
                    >
                      <Text fontColor="#14406c" fontSize="21px">{`${
                        (assignment4.filter((act) => act.p_status === 1)
                          .length /
                          assignment4.length) *
                        100
                      }%`}</Text>
                    </Container>
                  </Container>
                  <div
                    className="subProgress"
                    style={{ width: "360px", height: "200px" }}
                  >
                    <Container fd="column" horizontalAlign="flex-start">
                      <Text
                        fontSize="21px"
                        fontColor="#14406c"
                        marginTop="15px"
                      >
                        과제4 동아리 활동성 증진
                      </Text>
                      {assignment4.map((act, index) => (
                        <Container horizontalAlign="flex-start" key={act.p_id}>
                          <Text
                            marginLeft="10px"
                            doneAct={act.p_status}
                            fontSize="21px"
                          >
                            행동{index + 1}&nbsp;
                          </Text>
                          <Text doneAct={act.p_status} fontSize="21px">
                            {act.p_name}
                          </Text>
                          {act.p_status ? <Text doneActV>V</Text> : null}
                        </Container>
                      ))}
                    </Container>
                    <div className="subProgress-downarrow" />
                    <div className="subProgress-downarrow-cover" />
                  </div>
                </Container>
              </Container>
            </Container>
          </Route>
          <Route exact path="/information/alliance">
            {/* <Container
              height="40px"
              marginTop="20px"
              marginLeft="20px"
              width="1000px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                제휴사업
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
              width="1000px"
            >
              <Container
                height="100px"
                fd="column"
                verticalAlign="flex-start"
                horizontalAlign="flex-start"
              >
                <Text fontSize="32px">1. 이불 대여</Text>
                <Text fontSize="21px" marginTop="10px">
                  &nbsp;&nbsp;따뜻한 이불 빌려 드립니다.
                </Text>
              </Container>
              <Container
                height="100px"
                fd="column"
                verticalAlign="flex-start"
                horizontalAlign="flex-start"
              >
                <Text fontSize="32px">2. 베개 대여</Text>
                <Text fontSize="21px" marginTop="10px">
                  &nbsp;&nbsp;푹신한 베개 빌려 드립니다.
                </Text>
              </Container>
              <Container
                height="100px"
                fd="column"
                verticalAlign="flex-start"
                horizontalAlign="flex-start"
              >
                <Text fontSize="32px">3. 난로 대여</Text>
                <Text fontSize="21px" marginTop="10px">
                  &nbsp;&nbsp;화끈한 난로 빌려 드립니다.
                </Text>
              </Container>
              <Container
                height="100px"
                fd="column"
                verticalAlign="flex-start"
                horizontalAlign="flex-start"
              >
                <Text fontSize="32px">4. 수면 양말 대여</Text>
                <Text fontSize="21px" marginTop="10px">
                  &nbsp;&nbsp;보드라운 수면 양말 빌려 드립니다.
                </Text>
              </Container>
            </Container> */}
          </Route>
          <Route exact path="/information/seoul">
            <Container
              height="40px"
              marginTop="20px"
              marginLeft="20px"
              width="1000px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                서동협
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              border="1px solid #14406c"
              borderRadius="8px"
              fd="column"
              horizontalAlign="flex-start"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              paddingTop="30px"
              width="1000px"
            >
              <Container height="250px">
                <img src={Sejong} alt="" width="250px" />
                <Container
                  height="200px"
                  horizontalAlign="flex-start"
                  verticalAlign="flex-start"
                  marginLeft="50px"
                  marginTop="25px"
                  marginBottom="25px"
                  backgroundColor="ivory"
                >
                  <Text fontSize="21px">
                    서동협은 블라블라블라블라블라블라
                    <br />
                    서동협 설명 들아갈 칸은 아이보리 색
                    <br />
                    세종대 마크 대신 서동협 마크
                  </Text>
                </Container>
              </Container>
              <Container
                height="600px"
                border="2px solid #14406c"
                borderRadius="3px"
                marginTop="20px"
                fd="column"
                horizontalAlign="flex-start"
                verticalAlign="flex-start"
              >
                <Container
                  width="780px"
                  height="150px"
                  horizontalAlign="flex-start"
                  paddingLeft="30px"
                  paddingRight="30px"
                >
                  <img src={logo_inversed} alt="" width="100px" />
                  <Text fontSize="28px" marginLeft="30px">
                    세종대학교 '행동' 총동아리연합회
                  </Text>
                </Container>
                <Container
                  width="780px"
                  height="150px"
                  horizontalAlign="flex-start"
                  paddingLeft="30px"
                  paddingRight="30px"
                >
                  <AiOutlineInstagram size="100" color="#14406c" />
                  <Text fontSize="22px" marginLeft="30px">
                    <a
                      href="https://www.instagram.com/sejong_clubunion"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://www.instagram.com/sejong_clubunion
                    </a>
                  </Text>
                </Container>
                <Container
                  width="780px"
                  height="150px"
                  horizontalAlign="flex-start"
                  paddingLeft="30px"
                  paddingRight="30px"
                >
                  <AiOutlineFacebook size="100" color="#14406c" />
                  <Text fontSize="22px" marginLeft="30px">
                    <a
                      href="https://www.facebook.com/sejongclubunion"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://www.facebook.com/sejongclubunion
                    </a>
                  </Text>
                </Container>
                <Container
                  width="780px"
                  height="150px"
                  horizontalAlign="flex-start"
                  paddingLeft="30px"
                  paddingRight="30px"
                >
                  <AiOutlineYoutube size="100" color="#14406c" />
                  <Text fontSize="22px" marginLeft="30px">
                    <a
                      href="https://www.youtube.com/channel/UCE7mWkYZTEkFsVzADtcGWQg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://www.youtube.com/channel/UCE7mWkYZTEkFsVzADtcGWQg
                    </a>
                  </Text>
                </Container>
              </Container>
            </Container>
          </Route>
          <Route exact path="/information/report">
            <Container
              height="40px"
              marginTop="20px"
              marginLeft="20px"
              width="1000px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                예결산 보고
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
              width="1000px"
            >
              <Container className="reports-button-container" height="40px">
                <Button
                  width="120px"
                  backgroundColor="#14406c"
                  border="2px solid #14406c"
                  borderRadius="10px"
                  fontColor="white"
                  hoverBackgrounColor="white"
                  hoverFontColor="#14406c"
                  marginRight="15px"
                  onClick={() => {
                    const list = document.querySelector(".report-sort-options");
                    list.classList.toggle("invisible");
                  }}
                >
                  <Text fontSize="21px">정렬 방식 ▼</Text>
                </Button>
                <div className="report-sort-options invisible">
                  <Container
                    width="110px"
                    height="90px"
                    backgroundColor="#14406c"
                    fd="column"
                  >
                    <Button
                      backgroundColor="#14406c"
                      fontColor="white"
                      hoverBackgrounColor="white"
                      hoverFontColor="#14406c"
                      onClick={() => {
                        const list = document.querySelector(
                          ".report-sort-options"
                        );
                        list.classList.toggle("invisible");
                        const tmp = JSON.parse(
                          JSON.stringify(reportSearchResult)
                        );
                        setReportSearchResult(
                          tmp.sort((a, b) => {
                            if (a.reportTitle < b.reportTitle) return -1;
                            else return 1;
                          })
                        );
                      }}
                    >
                      제목
                    </Button>
                    <Button
                      backgroundColor="#14406c"
                      fontColor="white"
                      hoverBackgrounColor="white"
                      hoverFontColor="#14406c"
                      onClick={() => {
                        const list = document.querySelector(
                          ".report-sort-options"
                        );
                        list.classList.toggle("invisible");
                        const tmp = JSON.parse(
                          JSON.stringify(reportSearchResult)
                        );
                        setReportSearchResult(
                          tmp.sort((a, b) => {
                            if (a.reportDate < b.reportDate) return 1;
                            else return -1;
                          })
                        );
                      }}
                    >
                      최근
                    </Button>
                    <Button
                      backgroundColor="#14406c"
                      fontColor="white"
                      hoverBackgrounColor="white"
                      hoverFontColor="#14406c"
                      onClick={() => {
                        const list = document.querySelector(
                          ".report-sort-options"
                        );
                        list.classList.toggle("invisible");
                        const tmp = JSON.parse(
                          JSON.stringify(reportSearchResult)
                        );
                        setReportSearchResult(
                          tmp.sort((a, b) => {
                            if (a.reportDate > b.reportDate) return 1;
                            else return -1;
                          })
                        );
                      }}
                    >
                      오래된
                    </Button>
                  </Container>
                </div>
                <Button
                  width="120px"
                  backgroundColor="#14406c"
                  border="2px solid #14406c"
                  borderRadius="10px"
                  fontColor="white"
                  hoverBackgrounColor="white"
                  hoverFontColor="#14406c"
                  marginRight="15px"
                  onClick={() => {
                    const list = document.querySelector(
                      ".report-search-options"
                    );
                    list.classList.toggle("invisible");
                  }}
                >
                  <Text fontSize="21px">검색 방식 ▼</Text>
                </Button>
                <div className="report-search-options invisible">
                  <Container
                    width="110px"
                    height="90px"
                    backgroundColor="#14406c"
                    fd="column"
                  >
                    <Button
                      backgroundColor="#14406c"
                      fontColor="white"
                      hoverBackgrounColor="white"
                      hoverFontColor="#14406c"
                      onClick={() => {
                        const list = document.querySelector(
                          ".report-search-options"
                        );
                        list.classList.toggle("invisible");
                        setSearchOption(0);
                      }}
                    >
                      제목
                    </Button>
                    <Button
                      backgroundColor="#14406c"
                      fontColor="white"
                      hoverBackgrounColor="white"
                      hoverFontColor="#14406c"
                      onClick={() => {
                        const list = document.querySelector(
                          ".report-search-options"
                        );
                        list.classList.toggle("invisible");
                        setSearchOption(1);
                      }}
                    >
                      글쓴이
                    </Button>
                    <Button
                      backgroundColor="#14406c"
                      fontColor="white"
                      hoverBackgrounColor="white"
                      hoverFontColor="#14406c"
                      onClick={() => {
                        const list = document.querySelector(
                          ".report-search-options"
                        );
                        list.classList.toggle("invisible");
                        setSearchOption(2);
                      }}
                    >
                      날짜
                    </Button>
                  </Container>
                </div>
                <input
                  type="text"
                  placeholder="검색어를 입력하세요."
                  style={{
                    width: "435px",
                    height: "35px",
                    border: "2px solid #14406c",
                    borderRadius: "10px",
                    fontSize: "21px",
                    fontFamily: "SeoulBold",
                  }}
                  value={searchStr1}
                  onChange={(e) => {
                    setSearchStr1(e.target.value);
                  }}
                />
                <Button
                  width="120px"
                  backgroundColor="#14406c"
                  border="2px solid #14406c"
                  borderRadius="10px"
                  fontColor="white"
                  hoverBackgrounColor="white"
                  hoverFontColor="#14406c"
                  marginLeft="15px"
                  onClick={() => {
                    setReportSearchResult(() => {
                      switch (searchOption) {
                        case 0: // title
                          return reports.filter((report) =>
                            report.reportTitle.includes(searchStr1)
                          );
                        case 1: // writer
                          return reports.filter((report) =>
                            report.reporter.includes(searchStr1)
                          );
                        case 2: // date
                          return reports.filter((report) =>
                            report.reportDate.includes(searchStr1)
                          );
                        default:
                          return reports;
                      }
                    });
                  }}
                >
                  <Text fontSize="21px">검색</Text>
                </Button>
              </Container>
              <Container
                className="reports-contents-container"
                fd="column"
                horizontalAlign="flex-start"
              >
                {reportSearchResult.map((report) => (
                  <Container
                    className="report-item"
                    height="150px"
                    horizontalAlign="flex-start"
                    marginTop="20px"
                    borderBottom="2px solid #14406c"
                    key={report.reportId}
                  >
                    <Container
                      className="report-item-info"
                      fd="column"
                      verticalAlign="flex-start"
                      marginLeft="30px"
                    >
                      <Text fontSize="34px">{report.reportTitle}</Text>
                      <Container
                        height="40px"
                        className="report-item-uploadinfo"
                        horizontalAlign="flex-start"
                      >
                        <Text fontColor="grey" fontSize="21px">
                          {report.reportDate}
                        </Text>
                        <div
                          style={{
                            height: "10px",
                            borderLeft: "1px solid grey",
                            marginLeft: "10px",
                            marginRight: "10px",
                            display: "inline",
                          }}
                        ></div>
                        <Text fontColor="grey" fontSize="21px">
                          {report.reporter}
                        </Text>
                      </Container>
                    </Container>
                    <a
                      href={report.reportSource}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button
                        width="180px"
                        height="50px"
                        backgroundColor="white"
                        border="2px solid #14406c"
                        borderRadius="10px"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        marginRight="15px"
                      >
                        <Text fontSize="21px">바로 보기</Text>
                      </Button>
                    </a>
                    <a href={report.reportSource} download>
                      <Button
                        width="180px"
                        height="50px"
                        backgroundColor="white"
                        border="2px solid #14406c"
                        borderRadius="10px"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        marginRight="15px"
                      >
                        <Text fontSize="21px">pdf 다운로드</Text>
                      </Button>
                    </a>
                  </Container>
                ))}
              </Container>
            </Container>
          </Route>
          <Route exact path="/information/meetinglog">
            <Container
              height="40px"
              marginTop="20px"
              marginLeft="20px"
              width="1000px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                회의록
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
              width="1000px"
            >
              <Container className="meetinglog-button-container" height="40px">
                <Button
                  width="120px"
                  backgroundColor="#14406c"
                  border="2px solid #14406c"
                  borderRadius="10px"
                  fontColor="white"
                  hoverBackgrounColor="white"
                  hoverFontColor="#14406c"
                  marginRight="15px"
                  onClick={() => {
                    const list = document.querySelector(
                      ".meetinglogs-sort-options"
                    );
                    list.classList.toggle("invisible");
                  }}
                >
                  <Text fontSize="21px">정렬 방식 ▼</Text>
                </Button>
                <div className="meetinglogs-sort-options invisible">
                  <Container
                    width="110px"
                    height="90px"
                    backgroundColor="#14406c"
                    fd="column"
                  >
                    <Button
                      backgroundColor="#14406c"
                      fontColor="white"
                      hoverBackgrounColor="white"
                      hoverFontColor="#14406c"
                      onClick={() => {
                        const list = document.querySelector(
                          ".meetinglogs-sort-options"
                        );
                        list.classList.toggle("invisible");
                        const tmp = JSON.parse(
                          JSON.stringify(meetinglogsSearchResult)
                        );
                        setMeetinglogsSearchResult(
                          tmp.sort((a, b) => {
                            if (a.meetinglogTitle < b.meetinglogTitle)
                              return -1;
                            else return 1;
                          })
                        );
                      }}
                    >
                      제목
                    </Button>

                    <Button
                      backgroundColor="#14406c"
                      fontColor="white"
                      hoverBackgrounColor="white"
                      hoverFontColor="#14406c"
                      onClick={() => {
                        const list = document.querySelector(
                          ".meetinglogs-sort-options"
                        );
                        list.classList.toggle("invisible");
                        const tmp = JSON.parse(
                          JSON.stringify(meetinglogsSearchResult)
                        );
                        setMeetinglogsSearchResult(
                          tmp.sort((a, b) => {
                            if (a.meetinglogDate < b.meetinglogDate) return 1;
                            else return -1;
                          })
                        );
                      }}
                    >
                      최근
                    </Button>
                    <Button
                      backgroundColor="#14406c"
                      fontColor="white"
                      hoverBackgrounColor="white"
                      hoverFontColor="#14406c"
                      onClick={() => {
                        const list = document.querySelector(
                          ".meetinglogs-sort-options"
                        );
                        list.classList.toggle("invisible");
                        const tmp = JSON.parse(
                          JSON.stringify(meetinglogsSearchResult)
                        );
                        setMeetinglogsSearchResult(
                          tmp.sort((a, b) => {
                            if (a.meetinglogDate > b.meetinglogDate) return 1;
                            else return -1;
                          })
                        );
                      }}
                    >
                      오래된
                    </Button>
                  </Container>
                </div>
                <Button
                  width="120px"
                  backgroundColor="#14406c"
                  border="2px solid #14406c"
                  borderRadius="10px"
                  fontColor="white"
                  hoverBackgrounColor="white"
                  hoverFontColor="#14406c"
                  marginRight="15px"
                  onClick={() => {
                    document
                      .querySelector(".meetinglogs-search-options")
                      .classList.toggle("invisible");
                  }}
                >
                  <Text fontSize="21px">검색 방식 ▼</Text>
                </Button>
                <div className="meetinglogs-search-options invisible">
                  <Container
                    width="110px"
                    height="90px"
                    backgroundColor="#14406c"
                    fd="column"
                  >
                    <Button
                      backgroundColor="#14406c"
                      fontColor="white"
                      hoverBackgrounColor="white"
                      hoverFontColor="#14406c"
                      onClick={() => {
                        document
                          .querySelector(".meetinglogs-search-options")
                          .classList.toggle("invisible");
                        setSearchOption(0);
                      }}
                    >
                      제목
                    </Button>
                    <Button
                      backgroundColor="#14406c"
                      fontColor="white"
                      hoverBackgrounColor="white"
                      hoverFontColor="#14406c"
                      onClick={() => {
                        document
                          .querySelector(".meetinglogs-search-options")
                          .classList.toggle("invisible");
                        setSearchOption(1);
                      }}
                    >
                      글쓴이
                    </Button>
                    <Button
                      backgroundColor="#14406c"
                      fontColor="white"
                      hoverBackgrounColor="white"
                      hoverFontColor="#14406c"
                      onClick={() => {
                        document
                          .querySelector(".meetinglogs-search-options")
                          .classList.toggle("invisible");
                        setSearchOption(2);
                      }}
                    >
                      날짜
                    </Button>
                  </Container>
                </div>
                <input
                  type="text"
                  placeholder="검색어를 입력하세요."
                  style={{
                    width: "435px",
                    height: "35px",
                    border: "2px solid #14406c",
                    borderRadius: "10px",
                    fontSize: "21px",
                    fontFamily: "SeoulBold",
                  }}
                  value={searchStr2}
                  onChange={(e) => {
                    setSearchStr2(e.target.value);
                  }}
                />
                <Button
                  width="120px"
                  backgroundColor="#14406c"
                  border="2px solid #14406c"
                  borderRadius="10px"
                  fontColor="white"
                  hoverBackgrounColor="white"
                  hoverFontColor="#14406c"
                  marginLeft="15px"
                  onClick={() => {
                    setMeetinglogsSearchResult(() => {
                      switch (searchOption) {
                        case 0: // title
                          return meetinglogs.filter((log) =>
                            log.meetinglogTitle.includes(searchStr2)
                          );
                        case 1: // writer
                          return meetinglogs.filter((log) =>
                            log.meetingloger.includes(searchStr2)
                          );
                        case 2: //date
                          return meetinglogs.filter((log) =>
                            log.meetinglogDate.includes(searchStr2)
                          );
                        default:
                          return meetinglogs;
                      }
                    });
                  }}
                >
                  <Text fontSize="21px">검색</Text>
                </Button>
              </Container>
              <Container
                className="meetinglogs-contents-container"
                fd="column"
                horizontalAlign="flex-start"
              >
                {meetinglogsSearchResult.map((meetinglog) => (
                  <Container
                    className="meetinglog-item"
                    height="150px"
                    horizontalAlign="flex-start"
                    marginTop="20px"
                    borderBottom="2px solid #14406c"
                    key={meetinglog.meetinglogId}
                  >
                    <Container
                      className="meetinglog-item-info"
                      fd="column"
                      verticalAlign="flex-start"
                      marginLeft="30px"
                    >
                      <Text fontSize="34px">{meetinglog.meetinglogTitle}</Text>
                      <Container
                        height="40px"
                        className="report-item-uploadinfo"
                        horizontalAlign="flex-start"
                      >
                        <Text fontColor="grey" fontSize="21px">
                          {meetinglog.meetinglogDate}
                        </Text>
                        <div
                          style={{
                            height: "10px",
                            borderLeft: "1px solid grey",
                            marginLeft: "10px",
                            marginRight: "10px",
                            display: "inline",
                          }}
                        ></div>
                        <Text fontColor="grey" fontSize="21px">
                          {meetinglog.meetingloger}
                        </Text>
                      </Container>
                    </Container>
                    <a
                      href={meetinglog.meetinglogSource}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button
                        width="180px"
                        height="50px"
                        backgroundColor="white"
                        border="2px solid #14406c"
                        borderRadius="10px"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        marginRight="15px"
                      >
                        <Text fontSize="21px">바로 보기</Text>
                      </Button>
                    </a>
                    <a href={meetinglog.meetinglogSource} download>
                      <Button
                        width="180px"
                        height="50px"
                        backgroundColor="white"
                        border="2px solid #14406c"
                        borderRadius="10px"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        marginRight="15px"
                      >
                        <Text fontSize="21px">pdf 다운로드</Text>
                      </Button>
                    </a>
                  </Container>
                ))}
              </Container>
            </Container>
          </Route>
        </Container>
      </Container>
    </>
  );
}

export default Main;
