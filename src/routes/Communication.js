import React, { useEffect, useState } from "react";
import { Link, NavLink, Route, Switch, useHistory } from "react-router-dom";
import logo_inversed from "../assets/images/logo_reversed.png";
import v4 from "../assets/images/visual/visual4.png";

import Button from "../components/Button";
import Container from "../components/Container";
import List from "../components/List";
import Listitem from "../components/Listitem";
import Petition from "../components/Petition";
import Remote from "../components/Remote";
import Suggestion from "../components/Suggestion";
import Text from "../components/Text";

function Communication() {
  const [isLogin, setisLogin] = useState(false);

  const [community, setCommunity] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const [petitions, setPetitions] = useState([]);

  const [searchStr1, setSearchStr1] = useState("");
  const [searchStr2, setSearchStr2] = useState("");
  const [searchOption, setSearchOption] = useState(0);

  const [suggestionsSearchResult, setSuggestionsSearchResult] = useState([]);
  const [petitionsSearchResult, setPetitionsSearchResult] = useState([]);
  const [suggestionPageArr, setSuggestionPageArr] = useState([]);
  const [petitionPageArr, setPetitionPageArr] = useState([]);
  const [pageNum, setPageNum] = useState(0);

  const [suggestionTitle, setSuggestionTitle] = useState("");
  const [suggestionBody, setSuggestionBody] = useState("");

  const [petitionTitle, setPetitionTitle] = useState("");
  const [petitionBody, setPetitionBody] = useState("");

  const history = useHistory();
  const suggestionRedirect = () => {
    history.push("/communication/");
  };
  const petitionRedirect = () => {
    history.push("/communication/petition");
  };
  const getCommunity = () => {
    fetch("http://18.217.248.102:3001/api/community/getCommunity", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => {
        //response에서 1은 suggestion에서 2는 petition으로 구분
        setCommunity(response);
      });
  };
  const writeSuggestion = () => {
    fetch("http://18.217.248.102:3001/api/community/writeCommunity", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        title: suggestionTitle,
        body: suggestionBody,
        type: 1,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response["success"]) {
          alert("건의사항 등록이 완료되었습니다.");
          suggestionRedirect();
          getCommunity();
        } else {
          alert("동일한 제목의 건의사항 또는 청원이 존재합니다.");
        }
      });
  };
  const writePetition = () => {
    fetch("http://18.217.248.102:3001/api/community/writeCommunity", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        title: petitionTitle,
        body: petitionBody,
        type: 2,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response["success"]) {
          alert("청원 등록이 완료되었습니다.");
          petitionRedirect();
          getCommunity();
        } else {
          alert("동일한 제목의 건의사항 또는 청원이 존재합니다.");
        }
      });
  };
  const loginCheck = () => {
    fetch("http://18.217.248.102:3001/api/account/isLoginCheck", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => {
        if (response["isLogin"]) {
          setisLogin(true);
        } else {
          setisLogin(false);
        }
      });
  };
  useEffect(() => {
    getCommunity();
    loginCheck();
  }, []);
  useEffect(() => {
    if (Object.keys(community).length !== 0) {
      setSuggestions(community["1"]);
      setSuggestionsSearchResult(
        community["1"].sort((a, b) => {
          if (a.c_id < b.c_id) return 1;
          if (a.c_id === b.c_id) return 0;
          else return -1;
        })
      );
      setPetitions(community["2"]);
      setPetitionsSearchResult(
        community["2"].sort((a, b) => {
          if (a.c_id < b.c_id) return 1;
          if (a.c_id === b.c_id) return 0;
          else return -1;
        })
      );
    }
  }, [community]);
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < suggestionsSearchResult.length / 10; i++) {
      arr.push(i);
    }
    setSuggestionPageArr(arr);
  }, [suggestionsSearchResult]);
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < petitionsSearchResult.length / 10; i++) {
      arr.push(i);
    }
    setPetitionPageArr(arr);
  }, [petitionsSearchResult]);
  return (
    <>
      <Container height="145px" verticalAlign="flex-start">
        <img src={v4} alt="" width="100%" />
      </Container>
      <Container height="1400px" backgroundColor="">
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
                소통
              </Text>
            </Container>
            <Remote
              width="200px"
              paddingTop="10px"
              paddingBottom="10px"
              marginTop="10px"
            >
              <List fd="column">
                <Button
                  backgroundColor="white"
                  onClick={() => {
                    setPageNum(0);
                  }}
                >
                  <NavLink to="/communication/">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="건의사항"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button
                  backgroundColor="white"
                  onClick={() => {
                    setPageNum(0);
                  }}
                >
                  <NavLink to="/communication/petition">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="회칙 개정 요구 청원"
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
          <Switch>
            <Route exact path="/communication/">
              <Container
                height="40px"
                marginTop="80px"
                marginLeft="20px"
                width="1000px"
                horizontalAlign="left"
              >
                <Text fontColor="#14406c" fontSize="32px">
                  건의사항
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
                  className="suggestions-buttons-container"
                  height="40px"
                >
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
                        ".suggestions-sort-options"
                      );
                      list.classList.toggle("invisible");
                    }}
                  >
                    <Text fontSize="21px" fontFamily="SeoulLight">
                      정렬 방식 ▼
                    </Text>
                  </Button>
                  <div className="suggestions-sort-options invisible">
                    <Container
                      width="110px"
                      height="120px"
                      backgroundColor="#14406c"
                      fd="column"
                    >
                      <Button
                        backgroundColor="white"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        fontSize="18px"
                        font="SeoulLight"
                        onClick={() => {
                          const list = document.querySelector(
                            ".suggestions-sort-options"
                          );
                          list.classList.toggle("invisible");
                          const tmp = JSON.parse(
                            JSON.stringify(suggestionsSearchResult)
                          );
                          setSuggestionsSearchResult(
                            tmp.sort((a, b) => {
                              if (a.c_title < b.c_title) return -1;
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
                        fontSize="18px"
                        font="SeoulLight"
                        onClick={() => {
                          const list = document.querySelector(
                            ".suggestions-sort-options"
                          );
                          list.classList.toggle("invisible");
                          const tmp = JSON.parse(
                            JSON.stringify(suggestionsSearchResult)
                          );
                          setSuggestionsSearchResult(
                            tmp.sort((a, b) => {
                              if (a.c_con < b.c_con) return 1;
                              else return -1;
                            })
                          );
                        }}
                      >
                        동의 수
                      </Button>
                      <Button
                        backgroundColor="white"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        fontSize="18px"
                        font="SeoulLight"
                        onClick={() => {
                          const list = document.querySelector(
                            ".suggestions-sort-options"
                          );
                          list.classList.toggle("invisible");
                          const tmp = JSON.parse(
                            JSON.stringify(suggestionsSearchResult)
                          );
                          setSuggestionsSearchResult(
                            tmp.sort((a, b) => {
                              if (a.c_date < b.c_date) return 1;
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
                        fontSize="18px"
                        font="SeoulLight"
                        onClick={() => {
                          const list = document.querySelector(
                            ".suggestions-sort-options"
                          );
                          list.classList.toggle("invisible");
                          const tmp = JSON.parse(
                            JSON.stringify(suggestionsSearchResult)
                          );
                          setSuggestionsSearchResult(
                            tmp.sort((a, b) => {
                              if (a.c_date > b.c_date) return 1;
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
                        .querySelector(".suggestions-search-options")
                        .classList.toggle("invisible");
                    }}
                  >
                    <Text fontSize="21px" fontFamily="SeoulLight">
                      검색 방식 ▼
                    </Text>
                  </Button>
                  <div className="suggestions-search-options invisible">
                    <Container
                      width="110px"
                      height="90px"
                      backgroundColor="#14406c"
                      fd="column"
                    >
                      <Button
                        backgroundColor="white"
                        fontColor="#14406c"
                        fontSize="18px"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        font="SeoulLight"
                        onClick={() => {
                          document
                            .querySelector(".suggestions-search-options")
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
                        fontSize="18px"
                        font="SeoulLight"
                        onClick={() => {
                          document
                            .querySelector(".suggestions-search-options")
                            .classList.toggle("invisible");
                          setSearchOption(1);
                        }}
                      >
                        글쓴이
                      </Button>
                      <Button
                        backgroundColor="white"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        fontSize="18px"
                        font="SeoulLight"
                        onClick={() => {
                          document
                            .querySelector(".suggestions-search-options")
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
                    maxLength="10"
                    placeholder="검색어를 입력하세요."
                    value={searchStr1}
                    style={{
                      width: "280px",
                      height: "35px",
                      border: "2px solid #14406c",
                      borderRadius: "10px",
                      fontSize: "21px",
                      fontFamily: "SeoulLight",
                      paddingLeft: "10px",
                    }}
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
                      setSuggestionsSearchResult(() => {
                        if (searchStr1 === "") return suggestions;
                        switch (searchOption) {
                          case 0: // title
                            return suggestions.filter((suggestion) =>
                              suggestion.c_title.includes(searchStr1)
                            );
                          case 1: // writer
                            return suggestions.filter((suggestion) =>
                              suggestion.c_user.includes(searchStr1)
                            );
                          case 2: // date
                            return suggestions.filter((suggestion) =>
                              suggestion.c_date.includes(searchStr1)
                            );
                          default:
                            return suggestions;
                        }
                      });
                    }}
                  >
                    <Text fontSize="21px" fontFamily="SeoulLight">
                      검색
                    </Text>
                  </Button>
                  {isLogin ? (
                    <Link to="/communication/suggestion/register">
                      <Button
                        width="140px"
                        height="40px"
                        backgroundColor="white"
                        border="2px solid #14406c"
                        borderRadius="10px"
                        fontColor="#14406c"
                        marginLeft="15px"
                        onClick={() => {
                          setSuggestionTitle("");
                          setSuggestionBody("");
                        }}
                      >
                        <Text fontSize="21px">건의하기</Text>
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      width="140px"
                      height="40px"
                      backgroundColor="white"
                      border="2px solid #14406c"
                      borderRadius="10px"
                      fontColor="#14406c"
                      marginLeft="15px"
                      onClick={() => alert("권한이 없습니다.")}
                    >
                      <Text fontSize="21px" fontFamily="SeoulLight">
                        건의하기
                      </Text>
                    </Button>
                  )}
                </Container>
                <Container
                  className="suggestions-contents-container"
                  fd="column"
                  horizontalAlign="flex-start"
                  marginTop="30px"
                  height="1000px"
                >
                  {suggestionsSearchResult
                    .slice(pageNum * 10, (pageNum + 1) * 10)
                    .map((suggestion) => (
                      <Container
                        height="75px"
                        horizontalAlign="flex-start"
                        marginTop="20px"
                        borderBottom="1px solid grey"
                        key={suggestion.c_id}
                      >
                        <Link
                          to={{
                            pathname: `/communication/suggestion/${suggestion.c_id}`,
                            state: {
                              c_id: suggestion.c_id,
                            },
                          }}
                          style={{ width: "100%", height: "100%" }}
                        >
                          <Container horizontalAlign="space-between">
                            <Container
                              className="petition-item-info"
                              fd="column"
                              verticalAlign="flex-start"
                              marginLeft="30px"
                            >
                              <Text fontSize="21px" fontFamily="SeoulLight">
                                {suggestion.c_title}
                              </Text>
                              <Container
                                height="40px"
                                className="form-item-uploadinfo"
                                horizontalAlign="flex-start"
                              >
                                <Text
                                  fontColor="grey"
                                  fontSize="18px"
                                  fontFamily="SeoulLight"
                                >
                                  {suggestion.c_date.slice(0, 10)}
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
                                  {suggestion.c_user}
                                </Text>
                              </Container>
                            </Container>
                            <Container width="200px" marginRight="30px">
                              <Text
                                fontColor="grey"
                                fontSize="18px"
                                fontFamily="SeoulLight"
                              >
                                {suggestion.c_con}명이 동의
                              </Text>
                            </Container>
                          </Container>
                        </Link>
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
                  {suggestionPageArr.map((item) => (
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
                        pageNum ===
                        parseInt(suggestionsSearchResult.length / 10)
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
            <Route exact path="/communication/petition">
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
                <Container className="reform-buttons-container" height="40px">
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
                        ".petitions-sort-options"
                      );
                      list.classList.toggle("invisible");
                    }}
                  >
                    <Text fontSize="21px" fontFamily="SeoulLight">
                      정렬 방식 ▼
                    </Text>
                  </Button>
                  <div className="petitions-sort-options invisible">
                    <Container
                      width="110px"
                      height="120px"
                      backgroundColor="#14406c"
                      fd="column"
                    >
                      <Button
                        backgroundColor="white"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        fontSize="18px"
                        font="SeoulLight"
                        onClick={() => {
                          const list = document.querySelector(
                            ".petitions-sort-options"
                          );
                          list.classList.toggle("invisible");
                          const tmp = JSON.parse(
                            JSON.stringify(petitionsSearchResult)
                          );
                          setPetitionsSearchResult(
                            tmp.sort((a, b) => {
                              if (a.c_title < b.c_title) return -1;
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
                        fontSize="18px"
                        font="SeoulLight"
                        onClick={() => {
                          const list = document.querySelector(
                            ".petitions-sort-options"
                          );
                          list.classList.toggle("invisible");
                          const tmp = JSON.parse(
                            JSON.stringify(petitionsSearchResult)
                          );
                          setPetitionsSearchResult(
                            tmp.sort((a, b) => {
                              if (a.c_con < b.c_con) return 1;
                              else return -1;
                            })
                          );
                        }}
                      >
                        동의 수
                      </Button>
                      <Button
                        backgroundColor="white"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        fontSize="18px"
                        font="SeoulLight"
                        onClick={() => {
                          const list = document.querySelector(
                            ".petitions-sort-options"
                          );
                          list.classList.toggle("invisible");
                          const tmp = JSON.parse(
                            JSON.stringify(petitionsSearchResult)
                          );
                          setPetitionsSearchResult(
                            tmp.sort((a, b) => {
                              if (a.c_date < b.c_date) return 1;
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
                        fontSize="18px"
                        font="SeoulLight"
                        onClick={() => {
                          const list = document.querySelector(
                            ".petitions-sort-options"
                          );
                          list.classList.toggle("invisible");
                          const tmp = JSON.parse(
                            JSON.stringify(petitionsSearchResult)
                          );
                          setPetitionsSearchResult(
                            tmp.sort((a, b) => {
                              if (a.c_date > b.c_date) return 1;
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
                        .querySelector(".petitions-search-options")
                        .classList.toggle("invisible");
                    }}
                  >
                    <Text fontSize="21px" fontFamily="SeoulLight">
                      검색 방식 ▼
                    </Text>
                  </Button>
                  <div className="petitions-search-options invisible">
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
                        fontSize="18px"
                        font="SeoulLight"
                        onClick={() => {
                          document
                            .querySelector(".petitions-search-options")
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
                        fontSize="18px"
                        font="SeoulLight"
                        onClick={() => {
                          document
                            .querySelector(".petitions-search-options")
                            .classList.toggle("invisible");
                          setSearchOption(1);
                        }}
                      >
                        글쓴이
                      </Button>
                      <Button
                        backgroundColor="white"
                        fontColor="#14406c"
                        hoverBackgrounColor="#14406c"
                        hoverFontColor="white"
                        fontSize="18px"
                        font="SeoulLight"
                        onClick={() => {
                          document
                            .querySelector(".petitions-search-options")
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
                    maxLength="10"
                    placeholder="검색어를 입력하세요."
                    style={{
                      width: "280px",
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
                      setPetitionsSearchResult(() => {
                        switch (searchOption) {
                          case 0: // title
                            return petitions.filter((petition) =>
                              petition.c_title.includes(searchStr2)
                            );
                          case 1: // writer
                            return petitions.filter((petition) =>
                              petition.c_user.includes(searchStr2)
                            );
                          case 2: // date
                            return petitions.filter((petition) =>
                              petition.c_date.includes(searchStr2)
                            );
                          default:
                            return petitions;
                        }
                      });
                    }}
                  >
                    <Text fontSize="21px" fontFamily="SeoulLight">
                      검색
                    </Text>
                  </Button>
                  {isLogin ? (
                    <Link to="/communication/petition/register">
                      <Button
                        width="140px"
                        height="40px"
                        backgroundColor="white"
                        border="2px solid #14406c"
                        borderRadius="10px"
                        fontColor="#14406c"
                        marginLeft="15px"
                        onClick={() => {
                          setPetitionTitle("");
                          setPetitionBody("");
                        }}
                      >
                        <Text fontSize="21px" fontFamily="SeoulLight">
                          청원 등록하기
                        </Text>
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      width="140px"
                      height="40px"
                      backgroundColor="white"
                      border="2px solid #14406c"
                      borderRadius="10px"
                      fontColor="#14406c"
                      marginLeft="15px"
                      onClick={() => alert("권한이 없습니다.")}
                    >
                      <Text fontSize="21px">청원 등록하기</Text>
                    </Button>
                  )}
                </Container>
                <Container
                  className="reform-contents-container"
                  fd="column"
                  horizontalAlign="flex-start"
                  marginTop="30px"
                  height="1000px"
                >
                  {petitionsSearchResult
                    .slice(pageNum * 10, (pageNum + 1) * 10)
                    .map((petition) => (
                      <Container
                        height="75px"
                        horizontalAlign="flex-start"
                        marginTop="20px"
                        borderBottom="1px solid grey"
                        key={petition.c_id}
                      >
                        <Link
                          to={{
                            pathname: `/communication/petition/${petition.c_id}`,
                            state: {
                              petition: petition,
                            },
                          }}
                          style={{ width: "100%", height: "100%" }}
                        >
                          <Container horizontalAlign="space-between">
                            <Container
                              className="petition-item-info"
                              fd="column"
                              verticalAlign="flex-start"
                              marginLeft="30px"
                            >
                              <Text fontSize="21px" fontFamily="SeoulLight">
                                {petition.c_title}
                              </Text>
                              <Container
                                height="40px"
                                className="form-item-uploadinfo"
                                horizontalAlign="flex-start"
                              >
                                <Text
                                  fontColor="grey"
                                  fontSize="18px"
                                  fontFamily="SeoulLight"
                                >
                                  {petition.c_date.slice(0, 10)}
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
                                  {petition.c_user}
                                </Text>
                              </Container>
                            </Container>
                            <Container width="200px" marginRight="30px">
                              <Text
                                fontColor="grey"
                                fontSize="18px"
                                fontFamily="SeoulLight"
                              >
                                {petition.c_con}명이 동의
                              </Text>
                            </Container>
                          </Container>
                        </Link>
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
                        setPageNum(pageNum - 1);
                        document.documentElement.scrollTop = 0;
                      }
                    }}
                  >
                    {`<이전`}
                  </Button>
                  {petitionPageArr.map((item) => (
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
                        pageNum === parseInt(petitionsSearchResult.length / 10)
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
            <Route exact path="/communication/suggestion/register">
              <Container
                height="40px"
                marginTop="80px"
                marginLeft="20px"
                width="1000px"
                horizontalAlign="left"
              >
                <Text fontColor="#14406c" fontSize="32px">
                  건의하기
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
                  width="100px"
                  height="50px"
                  horizontalAlign="flex-start"
                  borderBottom="1px solid grey"
                  marginBottom="20px"
                >
                  <Text
                    fontColor="#14406c"
                    fontSize="28px"
                    fontFamily="SeoulLight"
                  >
                    건의 내용
                  </Text>
                </Container>
                <textarea
                  maxLength="45"
                  placeholder="건의 제목을 작성해 주세요."
                  style={{
                    width: "978px",
                    height: "25px",
                    fontFamily: "SeoulLight",
                    fontSize: "24px",
                    border: "1px solid #14406c",
                    resize: "none",
                    outline: "none",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                  className="suggestion-title"
                  value={suggestionTitle}
                  onChange={({ target: { value } }) =>
                    setSuggestionTitle(value)
                  }
                />
                <textarea
                  placeholder="건의 내용을 작성해 주세요."
                  style={{
                    width: "978px",
                    height: "600px",
                    fontFamily: "SeoulLight",
                    fontSize: "24px",
                    border: "1px solid #14406c",
                    resize: "none",
                    outline: "none",
                    padding: "10px",
                  }}
                  className="suggestion-content"
                  value={suggestionBody}
                  onChange={({ target: { value } }) => setSuggestionBody(value)}
                />
                <Container
                  width="1000px"
                  height="50px"
                  horizontalAlign="space-between"
                  marginTop="10px"
                >
                  <Text fontFamily="SeoulLight" fontSize="16px">
                    무분별한 게시글 작성은 관리자에 의해 제재될 수 있습니다.
                  </Text>
                  <Button
                    width="100px"
                    height="50px"
                    backgroundColor="#14406c"
                    fontColor="white"
                    border="2px solid #14406c"
                    borderRadius="5px"
                    hoverBackgrounColor="white"
                    hoverFontColor="#14406c"
                    onClick={() => {
                      if (isLogin) {
                        writeSuggestion();
                      } else {
                        alert("권한이 없습니다.");
                      }
                    }}
                  >
                    등록
                  </Button>
                </Container>
              </Container>
            </Route>
            <Route exact path="/communication/petition/register">
              <Container
                height="40px"
                marginTop="80px"
                marginLeft="20px"
                width="1000px"
                horizontalAlign="left"
              >
                <Text fontColor="#14406c" fontSize="32px">
                  회칙 개정 요구 청원 등록하기
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
                  width="100px"
                  height="50px"
                  horizontalAlign="flex-start"
                  borderBottom="1px solid #14406c"
                  marginBottom="20px"
                >
                  <Text
                    fontColor="#14406c"
                    fontSize="28px"
                    fontFamily="SeoulLight"
                  >
                    청원 내용
                  </Text>
                </Container>
                <textarea
                  placeholder="청원 제목을 작성해 주세요."
                  style={{
                    width: "978px",
                    height: "25px",
                    fontFamily: "SeoulLight",
                    fontSize: "24px",
                    border: "1px solid #14406c",
                    resize: "none",
                    outline: "none",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                  className="suggestion-title"
                  value={petitionTitle}
                  onChange={({ target: { value } }) => setPetitionTitle(value)}
                />
                <textarea
                  type="text"
                  placeholder="청원 내용을 작성해 주세요."
                  style={{
                    width: "978px",
                    height: "600px",
                    fontFamily: "SeoulLight",
                    fontSize: "24px",
                    border: "1px solid #14406c",
                    resize: "none",
                    outline: "none",
                    padding: "10px",
                  }}
                  value={petitionBody}
                  onChange={({ target: { value } }) => setPetitionBody(value)}
                />
                <Container
                  width="1000px"
                  height="50px"
                  horizontalAlign="space-between"
                  marginTop="10px"
                >
                  <Text fontFamily="SeoulLight" fontSize="16px">
                    무분별한 게시글 작성은 관리자에 의해 제재될 수 있습니다.
                  </Text>
                  <Button
                    width="100px"
                    height="50px"
                    backgroundColor="#14406c"
                    fontColor="white"
                    border="2px solid #14406c"
                    borderRadius="5px"
                    hoverBackgrounColor="white"
                    hoverFontColor="#14406c"
                    onClick={() => {
                      if (isLogin) {
                        writePetition();
                      } else {
                        alert("권한이 없습니다.");
                      }
                    }}
                  >
                    등록
                  </Button>
                </Container>
              </Container>
            </Route>
            <Route
              path="/communication/suggestion/:suggestionId"
              component={Suggestion}
            />
            <Route
              path="/communication/petition/:petitionId"
              component={Petition}
            />
          </Switch>
        </Container>
      </Container>
    </>
  );
}

export default Communication;
