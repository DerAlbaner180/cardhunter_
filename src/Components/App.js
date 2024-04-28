import "./App.css";
import Navbar from "./Subcomponents/Navbar/Navbar";
import Cards from "./Subcomponents/Cards/Card";
import Carousel from "./Subcomponents/Carousel/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <header className="App-header">

        <Container fluid style={{backgroundColor:"rgba(20, 22, 27, 0.3)",borderRadius:"5px"}}>
          <Row>
            <Col style={{margin:"0.5em", padding:"1em" , borderStyle:"solid"}}>
              <Container >
                <Row>
                  <Col>
                    <Cards />
                  </Col>
                  <Col>
                    <Cards />
                  </Col>
                  <Col>
                    <Cards />
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col style={{margin:"0.5em", padding:"1em" , borderStyle:"solid"}}>
              <Row>
                <Col>
                  <Cards />
                </Col>
                <Col>
                  <Cards />
                </Col>
                <Col>
                  <Cards />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </header>{" "}
    </div>
  );
}

export default App;
