import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import Container from "../components/Container";
import MyCarousel from "../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Text from "../components/Text";

function Main() {
  const [hotPetitions, setHotPetitions] = useState([]);
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
    ]);
  }, []);
  return (
    <Container fd="column">
      <MyCarousel />
      <Container marginTop="20px">
        <Card width="599px" height="200px" marginRight="20px">
          <Container
            fd="column"
            horizontalAlign="flex-start"
            verticalAlign="flex-start"
            paddingLeft="15px"
            paddingTop="30px"
          >
            <Text fontSize="20px" fontFamily="Arial">
              인기 청원 목록
            </Text>
            {hotPetitions.map((petition) => (
              <Container
                height="30px"
                horizontalAlign="space-between"
                key={petition.petitionId}
              >
                <Text
                  fontSize="14px"
                  fontFamily="Arial"
                  fontColor={
                    petition.petitionState === "진행 중" ? "green" : "red"
                  }
                >
                  [{petition.petitionState}]
                </Text>
                <Text fontSize="14px" fontFamily="Arial">
                  {petition.petitionTitle}
                </Text>
                <Text fontSize="14px" fontFamily="Arial">
                  👍{petition.petitionRecommendation}
                </Text>
              </Container>
            ))}
          </Container>
        </Card>
        <Card width="599px" height="200px">
          card2
        </Card>
      </Container>
      <Container marginTop="20px">
        <Card width="599px" height="200px" marginRight="20px">
          card3
        </Card>
        <Card width="599px" height="200px">
          card4
        </Card>
      </Container>
      <Container marginTop="20px">
        <Card width="599px" height="200px" marginRight="20px">
          card5
        </Card>
        <Card width="599px" height="200px">
          card6
        </Card>
      </Container>
    </Container>
  );
}

export default Main;
