import { useEffect, useState } from "react";
import { NavLink, Route, Link } from "react-router-dom";

import logo_inversed from "../assets/images/logo_reversed.png";
import v2 from "../assets/images/visual/visual2.jpg";
import Button from "../components/Button";

import Container from "../components/Container";
import List from "../components/List";
import Listitem from "../components/Listitem";
import Remote from "../components/Remote";
import Text from "../components/Text";

function MyPage() {
  const [isLogin, setisLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [mysuggestion, setMysuggestion] = useState([]);
  const [mypetition, setMypetition] = useState([]);
  const [mycomment, setMycomment] = useState([]);
  const getCommunityByUser = () => {
    fetch("http://localhost:3001/api/community/getCommunityByUser", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => {
        setMysuggestion(
          response["community"].filter((community) => community.c_type === 1)
        );
        setMypetition(
          response["community"].filter((community) => community.c_type === 2)
        );
      });
  };
  const getCommentByUser = () => {
    fetch("http://localhost:3001/api/community/getCommentByUser", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => {
        setMycomment(response["comments"]);
      });
  };
  const loginCheck = () => {
    fetch("http://localhost:3001/api/account/isLoginCheck", {
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
          setUserName(response["name"]);
        } else {
          setisLogin(false);
        }
      });
  };
  useEffect(() => {
    loginCheck();
  }, []);
  useEffect(() => {
    if (isLogin) {
      getCommunityByUser();
      getCommentByUser();
      console.log(mysuggestion);
      console.log(mypetition);
    }
  }, [isLogin]);

  return (
    <>
      <Container height="145px">
        <img src={v2} alt="" />
      </Container>
      <Container height="1400px" backgroundColor="">
        <Container width="200px" verticalAlign="baseline">
          <Container
            width="200px"
            height="198px"
            fd="column"
            verticalAlign="baseline"
            position="sticky"
            marginTop="90px"
          >
            <Container
              height="50px"
              horizontalAlign="left"
              verticalAlign="flex-end"
            >
              <img src={logo_inversed} alt="" width="40px" />
              <Text fontColor="#14406c" fontSize="21px" marginLeft="5px">
                마이 페이지
              </Text>
            </Container>
            <Remote
              width="200px"
              paddingTop="10px"
              paddingBottom="10px"
              marginTop="10px"
            >
              <List fd="column">
                <Button backgroundColor="white">
                  <NavLink to="/mypage/">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="나의 건의 사항"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white">
                  <NavLink to="/mypage/mypetition">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="나의 청원"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white">
                  <NavLink to="/mypage/mycomments">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="나의 동의 현황"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
              </List>
            </Remote>
          </Container>
        </Container>
        <Container
          backgroundColor=""
          width="1062px"
          fd="column"
          marginLeft="30px"
          verticalAlign="flex-start"
        >
          <Route exact path="/mypage/">
            <Container
              height="40px"
              marginTop="80px"
              marginLeft="20px"
              width="1000px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                나의 건의 사항
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
              paddingBottom="30px"
              marginTop="30px"
              width="1000px"
            >
              <Container
                width="250px"
                height="50px"
                horizontalAlign="flex-start"
                borderBottom="2px solid #14406c"
                marginBottom="20px"
              >
                <Text fontColor="#14406c" fontSize="28px">
                  {`${userName}님의 건의 사항`}
                </Text>
              </Container>
              <Container
                fd="column"
                horizontalAlign="flex-start"
                verticalAlign="flex-start"
                border="1px solid #14406c"
                scroll
              >
                {isLogin ? (
                  mysuggestion.map((item, index) => (
                    <Link to={`/communication/suggestion/${item.c_id}`}>
                      <Container
                        width="940px"
                        height="100px"
                        key={item.c_id}
                        backgroundColor={index % 2 === 0 ? "#FAFAFA" : "white"}
                        horizontalAlign="flex-start"
                        paddingLeft="30px"
                        paddingRight="30px"
                      >
                        <Container horizontalAlign="flex-start">
                          <Text fontSize="24px">{item.c_title}</Text>
                        </Container>
                        <Container width="400px">
                          <Text fontSize="16px" fontColor="grey">
                            등록 날짜: {item.c_date.slice(0, 10)} /
                          </Text>
                          <Text fontSize="16px" fontColor="grey">
                            &nbsp; 동의 수: {item.c_con}
                          </Text>
                        </Container>
                      </Container>
                    </Link>
                  ))
                ) : (
                  <Container>
                    <Text fontSize="32px">로그인 정보가 없습니다.</Text>
                  </Container>
                )}
              </Container>
            </Container>
          </Route>
          <Route exact path="/mypage/mypetition">
            <Container
              height="40px"
              marginTop="80px"
              marginLeft="20px"
              width="1000px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                나의 청원
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
              paddingBottom="30px"
              marginTop="30px"
              width="1000px"
            >
              <Container
                width="250px"
                height="50px"
                horizontalAlign="flex-start"
                borderBottom="2px solid #14406c"
                marginBottom="20px"
              >
                <Text fontColor="#14406c" fontSize="28px">
                  {`${userName}님의 청원`}
                </Text>
              </Container>
              <Container
                fd="column"
                horizontalAlign="flex-start"
                verticalAlign="flex-start"
                border="1px solid #14406c"
                scroll
              >
                {isLogin ? (
                  mypetition.map((item, index) => (
                    <Container
                      height="100px"
                      key={item.c_id}
                      backgroundColor={index % 2 === 0 ? "#FAFAFA" : "white"}
                      horizontalAlign="flex-start"
                      paddingLeft="30px"
                    >
                      <Text fontSize="24px">{item.c_title}</Text>
                    </Container>
                  ))
                ) : (
                  <Container>
                    <Text fontSize="32px">로그인 정보가 없습니다.</Text>
                  </Container>
                )}
              </Container>
            </Container>
          </Route>
          <Route exact path="/mypage/mycomments">
            <Container
              height="40px"
              marginTop="80px"
              marginLeft="20px"
              width="1000px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                나의 동의 현황
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
              paddingBottom="30px"
              marginTop="30px"
              width="1000px"
            >
              <Container
                width="250px"
                height="50px"
                horizontalAlign="flex-start"
                borderBottom="2px solid #14406c"
                marginBottom="20px"
              >
                <Text fontColor="#14406c" fontSize="28px">
                  {`${userName}님의 동의 현황`}
                </Text>
              </Container>
              <Container
                fd="column"
                horizontalAlign="flex-start"
                verticalAlign="flex-start"
                border="1px solid #14406c"
                scroll
              >
                {isLogin ? (
                  mycomment.map((item, index) => (
                    <Container
                      height="100px"
                      key={item.co_id}
                      backgroundColor={index % 2 === 0 ? "#FAFAFA" : "white"}
                      horizontalAlign="flex-start"
                      paddingLeft="30px"
                    >
                      <Text fontSize="24px">{item.co_body}</Text>
                    </Container>
                  ))
                ) : (
                  <Container>
                    <Text fontSize="32px">로그인 정보가 없습니다.</Text>
                  </Container>
                )}
              </Container>
            </Container>
          </Route>
        </Container>
      </Container>
    </>
  );
}

export default MyPage;
