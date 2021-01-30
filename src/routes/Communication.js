import React, { useEffect, useState } from "react";
import { Link, NavLink, Route } from "react-router-dom";
import logo_inversed from "../assets/logo_reversed.png";

import Button from "../components/Button";
import Container from "../components/Container";
import List from "../components/List";
import Listitem from "../components/Listitem";
import Remote from "../components/Remote";
import Text from "../components/Text";

function Main() {
  const [suggestions, setsuggestions] = useState([]);
  const [petitions, setPetitions] = useState([]);
  useEffect(() => {
    setsuggestions([
      {
        suggestionId: 1,
        suggestionTitle: "코스모스",
        suggestionConsensus: 27,
        suggestionDate: "2021-11-42",
        suggestioner: "김지우",
      },
      {
        suggestionId: 2,
        suggestionTitle: "꿀호떡 무료로 배포 해주세요",
        suggestionConsensus: 317,
        suggestionDate: "2021-25-32",
        suggestioner: "김지우",
      },
      {
        suggestionId: 3,
        suggestionTitle: "피아노 쳐주세요",
        suggestionConsensus: 62,
        suggestionDate: "2021-45-73",
        suggestioner: "김지우",
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
        petitionDate: "2021-71-63",
        petitioner: "김지우",
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
          width="900px"
          fd="column"
          marginLeft="30px"
          verticalAlign="flex-start"
        >
          <Route exact path="/communication/">
            <Container
              height="40px"
              marginTop="50px"
              marginLeft="20px"
              width="840px"
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
              width="840px"
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
                    width: "280px",
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
                    <Text fontSize="21px">건의하기</Text>
                  </Button>
                </Link>
              </Container>
              <Container
                className="suggestions-contents-container"
                fd="column"
                horizontalAlign="flex-start"
              >
                {suggestions.map((suggestion) => (
                  <Container
                    height="150px"
                    horizontalAlign="flex-start"
                    marginTop="20px"
                    borderBottom="2px solid #14406c"
                    key={suggestion.suggestionId}
                  >
                    <Container
                      className="petition-item-info"
                      fd="column"
                      verticalAlign="flex-start"
                      marginLeft="30px"
                    >
                      <Text fontSize="34px">{suggestion.suggestionTitle}</Text>
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
                ))}
              </Container>
            </Container>
          </Route>
          <Route path="/communication/petition">
            <Container
              height="40px"
              marginTop="50px"
              marginLeft="20px"
              width="840px"
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
              width="840px"
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
                    width: "280px",
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
                {petitions.map((petition) => (
                  <Container
                    height="150px"
                    horizontalAlign="flex-start"
                    marginTop="20px"
                    borderBottom="2px solid #14406c"
                    key={petition.petitionId}
                  >
                    <Container
                      className="petition-item-info"
                      fd="column"
                      verticalAlign="flex-start"
                      marginLeft="30px"
                    >
                      <Text fontSize="34px">{petition.petitionTitle}</Text>
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
