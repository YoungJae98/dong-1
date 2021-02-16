import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Button from "./Button";
import Container from "./Container";
import Text from "./Text";

function Suggestion(props) {
  const [suggestion, setSuggestion] = useState({});
  const [consents, setConsents] = useState([]);
  const [suggestionConsentInputText, setSuggestionConsentInputText] = useState(
    "동의합니다."
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
        setConsents(response["comments"]);
        setSuggestion(response["community"]);
        console.log(response);
      });
  };
  const location = useLocation();
  const c_id = parseInt(location.pathname.slice(26));
  useEffect(() => {
    showCommunity(c_id);
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
              {suggestion.c_title}
            </Text>
          </Container>
          <Container
            horizontalAlign="flex-end"
            borderBottom="2px solid #14406c"
            width="450px"
          >
            <Text fontColor="grey" fontSize="14px">
              건의: {suggestion.c_user} / &nbsp;
            </Text>
            <Text fontColor="grey" fontSize="14px">
              동의 수: {suggestion.c_con} / &nbsp;
            </Text>
            <Text fontColor="grey" fontSize="14px">
              건의 날짜: {suggestion.c_date && suggestion.c_date.slice(0, 10)}
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
            {suggestion.c_body}
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
              onClick={(e) => {
                e.target.value = "";
              }}
              onChange={(e) => {
                setSuggestionConsentInputText(e.target.value);
                console.log(e.target.value);
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
                console.log(suggestionConsentInputText);
                writeComments(suggestion.c_id);
                e.preventDefault();
                // history.push(`/communication/suggestion/${suggestion.c_id}`);
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
          {consents.length !== 0 &&
            consents.map((consent) => (
              <Container
                width="940px"
                height="30px"
                borderBottom="1px solid grey"
                horizontalAlign="space-between"
                key={consent.co_id}
              >
                <Text fontColor="black" fontSize="22px">
                  {consent.co_user}:&nbsp;{consent.co_body}
                </Text>
                <Text fontColor="grey" fontSize="12px">
                  {consent.co_date.slice(0, 10)}
                </Text>
              </Container>
            ))}
        </Container>
      </Container>
    </>
  );
}

export default Suggestion;
