import React, { useEffect, useState } from "react";
import { NavLink, Route } from "react-router-dom";

import regulations from "../assets/documents/sample.pdf";
import form1_hwp from "../assets/documents/sample2.hwp";
import form1_docx from "../assets/documents/sample2.docx";
import logo_inversed from "../assets/logo_reversed.png";

import Button from "../components/Button";
import Container from "../components/Container";
import List from "../components/List";
import Listitem from "../components/Listitem";
import Remote from "../components/Remote";
import Text from "../components/Text";

function Main() {
  const [forms, setForms] = useState([]);
  useEffect(() => {
    setForms([
      {
        formId: 1,
        formName: "양식 1",
        formDate: "2021-01-28",
        formUploader: "김지우",
        formSourceHwp: form1_hwp,
        formSourceDocx: form1_docx,
      },
      {
        formId: 2,
        formName: "양식 2",
        formDate: "2021-02-42",
        formUploader: "김지우",
        formSourceHwp: form1_hwp,
        formSourceDocx: form1_docx,
      },
      {
        formId: 3,
        formName: "양식 3",
        formDate: "2021-18-95",
        formUploader: "김지우",
        formSourceHwp: form1_hwp,
        formSourceDocx: form1_docx,
      },
    ]);
  }, []);
  return (
    <>
      <Container height="1200px" backgroundColor="">
        <Container width="200px" verticalAlign="baseline">
          <Container
            width="200px"
            height="156px"
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
                자료
              </Text>
            </Container>
            <Remote width="200px" paddingTop="10px" paddingBottom="10px">
              <List fd="column">
                <Button backgroundColor="white">
                  <NavLink to="/document/">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      fontSize="18px"
                      label="회칙"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white">
                  <NavLink to="/document/form">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      fontSize="18px"
                      label="제출서류 양식"
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
          <Route exact path="/document/">
            <Container
              height="40px"
              marginTop="50px"
              marginLeft="20px"
              width="840px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                회칙
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
              paddingBottom="30px"
              width="840px"
            >
              <Container
                className="regulations-buttons-container"
                height="50px"
                marginBottom="20px"
                horizontalAlign="flex-end"
              >
                <Button
                  width="150px"
                  backgroundColor="white"
                  border="2px solid #14406c"
                  borderRadius="5px"
                  fontColor="#14406c"
                  hoverBackgrounColor="#14406c"
                  hoverFontColor="white"
                  marginRight="15px"
                >
                  <a href={regulations} target="_blank" rel="noreferrer">
                    <Text fontSize="18px">새 탭에서 열기</Text>
                  </a>
                </Button>
                <Button
                  width="150px"
                  backgroundColor="white"
                  border="2px solid #14406c"
                  borderRadius="5px"
                  fontColor="#14406c"
                  hoverBackgrounColor="#14406c"
                  hoverFontColor="white"
                  marginRight="15px"
                >
                  <a href={regulations} download>
                    <Text fontSize="18px">pdf 다운로드</Text>
                  </a>
                </Button>
              </Container>
              <iframe
                src={`${regulations}#toolbar=0`}
                width="100%"
                height="100%"
                title="regulations"
              />
            </Container>
          </Route>
          <Route path="/document/form">
            <Container
              height="40px"
              marginTop="50px"
              marginLeft="20px"
              width="840px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                제출서류 양식
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
              className="forms-container"
            >
              <Container className="forms-button-container" height="40px">
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
                className="forms-contents-container"
                fd="column"
                horizontalAlign="flex-start"
              >
                {forms.map((form) => (
                  <Container
                    className="form-item"
                    height="150px"
                    horizontalAlign="flex-start"
                    marginTop="20px"
                    borderBottom="2px solid #14406c"
                    key={form.formId}
                  >
                    <Container
                      className="form-item-info"
                      fd="column"
                      verticalAlign="flex-start"
                      marginLeft="30px"
                    >
                      <Text fontSize="32px" fontFamily="Arial">
                        {form.formName}
                      </Text>
                      <Container
                        height="40px"
                        className="form-item-uploadinfo"
                        horizontalAlign="flex-start"
                      >
                        <Text fontFamily="Arial" fontColor="grey">
                          {form.formDate}
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
                          {form.formUploader}
                        </Text>
                      </Container>
                    </Container>
                    <a href={form.formSourceHwp} download>
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
                        <Text fontSize="18px">hwp 다운로드</Text>
                      </Button>
                    </a>
                    <a href={form.formSourceDocx} download>
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
                        <Text fontSize="18px">docx 다운로드</Text>
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
