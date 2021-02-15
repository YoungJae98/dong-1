import React, { useEffect, useState } from "react";
import { Link, NavLink, Route, Switch, useHistory } from "react-router-dom";
import logo_inversed from "../assets/images/logo_reversed.png";
import v4 from "../assets/images/visual/visual4.jpg";

import Button from "../components/Button";
import Container from "../components/Container";
import List from "../components/List";
import Listitem from "../components/Listitem";
import Petition from "../components/Petition";
import Remote from "../components/Remote";
import Suggestion from "../components/Suggestion";
import Text from "../components/Text";

function Main() {
  const [suggestions, setSuggestions] = useState([]);
  const [petitions, setPetitions] = useState([]);
  const [searchStr1, setSearchStr1] = useState("");
  const [searchStr2, setSearchStr2] = useState("");
  const [searchOption, setSearchOption] = useState(0);
  const [suggestionsSearchResult, setSuggestionsSearchResult] = useState([]);
  const [petitionsSearchResult, setPetitionsSearchResult] = useState([]);
  const [suggestionTitle, setSuggestionTitle] = useState("");
  const [suggestionBody, setSuggestionBody] = useState("");
  const [petitionTitle, setPetitionTitle] = useState("");
  const [petitionBody, setPetitionBody] = useState("");
  const [comment, setComment] = useState("");
  const history = useHistory();
  const suggestionRedirect = () => {
    history.push("/communication/");
  };
  const petitionRedirect = () => {
    history.push("/communication/petition");
  };
  const getCommunity = () => {
    fetch("http://localhost:3001/api/community/getCommunity", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => {
        //response에서 1은 suggestion에서 2는 petition으로 구분
        console.log(response);
      });
  };
  const showCommunity = (id) => {
    fetch("http://localhost:3001/api/community/showCommunity", {
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
        //title, body, 작성자, 날짜와 댓글이 담겨있음.
        console.log(response);
      });
  };
  const writeComments = (id) => {
    fetch("http://localhost:3001/api/community/writeComments", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: {
        id: id,
        body: comment,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response["success"]) {
          alert("댓글이 등록되었습니다.");
          location.reload();
        }
      });
  };
  const writeSuggestion = () => {
    fetch("http://localhost:3001/api/community/writeCommunity", {
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
        //받아온 응답
        console.log(response);
        if (response["success"]) {
          alert("건의사항 등록이 완료되었습니다.");
        } else {
          alert("동일한 제목의 건의사항이 존재합니다.");
        }
        suggestionRedirect();
      });
  };
  const writePetition = () => {
    fetch("http://localhost:3001/api/account/writeCommunity", {
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
        //받아온 응답
        console.log(response);
        if (response["success"]) {
          alert("청원 등록이 완료되었습니다.");
        } else {
          alert("동일한 제목의 청원이 존재합니다.");
        }
        petitionRedirect();
      });
  };
  useEffect(() => {
    setSuggestions([
      {
        suggestionId: 1,
        suggestionTitle: "코스모스",
        suggestionConsensus: 127,
        suggestionDate: "2021-11-42",
        suggestioner: "김지우",
        suggestionContent: "코스모스 책 읽기 싫어요 바꿔 줘요",
      },
      {
        suggestionId: 2,
        suggestionTitle: "꿀호떡 무료로 배포 해주세요",
        suggestionConsensus: 317,
        suggestionDate: "2021-25-32",
        suggestioner: "김지우",
        suggestionContent: "꿀호떡 먹고 싶어요",
      },
      {
        suggestionId: 3,
        suggestionTitle: "피아노 쳐주세요",
        suggestionConsensus: 62,
        suggestionDate: "2021-45-73",
        suggestioner: "김지우",
        suggestionContent: "피아노 듣고 싶어요",
      },
      {
        suggestionId: 4,
        suggestionTitle: "기타 쳐주세요",
        suggestionConsensus: 602,
        suggestionDate: "2021-32-13",
        suggestioner: "김지우",
        suggestionContent: "기타 듣고 싶어요",
      },
      {
        suggestionId: 5,
        suggestionTitle: "책 빌려주세요",
        suggestionConsensus: 72,
        suggestionDate: "2021-12-23",
        suggestioner: "김지우",
        suggestionContent: "고전독서 하기 시러요",
      },
    ]);
    setSuggestionsSearchResult([
      {
        suggestionId: 1,
        suggestionTitle: "코스모스",
        suggestionConsensus: 127,
        suggestionDate: "2021-11-42",
        suggestioner: "김지우",
        suggestionContent: "코스모스 책 읽기 싫어요 바꿔 줘요",
      },
      {
        suggestionId: 2,
        suggestionTitle: "꿀호떡 무료로 배포 해주세요",
        suggestionConsensus: 317,
        suggestionDate: "2021-25-32",
        suggestioner: "김지우",
        suggestionContent: "꿀호떡 먹고 싶어요",
      },
      {
        suggestionId: 3,
        suggestionTitle: "피아노 쳐주세요",
        suggestionConsensus: 62,
        suggestionDate: "2021-45-73",
        suggestioner: "김지우",
        suggestionContent: "피아노 듣고 싶어요",
      },
      {
        suggestionId: 4,
        suggestionTitle: "기타 쳐주세요",
        suggestionConsensus: 602,
        suggestionDate: "2021-32-13",
        suggestioner: "김지우",
        suggestionContent: "코스모스 책 읽기 싫어요 바꿔 줘요",
      },
      {
        suggestionId: 5,
        suggestionTitle: "책 빌려주세요",
        suggestionConsensus: 72,
        suggestionDate: "2021-12-23",
        suggestioner: "김지우",
        suggestionContent: "고전독서 하기 시러요",
      },
    ]);
    setPetitions([
      {
        petitionId: 1,
        petitionTitle: "청원 1",
        petitionConsensus: 97,
        petitionDate: "2021-01-27",
        petitioner: "김지우",
      },
      {
        petitionId: 2,
        petitionTitle: "청원 2",
        petitionConsensus: 32,
        petitionDate: "2021-02-16",
        petitioner: "김지우",
      },
      {
        petitionId: 3,
        petitionTitle: "청원 3",
        petitionConsensus: 17,
        petitionDate: "2021-01-31",
        petitioner: "김지우",
      },
      {
        petitionId: 4,
        petitionTitle: "청원 4",
        petitionConsensus: 377,
        petitionDate: "2021-12-22",
        petitioner: "김지우",
      },
      {
        petitionId: 5,
        petitionTitle: "청원 5",
        petitionConsensus: 12,
        petitionDate: "2021-08-21",
        petitioner: "김지우",
      },
    ]);
    setPetitionsSearchResult([
      {
        petitionId: 1,
        petitionTitle: "청원 1",
        petitionConsensus: 97,
        petitionDate: "2021-01-27",
        petitioner: "김지우",
      },
      {
        petitionId: 2,
        petitionTitle: "청원 2",
        petitionConsensus: 32,
        petitionDate: "2021-02-16",
        petitioner: "김지우",
      },
      {
        petitionId: 3,
        petitionTitle: "청원 3",
        petitionConsensus: 17,
        petitionDate: "2021-01-31",
        petitioner: "김지우",
      },
      {
        petitionId: 4,
        petitionTitle: "청원 4",
        petitionConsensus: 377,
        petitionDate: "2021-12-22",
        petitioner: "김지우",
      },
      {
        petitionId: 5,
        petitionTitle: "청원 5",
        petitionConsensus: 12,
        petitionDate: "2021-08-21",
        petitioner: "김지우",
      },
    ]);
  }, []);
  return (
    <>
      <Container height="145px">
        <img src={v4} alt="" />
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
                소통
              </Text>
            </Container>
            <Remote width="200px" paddingTop="10px" paddingBottom="10px">
              <List fd="column">
                <Button backgroundColor="white">
                  <NavLink to="/communication/">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="건의사항"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white">
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
                marginTop="20px"
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
                    <Text fontSize="21px">정렬 방식 ▼</Text>
                  </Button>
                  <div className="suggestions-sort-options invisible">
                    <Container
                      width="110px"
                      height="120px"
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
                            ".suggestions-sort-options"
                          );
                          list.classList.toggle("invisible");
                          const tmp = JSON.parse(
                            JSON.stringify(suggestionsSearchResult)
                          );
                          setSuggestionsSearchResult(
                            tmp.sort((a, b) => {
                              if (a.suggestionTitle < b.suggestionTitle)
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
                            ".suggestions-sort-options"
                          );
                          list.classList.toggle("invisible");
                          const tmp = JSON.parse(
                            JSON.stringify(suggestionsSearchResult)
                          );
                          setSuggestionsSearchResult(
                            tmp.sort((a, b) => {
                              if (a.suggestionConsensus < b.suggestionConsensus)
                                return 1;
                              else return -1;
                            })
                          );
                        }}
                      >
                        동의 수
                      </Button>
                      <Button
                        backgroundColor="#14406c"
                        fontColor="white"
                        hoverBackgrounColor="white"
                        hoverFontColor="#14406c"
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
                              if (a.suggestionDate < b.suggestionDate) return 1;
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
                            ".suggestions-sort-options"
                          );
                          list.classList.toggle("invisible");
                          const tmp = JSON.parse(
                            JSON.stringify(suggestionsSearchResult)
                          );
                          setSuggestionsSearchResult(
                            tmp.sort((a, b) => {
                              if (a.suggestionDate > b.suggestionDate) return 1;
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
                    <Text fontSize="21px">검색 방식 ▼</Text>
                  </Button>
                  <div className="suggestions-search-options invisible">
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
                            .querySelector(".suggestions-search-options")
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
                            .querySelector(".suggestions-search-options")
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
                    placeholder="검색어를 입력하세요."
                    value={searchStr1}
                    style={{
                      width: "280px",
                      height: "35px",
                      border: "2px solid #14406c",
                      borderRadius: "10px",
                      fontSize: "21px",
                      fontFamily: "SeoulBold",
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
                              suggestion.suggestionTitle.includes(searchStr1)
                            );
                          case 1: // writer
                            return suggestions.filter((suggestion) =>
                              suggestion.suggestioner.includes(searchStr1)
                            );
                          case 2: // date
                            return suggestions.filter((suggestion) =>
                              suggestion.suggestionDate.includes(searchStr1)
                            );
                          default:
                            return suggestions;
                        }
                      });
                    }}
                  >
                    <Text fontSize="21px">검색</Text>
                  </Button>
                  <Link to="/communication/suggestion/register">
                    <Button
                      width="140px"
                      height="40px"
                      backgroundColor="white"
                      border="2px solid #14406c"
                      borderRadius="10px"
                      fontColor="#14406c"
                      marginLeft="15px"
                    >
                      <Text fontSize="21px">건의하기</Text>
                    </Button>
                  </Link>
                </Container>
                <Container
                  className="suggestions-contents-container"
                  fd="column"
                  horizontalAlign="flex-start"
                >
                  {suggestionsSearchResult.map((suggestion) => (
                    <Container
                      height="150px"
                      horizontalAlign="flex-start"
                      marginTop="20px"
                      borderBottom="2px solid #14406c"
                      key={suggestion.suggestionTitle}
                    >
                      <Link
                        to={{
                          pathname: `/communication/suggestion/${suggestion.suggestionId}`,
                          state: {
                            suggestion: suggestion,
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
                            <Text fontSize="34px">
                              {suggestion.suggestionTitle}
                            </Text>
                            <Container
                              height="40px"
                              className="form-item-uploadinfo"
                              horizontalAlign="flex-start"
                            >
                              <Text fontColor="grey" fontSize="21px">
                                {suggestion.suggestionDate}
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
                                {suggestion.suggestioner}
                              </Text>
                            </Container>
                          </Container>
                          <Container width="200px" marginRight="30px">
                            <Text fontColor="black" fontSize="22px">
                              {suggestion.suggestionConsensus}명이 동의
                            </Text>
                          </Container>
                        </Container>
                      </Link>
                    </Container>
                  ))}
                </Container>
              </Container>
            </Route>
            <Route exact path="/communication/petition">
              <Container
                height="40px"
                marginTop="20px"
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
                    <Text fontSize="21px">정렬 방식 ▼</Text>
                  </Button>
                  <div className="petitions-sort-options invisible">
                    <Container
                      width="110px"
                      height="120px"
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
                            ".petitions-sort-options"
                          );
                          list.classList.toggle("invisible");
                          const tmp = JSON.parse(
                            JSON.stringify(petitionsSearchResult)
                          );
                          setPetitionsSearchResult(
                            tmp.sort((a, b) => {
                              if (a.petitionTitle < b.petitionTitle) return -1;
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
                            ".petitions-sort-options"
                          );
                          list.classList.toggle("invisible");
                          const tmp = JSON.parse(
                            JSON.stringify(petitionsSearchResult)
                          );
                          setPetitionsSearchResult(
                            tmp.sort((a, b) => {
                              if (a.petitionConsensus < b.petitionConsensus)
                                return 1;
                              else return -1;
                            })
                          );
                        }}
                      >
                        동의 수
                      </Button>
                      <Button
                        backgroundColor="#14406c"
                        fontColor="white"
                        hoverBackgrounColor="white"
                        hoverFontColor="#14406c"
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
                              if (a.petitionDate < b.petitionDate) return 1;
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
                            ".petitions-sort-options"
                          );
                          list.classList.toggle("invisible");
                          const tmp = JSON.parse(
                            JSON.stringify(petitionsSearchResult)
                          );
                          setPetitionsSearchResult(
                            tmp.sort((a, b) => {
                              if (a.petitionDate > b.petitionDate) return 1;
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
                    <Text fontSize="21px">검색 방식 ▼</Text>
                  </Button>
                  <div className="suggestions-search-options invisible">
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
                            .querySelector(".suggestions-search-options")
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
                            .querySelector(".suggestions-search-options")
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
                    placeholder="검색어를 입력하세요."
                    style={{
                      width: "280px",
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
                      setPetitionsSearchResult(() => {
                        switch (searchOption) {
                          case 0: // title
                            return petitions.filter((petition) =>
                              petition.petitionTitle.includes(searchStr2)
                            );
                          case 1: // writer
                            return petitions.filter((petition) =>
                              petition.petitioner.includes(searchStr2)
                            );
                          case 2: // date
                            return petitions.filter((petition) =>
                              petition.petitionDate.includes(searchStr2)
                            );
                          default:
                            return petitions;
                        }
                      });
                    }}
                  >
                    <Text fontSize="21px">검색</Text>
                  </Button>
                  <Link to="/communication/petition/register">
                    <Button
                      width="140px"
                      height="40px"
                      backgroundColor="white"
                      border="2px solid #14406c"
                      borderRadius="10px"
                      fontColor="#14406c"
                      marginLeft="15px"
                    >
                      <Text fontSize="21px">청원 등록하기</Text>
                    </Button>
                  </Link>
                </Container>
                <Container
                  className="reform-contents-container"
                  fd="column"
                  horizontalAlign="flex-start"
                >
                  {petitionsSearchResult.map((petition) => (
                    <Container
                      height="150px"
                      horizontalAlign="flex-start"
                      marginTop="20px"
                      borderBottom="2px solid #14406c"
                      key={petition.petitionId}
                    >
                      <Link
                        to={{
                          pathname: `/communication/petition/${petition.petitionId}`,
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
                            <Text fontSize="34px">
                              {petition.petitionTitle}
                            </Text>
                            <Container
                              height="40px"
                              className="form-item-uploadinfo"
                              horizontalAlign="flex-start"
                            >
                              <Text fontColor="grey" fontSize="21px">
                                {petition.petitionDate}
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
                                {petition.petitioner}
                              </Text>
                            </Container>
                          </Container>
                          <Container width="200px" marginRight="30px">
                            <Text fontColor="black" fontSize="22px">
                              {petition.petitionConsensus}명이 동의
                            </Text>
                          </Container>
                        </Container>
                      </Link>
                    </Container>
                  ))}
                </Container>
              </Container>
            </Route>
            <Route exact path="/communication/suggestion/register">
              <Container
                height="40px"
                marginTop="20px"
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
                  width="100px"
                  height="50px"
                  horizontalAlign="flex-start"
                  borderBottom="2px solid #14406c"
                  marginBottom="20px"
                >
                  <Text fontColor="#14406c" fontSize="28px">
                    건의 내용
                  </Text>
                </Container>
                <textarea
                  placeholder="건의 제목을 작성해 주세요."
                  style={{
                    width: "976px",
                    height: "25px",
                    fontFamily: "SeoulBold",
                    fontSize: "24px",
                    border: "2px solid #14406c",
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
                    width: "976px",
                    height: "600px",
                    fontFamily: "SeoulBold",
                    fontSize: "24px",
                    border: "2px solid #14406c",
                    resize: "none",
                    outline: "none",
                    padding: "10px",
                  }}
                  className="suggestion-content"
                  value={suggestionBody}
                  onChange={({ target: { value } }) => setSuggestionBody(value)}
                />
                <Container
                  height="50px"
                  horizontalAlign="flex-end"
                  marginTop="10px"
                >
                  <Button
                    width="100px"
                    height="50px"
                    backgroundColor="#14406c"
                    fontColor="white"
                    border="2px solid #14406c"
                    borderRadius="5px"
                    hoverBackgrounColor="white"
                    hoverFontColor="#14406c"
                    onClick={writeSuggestion}
                  >
                    등록
                  </Button>
                </Container>
              </Container>
            </Route>
            <Route exact path="/communication/petition/register">
              <Container
                height="40px"
                marginTop="20px"
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
                  width="100px"
                  height="50px"
                  horizontalAlign="flex-start"
                  borderBottom="2px solid #14406c"
                  marginBottom="20px"
                >
                  <Text fontColor="#14406c" fontSize="28px">
                    청원 내용
                  </Text>
                </Container>
                <textarea
                  placeholder="청원 제목을 작성해 주세요."
                  style={{
                    width: "976px",
                    height: "25px",
                    fontFamily: "SeoulBold",
                    fontSize: "24px",
                    border: "2px solid #14406c",
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
                    width: "976px",
                    height: "600px",
                    fontFamily: "SeoulBold",
                    fontSize: "24px",
                    border: "2px solid #14406c",
                    resize: "none",
                    outline: "none",
                    padding: "10px",
                  }}
                  value={petitionBody}
                  onChange={({ target: { value } }) => setPetitionBody(value)}
                />
                <Container
                  height="50px"
                  horizontalAlign="flex-end"
                  marginTop="10px"
                >
                  <Button
                    width="100px"
                    height="50px"
                    backgroundColor="#14406c"
                    fontColor="white"
                    border="2px solid #14406c"
                    borderRadius="5px"
                    hoverBackgrounColor="white"
                    hoverFontColor="#14406c"
                    onClick={writePetition}
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

export default Main;
