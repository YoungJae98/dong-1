import React, { useEffect, useState } from "react";
import { NavLink, Route } from "react-router-dom";

import regulations from "../assets/documents/regulations.pdf";
import form1_hwp from "../assets/documents/sample2.hwp";
import form1_docx from "../assets/documents/sample2.docx";
import logo_inversed from "../assets/images/logo_reversed.png";
import v5 from "../assets/images/visual/visual5.jpg";

import Button from "../components/Button";
import Container from "../components/Container";
import List from "../components/List";
import Listitem from "../components/Listitem";
import Remote from "../components/Remote";
import Text from "../components/Text";

function Main() {
  const [forms, setForms] = useState([]);
  const [formsSearchResult, setFormsSearchResult] = useState([]);
  const [searchStr, setSearchStr] = useState([]);
  const [searchOption, setSearchOption] = useState(0);
  const getFile = () => {
    fetch("http://localhost:3001/api/files/getFiles", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: {
        id: 3,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  };
  useEffect(() => {
    setForms([
      {
        formId: 1,
        formTitle: "양식 1",
        formDate: "2021-01-28",
        formUploader: "김지우",
        formSourceHwp: form1_hwp,
        formSourceDocx: form1_docx,
      },
      {
        formId: 2,
        formTitle: "양식 2",
        formDate: "2021-02-42",
        formUploader: "김지우",
        formSourceHwp: form1_hwp,
        formSourceDocx: form1_docx,
      },
      {
        formId: 3,
        formTitle: "양식 3",
        formDate: "2021-18-95",
        formUploader: "김지우",
        formSourceHwp: form1_hwp,
        formSourceDocx: form1_docx,
      },
    ]);
    setFormsSearchResult([
      {
        formId: 1,
        formTitle: "양식 1",
        formDate: "2021-01-28",
        formUploader: "김지우",
        formSourceHwp: form1_hwp,
        formSourceDocx: form1_docx,
      },
      {
        formId: 2,
        formTitle: "양식 2",
        formDate: "2021-02-42",
        formUploader: "김지우",
        formSourceHwp: form1_hwp,
        formSourceDocx: form1_docx,
      },
      {
        formId: 3,
        formTitle: "양식 3",
        formDate: "2021-18-95",
        formUploader: "김지우",
        formSourceHwp: form1_hwp,
        formSourceDocx: form1_docx,
      },
    ]);
  }, []);
  return (
    <>
      <Container height="145px">
        <img src={v5} alt="" />
      </Container>
      <Container height="1200px" backgroundColor="">
        <Container width="200px" verticalAlign="baseline">
          <Container
            width="200px"
            height="156px"
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
          width="1062px"
          fd="column"
          marginLeft="30px"
          verticalAlign="flex-start"
        >
          <Route exact path="/document/">
            <Container
              height="40px"
              marginTop="20px"
              marginLeft="20px"
              width="1000px"
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
              width="1000px"
            >
              <Container
                className="regulations-buttons-container"
                height="50px"
                marginBottom="20px"
                horizontalAlign="flex-end"
              >
                <a href={regulations} target="_blank" rel="noreferrer">
                  <Button
                    width="150px"
                    height="50px"
                    backgroundColor="white"
                    border="2px solid #14406c"
                    borderRadius="5px"
                    fontColor="#14406c"
                    hoverBackgrounColor="#14406c"
                    hoverFontColor="white"
                    marginRight="15px"
                  >
                    <Text fontSize="21px">새 탭에서 열기</Text>
                  </Button>
                </a>
                <a href={regulations} download>
                  <Button
                    width="150px"
                    height="50px"
                    backgroundColor="white"
                    border="2px solid #14406c"
                    borderRadius="5px"
                    fontColor="#14406c"
                    hoverBackgrounColor="#14406c"
                    hoverFontColor="white"
                    marginRight="15px"
                  >
                    <Text fontSize="21px">pdf 다운로드</Text>
                  </Button>
                </a>
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
              marginTop="20px"
              marginLeft="20px"
              width="1000px"
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
              width="1000px"
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
                  onClick={() => {
                    const list = document.querySelector(".forms-sort-options");
                    list.classList.toggle("invisible");
                  }}
                >
                  <Text fontSize="21px">정렬 방식 ▼</Text>
                </Button>
                <div className="forms-sort-options invisible">
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
                          ".forms-sort-options"
                        );
                        list.classList.toggle("invisible");
                        const tmp = JSON.parse(
                          JSON.stringify(formsSearchResult)
                        );
                        setFormsSearchResult(
                          tmp.sort((a, b) => {
                            if (a.formTitle < b.formTitle) return -1;
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
                          ".forms-sort-options"
                        );
                        list.classList.toggle("invisible");
                        const tmp = JSON.parse(
                          JSON.stringify(formsSearchResult)
                        );
                        setFormsSearchResult(
                          tmp.sort((a, b) => {
                            if (a.formDate < b.formDate) return 1;
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
                          ".forms-sort-options"
                        );
                        list.classList.toggle("invisible");
                        const tmp = JSON.parse(
                          JSON.stringify(formsSearchResult)
                        );
                        setFormsSearchResult(
                          tmp.sort((a, b) => {
                            if (a.formDate > b.formDate) return 1;
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
                      .querySelector(".forms-search-options")
                      .classList.toggle("invisible");
                  }}
                >
                  <Text fontSize="21px">검색 방식 ▼</Text>
                </Button>
                <div className="forms-search-options invisible">
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
                          .querySelector(".forms-search-options")
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
                          .querySelector(".forms-search-options")
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
                          .querySelector(".forms-search-options")
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
                  value={searchStr}
                  style={{
                    width: "435px",
                    height: "35px",
                    border: "2px solid #14406c",
                    borderRadius: "10px",
                    fontSize: "21px",
                    fontFamily: "SeoulBold",
                  }}
                  onChange={(e) => {
                    setSearchStr(e.target.value);
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
                    setFormsSearchResult(() => {
                      switch (searchOption) {
                        case 0: // title
                          return forms.filter((form) =>
                            form.formTitle.includes(searchStr)
                          );
                        case 1: // writer
                          return forms.filter((form) =>
                            form.formUploader.includes(searchStr)
                          );
                        case 2: // date
                          return forms.filter((form) =>
                            form.formDate.includes(searchStr)
                          );
                        default:
                          return forms;
                      }
                    });
                  }}
                >
                  <Text fontSize="21px">검색</Text>
                </Button>
              </Container>
              <Container
                className="forms-contents-container"
                fd="column"
                horizontalAlign="flex-start"
              >
                {formsSearchResult.map((form) => (
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
                      <Text fontSize="34px">{form.formTitle}</Text>
                      <Container
                        height="40px"
                        className="form-item-uploadinfo"
                        horizontalAlign="flex-start"
                      >
                        <Text fontColor="grey" fontSize="21px">
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
                        <Text fontColor="grey" fontSize="21px">
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
                        <Text fontSize="21px">hwp 다운로드</Text>
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
                        <Text fontSize="21px">docx 다운로드</Text>
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
