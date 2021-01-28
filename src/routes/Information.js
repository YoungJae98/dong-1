import React, { useEffect, useState } from "react";
import { NavLink, Route } from "react-router-dom";

import logo_inversed from "../assets/logo_reversed.png";
import pdf from "../assets/documents/pdf.pdf";

import Button from "../components/Button";
import Container from "../components/Container";
import List from "../components/List";
import Listitem from "../components/Listitem";
import Remote from "../components/Remote";
import Text from "../components/Text";

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
              <Text fontColor="#14406c" fontSize="18px" fontFamily="Arial">
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
                      fontSize="18px"
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
                      fontSize="18px"
                      label="제휴사업"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white" paddingBottom="20px">
                  <NavLink to="/information/seoul">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      fontSize="18px"
                      label="서동협"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white" paddingBottom="20px">
                  <NavLink to="/information/report">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      fontSize="18px"
                      label="예결산 보고"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white" paddingBottom="20px">
                  <NavLink to="/information/meetinglog">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      fontSize="18px"
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
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              paddingTop="30px"
              width="840px"
            ></Container>
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
            ></Container>
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
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              paddingTop="30px"
              width="840px"
            ></Container>
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
                  <Text fontSize="18px">정렬 방식 ▼</Text>
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
                  <Text fontSize="18px">제목 ▼</Text>
                </Button>
                <input
                  type="text"
                  placeholder="검색어를 입력하세요."
                  style={{
                    width: "435px",
                    height: "35px",
                    border: "2px solid #14406c",
                    borderRadius: "10px",
                    fontSize: "20px",
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
                  <Text fontSize="18px">검색</Text>
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
                      <Text fontSize="32px" fontFamily="Arial">
                        {report.reportTitle}
                      </Text>
                      <Container
                        height="40px"
                        className="report-item-uploadinfo"
                        horizontalAlign="flex-start"
                      >
                        <Text fontFamily="Arial" fontColor="grey">
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
                        <Text fontFamily="Arial" fontColor="grey">
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
                        <Text fontSize="18px">바로 보기</Text>
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
                        <Text fontSize="18px">pdf 다운로드</Text>
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
                  <Text fontSize="18px">정렬 방식 ▼</Text>
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
                  <Text fontSize="18px">제목 ▼</Text>
                </Button>
                <input
                  type="text"
                  placeholder="검색어를 입력하세요."
                  style={{
                    width: "435px",
                    height: "35px",
                    border: "2px solid #14406c",
                    borderRadius: "10px",
                    fontSize: "20px",
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
                  <Text fontSize="18px">검색</Text>
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
                      <Text fontSize="32px" fontFamily="Arial">
                        {meetinglog.meetinglogTitle}
                      </Text>
                      <Container
                        height="40px"
                        className="report-item-uploadinfo"
                        horizontalAlign="flex-start"
                      >
                        <Text fontFamily="Arial" fontColor="grey">
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
                        <Text fontFamily="Arial" fontColor="grey">
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
                        <Text fontSize="18px">바로 보기</Text>
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
                        <Text fontSize="18px">pdf 다운로드</Text>
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
