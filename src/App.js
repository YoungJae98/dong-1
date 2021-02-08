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

function App() {
  const path = useLocation().pathname;
  const [main, setMain] = useState(() => {
    return path === "/" ? true : false;
  });
  useEffect(() => {
    setMain(path === "/" ? true : false);
  }, [path]);

  return (
    <Container fd="column" backgroundColor="#F6F6F6">
      {main && <Header />}
      <Navigation main={main} setMain={setMain} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/clubunion" component={ClubUnion} />
        <Route path="/centralclub" component={CentralClub} />
        <Route path="/information" component={Information} />
        <Route path="/communication" component={Communication} />
        <Route path="/document" component={Document} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
      <Footer />
    </Container>
  );
}

export default App;
