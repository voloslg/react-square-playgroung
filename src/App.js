import React, { Component } from "react";
import "./App.css";

import Square from "./Square";

class App extends Component {
  render() {
    return (
      <div>
        <Square />
        <Square initialColor={"red"} />
        <Square initialColor={"green"} />
      </div>
    );
  }
}

export default App;
