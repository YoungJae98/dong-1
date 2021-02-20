import React, { useEffect, useState } from "react";
import download from "downloadjs";
import { NavLink, Route } from "react-router-dom";

import logo_inversed from "../assets/images/logo_reversed.png";
import Sejong from "../assets/images/Sejonglogo.png";
import pdf from "../assets/images/pdf_image.png";
import promises from "../assets/documents/promises.pdf";
import v3 from "../assets/images/visual/visual3.jpg";
import pledge_checkbox from "../assets/images/pledge.png";
import pledge_checked from "../assets/images/pledge_done.png";

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
  const [file, setFile] = useState({});
  const [files, setFiles] = useState({});
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

  const [reportPageArr, setReportPageArr] = useState([]);
  const [meetinglogPageArr, setMeetinglogPageArr] = useState([]);
  const [pageNum, setPageNum] = useState(0);

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
        setPledges(response);
      });
  };
  const getFile = () => {
    fetch("http://localhost:3001/api/files/getFiles", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => {
        setFile(response);
      });
  };
  const getFileData = () => {
    for (let i = 1; i < 4; i++) {
      for (let j = 0; j < file[i].length; j++) {
        getFileBlob(file[i][j]["f_originalname"]);
      }
    }
  };
  const getFileBlob = (name) => {
    fetch("http://localhost:3001/api/files/getFileData", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        f_originalname: name,
      }),
    })
      .then((response) => response.blob())
      .then((response) => {
        let data = files;
        data[name] = response;
        setFiles(data);
      });
  };
  const downloadFile = (name) => {
    download(files[name], name);
  };
  useEffect(() => {
    getPledge();
    getFile();
  }, []);
  useEffect(() => {
    if (Object.keys(pledges).length !== 0) {
      setAssignment1(pledges["1"]);
      setAssignment2(pledges["2"]);
      setAssignment3(pledges["3"]);
      setAssignment4(pledges["4"]);
    }
  }, [pledges]);
  useEffect(() => {
    if (Object.keys(file).length !== 0) {
      getFileData();
      setMeetinglogs(file["1"]);
      setMeetinglogsSearchResult(
        file["1"].sort((a, b) => {
          if (a.f_date < b.f_date) return 1;
          else if (a.f_date === b.f_date) return 0;
          else return -1;
        })
      );
      setReports(file["2"]);
      setReportSearchResult(
        file["2"].sort((a, b) => {
          if (a.f_date < b.f_date) return 1;
          else if (a.f_date === b.f_date) return 0;
          else return -1;
        })
      );
    }
  }, [file]);
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < reportSearchResult.length / 10; i++) {
      arr.push(i);
    }
    setReportPageArr(arr);
  }, [reportSearchResult]);
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < meetinglogsSearchResult.length / 10; i++) {
      arr.push(i);
    }
    setMeetinglogPageArr(arr);
  }, [meetinglogsSearchResult]);
  return (
    <>
      <Container height="145px">
        <img src={v3} alt="" />
      </Container>
      <Container height="1400px" backgroundColor="">
        <Container width="200px" verticalAlign="baseline">
          <Container
            width="200px"
            height="282px"
            fd="column"
            verticalAlign="baseline"
            position="sticky"
            marginTop="90px"
          >
            <Container
              height="50px"
              horizontalAlign="left"
              verticalAlign="flex-end"
            >
              <img src={logo_inversed} alt="" width="40px" />
              <Text fontColor="#14406c" fontSize="21px" marginLeft="5px">
                정보
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
              marginTop="80px"
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
              borderRadius="8px"
              fd="column"
              horizontalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              paddingTop="30px"
              marginTop="30px"
              width="1000px"
            >
              <Container
                height="50px"
                className="promise-button-container"
                borderBottom="2px solid #14406c"
                horizontalAlign="flex-end"
                paddingBottom="30px"
              >
                <Text fontColor="#14406c" fontSize="22px">
                  공약집
                </Text>
                <div
                  style={{
                    width: "0px",
                    height: "20px",
                    borderLeft: "2px solid #14406c",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                />
                <a href={promises} target="_blank" rel="noreferrer">
                  <Text fontSize="21px" fontColor="#14406c" underline>
                    바로 보기
                  </Text>
                </a>
                <button
                  onClick={() => {
                    //여기 인자로 f_originalname 넘겨주면 됨.
                    downloadFile("결산안1.pdf");
                  }}
                  style={{ marginLeft: "10px" }}
                >
                  <Container>
                    <img
                      src={pdf}
                      alt=""
                      height="30px"
                      style={{ display: "inline" }}
                    />
                    <Text
                      fontSize="21px"
                      fontColor="#14406c"
                      underline
                      marginLeft="5px"
                    >
                      다운로드
                    </Text>
                  </Container>
                </button>
              </Container>
              <Container
                height="160px"
                className="totalPromise"
                borderBottom="2px solid #14406c"
                fd="column"
                horizontalAlign="flex-start"
              >
                <Text fontSize="28px" fontColor="#14406c" marginTop="30px">
                  전체 공약 이행도
                </Text>
                <Container
                  className="progressBar-container"
                  height="40px"
                  position="relative"
                  marginTop="30px"
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
                        {parseInt(
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
                        )}
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
                    <Container fd="column">
                      <Text fontSize="21px" fontColor="#14406c">
                        전체 공약 이행도
                      </Text>
                      <Container height="22px" marginTop="20px">
                        <Container width="55px">
                          <Text fontColor="#14406c" fontSize="21px">
                            과제1&nbsp;
                          </Text>
                        </Container>
                        <Container width="55px">
                          <Text fontColor="#14406c" fontSize="21px">
                            {`${parseInt(
                              (assignment1.filter((act) => act.p_status === 1)
                                .length /
                                assignment1.length) *
                                100
                            )}%`}
                          </Text>
                        </Container>
                      </Container>
                      <Container height="22px" marginTop="3px">
                        <Container width="55px">
                          <Text fontColor="#14406c" fontSize="21px">
                            과제2&nbsp;
                          </Text>
                        </Container>
                        <Container width="55px">
                          <Text fontColor="#14406c" fontSize="21px">
                            {`${parseInt(
                              (assignment2.filter((act) => act.p_status === 1)
                                .length /
                                assignment2.length) *
                                100
                            )}%`}
                          </Text>
                        </Container>
                      </Container>
                      <Container height="22px" marginTop="3px">
                        <Container width="55px">
                          <Text fontColor="#14406c" fontSize="21px">
                            과제3&nbsp;
                          </Text>
                        </Container>
                        <Container width="55px">
                          <Text fontColor="#14406c" fontSize="21px">
                            {`${parseInt(
                              (assignment3.filter((act) => act.p_status === 1)
                                .length /
                                assignment3.length) *
                                100
                            )}%`}
                          </Text>
                        </Container>
                      </Container>
                      <Container height="22px" marginTop="3px">
                        <Container width="55px">
                          <Text fontColor="#14406c" fontSize="21px">
                            과제4&nbsp;
                          </Text>
                        </Container>
                        <Container width="55px">
                          <Text fontColor="#14406c" fontSize="21px">
                            {`${parseInt(
                              (assignment4.filter((act) => act.p_status === 1)
                                .length /
                                assignment4.length) *
                                100
                            )}%`}
                          </Text>
                        </Container>
                      </Container>
                      <Text
                        fontColor="#14406c"
                        fontSize="21px"
                        marginTop="20px"
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
                        fontFamily="SeoulLight"
                        marginTop="15px"
                      >
                        과제1 동아리와 총동연을 밀접하게
                      </Text>
                      {assignment1.map((act, index) => (
                        <Container key={act.p_id}>
                          <Container horizontalAlign="flex-start">
                            <Text
                              marginLeft="10px"
                              fontSize="18px"
                              fontFamily="SeoulLight"
                            >
                              행동{index + 1}&nbsp;
                            </Text>
                            <Text fontSize="18px" fontFamily="SeoulLight">
                              {act.p_name}
                            </Text>
                          </Container>
                          <Container width="50px">
                            {act.p_status ? (
                              <img
                                src={pledge_checked}
                                alt=""
                                height="35px"
                                style={{
                                  marginLeft: "5px",
                                  marginTop: "-5px",
                                }}
                              />
                            ) : (
                              <img src={pledge_checkbox} alt="" height="30px" />
                            )}
                          </Container>
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
                      <Text fontColor="#14406c" fontSize="21px">{`${parseInt(
                        (assignment2.filter((act) => act.p_status === 1)
                          .length /
                          assignment2.length) *
                          100
                      )}%`}</Text>
                    </Container>
                  </Container>
                  <div
                    className="subProgress-big"
                    style={{ width: "460px", height: "200px" }}
                  >
                    <Container fd="column" horizontalAlign="flex-start">
                      <Text
                        fontSize="21px"
                        fontColor="#14406c"
                        fontFamily="SeoulLight"
                        marginTop="15px"
                      >
                        과제2 분과 살리기
                      </Text>
                      {assignment2.map((act, index) => (
                        <Container key={act.p_id}>
                          <Container horizontalAlign="flex-start">
                            <Text
                              marginLeft="10px"
                              fontSize="18px"
                              fontFamily="SeoulLight"
                            >
                              행동{index + 1}&nbsp;
                            </Text>
                            <Text fontSize="18px" fontFamily="SeoulLight">
                              {act.p_name}
                            </Text>
                          </Container>
                          <Container width="50px">
                            {act.p_status ? (
                              <img
                                src={pledge_checked}
                                alt=""
                                height="35px"
                                style={{ marginLeft: "5px", marginTop: "-5px" }}
                              />
                            ) : (
                              <img src={pledge_checkbox} alt="" height="30px" />
                            )}
                          </Container>
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
                      <Text fontColor="#14406c" fontSize="21px">{`${parseInt(
                        (assignment3.filter((act) => act.p_status === 1)
                          .length /
                          assignment3.length) *
                          100
                      )}%`}</Text>
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
                        fontFamily="SeoulLight"
                      >
                        과제3 동아리 알리기
                      </Text>
                      {assignment3.map((act, index) => (
                        <Container key={act.p_id}>
                          <Container horizontalAlign="flex-start">
                            <Text
                              marginLeft="10px"
                              fontSize="18px"
                              fontFamily="SeoulLight"
                            >
                              행동{index + 1}&nbsp;
                            </Text>
                            <Text fontSize="18px" fontFamily="SeoulLight">
                              {act.p_name}
                            </Text>
                          </Container>
                          <Container width="50px">
                            {act.p_status ? (
                              <img
                                src={pledge_checked}
                                alt=""
                                height="35px"
                                style={{
                                  marginLeft: "5px",
                                  marginTop: "-5px",
                                }}
                              />
                            ) : (
                              <img src={pledge_checkbox} alt="" height="30px" />
                            )}
                          </Container>
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
                      <Text fontColor="#14406c" fontSize="21px">{`${parseInt(
                        (assignment4.filter((act) => act.p_status === 1)
                          .length /
                          assignment4.length) *
                          100
                      )}%`}</Text>
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
                        fontFamily="SeoulLight"
                      >
                        과제4 동아리 활동성 증진
                      </Text>
                      {assignment4.map((act, index) => (
                        <Container key={act.p_id}>
                          <Container horizontalAlign="flex-start">
                            <Text
                              marginLeft="10px"
                              fontSize="18px"
                              fontFamily="SeoulLight"
                            >
                              행동{index + 1}&nbsp;
                            </Text>
                            <Text fontSize="18px" fontFamily="SeoulLight">
                              {act.p_name}
                            </Text>
                          </Container>
                          <Container width="50px">
                            {act.p_status ? (
                              <img
                                src={pledge_checked}
                                alt=""
                                height="35px"
                                style={{
                                  marginLeft: "5px",
                                  marginTop: "-5px",
                                }}
                              />
                            ) : (
                              <img src={pledge_checkbox} alt="" height="30px" />
                            )}
                          </Container>
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
          <Route exact path="/information/alliance"></Route>
          <Route exact path="/information/seoul">
            <Container
              height="40px"
              marginTop="80px"
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
              borderRadius="8px"
              fd="column"
              horizontalAlign="flex-start"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              paddingTop="30px"
              marginTop="30px"
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
              marginTop="80px"
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
              borderRadius="8px"
              fd="column"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              paddingTop="30px"
              marginTop="30px"
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
                  <Text fontSize="21px" fontFamily="SeoulLight">
                    정렬 방식 ▼
                  </Text>
                </Button>
                <div className="report-sort-options invisible">
                  <Container
                    width="110px"
                    height="90px"
                    backgroundColor="#14406c"
                    fd="column"
                  >
                    <Button
                      backgroundColor="white"
                      fontColor="#14406c"
                      hoverBackgrounColor="#14406c"
                      hoverFontColor="white"
                      font="SeoulLight"
                      fontSize="18px"
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
                            if (a.f_name < b.f_name) return -1;
                            else return 1;
                          })
                        );
                      }}
                    >
                      제목
                    </Button>
                    <Button
                      backgroundColor="white"
                      fontColor="#14406c"
                      hoverBackgrounColor="#14406c"
                      hoverFontColor="white"
                      font="SeoulLight"
                      fontSize="18px"
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
                            if (a.f_date < b.f_date) return 1;
                            if (a.f_date === b.f_date) return 0;
                            else return -1;
                          })
                        );
                      }}
                    >
                      최근
                    </Button>
                    <Button
                      backgroundColor="white"
                      fontColor="#14406c"
                      hoverBackgrounColor="#14406c"
                      hoverFontColor="white"
                      font="SeoulLight"
                      fontSize="18px"
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
                            if (a.f_date > b.f_date) return 1;
                            if (a.f_date === b.f_date) return 0;
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
                  <Text fontSize="21px" fontFamily="SeoulLight">
                    검색 방식 ▼
                  </Text>
                </Button>
                <div className="report-search-options invisible">
                  <Container
                    width="110px"
                    height="60px"
                    backgroundColor="#14406c"
                    fd="column"
                  >
                    <Button
                      backgroundColor="white"
                      fontColor="#14406c"
                      hoverBackgrounColor="#14406c"
                      hoverFontColor="white"
                      font="SeoulLight"
                      fontSize="18px"
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
                      backgroundColor="white"
                      fontColor="#14406c"
                      hoverBackgrounColor="#14406c"
                      hoverFontColor="white"
                      font="SeoulLight"
                      fontSize="18px"
                      onClick={() => {
                        const list = document.querySelector(
                          ".report-search-options"
                        );
                        list.classList.toggle("invisible");
                        setSearchOption(1);
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
                    fontFamily: "SeoulLight",
                    paddingLeft: "10px",
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
                            report.f_name.includes(searchStr1)
                          );
                        case 1: // date
                          return reports.filter((report) =>
                            report.f_date.slice(0, 10).includes(searchStr1)
                          );
                        default:
                          return reports;
                      }
                    });
                  }}
                >
                  <Text fontSize="21px" fontFamily="SeoulLight">
                    검색
                  </Text>
                </Button>
              </Container>
              <Container
                className="reports-contents-container"
                fd="column"
                horizontalAlign="flex-start"
                marginTop="30px"
                height="1000px"
              >
                {reportSearchResult
                  .slice(pageNum * 10, (pageNum + 1) * 10)
                  .map((report) => (
                    <Container
                      className="report-item"
                      height="75px"
                      horizontalAlign="flex-start"
                      marginTop="20px"
                      borderBottom="1px solid grey"
                      key={report.f_id}
                    >
                      <Container
                        className="report-item-info"
                        fd="column"
                        verticalAlign="flex-start"
                        marginLeft="30px"
                      >
                        <Text fontSize="21px" fontFamily="SeoulLight">
                          {report.f_name}
                        </Text>
                        <Container
                          height="40px"
                          className="report-item-uploadinfo"
                          horizontalAlign="flex-start"
                        >
                          <Text
                            fontColor="grey"
                            fontSize="18px"
                            fontFamily="SeoulLight"
                          >
                            {report.f_date.slice(0, 10)}
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
                          <Text
                            fontColor="grey"
                            fontSize="18px"
                            fontFamily="SeoulLight"
                          >
                            관리자
                          </Text>
                        </Container>
                      </Container>
                      <a href={"../"} target="_blank" rel="noreferrer">
                        <Container width="75px">
                          <Text fontSize="21px" fontColor="#14406c" underline>
                            바로 보기
                          </Text>
                        </Container>
                      </a>
                      <a
                        href={`../assets/documents/${report.f_originalname}`}
                        download
                        style={{ marginLeft: "50px", marginRight: "50px" }}
                      >
                        <Container width="105px">
                          <img src={pdf} alt="" height="30px" />
                          <Text
                            fontSize="21px"
                            fontColor="#14406c"
                            underline
                            marginLeft="5px"
                          >
                            다운로드
                          </Text>
                        </Container>
                      </a>
                    </Container>
                  ))}
              </Container>
              <Container className="page-container" height="20px">
                <Button
                  width="60px"
                  height="20px"
                  backgroundColor="white"
                  fontColor="#14406c"
                  fontSize="20px"
                  font="SeoulLight"
                  onClick={() => {
                    if (pageNum === 0) {
                      setPageNum(0);
                    } else {
                      document.documentElement.scrollTop = 0;
                      setPageNum(pageNum - 1);
                    }
                  }}
                >
                  {`<이전`}
                </Button>
                {reportPageArr.map((item) => (
                  <Button
                    width="20px"
                    height="20px"
                    backgroundColor="white"
                    fontColor="#14406c"
                    fontSize={pageNum === item ? "20px" : "14px"}
                    font="SeoulLight"
                    key={item}
                    onClick={() => {
                      if (pageNum !== item) {
                        document.documentElement.scrollTop = 0;
                        setPageNum(item);
                      }
                    }}
                  >
                    {item + 1}
                  </Button>
                ))}
                <Button
                  width="60px"
                  height="20px"
                  backgroundColor="white"
                  fontColor="#14406c"
                  fontSize="20px"
                  font="SeoulLight"
                  onClick={() => {
                    if (pageNum === parseInt(reportSearchResult.length / 10)) {
                      setPageNum(pageNum);
                    } else {
                      document.documentElement.scrollTop = 0;
                      setPageNum(pageNum + 1);
                    }
                  }}
                >
                  {`다음>`}
                </Button>
              </Container>
            </Container>
          </Route>
          <Route exact path="/information/meetinglog">
            <Container
              height="40px"
              marginTop="80px"
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
              borderRadius="8px"
              fd="column"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              paddingTop="30px"
              marginTop="30px"
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
                  <Text fontSize="21px" fontFamily="SeoulLight">
                    정렬 방식 ▼
                  </Text>
                </Button>
                <div className="meetinglogs-sort-options invisible">
                  <Container
                    width="110px"
                    height="90px"
                    backgroundColor="#14406c"
                    fd="column"
                  >
                    <Button
                      backgroundColor="white"
                      fontColor="#14406c"
                      hoverBackgrounColor="#14406c"
                      hoverFontColor="white"
                      font="SeoulLight"
                      fontSize="18px"
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
                            if (a.f_name < b.f_name) return -1;
                            else return 1;
                          })
                        );
                      }}
                    >
                      제목
                    </Button>
                    <Button
                      backgroundColor="white"
                      fontColor="#14406c"
                      hoverBackgrounColor="#14406c"
                      hoverFontColor="white"
                      font="SeoulLight"
                      fontSize="18px"
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
                            if (a.f_date < b.f_date) return 1;
                            if (a.f_date === b.f_date) return 0;
                            else return -1;
                          })
                        );
                      }}
                    >
                      최근
                    </Button>
                    <Button
                      backgroundColor="white"
                      fontColor="#14406c"
                      hoverBackgrounColor="#14406c"
                      hoverFontColor="white"
                      font="SeoulLight"
                      fontSize="18px"
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
                            if (a.f_date > b.f_date) return 1;
                            if (a.f_date === b.f_date) return 0;
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
                  <Text fontSize="21px" fontFamily="SeoulLight">
                    검색 방식 ▼
                  </Text>
                </Button>
                <div className="meetinglogs-search-options invisible">
                  <Container
                    width="110px"
                    height="60px"
                    backgroundColor="#14406c"
                    fd="column"
                  >
                    <Button
                      backgroundColor="white"
                      fontColor="#14406c"
                      hoverBackgrounColor="#14406c"
                      hoverFontColor="white"
                      font="SeoulLight"
                      fontSize="18px"
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
                      backgroundColor="white"
                      fontColor="#14406c"
                      hoverBackgrounColor="#14406c"
                      hoverFontColor="white"
                      font="SeoulLight"
                      fontSize="18px"
                      onClick={() => {
                        document
                          .querySelector(".meetinglogs-search-options")
                          .classList.toggle("invisible");
                        setSearchOption(1);
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
                    fontFamily: "SeoulLight",
                    paddingLeft: "10px",
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
                            log.f_name.includes(searchStr2)
                          );
                        case 1: //date
                          return meetinglogs.filter((log) =>
                            log.f_date.slice(0, 10).includes(searchStr2)
                          );
                        default:
                          return meetinglogs;
                      }
                    });
                  }}
                >
                  <Text fontSize="21px" fontFamily="SeoulLight">
                    검색
                  </Text>
                </Button>
              </Container>
              <Container
                className="meetinglogs-contents-container"
                fd="column"
                horizontalAlign="flex-start"
                marginTop="30px"
                height="1000px"
              >
                {meetinglogsSearchResult
                  .slice(pageNum * 10, (pageNum + 1) * 10)
                  .map((meetinglog) => (
                    <Container
                      className="meetinglog-item"
                      height="75px"
                      horizontalAlign="flex-start"
                      marginTop="20px"
                      borderBottom="1px solid grey"
                      key={meetinglog.f_id}
                    >
                      <Container
                        className="meetinglog-item-info"
                        fd="column"
                        verticalAlign="flex-start"
                        marginLeft="30px"
                      >
                        <Text fontSize="21px" fontFamily="SeoulLight">
                          {meetinglog.f_name}
                        </Text>
                        <Container
                          height="40px"
                          className="report-item-uploadinfo"
                          horizontalAlign="flex-start"
                        >
                          <Text
                            fontColor="grey"
                            fontSize="18px"
                            fontFamily="SeoulLight"
                          >
                            {meetinglog.f_date.slice(0, 10)}
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
                          <Text
                            fontColor="grey"
                            fontSize="18px"
                            fontFamily="SeoulLight"
                          >
                            관리자
                          </Text>
                        </Container>
                      </Container>
                      <a
                        href={meetinglog.meetinglogSource}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Container width="75px">
                          <Text fontSize="21px" fontColor="#14406c" underline>
                            바로 보기
                          </Text>
                        </Container>
                      </a>
                      <a
                        href={meetinglog.meetinglogSource}
                        download
                        style={{ marginLeft: "50px", marginRight: "50px" }}
                      >
                        <Container width="105px">
                          <img src={pdf} alt="" height="30px" />
                          <Text
                            fontSize="21px"
                            fontColor="#14406c"
                            underline
                            marginLeft="5px"
                          >
                            다운로드
                          </Text>
                        </Container>
                      </a>
                    </Container>
                  ))}
              </Container>
              <Container className="page-container" height="20px">
                <Button
                  width="60px"
                  height="20px"
                  backgroundColor="white"
                  fontColor="#14406c"
                  fontSize="20px"
                  font="SeoulLight"
                  onClick={() => {
                    if (pageNum === 0) {
                      setPageNum(0);
                    } else {
                      document.documentElement.scrollTop = 0;
                      setPageNum(pageNum - 1);
                    }
                  }}
                >
                  {`<이전`}
                </Button>
                {meetinglogPageArr.map((item) => (
                  <Button
                    width="20px"
                    height="20px"
                    backgroundColor="white"
                    fontColor="#14406c"
                    fontSize={pageNum === item ? "20px" : "14px"}
                    font="SeoulLight"
                    key={item}
                    onClick={() => {
                      if (pageNum !== item) {
                        document.documentElement.scrollTop = 0;
                        setPageNum(item);
                      }
                    }}
                  >
                    {item + 1}
                  </Button>
                ))}
                <Button
                  width="60px"
                  height="20px"
                  backgroundColor="white"
                  fontColor="#14406c"
                  fontSize="20px"
                  font="SeoulLight"
                  onClick={() => {
                    if (
                      pageNum === parseInt(meetinglogsSearchResult.length / 10)
                    ) {
                      setPageNum(pageNum);
                    } else {
                      document.documentElement.scrollTop = 0;
                      setPageNum(pageNum + 1);
                    }
                  }}
                >
                  {`다음>`}
                </Button>
              </Container>
            </Container>
          </Route>
        </Container>
      </Container>
    </>
  );
}

export default Main;
