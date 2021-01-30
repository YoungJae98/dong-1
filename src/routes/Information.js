import React, { useEffect, useState } from "react";
import { NavLink, Route } from "react-router-dom";

import logo_inversed from "../assets/logo_reversed.png";
import Sejong from "../assets/images/Sejonglogo.png";
import pdf from "../assets/documents/pdf.pdf";
import promises from "../assets/documents/promises.pdf";

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
  useEffect(() => {
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
  }, []);
  return (
    <>
      <Container height="1200px" backgroundColor="">
        <Container width="200px" verticalAlign="baseline">
          <Container
            width="200px"
            height="282px"
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
                <Button backgroundColor="white">
                  <NavLink to="/information/alliance">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="제휴사업"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
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
          width="900px"
          fd="column"
          marginLeft="30px"
          verticalAlign="flex-start"
        >
          <Route exact path="/information/">
            <Container
              height="40px"
              marginTop="50px"
              marginLeft="20px"
              width="840px"
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
              width="840px"
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
                      width="100px"
                    />
                  </Container>
                </Container>
              </Container>
              <Text marginTop="30px" fontColor="#14406c" fontSize="28px">
                과제별 공약 이행도
              </Text>
              <Container
                height="100px"
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
                      width="100px"
                    />
                  </Container>
                  <div className="subProgress">
                    <Container fd="column" horizontalAlign="flex-start">
                      <Text
                        fontSize="21px"
                        fontColor="#14406c"
                        marginTop="15px"
                      >
                        과제1 동아리와 총동연을 밀접하게
                      </Text>
                      <Container horizontalAlign="flex-start">
                        <Text fontSize="21px" marginLeft="10px">
                          행동1 밀접밀접
                        </Text>
                      </Container>
                      <Container horizontalAlign="flex-start">
                        <Text fontSize="21px" marginLeft="10px">
                          행동2 밀접밀접
                        </Text>
                      </Container>
                      <Container horizontalAlign="flex-start">
                        <Text fontSize="21px" marginLeft="10px">
                          행동3 밀접밀접
                        </Text>
                      </Container>
                      <Container horizontalAlign="flex-start">
                        <Text fontSize="21px" marginLeft="10px" donePromise>
                          행동4 밀접밀접
                        </Text>
                        <Text marginLeft="10px" donePromiseV>
                          V
                        </Text>
                      </Container>
                    </Container>
                    <div className="subProgress-downarrow" />
                    <div className="subProgress-downarrow-cover" />
                  </div>
                </Container>
              </Container>
              <Container
                height="100px"
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
                      width="100px"
                    />
                  </Container>
                </Container>
              </Container>
            </Container>
          </Route>
          <Route exact path="/information/alliance">
            <Container
              height="40px"
              marginTop="50px"
              marginLeft="20px"
              width="840px"
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
              width="840px"
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
            </Container>
          </Route>
          <Route exact path="/information/seoul">
            <Container
              height="40px"
              marginTop="50px"
              marginLeft="20px"
              width="840px"
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
              width="840px"
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
                marginTop="50px"
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
              marginTop="50px"
              marginLeft="20px"
              width="840px"
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
              width="840px"
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
                >
                  <Text fontSize="21px">정렬 방식 ▼</Text>
                </Button>
                <Button
                  width="120px"
                  backgroundColor="#14406c"
                  border="2px solid #14406c"
                  borderRadius="10px"
                  fontColor="white"
                  hoverBackgrounColor="white"
                  hoverFontColor="#14406c"
                  marginRight="15px"
                >
                  <Text fontSize="21px">제목 ▼</Text>
                </Button>
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
                >
                  <Text fontSize="21px">검색</Text>
                </Button>
              </Container>
              <Container
                className="reports-contents-container"
                fd="column"
                horizontalAlign="flex-start"
              >
                {reports.map((report) => (
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
              marginTop="50px"
              marginLeft="20px"
              width="840px"
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
              width="840px"
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
                >
                  <Text fontSize="21px">정렬 방식 ▼</Text>
                </Button>
                <Button
                  width="120px"
                  backgroundColor="#14406c"
                  border="2px solid #14406c"
                  borderRadius="10px"
                  fontColor="white"
                  hoverBackgrounColor="white"
                  hoverFontColor="#14406c"
                  marginRight="15px"
                >
                  <Text fontSize="21px">제목 ▼</Text>
                </Button>
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
                >
                  <Text fontSize="21px">검색</Text>
                </Button>
              </Container>
              <Container
                className="meetinglogs-contents-container"
                fd="column"
                horizontalAlign="flex-start"
              >
                {meetinglogs.map((meetinglog) => (
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
