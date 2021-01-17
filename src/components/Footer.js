import React from "react";
import styled from "styled-components";

import sejong from "../assets/sejong.png";

import Container from "./Container";

const StyledFooter = styled.div`
  margin-left: 20px;
  font-size: 24px;
`;

function Footer() {
  return (
    <Container backgroundColor="#FAFAFA" marginTop="50px" zIndex={10}>
      <Container
        width="1200px"
        marginTop="30px"
        horizontalAlign="left"
        marginBottom="30px"
      >
        <img src={sejong} alt="Sejong Logo" />
        <StyledFooter>총동아리연합회 저작권 뭐시기</StyledFooter>
      </Container>
    </Container>
  );
}

export default Footer;