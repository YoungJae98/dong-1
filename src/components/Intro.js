import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Logo from "./Logo";

const StyledIntro = styled.div`
  animation: intro_animation cubic-bezier(0.06, 0.96, 0.07, 0.97) 2s forwards;
  animation-delay: 1s;
  position: fixed;
  z-index: 10000;
  width: 100%;
  height: 100%;
  background-color: #14406c;
`;

function Intro() {
  return (
    <StyledIntro>
      <Container>
        <Logo />
      </Container>
    </StyledIntro>
  );
}

export default Intro;
