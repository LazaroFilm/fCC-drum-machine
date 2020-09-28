import React, { Component } from "react";
// import logo from "./logo.svg";
import Display from "./Display";
import { Instructions } from "./Display";
import DrumPad from "./DrumPad";
import { Alert } from "react-bootstrap";
// import "./App.css";

class App extends Component {
  state = { displayState: "this is display state" };

  handleDisplay(e) {
    this.setState({
      displayState: "It's working!!",
    });
  }

  render() {
    return (
      <div className="App">
        <Display>{this.state.displayState}</Display>
        <DrumPad />
        <Instructions />
      </div>
    );
  }
}

export default App;
