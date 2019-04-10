import React, { Component } from "react";
import "./App.css";

import Square from "./Square";
// import Refs from "./playgroung/Refs.js";

class App extends Component {
  render() {
    return (
      <div>
        <Square size={30} />
        <Square size={150} initialColor={"red"} />
        <Square size={50} initialColor={"green"} />

        {/* <Refs /> */}
      </div>
    );
  }
}

export default App;
