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

import { Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [sticky, setsticky] = useState(false);
  useEffect(() => {}, [sticky]);
  window.onscroll = () => {
    const offset = window.scrollY;
    if (offset > 120) {
      setsticky(true);
      console.log(sticky);
    } else {
      setsticky(false);
      console.log(sticky);
    }
  };
  return (
    <Container fd="column">
      <Route exact path="/">
        <Header />
      </Route>
      <Navigation sticky={sticky} />
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
