import Container from "./components/Container";
import Footer from "./components/Footer";

import Main from "./routes/Main";
import ClubUnion from "./routes/ClubUnion";
import CentralClub from "./routes/CentralClub";
import Information from "./routes/Information";
import Communication from "./routes/Communication";
import Document from "./routes/Document";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";

import { Route, Switch, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Intro from "./components/Intro";
import MyPage from "./routes/MyPage";
import Manage from "./routes/Manage";

function App() {
  const path = useLocation().pathname;
  const [main, setMain] = useState(() => {
    return path === "/" ? true : false;
  });
  const [isLogin, setisLogin] = useState(false);
  const [user, setUser] = useState("");
  const [admin, setAdmin] = useState(false);
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
          if (response["auth"] === 2) {
            setAdmin(true);
          }
          setUser(response["name"]);
          setisLogin(true);
        } else {
          setisLogin(false);
        }
      });
  };
  useEffect(() => {
    loginCheck();
  }, []);
  useEffect(() => {
    setMain(path === "/" ? true : false);
  }, [path]);
  return (
    <>
      <Intro />
      <Container fd="column" backgroundColor="#F6F6F6">
        {main && <Header />}
        <Navigation
          main={main}
          setMain={setMain}
          isLogin={isLogin}
          setisLogin={setisLogin}
          admin={admin}
        />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/clubunion" component={ClubUnion} />
          <Route path="/centralclub" component={CentralClub} />
          <Route path="/information" component={Information} />
          <Route
            path="/communication"
            component={Communication}
            isLogin={isLogin}
          />
          <Route path="/document" component={Document} />
          <Route path="/signin" component={() => <Signin />} />
          <Route
            path="/mypage"
            component={() => <MyPage isLogin={isLogin} user={user} />}
          />
          <Route path="/manage" component={() => <Manage admin={admin} />} />
        </Switch>
        <Footer />
      </Container>
    </>
  );
}

export default App;
