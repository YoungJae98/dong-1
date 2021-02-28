import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import sejong from "../assets/images/sejong.png";

import Container from "./Container";
import Text from "./Text";

function Footer() {
  const isMobile = useMediaQuery({ query: "(max-width: 501px)" });
  return (
    <Container
      backgroundColor="#F6F6F6"
      marginTop="50px"
      borderTop="1px solid #14406c"
      paddingLeft="10px"
    >
      <Container
        width={isMobile ? "100%" : "1200px"}
        marginTop="30px"
        marginBottom="30px"
        fd="column"
      >
        <Container horizontalAlign="flex-start">
          <img
            src={sejong}
            alt="Sejong Logo"
            height={isMobile ? "30px" : "50px"}
          />
          <div
            style={{
              width: "0px",
              height: "30px",
              borderLeft: "1px solid grey",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          />
          <Text
            fontColor="#14406c"
            fontFamily="SeoulLight"
            fontSize={isMobile ? "22px" : "28px"}
          >
            총동아리연합회
          </Text>
        </Container>
        <Container horizontalAlign="left" marginTop="10px">
          <Text
            fontSize={isMobile ? "10px" : "18px"}
            fontColor="grey"
            fontFamily="SeoulLight"
          >
            05006 서울특별시 광진구 능동로 209 세종대학교 학생회관 408호
          </Text>
          <div
            style={{
              width: "0px",
              height: "10px",
              borderLeft: "1px solid grey",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          />
          <Container width={isMobile ? "50px" : "80px"} horizontalAlign="left">
            <Link to="/makers">
              <Text
                fontSize={isMobile ? "10px" : "18px"}
                fontColor="grey"
                fontFamily="SeoulLight"
              >
                만든 사람들
              </Text>
            </Link>
          </Container>
        </Container>
        <Container horizontalAlign="left">
          <Text
            fontSize={isMobile ? "10px" : "18px"}
            fontColor="grey"
            fontFamily="SeoulLight"
            marginTop="5px"
          >
            Copyright(C) 세종대학교 총동아리연합회 All rights reserved
          </Text>
        </Container>
      </Container>
    </Container>
  );
}

export default Footer;
