import React from "react";
import logo_inversed from "../assets/logo_reversed.png";
import Sejonglogo from "../assets/Sejonglogo.png";

import Container from "../components/Container";
import List from "../components/List";
import Listitem from "../components/Listitem";
import Remote from "../components/Remote";
import Text from "../components/Text";

function Main() {
  return (
    <Container height="1200px" backgroundColor="#FAFAFA">
      <Container
        backgroundColor="#FAFAFA"
        width="200px"
        fd="column"
        horizontalAlign="left"
      >
        <Container
          height="50px"
          horizontalAlign="left"
          verticalAlign="flex-end"
          marginTop="100px"
        >
          <img src={logo_inversed} alt="" width="40px" />
          <Text fontColor="#14406c" fontSize="18px" fontWeight="bold">
            정보
          </Text>
        </Container>
        <Remote
          width="200px"
          paddingTop="20px"
          paddingBottom="20px"
          paddingLeft="20px"
        >
          <List fd="column">
            {/* list item foreach로 고치기 필요 */}
            <Listitem
              height="30px"
              fontColor="#14406c"
              fontSize="18px"
              label="공약 이행도"
              marginBottom="20px"
            ></Listitem>
            <Listitem
              height="30px"
              fontColor="#14406c"
              fontSize="18px"
              label="제휴사업"
              marginBottom="20px"
            ></Listitem>
            <Listitem
              height="30px"
              fontColor="#14406c"
              fontSize="18px"
              label="서동협"
              marginBottom="20px"
            ></Listitem>
            <Listitem
              height="30px"
              fontColor="#14406c"
              fontSize="18px"
              marginBottom="20px"
              label="예결산 보고"
            ></Listitem>
            <Listitem
              height="30px"
              fontColor="#14406c"
              fontSize="18px"
              label="회의록"
            ></Listitem>
          </List>
        </Remote>
      </Container>
      <Container
        backgroundColor="#FAFAFA"
        width="1000px"
        fd="column"
        marginLeft="30px"
      >
        <Container
          backgroundColor="#FAFAFA"
          height="100px"
          horizontalAlign="left"
        >
          <Text fontColor="#14406c" fontSize="32px" marginLeft="30px">
            서동협
          </Text>
        </Container>
        <Container
          backgroundColor="white"
          border="1px solid #14406c"
          borderRadius="15px"
          fd="column"
          horizontalAlign="left"
          verticalAlign="flex-start"
        >
          <img src={Sejonglogo} alt="sejong" width="500px" />
        </Container>
      </Container>
    </Container>
  );
}

export default Main;
