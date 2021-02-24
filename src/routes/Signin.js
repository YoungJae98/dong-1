import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Button from "../components/Button";

import Container from "../components/Container";
import Text from "../components/Text";

/*
로그인 체크 여부 확인 함수

const loginCheck = () => {
  fetch("http://sejongclubunion.com:3001/api/account/isLoginCheck", {
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
    fetch("http://sejongclubunion.com:3001/api/account/logout", {
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

const StyledContainer = styled(Container)`
  opacity: 0;
  animation: fadein 0.9s forwards;
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
    fetch("http://sejongclubunion.com:3001/api/account/login", {
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
    <Container height="100vh" backgroundColor="#F6F6F6">
      <StyledContainer
        width="400px"
        height="450px"
        backgroundColor="white"
        borderRadius="5px"
        fd="column"
        horizontalAlign="flex-start"
        border="1px solid #14406c"
      >
        <Text fontSize="36px" marginTop="50px" fontColor="#14406c">
          로그인
        </Text>
        <Container fd="column" horizontalAlign="flex-start" marginTop="30px">
          <Container marginTop="30px" height="40px">
            <div className="input-container">
              <label
                className="input-label"
                onClick={({ target }) => {
                  target.parentElement.classList.add("login-focused");
                  document.querySelector(".student-number").focus();
                }}
                style={{ fontFamily: "SeoulLight" }}
              >
                학번
              </label>
              <input
                type="text"
                value={id}
                onChange={({ target: { value } }) => setId(value)}
                onFocus={({ target }) =>
                  target.parentElement.classList.add("login-focused")
                }
                onBlur={({ target }) => {
                  if (target.value === "") {
                    target.parentElement.classList.remove("login-focused");
                  }
                }}
                className="login-input student-number"
                style={{
                  width: "230px",
                  height: "30px",
                  fontSize: "24px",
                  fontFamily: "SeoulLight",
                  backgroundColor: "transparent",
                  border: "1px solid #14406c",
                  borderRadius: "3px",
                  paddingLeft: "10px",
                  paddingTop: "10px",
                }}
              />
            </div>
          </Container>
          <Container marginTop="50px" height="40px">
            <div className="input-container">
              <label
                className="input-label"
                onClick={({ target }) => {
                  target.parentElement.classList.add("login-focused");
                  document.querySelector(".student-pwd").focus();
                }}
                style={{ fontFamily: "SeoulLight" }}
              >
                세종 포탈 비밀번호
              </label>
              <input
                type="password"
                value={pw}
                onChange={({ target: { value } }) => setPw(value)}
                onFocus={({ target }) =>
                  target.parentElement.classList.add("login-focused")
                }
                onBlur={({ target }) => {
                  if (target.value === "") {
                    target.parentElement.classList.remove("login-focused");
                  }
                }}
                name="pw"
                className="login-input student-pwd"
                style={{
                  width: "230px",
                  height: "30px",
                  fontSize: "24px",
                  fontFamily: "SeoulLight",
                  backgroundColor: "transparent",
                  border: "1px solid #14406c",
                  borderRadius: "3px",
                  paddingLeft: "10px",
                  paddingTop: "10px",
                  letterSpacing: "-7px",
                }}
              />
            </div>
          </Container>
          <Container
            height="20px"
            width="240px"
            horizontalAlign="left"
            marginTop="15px"
          >
            <Text fontFamily="SeoulLight" fontSize="15px" fontColor="grey">
              포탈 비밀번호는 저장되지 않습니다.
            </Text>
          </Container>
          <Button
            width="230px"
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
