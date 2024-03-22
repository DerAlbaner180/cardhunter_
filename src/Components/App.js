import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Subcomponents/Navbar/Navbar";
import Cards from "./Subcomponents/Cards/Card";
import Pictures from "./Subcomponents/Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Pictures/>
      <header className="App-header">
        <Cards/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code> src / App.js </code> and save to reload.{" "}
        </p>{" "}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{" "}
        </a>{" "}
      </header>{" "}
    </div>
  );
}

export default App;
