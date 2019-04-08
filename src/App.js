import React, { Component } from "react";
import "./App.css";

import Square from "./square";

class App extends Component {
  render() {
    return (
      <div>
        <Square initialColor={"blue"} />
        <Square initialColor={"red"} />
        <Square initialColor={"green"} />
      </div>
    );
  }
}

export default App;
