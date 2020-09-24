import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

class DrumPad extends Component {
  state = {
    pads: {
      Q: {
        sound: `Chord 1`,
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
      },
      W: {
        sound: `Chord 2`,
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
      },
      E: {
        sound: `Chord 3`,
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
      },
      A: {
        sound: `Shaker`,
        url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
      },
      S: {
        sound: `Open HH`,
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
      },
      D: {
        sound: `Closed HH`,
        url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
      },
      Z: {
        sound: `Punchy Kick`,
        url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
      },
      X: {
        sound: `Side Stick`,
        url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
      },
      C: {
        sound: `Snare`,
        url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
      },
    },
  };

  makeButton(padName) {
    return (
      <Col className="p-1">
        <Button
          className="drum-pad"
          id={this.state.pads[padName][1]}
          variant="primary btn-lg btn-block py-5"
          type="submit"
        >
          {padName}
          <br />
          {this.state.pads[padName].sound}
        </Button>
      </Col>
    );
  }

  handleClick() {
    console.log(`clicked!`);
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
