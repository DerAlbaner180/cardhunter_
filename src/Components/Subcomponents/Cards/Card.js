import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import logo from "./logo.svg";
import "./Card.css";

function Cards() {
  return (
    <div>
      <Card
      data-bs-theme="dark"
        className="Cards"
        style={{
          width: "18rem",
          margin: "0 auto",
          marginTop: "1em",
          float: "none",
          marginBottom: "10px",
          borderStyle: "solid",
          borderColor: "lightgray",
        }}
      >
        <Card.Img
          variant="top"
          src={logo}
          style={{
            borderStyle: "solid",
            borderRadius: "0.2em",
            borderColor: "lightgray",
            textAlign: "center",
          }}
        />{" "}
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card 's content.{" "}
          </Card.Text>{" "}
          <Button variant="primary" to="">
            {" "}
            Go somewhere{" "}
          </Button>{" "}
        </Card.Body>{" "}
      </Card>{" "}
    </div>
  );
}

export default Cards;
