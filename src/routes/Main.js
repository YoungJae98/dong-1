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
  const [petitions, setPetitions] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [reports, setReports] = useState([]);
  const [meetinglogs, setMeetinglogs] = useState([]);
  const [community, setCommunity] = useState({});
  const [file, setFile] = useState({});
  const getCommunity = () => {
    fetch("http://localhost:3001/api/community/getCommunity", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => {
        //response에서 1은 suggestion에서 2는 petition으로 구분
        setCommunity(response);
      });
  };
  const getFile = () => {
    fetch("http://localhost:3001/api/files/getFiles", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => {
        setFile(response);
      });
  };
  useEffect(() => {
    getCommunity();
    getFile();
  }, []);
  useEffect(() => {
    if (Object.keys(community).length !== 0) {
      setSuggestions(
        community["1"].sort((a, b) => (a.con > b.con ? -1 : 1)).slice(0, 4)
      );
      setPetitions(
        community["2"].sort((a, b) => (a.c_con > b.c_con ? -1 : 1)).slice(0, 4)
      );
    }
  }, [community]);
  useEffect(() => {
    if (file["1"]) setMeetinglogs(file["1"]);
    if (file["2"]) setReports(file["2"]);
  }, [file]);
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
            {petitions.map((petition) => (
              <Link
                to={`/communication/petition/${petition.c_id}`}
                key={petition.c_id}
              >
                <Container height="30px" horizontalAlign="flex-start">
                  <Container width="65px">
                    <Text
                      fontSize="18px"
                      fontFamily="SeoulLight"
                      fontColor={
                        petition.c_status === 1 ? "MediumSeaGreen" : "red"
                      }
                    >
                      [{petition.c_status === 1 ? "진행 중" : "끝남"}]
                    </Text>
                  </Container>
                  <Container width="430px" horizontalAlign="flex-start">
                    <Text fontSize="18px" fontFamily="SeoulLight">
                      {petition.c_title.length > 25
                        ? `${petition.c_title.slice(0, 30)}...`
                        : petition.c_title}
                    </Text>
                  </Container>
                  <Container width="50px" horizontalAlign="flex-start">
                    <FiThumbsUp color="#14406c" />
                    <Text
                      fontSize="18px"
                      fontFamily="SeoulLight"
                      marginLeft="3px"
                    >
                      {petition.c_con}
                    </Text>
                  </Container>
                </Container>
              </Link>
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
              <Link
                to={`/communication/petition/${suggestion.c_id}`}
                key={suggestion.c_id}
              >
                <Container height="30px" horizontalAlign="flex-start">
                  <Container width="495px" horizontalAlign="flex-start">
                    <Text fontSize="18px" fontFamily="SeoulLight">
                      {suggestion.c_title.length > 25
                        ? `${suggestion.c_title.slice(0, 30)}...`
                        : suggestion.c_title}
                    </Text>
                  </Container>
                  <Container width="50px" horizontalAlign="flex-start">
                    <FiThumbsUp color="#14406c" />
                    <Text
                      fontSize="18px"
                      fontFamily="SeoulLight"
                      marginLeft="3px"
                    >
                      {suggestion.c_con}
                    </Text>
                  </Container>
                </Container>
              </Link>
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
                key={meetinglog.f_id}
              >
                <Container width="430px" horizontalAlign="flex-start">
                  <Text fontSize="18px" fontFamily="SeoulLight">
                    {meetinglog.f_name}
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
                    {meetinglog.f_date.slice(0, 10)}
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
                key={report.f_id}
              >
                <Container width="430px" horizontalAlign="flex-start">
                  <Text fontSize="18px" fontFamily="SeoulLight">
                    {report.f_name}
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
                    {report.f_date.slice(0, 10)}
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
