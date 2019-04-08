import React, { Component } from "react";
import "./App.css";

import Square from "./Square";
import Refs from "./playgroung/Refs.js";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Square />
        <Square initialColor={"red"} />
        <Square initialColor={"green"} /> */}
        <Refs />
      </div>
    );
  }
}

export default App;
