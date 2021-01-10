import React from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Text from "../components/Text";
import Remote from "../components/Remote";
import List from "../components/List";
import Listitem from "../components/Listitem";

function Main() {
  return (
    <Container
      width="1200px"
      backgroundColor="#14406c"
      marginTop="2px"
      paddingBottom="30px"
      fd="column"
    >
      <Container>
        <Container width="240px" height="1px"></Container>
        <Container
          verticalAlign="baseline"
          fd="column"
          paddingTop="20px"
          paddingBottom="20px"
          width="960px"
        >
          <Text fontColor="white" fontSize="24px">
            구성원 소개
          </Text>
          <Text fontColor="white">총동아리 연합회의 구성원을 소개합니다.</Text>
        </Container>
      </Container>
      <Container verticalAlign="flex-start">
        <Container width="240px">
          <Container backgroundColor="white" width="150px" height="200px">
            <Remote>
              <List fd="column">
                <Listitem
                  label="총동아리연합회"
                  fontSize="15px"
                  fontColor="white"
                  borderBottom="2px solid white"
                />
                <Listitem
                  label="총동연 소개"
                  fontSize="15px"
                  fontColor="white"
                  hoverBackgroundColor="white"
                  hoverColor="#14406c"
                  hoverCursor="pointer"
                />
                <Listitem
                  label="구성원 소개"
                  fontSize="15px"
                  fontColor="white"
                  hoverBackgroundColor="white"
                  hoverColor="#14406c"
                  hoverCursor="pointer"
                />
                <Listitem
                  label="찾아오시는 길"
                  fontSize="15px"
                  fontColor="white"
                  hoverBackgroundColor="white"
                  hoverColor="#14406c"
                  hoverCursor="pointer"
                />
              </List>
            </Remote>
          </Container>
        </Container>
        <Container width="930px" backgroundColor="white" marginRight="30px">
          <Container marginTop="20px" marginBottom="20px">
            <Button
              marginRight="3px"
              backgroundColor="#14406c"
              width="120px"
              height="50px"
              fontColor="white"
              fontSize="18px"
              label="회장"
            />
            <Button
              marginRight="3px"
              backgroundColor="#14406c"
              width="120px"
              height="50px"
              fontColor="white"
              fontSize="18px"
              label="부회장"
            />
            <Button
              marginRight="3px"
              backgroundColor="#14406c"
              width="120px"
              height="50px"
              fontColor="white"
              fontSize="18px"
              label="기획국장"
            />
            <Button
              marginRight="3px"
              backgroundColor="#14406c"
              width="120px"
              height="50px"
              fontColor="white"
              fontSize="18px"
              label="사무국장"
            />
            <Button
              marginRight="3px"
              backgroundColor="#14406c"
              width="120px"
              height="50px"
              fontColor="white"
              fontSize="18px"
              label="소통국장"
            />
            <Button
              marginRight="3px"
              backgroundColor="#14406c"
              width="120px"
              height="50px"
              fontColor="white"
              fontSize="18px"
              label="홍보국장"
            />
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default Main;
