import React, { Component } from "react";
import logo from "./logo.svg";
import Display from "./Display";
import DrumPad from "./DrumPad";
// import "./App.css";

class App extends Component {
  state = { displayState: "this is display state" };
  render() {
    return (
      <div className="App">
        <Display>{this.state.displayState}</Display>
        <DrumPad />
      </div>
    );
  }
}

export default App;
