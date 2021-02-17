import React, { useEffect, useState } from "react";

import logo_reversed from "../assets/images/logo_reversed.png";

import Card from "../components/Card";
import Container from "../components/Container";
import MyCarousel from "../components/Carousel";
import Text from "../components/Text";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { FiThumbsUp } from "react-icons/fi";

function Main() {
  const [hotPetitions, setHotPetitions] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [reports, setReports] = useState([]);
  const [meetinglogs, setMeetinglogs] = useState([]);
  useEffect(() => {
    setHotPetitions([
      {
        petitionId: 1,
        petitionTitle: "La crimosa",
        petitionRecommendation: 52,
        petitionState: "끝남",
      },
      {
        petitionId: 2,
        petitionTitle: "Winter Wind",
        petitionRecommendation: 35,
        petitionState: "진행 중",
      },
      {
        petitionId: 3,
        petitionTitle: "Tempest",
        petitionRecommendation: 14,
        petitionState: "진행 중",
      },
      {
        petitionId: 4,
        petitionTitle: "shopin",
        petitionRecommendation: 7,
        petitionState: "진행 중",
      },
    ]);
    setSuggestions([
      { suggestionId: 1, suggestionTitle: "czardas", suggestionConsensus: 52 },
      {
        suggestionId: 2,
        suggestionTitle: "Libertango",
        suggestionConsensus: 12,
      },
      {
        suggestionId: 3,
        suggestionTitle: "por una cabeza",
        suggestionConsensus: 7,
      },
    ]);
    setReports([
      { reportId: 1, reportTitle: "예산안", reportUploadDate: "2021-02-17" },
      { reportId: 2, reportTitle: "결산안", reportUploadDate: "2021-02-17" },
    ]);
    setMeetinglogs([
      {
        meetinglogId: 1,
        meetinglogTitle: "회의록1",
        meetinglogUploadDate: "2021-02-17",
      },
      {
        meetinglogId: 2,
        meetinglogTitle: "회의록2",
        meetinglogUploadDate: "2021-02-17",
      },
    ]);
  }, []);
  return (
    <Container fd="column">
      <MyCarousel />
      <Container marginTop="20px">
        <Card width="599px" height="210px" marginRight="20px">
          <Container
            fd="column"
            horizontalAlign="flex-start"
            verticalAlign="flex-start"
            paddingLeft="30px"
            paddingTop="50px"
          >
            <Container
              height="25px"
              horizontalAlign="flex-start"
              position="relative"
            >
              <img src={logo_reversed} alt="" height="40px" />
              <Text fontSize="22px" fontColor="#14406c">
                &nbsp;실시간 인기 청원
              </Text>
              <Text
                fontSize="16px"
                fontColor="grey"
                more
                fontFamily="SeoulLight"
              >
                <Link to="/communication/petition">더보기</Link>
              </Text>
            </Container>
            <Container height="20px"></Container>
            {hotPetitions.map((petition) => (
              <Container
                height="30px"
                horizontalAlign="flex-start"
                key={petition.petitionId}
              >
                <Container width="65px">
                  <Text
                    fontSize="18px"
                    fontFamily="SeoulLight"
                    fontColor={
                      petition.petitionState === "진행 중"
                        ? "MediumSeaGreen"
                        : "red"
                    }
                  >
                    [{petition.petitionState}]
                  </Text>
                </Container>
                <Container width="430px" horizontalAlign="flex-start">
                  <Text fontSize="18px" fontFamily="SeoulLight">
                    {petition.petitionTitle}
                  </Text>
                </Container>
                <Container width="50px" horizontalAlign="flex-start">
                  <FiThumbsUp color="#14406c" />
                  <Text
                    fontSize="18px"
                    fontFamily="SeoulLight"
                    marginLeft="3px"
                  >
                    {petition.petitionRecommendation}
                  </Text>
                </Container>
              </Container>
            ))}
          </Container>
        </Card>
        <Card width="599px" height="210px">
          <Container
            fd="column"
            horizontalAlign="flex-start"
            verticalAlign="flex-start"
            paddingLeft="30px"
            paddingTop="50px"
          >
            <Container
              height="25px"
              horizontalAlign="flex-start"
              position="relative"
            >
              <img src={logo_reversed} alt="" height="40px" />
              <Text fontSize="22px" fontColor="#14406c">
                &nbsp;건의 사항
              </Text>
              <Text
                fontSize="16px"
                fontColor="grey"
                more
                fontFamily="SeoulLight"
              >
                <Link to="/communication/petition">더보기</Link>
              </Text>
            </Container>
            <Container height="20px"></Container>
            {suggestions.map((suggestion) => (
              <Container
                height="30px"
                horizontalAlign="space-between"
                key={suggestion.suggestionId}
              >
                <Container width="430px" horizontalAlign="flex-start">
                  <Text fontSize="18px" fontFamily="SeoulLight">
                    {suggestion.suggestionTitle}
                  </Text>
                </Container>
                <Container width="50px" horizontalAlign="flex-start">
                  <FiThumbsUp color="#14406c" />
                  <Text
                    fontSize="18px"
                    marginLeft="3px"
                    fontFamily="SeoulLight"
                  >
                    {suggestion.suggestionConsensus}
                  </Text>
                </Container>
              </Container>
            ))}
          </Container>
        </Card>
      </Container>
      <Container marginTop="20px">
        <Card width="599px" height="210px" marginRight="20px">
          <Container
            fd="column"
            horizontalAlign="flex-start"
            verticalAlign="flex-start"
            paddingLeft="30px"
            paddingTop="50px"
          >
            <Container
              height="25px"
              horizontalAlign="flex-start"
              position="relative"
            >
              <img src={logo_reversed} alt="" height="40px" />
              <Text fontSize="22px" fontColor="#14406c">
                &nbsp;회의록
              </Text>
              <Text
                fontSize="16px"
                fontColor="grey"
                more
                fontFamily="SeoulLight"
              >
                <Link to="/information/meetinglog">더보기</Link>
              </Text>
            </Container>
            <Container height="20px"></Container>
            {meetinglogs.map((meetinglog) => (
              <Container
                height="30px"
                horizontalAlign="space-between"
                key={meetinglog.meetinglogId}
              >
                <Container width="430px" horizontalAlign="flex-start">
                  <Text fontSize="18px" fontFamily="SeoulLight">
                    {meetinglog.meetinglogTitle}
                  </Text>
                </Container>
                <Container
                  width="80px"
                  horizontalAlign="flex-start"
                  marginRight="30px"
                >
                  <Text
                    fontSize="16px"
                    fontFamily="SeoulLight"
                    fontColor="grey"
                  >
                    {meetinglog.meetinglogUploadDate}
                  </Text>
                </Container>
              </Container>
            ))}
          </Container>
        </Card>
        <Card width="599px" height="210px">
          <Container
            fd="column"
            horizontalAlign="flex-start"
            verticalAlign="flex-start"
            paddingLeft="30px"
            paddingTop="50px"
          >
            <Container
              height="25px"
              horizontalAlign="flex-start"
              position="relative"
            >
              <img src={logo_reversed} alt="" height="40px" />
              <Text fontSize="22px" fontColor="#14406c">
                &nbsp;예결산 보고
              </Text>
              <Text
                fontSize="16px"
                fontColor="grey"
                more
                fontFamily="SeoulLight"
              >
                <Link to="/information/report">더보기</Link>
              </Text>
            </Container>
            <Container height="20px"></Container>
            {reports.map((report) => (
              <Container
                height="30px"
                horizontalAlign="space-between"
                key={report.reportId}
              >
                <Container width="430px" horizontalAlign="flex-start">
                  <Text fontSize="18px" fontFamily="SeoulLight">
                    {report.reportTitle}
                  </Text>
                </Container>
                <Container
                  width="80px"
                  horizontalAlign="flex-start"
                  marginRight="30px"
                >
                  <Text
                    fontSize="16px"
                    fontFamily="SeoulLight"
                    fontColor="grey"
                  >
                    {report.reportUploadDate}
                  </Text>
                </Container>
              </Container>
            ))}
          </Container>
        </Card>
      </Container>
    </Container>
  );
}

export default Main;
