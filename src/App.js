import Header from "./components/Header";
import Container from "./components/Container";
import Navigation from "./components/Navigation";
import Carousel from "./components/Carousel";
import Card from "./components/Card";

function App() {
  return (
    <Container fd="column">
      <Header />
      <Navigation />
      <Carousel />
      <Container marginTop="2px">
        <Card width="599px" height="200px" marginRight="2px">
          card1
        </Card>
        <Card width="599px" height="200px">
          card2
        </Card>
      </Container>
    </Container>
  );
}

export default App;
