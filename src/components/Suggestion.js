import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import Container from "./Container";
import Text from "./Text";

function Suggestion() {
  const [suggestion, setSuggestion] = useState({});
  const [isLogin, setisLogin] = useState(false);
  const [consents, setConsents] = useState([]);
  const [suggestionConsentInputText, setSuggestionConsentInputText] = useState(
    "동의합니다."
  );
  const writeComments = (id) => {
<<<<<<< HEAD
    fetch("http://sejongclubunion.com:3001/api/community/writeComments", {
=======
    fetch("http://localhost:3001/api/community/writeComments", {
>>>>>>> 55e7dcf040cf4281d5574404c4673fae65db0f8d
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
          showCommunity(c_id);
          setSuggestionConsentInputText("");
        } else {
          alert("이미 동의한 건의 사항입니다.");
        }
      });
  };
  const showCommunity = (id) => {
<<<<<<< HEAD
    fetch("http://sejongclubunion.com:3001/api/community/showCommunity", {
=======
    fetch("http://localhost:3001/api/community/showCommunity", {
>>>>>>> 55e7dcf040cf4281d5574404c4673fae65db0f8d
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
        setConsents(response["comments"]);
        setSuggestion(response["community"]);
      });
  };
  const loginCheck = () => {
<<<<<<< HEAD
    fetch("http://sejongclubunion.com:3001/api/account/isLoginCheck", {
=======
    fetch("http://localhost:3001/api/account/isLoginCheck", {
>>>>>>> 55e7dcf040cf4281d5574404c4673fae65db0f8d
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => {
        if (response["isLogin"]) {
          setisLogin(true);
        } else {
          setisLogin(false);
        }
      });
  };
  const location = useLocation();
  const c_id = parseInt(location.pathname.slice(26));
  useEffect(() => {
    loginCheck();
    showCommunity(c_id);
  }, [c_id]);
  return (
    <>
      <Container
        height="40px"
        marginTop="80px"
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
        borderRadius="8px"
        fd="column"
        horizontalAlign="left"
        verticalAlign="flex-start"
        paddingLeft="30px"
        paddingRight="30px"
        paddingTop="30px"
        marginTop="30px"
        width="1000px"
      >
        <Container
          verticalAlign="flex-start"
          horizontalAlign="space-between"
          height="80px"
        >
          <Container horizontalAlign="flex-start" borderBottom="1px solid grey">
            <Text fontColor="#14406c" fontSize="32px" fontFamily="SeoulLight">
              {suggestion.c_title}
            </Text>
          </Container>
          <Container
            horizontalAlign="flex-end"
            borderBottom="1px solid grey"
            width="450px"
          >
            <Text fontColor="grey" fontSize="14px" fontFamily="SeoulLight">
              건의: {suggestion.c_user} / &nbsp;
            </Text>
            <Text fontColor="grey" fontSize="14px" fontFamily="SeoulLight">
              동의 수: {suggestion.c_con} / &nbsp;
            </Text>
            <Text fontColor="grey" fontSize="14px" fontFamily="SeoulLight">
              건의 날짜: {suggestion.c_date && suggestion.c_date.slice(0, 10)}
            </Text>
          </Container>
        </Container>
        <Container
          width="960px"
          height="500px"
          horizontalAlign="flex-start"
          verticalAlign="flex-start"
          border="1px solid grey"
          marginTop="20px"
          paddingLeft="20px"
          paddingRight="20px"
          paddingBottom="20px"
          paddingTop="20px"
          scroll
        >
          <Text fontColor="black" fontSize="24px" fontFamily="SeoulLight">
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
                fontFamily: "SeoulLight",
                width: "870px",
                display: "inline",
                border: "1px solid grey",
              }}
              value={suggestionConsentInputText}
              onClick={(e) => {
                e.target.value = "";
              }}
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
              font="SeoulLight"
              borderRadius="5px"
              onClick={(e) => {
                if (isLogin) {
                  writeComments(suggestion.c_id);
                  e.preventDefault();
                } else {
                  alert("권한이 없습니다.");
                  e.preventDefault();
                }
              }}
            >
              동의하기
            </Button>
          </form>
        </Container>
        <Container
          width="960px"
          height="280px"
          border="1px solid grey"
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
                <Text fontColor="black" fontSize="22px" fontFamily="SeoulLight">
                  {consent.co_user}:&nbsp;{consent.co_body}
                </Text>
                <Text fontColor="grey" fontSize="12px" fontFamily="SeoulLight">
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
