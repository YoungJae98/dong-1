import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

import Container from "../components/Container";
import Text from "../components/Text";

const StyledContainer = styled(Container)`
  opacity: 0;
  animation: fadein 0.9s forwards;
`;

function Signup() {
  return (
    <Container height="100vh" backgroundColor="#14406c">
      <StyledContainer
        width="400px"
        height="500px"
        backgroundColor="white"
        borderRadius="5px"
      >
        <Container fd="column" horizontalAlign="flex-start">
          <Text marginTop="30px" fontSize="32px">
            회원가입
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
              <Container marginTop="30px" height="40px">
                <input
                  type="password"
                  placeholder="비밀번호 확인"
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
                회원가입
              </Button>
            </Container>
          </form>
        </Container>
      </StyledContainer>
    </Container>
  );
}

export default Signup;
