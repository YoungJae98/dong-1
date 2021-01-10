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
    <Container width="1200px" marginTop="10px" horizontalAlign="left">
      <img src={sejong} alt="Sejong Logo" />
      <StyledFooter>총동아리연합회</StyledFooter>
    </Container>
  );
}

export default Footer;
