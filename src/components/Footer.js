import React from "react";
import styled from "styled-components";

import sejong from "../assets/sejong.png";

import Container from "./Container";
import Text from "./Text";

const StyledFooter = styled.div`
  margin-left: 20px;
  font-size: 24px;
`;

function Footer() {
  return (
    <Container backgroundColor="#F6F6F6" marginTop="50px">
      <Container
        width="1200px"
        marginTop="30px"
        horizontalAlign="left"
        marginBottom="30px"
        paddingTop="30px"
        borderTop="1px solid #14406c"
      >
        <img src={sejong} alt="Sejong Logo" />
        <StyledFooter>
          <Text fontSize="18px" fontColor="#14406c" fontFamily="SeoulLight">
            주소 | 05006 서울특별시 광진구 능동로 209 세종대학교 학생회관 408호
          </Text>
          <Text
            fontSize="18px"
            marginTop="5px"
            fontColor="#14406c"
            fontFamily="SeoulLight"
          >
            개발 | 김영재 김훈래
          </Text>
          <Text
            fontSize="18px"
            fontColor="#14406c"
            fontFamily="SeoulLight"
            marginTop="5px"
          >
            Copyright(C) 세종대학교 총동아리연합회 All rights reserved
          </Text>
        </StyledFooter>
      </Container>
    </Container>
  );
}

export default Footer;
