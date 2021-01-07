import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>컴포넌트 개발중</p>
        <Button size="small" label="test1" />
        <Button primary size="medium" label="test2" />
        <Button
          primary
          size="large"
          backgroundColor="cyan"
          label="test3"
          marginTop="30px"
        />
      </header>
    </div>
  );
}

export default App;
