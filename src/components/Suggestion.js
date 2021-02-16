import { json } from "body-parser";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import Container from "./Container";
import Text from "./Text";

function Suggestion(props) {
  const suggestion = props.location.state.suggestion;
  const suggestionId = suggestion.c_id;
  const suggestionTitle = suggestion.c_title;
  const suggestioner = suggestion.c_user;
  const suggestionDate = suggestion.c_date.slice(0, 10);
  const suggestionContent = suggestion.c_body;
  const suggestionConsensus = suggestion.c_con;
  const [consents, setConsents] = useState([]);
  const [suggestionConsentInputText, setSuggestionConsentInputText] = useState(
    ""
  );
  const writeComments = (id) => {
    fetch("http://localhost:3001/api/community/writeComments", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        id: id,
        body: suggestionConsentInputText,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response["success"]) {
          alert("댓글이 등록되었습니다.");
        }
      });
  };
  const showCommunity = (id) => {
    console.log(id);
    fetch("http://localhost:3001/api/community/showCommunity", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        //title, body, 작성자, 날짜와 댓글이 담겨있음.
        console.log(response);
      });
  };
  showCommunity(suggestionId);
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
          건의사항 보기
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
              {suggestionTitle}
            </Text>
          </Container>
          <Container
            horizontalAlign="flex-end"
            borderBottom="2px solid #14406c"
            width="450px"
          >
            <Text fontColor="grey" fontSize="14px">
              건의: {suggestioner} / &nbsp;
            </Text>
            <Text fontColor="grey" fontSize="14px">
              동의 수: {suggestionConsensus} / &nbsp;
            </Text>
            <Text fontColor="grey" fontSize="14px">
              건의 날짜: {suggestionDate}
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
            {suggestionContent}
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
                setSuggestionConsentInputText(e.target.value);
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
                  setSuggestionConsentInputText("동의합니다.");
                }

                //do suggestion consent submit event here

                document.querySelector(".suggestion-consent-input").value = "";
                setSuggestionConsentInputText("");

                e.preventDefault();
                alert("건의사항에 대한 동의가 완료되었습니다.");
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
