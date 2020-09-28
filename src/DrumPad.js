import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

const pads = {
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
};

class DrumPad extends Component {
  makeButton(padName) {
    return (
      <Col className="p-1">
        <Button
          className="drum-pad"
          id={`pad${padName}`}
          variant="primary btn-lg btn-block py-5"
          type="submit"
          onClick={this.handleClick}
          onKeyDown={this.keyPressed}
        >
          {padName}
          <audio
            className="clip"
            id={padName}
            src={pads[padName].url}
            type="audio/mpeg"
          ></audio>
        </Button>
      </Col>
    );
  }

  keyPressed(e) {
    console.log(e);
    const padName = e.key.toUpperCase();
    console.log(padName);
    const audioClip = document.getElementById(padName);
    console.log(`${padName} pressed!`);
    switch (padName) {
      case "Q":
      case "W":
      case "E":
      case "A":
      case "S":
      case "D":
      case "Z":
      case "X":
      case "C":
        console.log(audioClip.play());

        audioClip.currentTime = 0;
        audioClip.play();
        break;
      default:
        console.log(`Wrong key ${padName}`);
        break;
    }
  }

  handleClick(e) {
    console.log(e.target.id);
    const padName = e.target.id;
    const clipName = padName.charAt(padName.length - 1);
    const audioClip = document.getElementById(clipName);
    console.log(`${padName} clicked!`);
    audioClip.currentTime = 0;
    audioClip.play();
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
