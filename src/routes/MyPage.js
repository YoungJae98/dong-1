import { NavLink, Route, useHistory } from "react-router-dom";

import logo_inversed from "../assets/images/logo_reversed.png";
import v2 from "../assets/images/visual/visual2.jpg";
import Button from "../components/Button";

import Container from "../components/Container";
import List from "../components/List";
import Listitem from "../components/Listitem";
import Remote from "../components/Remote";
import Text from "../components/Text";

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
      console.log(response);
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
      console.log(response);
    });
};

function MyPage({ isLogin }) {
  const history = useHistory();
  const redirectToHome = () => {
    history.push("/");
    history.go(0);
  };

  if (isLogin)
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
              marginTop="8px"
            >
              <Container
                height="50px"
                horizontalAlign="left"
                verticalAlign="flex-end"
              >
                <img src={logo_inversed} alt="" width="40px" />
                <Text
                  fontColor="#14406c"
                  fontSize="21px"
                  fontFamily="SeoulBold"
                >
                  마이 페이지
                </Text>
              </Container>
              <Remote width="200px" paddingTop="10px" paddingBottom="10px">
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
                        label="나의 댓글"
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
                marginTop="20px"
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
                border="1px solid #14406c"
                borderRadius="8px"
                fd="column"
                horizontalAlign="left"
                verticalAlign="flex-start"
                paddingLeft="30px"
                paddingRight="30px"
                paddingTop="30px"
                width="1000px"
              ></Container>
            </Route>
            <Route exact path="/mypage/mypetition">
              <Container
                height="40px"
                marginTop="20px"
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
                border="1px solid #14406c"
                borderRadius="8px"
                fd="column"
                horizontalAlign="left"
                verticalAlign="flex-start"
                paddingLeft="30px"
                paddingRight="30px"
                paddingTop="30px"
                width="1000px"
              ></Container>
            </Route>
            <Route exact path="/mypage/mycomments">
              <Container
                height="40px"
                marginTop="20px"
                marginLeft="20px"
                width="1000px"
                horizontalAlign="left"
              >
                <Text fontColor="#14406c" fontSize="32px">
                  나의 댓글
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
              ></Container>
            </Route>
          </Container>
        </Container>
      </>
    );
  else {
    alert("로그인 정보가 없습니다.");
    redirectToHome();
  }
}

export default MyPage;
