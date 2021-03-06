/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { NavLink, Route } from "react-router-dom";

import regulations from "../assets/documents/regulations.pdf";
import logo_inversed from "../assets/images/logo_reversed.png";
import v5 from "../assets/images/visual/visual5.png";
import pdf from "../assets/images/pdf_image.png";
import hwp from "../assets/images/hangeul.png";
import excel from "../assets/images/excel_image.png";
import word from "../assets/images/word.png";

import Button from "../components/Button";
import Container from "../components/Container";
import List from "../components/List";
import Listitem from "../components/Listitem";
import Remote from "../components/Remote";
import Text from "../components/Text";
import download from "downloadjs";
import { useMediaQuery } from "react-responsive";

function Main() {
  const [file, setFile] = useState([]);
  const [files, setFiles] = useState({});
  const [forms, setForms] = useState([]);
  const [formsSearchResult, setFormsSearchResult] = useState([]);

  const [searchStr, setSearchStr] = useState([]);
  const [searchOption, setSearchOption] = useState(0);

  const [formPageArr, setFormPageArr] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const isMobile = useMediaQuery({ query: "(max-width: 1240px)" });
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
  const getFileData = () => {
    for (let i = 1; i < 4; i++) {
      for (let j = 0; j < file[i].length; j++) {
        getFileBlob(file[i][j]["f_originalname"]);
      }
    }
  };
  const getFileBlob = (name) => {
    fetch("http://sejongclubunion.com:3001/api/files/getFileData", {
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
    try {
      URL.createObjectURL(files[name]);
      download(files[name], name);
    } catch (error) {
      alert("로딩중입니다.");
    }
  };
  useEffect(() => {
    getFile();
  }, []);
  useEffect(() => {
    if (Object.keys(file).length !== 0) {
      getFileData();
      const tmp = file["3"];
      let result = [];
      for (let i = 0; i < tmp.length; i++) {
        if (i + 1 < tmp.length && tmp[i].f_name === tmp[i + 1].f_name) {
          result.push(tmp[i]);
        }
        if (
          tmp[i].f_originalname.includes("xlsx") ||
          tmp[i].f_originalname.includes("csv")
        ) {
          result.push(tmp[i]);
        }
      }
      setForms(result);
      setFormsSearchResult(
        result.sort((a, b) => {
          if (a.f_date > b.f_date) return 1;
          else if (a.f_date === b.f_date) return 0;
          else return -1;
        })
      );
    }
  }, [file]);
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < formsSearchResult.length / 10; i++) {
      arr.push(i);
    }
    setFormPageArr(arr);
  }, [formsSearchResult]);
  return (
    <>
      <Container verticalAlign="flex-start">
        <img src={v5} alt="" width="100%" />
      </Container>
      <Container height={isMobile ? "300vw" : "1400px"} backgroundColor="">
        {!isMobile && (
          <Container width="200px" verticalAlign="baseline">
            <Container
              width="200px"
              height="156px"
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
                  자료
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
        )}
        <Container
          width={isMobile ? "100%" : "1062px"}
          fd="column"
          marginLeft={isMobile ? "" : "30px"}
          verticalAlign="flex-start"
        >
          <Route exact path="/document/">
            <Container
              height="40px"
              marginTop={isMobile ? "20px" : "80px"}
              width={isMobile ? "100%" : "1000px"}
              paddingLeft={isMobile ? "" : "10px"}
              horizontalAlign="left"
            >
              <Text
                fontColor="#14406c"
                fontSize={isMobile ? "18px" : "32px"}
                marginLeft="10px"
              >
                회칙
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              borderRadius="8px"
              fd="column"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft={isMobile ? "" : "30px"}
              paddingRight={isMobile ? "" : "30px"}
              paddingTop={isMobile ? "" : "30px"}
              paddingBottom={isMobile ? "" : "30px"}
              marginTop={isMobile ? "" : "30px"}
              width={isMobile ? "100%" : "1000px"}
            >
              <Container
                className="regulations-buttons-container"
                height="50px"
                marginBottom="20px"
                horizontalAlign="flex-end"
              >
                <a href={regulations} target="_blank" rel="noreferrer">
                  <Text
                    fontSize={isMobile ? "12px" : "21px"}
                    fontColor="#14406c"
                    underline
                  >
                    새 탭에서 열기
                  </Text>
                </a>
                <a href={regulations} download style={{ marginLeft: "10px" }}>
                  <Container>
                    <img
                      src={pdf}
                      alt=""
                      height={isMobile ? "18px" : "30px"}
                      style={{ display: "inline" }}
                    />
                    <Text
                      fontSize={isMobile ? "12px" : "21px"}
                      fontColor="#14406c"
                      underline
                      marginLeft="5px"
                    >
                      다운로드
                    </Text>
                  </Container>
                </a>
              </Container>
              {isMobile ? (
                <Container verticalAlign="flex-start">
                  <Text>
                    모바일에선 새 탭에서 열기를 통해 회칙을 확인하실 수
                    있습니다.
                  </Text>
                </Container>
              ) : (
                <iframe
                  src={`${regulations}#toolbar=0`}
                  width="100%"
                  height="100%"
                  title="regulations"
                />
              )}
            </Container>
          </Route>
          <Route path="/document/form">
            <Container
              height="40px"
              marginTop={isMobile ? "20px" : "80px"}
              width={isMobile ? "100%" : "1000px"}
              paddingLeft={isMobile ? "" : "10px"}
              horizontalAlign="left"
            >
              <Text
                fontColor="#14406c"
                fontSize={isMobile ? "18px" : "32px"}
                marginLeft="10px"
              >
                제출서류 양식
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              borderRadius="8px"
              fd="column"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft={isMobile ? "" : "30px"}
              paddingRight={isMobile ? "" : "30px"}
              paddingTop={isMobile ? "" : "30px"}
              marginTop={isMobile ? "" : "30px"}
              width={isMobile ? "100%" : "1000px"}
              className="forms-container"
            >
              {isMobile ? (
                <></>
              ) : (
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
                      const list = document.querySelector(
                        ".forms-sort-options"
                      );
                      list.classList.toggle("invisible");
                    }}
                  >
                    <Text fontSize="21px" fontFamily="SeoulLight">
                      정렬 방식 ▼
                    </Text>
                  </Button>
                  <div className="forms-sort-options invisible">
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
                            ".forms-sort-options"
                          );
                          list.classList.toggle("invisible");
                          const tmp = JSON.parse(
                            JSON.stringify(formsSearchResult)
                          );
                          setFormsSearchResult(
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
                            ".forms-sort-options"
                          );
                          list.classList.toggle("invisible");
                          const tmp = JSON.parse(
                            JSON.stringify(formsSearchResult)
                          );
                          setFormsSearchResult(
                            tmp.sort((a, b) => {
                              if (a.f_date < b.f_name) return 1;
                              else if (a.f_date === b.f_name) return 0;
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
                            ".forms-sort-options"
                          );
                          list.classList.toggle("invisible");
                          const tmp = JSON.parse(
                            JSON.stringify(formsSearchResult)
                          );
                          setFormsSearchResult(
                            tmp.sort((a, b) => {
                              if (a.f_name > b.f_name) return 1;
                              else if (a.f_name === b.f_name) return 0;
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
                    <Text fontSize="21px" fontFamily="SeoulLight">
                      검색 방식 ▼
                    </Text>
                  </Button>
                  <div className="forms-search-options invisible">
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
                            .querySelector(".forms-search-options")
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
                            .querySelector(".forms-search-options")
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
                    value={searchStr}
                    style={{
                      width: "435px",
                      height: "35px",
                      border: "2px solid #14406c",
                      borderRadius: "10px",
                      fontSize: "21px",
                      fontFamily: "SeoulLight",
                      paddingLeft: "10px",
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
                              form.f_name.includes(searchStr)
                            );
                          case 1: // date
                            return forms.filter((form) =>
                              form.f_date.includes(searchStr)
                            );
                          default:
                            return forms;
                        }
                      });
                    }}
                  >
                    <Text fontSize="21px" fontFamily="SeoulLight">
                      검색
                    </Text>
                  </Button>
                </Container>
              )}
              <Container
                className="forms-contents-container"
                fd="column"
                horizontalAlign="flex-start"
                marginTop="30px"
                height="1000px"
              >
                {formsSearchResult
                  .slice(pageNum * 10, (pageNum + 1) * 10)
                  .map((form) => (
                    <Container
                      className="form-item"
                      height="75px"
                      horizontalAlign="flex-start"
                      marginTop="20px"
                      borderBottom="1px solid grey"
                      key={form.f_id}
                    >
                      <Container
                        className="form-item-info"
                        fd="column"
                        verticalAlign="flex-start"
                        marginLeft="30px"
                      >
                        <Text
                          fontSize={isMobile ? "2.2vmax" : "20px"}
                          fontFamily="SeoulLight"
                        >
                          {form.f_name}
                        </Text>
                        <Container
                          height="40px"
                          className="form-item-uploadinfo"
                          horizontalAlign="flex-start"
                        >
                          <Text
                            fontColor="grey"
                            fontSize={isMobile ? "1.3vmax" : "20px"}
                            fontFamily="SeoulLight"
                          >
                            {form.f_date.slice(0, 10)}
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
                            fontSize={isMobile ? "1.3vmax" : "20px"}
                            fontFamily="SeoulLight"
                          >
                            관리자
                          </Text>
                        </Container>
                      </Container>
                      {form.f_originalname.includes("xlsx") ||
                      form.f_originalname.includes("xlsx") ? (
                        <>
                          <Container width="300px" />
                          <Button
                            backgroundColor="white"
                            padding="0"
                            width="300px"
                            onClick={() => {
                              downloadFile(`${form.f_originalname}`);
                            }}
                          >
                            <Container width="105px">
                              <img
                                src={excel}
                                alt=""
                                height={isMobile ? "20px" : "30px"}
                              />
                              <Text
                                font="SeoulLight"
                                fontSize={isMobile ? "11px" : "20px"}
                                fontColor="#14406c"
                                underline
                                marginLeft="5px"
                              >
                                다운로드
                              </Text>
                            </Container>
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            backgroundColor="white"
                            padding="0"
                            width="300px"
                            onClick={() => {
                              downloadFile(`${form.f_name}.hwp`);
                            }}
                          >
                            <Container>
                              <img
                                src={hwp}
                                alt=""
                                height={isMobile ? "20px" : "30px"}
                              />
                              <Text
                                font="SeoulLight"
                                fontSize={isMobile ? "11px" : "20px"}
                                fontColor="#14406c"
                                underline
                                marginLeft="5px"
                              >
                                다운로드
                              </Text>
                            </Container>
                          </Button>
                          <Button
                            backgroundColor="white"
                            padding="0"
                            width="300px"
                            onClick={() => {
                              downloadFile(`${form.f_name}.docx`);
                            }}
                          >
                            <Container width="105px">
                              <img
                                src={word}
                                alt=""
                                height={isMobile ? "20px" : "30px"}
                              />
                              <Text
                                font="SeoulLight"
                                fontSize={isMobile ? "11px" : "20px"}
                                fontColor="#14406c"
                                underline
                                marginLeft="5px"
                              >
                                다운로드
                              </Text>
                            </Container>
                          </Button>
                        </>
                      )}
                    </Container>
                  ))}
              </Container>
              <Container className="page-container" height="20px">
                <Button
                  width="60px"
                  height="20px"
                  backgroundColor="white"
                  fontColor="#14406c"
                  fontSize={isMobile ? "12px" : "20px"}
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
                {formPageArr.map((item) => (
                  <Button
                    width="20px"
                    height="20px"
                    backgroundColor="white"
                    fontColor="#14406c"
                    fontSize={
                      isMobile
                        ? pageNum === item
                          ? "16px"
                          : "12px"
                        : pageNum === item
                        ? "20px"
                        : "14px"
                    }
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
                  fontSize={isMobile ? "12px" : "20px"}
                  font="SeoulLight"
                  onClick={() => {
                    if (pageNum === parseInt(formsSearchResult.length / 10)) {
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
