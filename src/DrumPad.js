import React, { Component } from "react";
// import Button from "react-bootstrap/Button";
import { Button, Container, Row, Col } from "react-bootstrap";

class DrumPad extends Component {
  state = {
    pads: {
      Q: `boom`,
      W: `baf`,
      E: `burp`,
      A: `kaboom`,
      S: `sploosh`,
      D: `bark`,
      Z: `moo`,
      X: `bzzz`,
      C: `katchoo`,
    },
  };

  makeButton(padName) {
    return (
      <Col className="p-1">
        <Button
          className="drum-pad"
          id={this.state.pads[padName]}
          variant="primary btn-lg btn-block py-5"
          type="submit"
        >
          {padName}
        </Button>
      </Col>
    );
  }

  render() {
    return (
      <div>
        Drum Pad
        <br />
        <Container>
          <Row>
            {this.makeButton("Q")}
            {this.makeButton("W")}
            {this.makeButton("E")}
          </Row>
          <Row>
            {this.makeButton("A")}
            {this.makeButton("S")}
            {this.makeButton("D")}
          </Row>
          <Row>
            {this.makeButton("Z")}
            {this.makeButton("X")}
            {this.makeButton("C")}
          </Row>
        </Container>
      </div>
    );
  }
}

export default DrumPad;
