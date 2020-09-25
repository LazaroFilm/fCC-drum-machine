import React, { Component } from "react";
import { Alert, Navbar } from "react-bootstrap";

export function updateDisplay(text) {
  this.setState({ text });
}

class Display extends Component {
  state = {
    text: "Initial text",
  };
  updateDisplay = updateDisplay.bind(this);
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Dr(u/ea)m Machine</Navbar.Brand>
        <Alert variant="primary" id="display">
          {this.state.text}
        </Alert>
      </Navbar>
    );
  }
}

export default Display;
