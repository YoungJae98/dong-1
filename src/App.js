import Container from "./components/Container";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Main from "./routes/Main";
import ClubUnion from "./routes/ClubUnion";
import CentralClub from "./routes/CentralClub";
import Information from "./routes/Information";
import Communication from "./routes/Communication";
import Document from "./routes/Document";

import { Route, useLocation } from "react-router-dom";
import { useState } from "react";

function App() {
  const [sticky, setsticky] = useState(false);
  const current = useLocation();
  window.onscroll = () => {
    const offset = window.scrollY;
    const stickyLimit = current.pathname === "/" ? 120 : 0;
    if (offset > stickyLimit) {
      setsticky(true);
    } else {
      setsticky(false);
    }
  };
  return (
    <Container fd="column">
      <Route exact path="/">
        <Header />
      </Route>
      <Container width="100%" height="80px">
        <Container
          width="100%"
          height="80px"
          backgroundColor="#FAFAFA"
          position={sticky ? "fixed" : ""}
        >
          <Navigation />
        </Container>
      </Container>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/clubunion">
        <ClubUnion />
      </Route>
      <Route path="/centralclub">
        <CentralClub />
      </Route>
      <Route path="/information">
        <Information />
      </Route>
      <Route path="/communication">
        <Communication />
      </Route>
      <Route path="/document">
        <Document />
      </Route>
      <Footer />
    </Container>
  );
}

export default App;
