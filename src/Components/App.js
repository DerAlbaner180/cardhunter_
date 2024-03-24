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
      </header>{" "}
    </div>
  );
}

export default App;
