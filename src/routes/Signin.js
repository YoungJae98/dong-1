import React from "react";
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
        <Text fontSize="32px" marginTop="50px">
          로그인
        </Text>
        <form>
          <Container fd="column">
            <Container marginTop="30px" height="40px">
              <input
                type="text"
                placeholder="학번"
                style={{
                  width: "230px",
                  height: "40px",
                  fontSize: "18px",
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
                style={{
                  width: "230px",
                  height: "40px",
                  fontSize: "18px",
                  backgroundColor: "#FAFAFA",
                  border: "1px solid black",
                  borderRadius: "5px",
                }}
              />
            </Container>
            <Button
              height="40px"
              marginTop="30px"
              fontSize="18px"
              backgroundColor="#14406c"
              fontColor="white"
              hoverBackgrounColor="white"
              hoverFontColor="#14406c"
              borderRadius="5px"
            >
              로그인
            </Button>
            <Container height="18px">
              <Text fontSize="16px" marginTop="20px" fontFamily="Arial">
                또는
              </Text>
            </Container>
            <Link to="/signup">
              <Button
                width="230px"
                height="40px"
                marginTop="20px"
                fontSize="18px"
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
        </form>
      </StyledContainer>
    </Container>
  );
}

export default Signin;
