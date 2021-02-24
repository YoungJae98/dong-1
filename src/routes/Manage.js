import React, { useEffect, useState } from "react";
import { NavLink, Route } from "react-router-dom";

import logo_inversed from "../assets/images/logo_reversed.png";
import v2 from "../assets/images/visual/visual2.jpg";

import Listitem from "../components/Listitem";
import Button from "../components/Button";
import Container from "../components/Container";
import Text from "../components/Text";
import Remote from "../components/Remote";
import List from "../components/List";

function Manage() {
  const [pledges, setPledges] = useState({});
  const [assignment1, setAssignment1] = useState([]);
  const [assignment2, setAssignment2] = useState([]);
  const [assignment3, setAssignment3] = useState([]);
  const [assignment4, setAssignment4] = useState([]);
  const [file, setFile] = useState({});
  const [reports, setReports] = useState([]);
  const [meetinglogs, setMeetinglogs] = useState([]);
  const [forms, setForms] = useState([]);
  const [community, setCommunity] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const [petitions, setPetitions] = useState([]);
  const getPledge = () => {
    fetch("http://sejongclubunion.com:3001/api/pledges/getPledge", {
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
  const setPledge = (p_id) => {
    fetch("http://sejongclubunion.com:3001/api/pledges/setPledge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        p_id: p_id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response["success"]) {
          alert("공약을 수행상태로 변경 완료했습니다.");
          getPledge();
        } else {
          alert("오류 발생");
        }
      });
  };
  const unsetPledge = (p_id) => {
    fetch("http://sejongclubunion.com:3001/api/pledges/unsetPledge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        p_id: p_id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response["success"]) {
          alert("공약을 미수행상태로 변경 완료했습니다.");
          getPledge();
        } else {
          alert("오류 발생");
        }
      });
  };
  const getFile = () => {
    fetch("http://sejongclubunion.com:3001/api/files/getFiles", {
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
  const deleteFile = (id, originalname) => {
    fetch("http://sejongclubunion.com:3001/api/files/deleteFile", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        id: id,
        f_originalname: originalname,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        getFile();
      });
  };
  const handleDocumentUpload = (e, f_type) => {
    e.preventDefault();
    let isAlreadtExistFileName = false;
    if (
      e.target.f_name.value !== "" &&
      e.target.document.files[0] !== undefined
    ) {
      reports.forEach((item) => {
        if (item.f_originalname === e.target.document.files[0].name) {
          isAlreadtExistFileName = true;
        }
      });
      meetinglogs.forEach((item) => {
        if (item.f_originalname === e.target.document.files[0].name) {
          isAlreadtExistFileName = true;
        }
      });
      if (!isAlreadtExistFileName) {
        const data = new FormData();
        data.append("document", e.target.document.files[0]);
        data.append("f_name", e.target.f_name.value);
        data.append("f_type", f_type);
        console.log(e.target.document.files[0]);
        fetch("http://sejongclubunion.com:3001/api/files/uploadFile", {
          method: "POST",
          credentials: "include",
          body: data,
        })
          .then((response) => response.json())
          .then((response) => {
            if (response["success"]) {
              getFile();
              alert("업로드 성공");
              e.target.f_name.value = "";
              e.target.document.value = "";
            } else {
              alert("업로드 실패");
            }
          });
      } else {
        alert("중복된 이름의 파일이 이미 업로드되어 있습니다.");
      }
    } else {
      alert("파일 이름이 입력되지 않았거나 파일이 선택되지 않았습니다.");
    }
  };
  const getCommunity = () => {
    fetch("http://sejongclubunion.com:3001/api/community/getCommunity", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => {
        setCommunity(response);
      });
  };
  const deleteCommunity = (id) => {
    fetch("http://sejongclubunion.com:3001/api/community/deleteCommunity", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response["success"]) {
          getCommunity();
          alert("삭제 성공");
        } else {
          alert("삭제 실패");
        }
      });
  };
  useEffect(() => {
    getPledge();
    getFile();
    getCommunity();
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
    if (file["1"]) setMeetinglogs(file["1"]);
    if (file["2"]) setReports(file["2"]);
    if (file["3"]) setForms(file["3"]);
  }, [file]);
  useEffect(() => {
    if (community["1"]) setSuggestions(community["1"]);
    if (community["2"]) setPetitions(community["2"]);
  }, [community]);
  return (
    <>
      <Container height="145px">
        <img src={v2} alt="" />
      </Container>
      <Container height="1400px" backgroundColor="">
        <Container width="200px" verticalAlign="baseline">
          <Container
            width="200px"
            height="366px"
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
                관리
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
                  <NavLink to="/manage/">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="공약 이행도"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white">
                  <NavLink to="/manage/report">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="예결산 보고"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white">
                  <NavLink to="/manage/meetinglog">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="회의록"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white">
                  <NavLink to="/manage/suggestion">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="건의 사항"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white">
                  <NavLink to="/manage/petition">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="회칙 개정 요구 청원"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white">
                  <NavLink to="/manage/forms">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="제출 서류 양식"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white">
                  <NavLink to="/manage/carousel">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="메인 슬라이드 이미지"
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
          width="1062px"
          fd="column"
          marginLeft="30px"
          verticalAlign="flex-start"
        >
          <Route exact path="/manage/">
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
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              paddingTop="30px"
              marginTop="30px"
              width="1000px"
            >
              <Text fontSize="22px">과제1</Text>
              {assignment1.map((item, index) => (
                <Container
                  height="40px"
                  backgroundColor={index % 2 === 0 ? "#F6F6F6" : "white"}
                  key={item.p_id}
                  horizontalAlign="left"
                >
                  <Container width="600px" horizontalAlign="left">
                    <Text fontSize="22px">{item.p_id}</Text>
                    <Text fontSize="22px" marginLeft="30px">
                      {item.p_name}
                    </Text>
                  </Container>
                  <Container width="100px">
                    <Text>
                      현재 상태: {item.p_status === 0 ? "미수행" : "수행"}
                    </Text>
                  </Container>
                  <Container width="230px" marginLeft="30px">
                    <Button
                      width="100px"
                      height="35px"
                      border="2px solid #14406c"
                      backgroundColor="#14406c"
                      fontColor="white"
                      hoverBackgrounColor="white"
                      hoverFontColor="#14406c"
                      onClick={() => {
                        const result = window.confirm(
                          `공약 "${item.p_name}"의 상태를 수행으로 바꾸시겠습니까?`
                        );
                        if (result) {
                          setPledge(item.p_id);
                        }
                      }}
                    >
                      수행
                    </Button>
                    <Button
                      width="100px"
                      height="35px"
                      border="2px solid #14406c"
                      backgroundColor="#14406c"
                      fontColor="white"
                      hoverBackgrounColor="white"
                      hoverFontColor="#14406c"
                      marginLeft="30px"
                      onClick={() => {
                        const result = window.confirm(
                          `공약 "${item.p_name}"의 상태를 미수행으로 바꾸시겠습니까?`
                        );
                        if (result) {
                          unsetPledge(item.p_id);
                        }
                      }}
                    >
                      미수행
                    </Button>
                  </Container>
                </Container>
              ))}
              <Text fontSize="22px" marginTop="10px">
                과제2
              </Text>
              {assignment2.map((item, index) => (
                <Container
                  height="40px"
                  backgroundColor={index % 2 === 0 ? "#F6F6F6" : "white"}
                  key={item.p_id}
                  horizontalAlign="left"
                >
                  <Container width="600px" horizontalAlign="left">
                    <Text fontSize="22px">{item.p_id}</Text>
                    <Text fontSize="22px" marginLeft="30px">
                      {item.p_name}
                    </Text>
                  </Container>
                  <Container width="100px">
                    <Text>
                      현재 상태: {item.p_status === 0 ? "미수행" : "수행"}
                    </Text>
                  </Container>
                  <Container width="230px" marginLeft="30px">
                    <Button
                      width="100px"
                      height="35px"
                      border="2px solid #14406c"
                      backgroundColor="#14406c"
                      fontColor="white"
                      hoverBackgrounColor="white"
                      hoverFontColor="#14406c"
                      onClick={() => {
                        const result = window.confirm(
                          `공약 "${item.p_name}"의 상태를 수행으로 바꾸시겠습니까?`
                        );
                        if (result) {
                          setPledge(item.p_id);
                        }
                      }}
                    >
                      수행
                    </Button>
                    <Button
                      width="100px"
                      height="35px"
                      border="2px solid #14406c"
                      backgroundColor="#14406c"
                      fontColor="white"
                      hoverBackgrounColor="white"
                      hoverFontColor="#14406c"
                      marginLeft="30px"
                      onClick={() => {
                        const result = window.confirm(
                          `공약 "${item.p_name}"의 상태를 미수행으로 바꾸시겠습니까?`
                        );
                        if (result) {
                          unsetPledge(item.p_id);
                        }
                      }}
                    >
                      미수행
                    </Button>
                  </Container>
                </Container>
              ))}
              <Text fontSize="22px" marginTop="10px">
                과제3
              </Text>
              {assignment3.map((item, index) => (
                <Container
                  height="40px"
                  backgroundColor={index % 2 === 0 ? "#F6F6F6" : "white"}
                  key={item.p_id}
                  horizontalAlign="left"
                >
                  <Container width="600px" horizontalAlign="left">
                    <Text fontSize="22px">{item.p_id}&nbsp;</Text>
                    <Text fontSize="22px" marginLeft="30px">
                      {item.p_name}
                    </Text>
                  </Container>
                  <Container width="100px">
                    <Text>
                      현재 상태: {item.p_status === 0 ? "미수행" : "수행"}
                    </Text>
                  </Container>
                  <Container width="230px" marginLeft="30px">
                    <Button
                      width="100px"
                      height="35px"
                      border="2px solid #14406c"
                      backgroundColor="#14406c"
                      fontColor="white"
                      hoverBackgrounColor="white"
                      hoverFontColor="#14406c"
                      onClick={() => {
                        const result = window.confirm(
                          `공약 "${item.p_name}"의 상태를 수행으로 바꾸시겠습니까?`
                        );
                        if (result) {
                          setPledge(item.p_id);
                        }
                      }}
                    >
                      수행
                    </Button>
                    <Button
                      width="100px"
                      height="35px"
                      border="2px solid #14406c"
                      backgroundColor="#14406c"
                      fontColor="white"
                      hoverBackgrounColor="white"
                      hoverFontColor="#14406c"
                      marginLeft="30px"
                      onClick={() => {
                        const result = window.confirm(
                          `공약 "${item.p_name}"의 상태를 미수행으로 바꾸시겠습니까?`
                        );
                        if (result) {
                          unsetPledge(item.p_id);
                        }
                      }}
                    >
                      미수행
                    </Button>
                  </Container>
                </Container>
              ))}
              <Text fontSize="22px" marginTop="10px">
                과제4
              </Text>
              {assignment4.map((item, index) => (
                <Container
                  height="40px"
                  backgroundColor={index % 2 === 0 ? "#F6F6F6" : "white"}
                  key={item.p_id}
                  horizontalAlign="left"
                >
                  <Container width="600px" horizontalAlign="left">
                    <Text fontSize="22px">{item.p_id}</Text>
                    <Text fontSize="22px" marginLeft="30px">
                      {item.p_name}
                    </Text>
                  </Container>
                  <Container width="100px">
                    <Text>
                      현재 상태: {item.p_status === 0 ? "미수행" : "수행"}
                    </Text>
                  </Container>
                  <Container width="230px" marginLeft="30px">
                    <Button
                      width="100px"
                      height="35px"
                      border="2px solid #14406c"
                      backgroundColor="#14406c"
                      fontColor="white"
                      hoverBackgrounColor="white"
                      hoverFontColor="#14406c"
                      onClick={() => {
                        const result = window.confirm(
                          `공약 "${item.p_name}"의 상태를 수행으로 바꾸시겠습니까?`
                        );
                        if (result) {
                          setPledge(item.p_id);
                        }
                      }}
                    >
                      수행
                    </Button>
                    <Button
                      width="100px"
                      height="35px"
                      border="2px solid #14406c"
                      backgroundColor="#14406c"
                      fontColor="white"
                      hoverBackgrounColor="white"
                      hoverFontColor="#14406c"
                      marginLeft="30px"
                      onClick={() => {
                        const result = window.confirm(
                          `공약 "${item.p_name}"의 상태를 미수행으로 바꾸시겠습니까?`
                        );
                        if (result) {
                          unsetPledge(item.p_id);
                        }
                      }}
                    >
                      미수행
                    </Button>
                  </Container>
                </Container>
              ))}
            </Container>
          </Route>
          <Route exact path="/manage/report">
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
              paddingBottom="30px"
              marginTop="30px"
              width="1000px"
            >
              <Container height="50px" className="manage-input">
                <form
                  onSubmit={(e) => {
                    handleDocumentUpload(e, 2);
                  }}
                >
                  <input
                    type="text"
                    id="report_text"
                    name="f_name"
                    placeholder="예결산 보고 제목"
                    style={{
                      marginRight: "30px",
                      height: "30px",
                      width: "550px",
                      fontSize: "24px",
                      fontFamily: "SeoulMedium",
                    }}
                  />
                  <label htmlFor="report_file" className="manage-label1">
                    새 예결산 보고 선택
                  </label>
                  <input type="file" id="report_file" name="document" />
                  <input type="submit" value="업로드" />
                </form>
              </Container>
              <Container
                border="1px solid #14406c"
                marginTop="30px"
                scroll
                fd="column"
                horizontalAlign="flex-start"
              >
                {reports.map((item, index) => (
                  <Container
                    height="50px"
                    backgroundColor={index % 2 === 0 ? "#F6F6F6" : "white"}
                    key={index}
                  >
                    <Container width="600px" horizontalAlign="left">
                      {item.f_name}
                    </Container>
                    <Button
                      width="80px"
                      height="30px"
                      backgroundColor="#14406c"
                      fontColor="white"
                      onClick={() => {
                        if (
                          window.confirm(`${item.f_name} 삭제하시겠습니까?`)
                        ) {
                          deleteFile(item.f_id, item.f_originalname);
                          alert(`${item.f_name} 삭제되었습니다.`);
                        }
                      }}
                    >
                      삭제
                    </Button>
                  </Container>
                ))}
              </Container>
            </Container>
          </Route>
          <Route exact path="/manage/meetinglog">
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
              paddingBottom="30px"
              marginTop="30px"
              width="1000px"
            >
              <Container height="50px" className="manage-input">
                <form
                  onSubmit={(e) => {
                    handleDocumentUpload(e, 1);
                  }}
                >
                  <input
                    type="text"
                    id="report_text"
                    name="f_name"
                    placeholder="회의록 제목"
                    style={{
                      marginRight: "30px",
                      height: "30px",
                      width: "550px",
                      fontSize: "24px",
                      fontFamily: "SeoulMedium",
                    }}
                  />
                  <label htmlFor="report_file" className="manage-label1">
                    새 회의록 선택
                  </label>
                  <input type="file" id="report_file" name="document" />
                  <input type="submit" value="업로드" />
                </form>
              </Container>
              <Container
                border="1px solid #14406c"
                marginTop="30px"
                scroll
                fd="column"
                horizontalAlign="flex-start"
              >
                {meetinglogs.map((item, index) => (
                  <Container
                    height="50px"
                    backgroundColor={index % 2 === 0 ? "#F6F6F6" : "white"}
                    key={index}
                  >
                    <Container width="600px" horizontalAlign="left">
                      {item.f_name}
                    </Container>
                    <Button
                      width="80px"
                      height="30px"
                      backgroundColor="#14406c"
                      fontColor="white"
                      onClick={() => {
                        if (
                          window.confirm(`${item.f_name} 삭제하시겠습니까?`)
                        ) {
                          deleteFile(item.f_id, item.f_originalname);
                          alert(`${item.f_name} 삭제되었습니다.`);
                        }
                      }}
                    >
                      삭제
                    </Button>
                  </Container>
                ))}
              </Container>
            </Container>
          </Route>
          <Route exact path="/manage/suggestion">
            <Container
              height="40px"
              marginTop="80px"
              marginLeft="20px"
              width="1000px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                건의 사항
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
              <Container
                border="1px solid #14406c"
                marginTop="30px"
                scroll
                fd="column"
                horizontalAlign="flex-start"
              >
                {suggestions.map((item, index) => (
                  <Container
                    height="50px"
                    backgroundColor={index % 2 === 0 ? "#F6F6F6" : "white"}
                    key={index}
                  >
                    <Container width="750px" horizontalAlign="left">
                      <Text fontSize="20px" fontFamily="SeoulLight">
                        {item.c_title}
                      </Text>
                    </Container>
                    <Container width="100px" horizontalAlign="left">
                      <Text fontSize="20px" fontFamily="SeoulLight">
                        {item.c_user}
                      </Text>
                    </Container>
                    <Button
                      width="80px"
                      height="30px"
                      backgroundColor="#14406c"
                      fontColor="white"
                      onClick={() => {
                        if (
                          window.confirm(`${item.c_title} 삭제하시겠습니까?`)
                        ) {
                          deleteCommunity(item.c_id);
                        }
                      }}
                    >
                      삭제
                    </Button>
                  </Container>
                ))}
              </Container>
            </Container>
          </Route>
          <Route exact path="/manage/petition">
            <Container
              height="40px"
              marginTop="80px"
              marginLeft="20px"
              width="1000px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                회칙 개정 요구 청원
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
              <Container
                border="1px solid #14406c"
                marginTop="30px"
                scroll
                fd="column"
                horizontalAlign="flex-start"
              >
                {petitions.map((item, index) => (
                  <Container
                    height="50px"
                    backgroundColor={index % 2 === 0 ? "#F6F6F6" : "white"}
                    key={index}
                  >
                    <Container width="750px" horizontalAlign="left">
                      <Text fontSize="20px" fontFamily="SeoulLight">
                        {item.c_title}
                      </Text>
                    </Container>
                    <Container width="100px" horizontalAlign="left">
                      <Text fontSize="20px" fontFamily="SeoulLight">
                        {item.c_user}
                      </Text>
                    </Container>
                    <Button
                      width="80px"
                      height="30px"
                      backgroundColor="#14406c"
                      fontColor="white"
                      onClick={() => {
                        if (
                          window.confirm(`${item.c_title} 삭제하시겠습니까?`)
                        ) {
                          deleteCommunity(item.c_id);
                        }
                      }}
                    >
                      삭제
                    </Button>
                  </Container>
                ))}
              </Container>
            </Container>
          </Route>
          <Route exact path="/manage/forms">
            <Container
              height="40px"
              marginTop="80px"
              marginLeft="20px"
              width="1000px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                제출 서류 양식
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
              <Container height="50px" className="manage-input">
                <form
                  onSubmit={(e) => {
                    handleDocumentUpload(e, 3);
                  }}
                >
                  <input
                    type="text"
                    id="report_text"
                    name="f_name"
                    placeholder="양식 제목"
                    style={{
                      marginRight: "30px",
                      height: "30px",
                      width: "550px",
                      fontSize: "24px",
                      fontFamily: "SeoulMedium",
                    }}
                  />
                  <label htmlFor="report_file" className="manage-label1">
                    새 양식 선택
                  </label>
                  <input type="file" id="report_file" name="document" />
                  <input type="submit" value="업로드" />
                </form>
              </Container>
              <Container
                border="1px solid #14406c"
                marginTop="30px"
                scroll
                fd="column"
                horizontalAlign="flex-start"
              >
                {forms.map((item, index) => (
                  <Container
                    height="50px"
                    backgroundColor={index % 2 === 0 ? "#F6F6F6" : "white"}
                    key={index}
                  >
                    <Container width="600px" horizontalAlign="left">
                      {item.f_originalname}
                    </Container>
                    <Button
                      width="80px"
                      height="30px"
                      backgroundColor="#14406c"
                      fontColor="white"
                      onClick={() => {
                        if (
                          window.confirm(`${item.f_name} 삭제하시겠습니까?`)
                        ) {
                          deleteFile(item.f_id, item.f_originalname);
                          alert(`${item.f_name} 삭제되었습니다.`);
                        }
                      }}
                    >
                      삭제
                    </Button>
                  </Container>
                ))}
              </Container>
            </Container>
          </Route>
          <Route exact path="/manage/carousel">
            <Container
              height="40px"
              marginTop="80px"
              marginLeft="20px"
              width="1000px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                메인 슬라이드 이미지
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
            ></Container>
          </Route>
        </Container>
      </Container>
    </>
  );
}

export default Manage;
