import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import Container from "../components/Container";
import MyCarousel from "../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Text from "../components/Text";

function Main() {
  const [hotPetitions, setHotPetitions] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
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
            <Text fontSize="22px">실시간 인기 청원</Text>
            <Container height="10px"></Container>
            {hotPetitions.map((petition) => (
              <Container
                height="30px"
                horizontalAlign="space-between"
                key={petition.petitionId}
              >
                <Container width="100px">
                  <Text
                    fontSize="18px"
                    fontColor={
                      petition.petitionState === "진행 중" ? "green" : "red"
                    }
                  >
                    [{petition.petitionState}]
                  </Text>
                </Container>
                <Container width="100px" horizontalAlign="flex-start">
                  <Text fontSize="18px">{petition.petitionTitle}</Text>
                </Container>
                <Container width="50px" horizontalAlign="flex-start">
                  <Text fontSize="18px">
                    👍{petition.petitionRecommendation}
                  </Text>
                </Container>
              </Container>
            ))}
          </Container>
        </Card>
        <Card width="599px" height="200px">
          <Container
            fd="column"
            horizontalAlign="flex-start"
            verticalAlign="flex-start"
            paddingLeft="15px"
            paddingTop="30px"
          >
            <Text fontSize="22px">건의사항</Text>
            <Container height="10px"></Container>
            {suggestions.map((suggestion) => (
              <Container
                height="30px"
                horizontalAlign="space-between"
                key={suggestion.petitionId}
              >
                <Container width="100px">
                  <Text fontSize="18px">[{suggestion.petitionState}]</Text>
                </Container>
                <Container width="100px" horizontalAlign="flex-start">
                  <Text fontSize="18px">{suggestion.suggestionTitle}</Text>
                </Container>
                <Container width="50px" horizontalAlign="flex-start">
                  <Text fontSize="18px">
                    👍{suggestion.suggestionConsensus}
                  </Text>
                </Container>
              </Container>
            ))}
          </Container>
        </Card>
      </Container>
      <Container marginTop="20px">
        <Card width="599px" height="200px" marginRight="20px">
          <Container
            fd="column"
            horizontalAlign="flex-start"
            verticalAlign="flex-start"
            paddingLeft="15px"
            paddingTop="30px"
          >
            <Text fontSize="22px">회의록</Text>
          </Container>
        </Card>
        <Card width="599px" height="200px">
          <Container
            fd="column"
            horizontalAlign="flex-start"
            verticalAlign="flex-start"
            paddingLeft="15px"
            paddingTop="30px"
          >
            <Text fontSize="22px">예결산 보고</Text>
          </Container>
        </Card>
      </Container>
    </Container>
  );
}

export default Main;
