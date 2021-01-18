import Container from "./components/Container";
import Footer from "./components/Footer";

import Main from "./routes/Main";
import ClubUnion from "./routes/ClubUnion";
import CentralClub from "./routes/CentralClub";
import Information from "./routes/Information";
import Communication from "./routes/Communication";
import Document from "./routes/Document";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Container fd="column" backgroundColor="#FAFAFA">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/clubunion" component={ClubUnion} />
        <Route path="/centralclub" component={CentralClub} />
        <Route path="/information" component={Information} />
        <Route path="/communication" component={Communication} />
        <Route path="/document" component={Document} />
      </Switch>
      <Footer />
    </Container>
  );
}

export default App;
