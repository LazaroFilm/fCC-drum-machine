import React, { Component } from "react";
import { Alert, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";

class Display extends Component {
  state = {
    text: "Initial text",
  };

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Dr(u/ea)m Machine</Navbar.Brand>
        <Alert variant="primary" id="display">
          {/* {this.props.children} */}
          {/* {text} */}
        </Alert>
      </Navbar>
    );
  }
}

export default Display;
