import React, { useEffect, useState } from "react";
import Button from "./Button";
import Container from "./Container";
import Text from "./Text";

function Suggestion(props) {
  const petition = props.location.state.petition;
  const petitionTitle = petition.c_title;
  const petitioner = petition.c_user;
  const petitionDate = petition.c_date.slice(0, 10);
  const petitionContent = petition.c_body;
  const petitionConsensus = petition.c_con;
  const [consents, setConsents] = useState([]);
  const [petitionConsentInputText, setPetitionConsentInputText] = useState("");
  useEffect(() => {
    setConsents([
      {
        consenterID: "18011689",
        consenterName: "김훈래",
        consentContent: "동의합니다.",
        consentDate: "2021-02-12",
      },
      {
        consenterID: "18011681",
        consenterName: "김훈래",
        consentContent: "동의합니다.",
        consentDate: "2021-02-12",
      },
      {
        consenterID: "18011682",
        consenterName: "김훈래",
        consentContent: "동의합니다.",
        consentDate: "2021-02-12",
      },
      {
        consenterID: "18011683",
        consenterName: "김훈래",
        consentContent: "동의합니다.",
        consentDate: "2021-02-12",
      },
      {
        consenterID: "18011684",
        consenterName: "김훈래",
        consentContent: "동의합니다.",
        consentDate: "2021-02-12",
      },
      {
        consenterID: "18011685",
        consenterName: "김훈래",
        consentContent: "동의합니다.",
        consentDate: "2021-02-12",
      },
    ]);
  }, []);
  return (
    <>
      <Container
        height="40px"
        marginTop="20px"
        marginLeft="20px"
        width="1000px"
        horizontalAlign="left"
      >
        <Text fontColor="#14406c" fontSize="32px">
          회칙 개정 요구 청원 보기
        </Text>
      </Container>
      <Container
        backgroundColor="white"
        border="1px solid #14406c"
        borderRadius="8px"
        fd="column"
        horizontalAlign="left"
        verticalAlign="flex-start"
        paddingLeft="30px"
        paddingRight="30px"
        paddingTop="30px"
        width="1000px"
      >
        <Container
          verticalAlign="flex-start"
          horizontalAlign="space-between"
          height="50px"
        >
          <Container
            horizontalAlign="flex-start"
            borderBottom="2px solid #14406c"
          >
            <Text fontColor="#14406c" fontSize="32px">
              {petitionTitle}
            </Text>
          </Container>
          <Container
            horizontalAlign="flex-end"
            borderBottom="2px solid #14406c"
            width="450px"
          >
            <Text fontColor="grey" fontSize="14px">
              건의: {petitioner} / &nbsp;
            </Text>
            <Text fontColor="grey" fontSize="14px">
              동의 수: {petitionConsensus} / &nbsp;
            </Text>
            <Text fontColor="grey" fontSize="14px">
              청원 날짜: {petitionDate}
            </Text>
          </Container>
        </Container>
        <Container
          width="960px"
          height="500px"
          horizontalAlign="flex-start"
          verticalAlign="flex-start"
          border="2px solid #14406c"
          marginTop="20px"
          paddingLeft="20px"
          paddingRight="20px"
          paddingBottom="20px"
          paddingTop="20px"
          scroll
        >
          <Text fontColor="black" fontSize="24px">
            {petitionContent}
          </Text>
        </Container>
        <Container height="30px" marginTop="20px">
          <form
            style={{
              width: "100%",
              height: "30px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <input
              type="text"
              style={{
                height: "24px",
                fontSize: "22px",
                fontFamily: "SeoulBold",
                width: "870px",
                display: "inline",
                border: "2px solid #14406c",
              }}
              placeholder="동의합니다."
              onChange={(e) => {
                setPetitionConsentInputText(e.target.value);
              }}
              className="suggestion-consent-input"
            />
            <Button
              width="100px"
              height="30px"
              backgroundColor="#14406c"
              fontColor="white"
              borderRadius="5px"
              onClick={(e) => {
                if (
                  document.querySelector(".suggestion-consent-input").value ===
                  ""
                ) {
                  setPetitionConsentInputText("동의합니다.");
                }

                //do suggestion consent submit event here

                document.querySelector(".suggestion-consent-input").value = "";
                setPetitionConsentInputText("");

                e.preventDefault();
                alert("청원에 대한 동의가 완료되었습니다.");
              }}
            >
              동의하기
            </Button>
          </form>
        </Container>
        <Container
          width="960px"
          height="280px"
          border="2px solid #14406c"
          marginTop="20px"
          paddingLeft="20px"
          paddingRight="20px"
          paddingBottom="20px"
          paddingTop="20px"
          horizontalAlign="flex-start"
          verticalAlign="flex-start"
          display="block"
          fd="column"
          scroll
        >
          {consents.map((consent) => (
            <Container
              width="940px"
              height="30px"
              borderBottom="1px solid grey"
              horizontalAlign="space-between"
              key={consent.consenterID}
            >
              <Text fontColor="black" fontSize="22px">
                {consent.consenterName}:&nbsp;{consent.consentContent}
              </Text>
              <Text fontColor="grey" fontSize="12px">
                {consent.consentDate}
              </Text>
            </Container>
          ))}
        </Container>
      </Container>
    </>
  );
}

export default Suggestion;
