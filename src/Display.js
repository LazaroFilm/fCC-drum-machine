import React, { Component } from "react";
import { Alert, Navbar, Button } from "react-bootstrap";

export function Instructions() {
  const [show, setShow] = React.useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>How to use the dr(u/ea)m machine</Alert.Heading>
        <p>
          To start, click on any drum pad to activate the drum machine, then you
          can press your keyboard keys!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Got it!
          </Button>
        </div>
      </Alert>

      {!show && (
        <Button variant="light" onClick={() => setShow(true)}>
          <sup>?</sup>
        </Button>
      )}
    </>
  );
}

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
