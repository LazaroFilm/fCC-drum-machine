import React, { Component } from "react";
import { Alert, Navbar } from "react-bootstrap";

class Display extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Dr(u/ea)m Machine</Navbar.Brand>
        <Alert variant="primary" id="display">
          {this.props.children}
        </Alert>
      </Navbar>
    );
  }
}

export default Display;
