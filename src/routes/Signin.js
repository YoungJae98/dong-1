import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/images/logo.png";
import Button from "../components/Button";

import Container from "../components/Container";
import Text from "../components/Text";

/*
로그인 체크 여부 확인 함수

const loginCheck = () => {
  fetch("http://localhost:3001/api/account/isLoginCheck", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
    .then((response) => response.json())
    .then((response) => {
      //받아온 응답
      console.log(response);
      //받아온 값 중 isLogin이 true 일때
      if (response["isLogin"]) {
        console.log("true");
        //로그인 실패일때
      } else {
        console.log("false");
      }
    });
};

  const logoutProcess = () => {
    fetch("http://localhost:3001/api/account/logout", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => {
        //받아온 응답
        console.log(response);
      });
  };

 */

const StyledLogo = styled.img`
  opacity: 0;
  animation: logo_fadein 1.8s forwards;
  animation-delay: 0.2s;
`;

const StyledContainer = styled(Container)`
  opacity: 0;
  animation: fadein 0.9s forwards;
  animation-delay: 1.4s;
`;

function Signin() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const history = useHistory();
  const redirectToHome = () => {
    history.push("/");
    history.go(0);
  };
  const loginProcess = () => {
    fetch("http://localhost:3001/api/account/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        id: id,
        pw: pw,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response["isLogin"] === "success") {
          redirectToHome();
        } else {
          alert("학번 혹은 비밀번호가 틀렸습니다!");
        }
      });
  };
  return (
    <Container height="100vh" backgroundColor="#14406c">
      <StyledLogo src={logo} alt="" />
      <StyledContainer
        width="400px"
        height="500px"
        backgroundColor="white"
        borderRadius="5px"
        fd="column"
        horizontalAlign="flex-start"
      >
        <Text fontSize="36px" marginTop="50px">
          로그인
        </Text>
        <Container fd="column">
          <Container marginTop="30px" height="40px">
            <input
              type="text"
              placeholder="학번"
              value={id}
              onChange={({ target: { value } }) => setId(value)}
              style={{
                width: "230px",
                height: "40px",
                fontSize: "21px",
                fontFamily: "SeoulBold",
                backgroundColor: "#FAFAFA",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            />
          </Container>
          <Container marginTop="30px" height="40px">
            <input
              type="password"
              placeholder="비밀번호"
              value={pw}
              onChange={({ target: { value } }) => setPw(value)}
              name="pw"
              style={{
                width: "230px",
                height: "40px",
                fontSize: "21px",
                fontFamily: "SeoulBold",
                backgroundColor: "#FAFAFA",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            />
          </Container>
          <Button
            height="40px"
            marginTop="30px"
            fontSize="21px"
            backgroundColor="#14406c"
            fontColor="white"
            hoverBackgrounColor="white"
            hoverFontColor="#14406c"
            borderRadius="5px"
            onClick={() => {
              loginProcess();
            }}
          >
            로그인
          </Button>
        </Container>
      </StyledContainer>
    </Container>
  );
}

export default Signin;
