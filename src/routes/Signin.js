import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/logo.png";
import Button from "../components/Button";

import Container from "../components/Container";
import Text from "../components/Text";

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
  const [isLogin, setIsLogin] = useState(false);

  const loginProcess = () => {
    fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        pw: pw,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response["isLogin"] === "success") {
          setIsLogin(true);
        } else {
          console.log("학번 혹은 비밀번호가 틀렸습니다!");
        }
      });
  };
  if (isLogin) {
    return <h1>hello</h1>;
  } else {
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
              onClick={loginProcess}
            >
              로그인
            </Button>
            <Container height="18px">
              <Text fontSize="21px" marginTop="20px">
                또는
              </Text>
            </Container>
            <Link to="/signup">
              <Button
                width="230px"
                height="40px"
                marginTop="20px"
                fontSize="21px"
                backgroundColor="#3867ba"
                fontColor="white"
                hoverBackgrounColor="white"
                hoverFontColor="#14406c"
                borderRadius="5px"
                onClick={() => {}}
              >
                회원가입
              </Button>
            </Link>
          </Container>
        </StyledContainer>
      </Container>
    );
  }
}

export default Signin;
