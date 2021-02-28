/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import logo_reversed from "../assets/images/logo_reversed.png";

import Card from "../components/Card";
import Container from "../components/Container";
import MyCarousel from "../components/Carousel";
import Text from "../components/Text";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { FiThumbsUp } from "react-icons/fi";
import MoonLoader from "react-spinners/MoonLoader";

function Main() {
  const [petitions, setPetitions] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [reports, setReports] = useState([]);
  const [meetinglogs, setMeetinglogs] = useState([]);
  const [community, setCommunity] = useState({});
  const [file, setFile] = useState({});
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const isPC = useMediaQuery({ query: "(min-width : 1240px)" });
  const isTablet = useMediaQuery({
    query: "(min-width : 501px) and (max-width :1240px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 501px)" });
  const getCommunity = () => {
    fetch("http://18.217.248.102:3001/api/community/getCommunity", {
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
    fetch("http://18.217.248.102:3001/api/files/getFiles", {
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
  const getImageData = async () => {
    for (let j = 0; j < file[4].length; j++) {
      await fetch("http://18.217.248.102:3001/api/files/getFileData", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          f_originalname: file[4][j]["f_originalname"],
        }),
      })
        .then((response) => response.blob())
        .then((response) => {
          let url = URL.createObjectURL(response);
          let data = images;
          data.push(url);
          setImages(data);
        });
    }
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
    if (Object.keys(file).length !== 0) {
      getImageData().then(() => {
        setIsLoaded(true);
      });
      if (file["1"]) setMeetinglogs(file["1"]);
      if (file["2"]) setReports(file["2"]);
    }
  }, [file]);
  return (
    <Container fd="column" horizontalAlign="flex-start">
      {isPC || isTablet ? (
        <>
          {isLoaded ? (
            <MyCarousel images={images} />
          ) : (
            <Container height="600px">
              <MoonLoader color="#14406c" />
            </Container>
          )}
        </>
      ) : (
        <></>
      )}
      <Container
        marginTop="20px"
        fd={isPC ? null : "column"}
        height={isPC ? "210px" : "450px"}
      >
        <Card
          width={isMobile ? "100%" : "599px"}
          height="210px"
          marginRight={isPC && "20px"}
        >
          <Container
            fd="column"
            horizontalAlign="flex-start"
            verticalAlign="flex-start"
            paddingLeft="3%"
            paddingTop="50px"
          >
            <Container
              height="25px"
              horizontalAlign="flex-start"
              position="relative"
            >
              <img
                src={logo_reversed}
                alt=""
                height={isMobile ? "30px" : "40px"}
              />
              <Text
                fontSize={isMobile ? "18px" : "22px"}
                fontColor="#14406c"
                fontFamily={isMobile ? "SeoulLight" : ""}
              >
                &nbsp;실시간 인기 청원
              </Text>
              <Text
                fontSize={isMobile ? "14px" : "16px"}
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
                style={{ width: "100%" }}
              >
                <Container height="30px" horizontalAlign="flex-start">
                  <Container width={isMobile ? "20%" : "10%"}>
                    <Text
                      fontSize={isMobile ? "16px" : "18px"}
                      fontFamily="SeoulLight"
                      fontColor={
                        petition.c_status === 1 ? "MediumSeaGreen" : "red"
                      }
                    >
                      [{petition.c_status === 1 ? "진행중" : "끝남"}]
                    </Text>
                  </Container>
                  <Container
                    width={isMobile ? "60%" : "80%"}
                    horizontalAlign="flex-start"
                  >
                    <Text
                      fontSize={isMobile ? "16px" : "18px"}
                      fontFamily="SeoulLight"
                    >
                      {petition.c_title.length > (isMobile ? 12 : 25)
                        ? `${petition.c_title.slice(0, isMobile ? 12 : 30)}..`
                        : petition.c_title}
                    </Text>
                  </Container>
                  <Container width="10%" horizontalAlign="flex-start">
                    <FiThumbsUp color="#14406c" />
                    <Text
                      fontSize={isMobile ? "16px" : "18px"}
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
        <Card
          width={isMobile ? "100%" : "599px"}
          height="210px"
          marginTop={!isPC && "20px"}
        >
          <Container
            fd="column"
            horizontalAlign="flex-start"
            verticalAlign="flex-start"
            paddingLeft="3%"
            paddingTop="50px"
          >
            <Container
              height="25px"
              horizontalAlign="flex-start"
              position="relative"
            >
              <img
                src={logo_reversed}
                alt=""
                height={isMobile ? "30px" : "40px"}
              />
              <Text
                fontSize={isMobile ? "18px" : "22px"}
                fontColor="#14406c"
                fontFamily={isMobile ? "SeoulLight" : ""}
              >
                &nbsp;건의 사항
              </Text>
              <Text
                fontSize={isMobile ? "14px" : "16px"}
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
                style={{ width: "100%" }}
              >
                <Container height="30px" horizontalAlign="flex-start">
                  <Container
                    marginLeft={isMobile ? "3%" : ""}
                    width={isMobile ? "80%" : "90%"}
                    horizontalAlign="flex-start"
                  >
                    <Text
                      fontSize={isMobile ? "16px" : "18px"}
                      fontFamily="SeoulLight"
                    >
                      {suggestion.c_title.length > (isMobile ? 20 : 25)
                        ? `${suggestion.c_title.slice(
                            0,
                            isMobile ? 20 : 30
                          )}...`
                        : suggestion.c_title}
                    </Text>
                  </Container>
                  <Container width="10%" horizontalAlign="flex-start">
                    <FiThumbsUp color="#14406c" />
                    <Text
                      fontSize={isMobile ? "16px" : "18px"}
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
      <Container
        marginTop="20px"
        fd={isPC ? null : "column"}
        height={isPC ? "210px" : "450px"}
      >
        <Card
          width={isMobile ? "100%" : "599px"}
          height="210px"
          marginRight={isPC && "20px"}
        >
          <Container
            fd="column"
            horizontalAlign="flex-start"
            verticalAlign="flex-start"
            paddingLeft="3%"
            paddingTop="50px"
          >
            <Container
              height="25px"
              horizontalAlign="flex-start"
              position="relative"
            >
              <img
                src={logo_reversed}
                alt=""
                height={isMobile ? "30px" : "40px"}
              />
              <Text
                fontSize={isMobile ? "18px" : "22px"}
                fontColor="#14406c"
                fontFamily={isMobile ? "SeoulLight" : ""}
              >
                &nbsp;회의록
              </Text>
              <Text
                fontSize={isMobile ? "14px" : "16px"}
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
                <Container width="90%" horizontalAlign="flex-start">
                  <Text
                    fontSize={isMobile ? "16px" : "18px"}
                    fontFamily="SeoulLight"
                  >
                    {meetinglog.f_name}
                  </Text>
                </Container>
                <Container
                  width={isMobile ? "35%" : "15%"}
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
        <Card
          width={isMobile ? "100%" : "599px"}
          height="210px"
          marginTop={!isPC && "20px"}
        >
          <Container
            fd="column"
            horizontalAlign="flex-start"
            verticalAlign="flex-start"
            paddingLeft="3%"
            paddingTop="50px"
          >
            <Container
              height="25px"
              horizontalAlign="flex-start"
              position="relative"
            >
              <img
                src={logo_reversed}
                alt=""
                height={isMobile ? "30px" : "40px"}
              />
              <Text
                fontSize={isMobile ? "18px" : "22px"}
                fontColor="#14406c"
                fontFamily={isMobile ? "SeoulLight" : ""}
              >
                &nbsp;예결산 보고
              </Text>
              <Text
                fontSize={isMobile ? "14px" : "16px"}
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
                <Container horizontalAlign="flex-start" width="90%">
                  <Text
                    fontSize={isMobile ? "16px" : "18px"}
                    fontFamily="SeoulLight"
                  >
                    {report.f_name}
                  </Text>
                </Container>
                <Container
                  horizontalAlign="flex-start"
                  marginRight="30px"
                  width={isMobile ? "35%" : "15%"}
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
