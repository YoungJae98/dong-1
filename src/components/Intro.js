import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Container from "./Container";
import intro from "../assets/images/intro.png";

const StyledIntro = styled.div`
  animation: intro_animation cubic-bezier(0.06, 0.96, 0.07, 0.97) 2s forwards;
  animation-delay: 1s;
  position: fixed;
  z-index: 10000;
  width: 100%;
  height: 100%;
  background-color: white;
`;

function Intro() {
  const isMobile = useMediaQuery({ query: "(max-width: 501px)" });
  return (
    <StyledIntro>
      <Container>
        <img
          src={intro}
          alt="intro"
          width={!isMobile ? "100%" : ""}
          height={isMobile ? "100%" : ""}
        />
      </Container>
    </StyledIntro>
  );
}

export default Intro;
