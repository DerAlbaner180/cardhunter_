import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import logo from "./sol.jpg";
import "./Card.css";

function Cards() {
  return (
    <div>
      <Card
      data-bs-theme="dark"
        className="Cards"
        style={{
          width: "10rem",
          margin: "0 auto",
          marginTop: "0.1em",
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
