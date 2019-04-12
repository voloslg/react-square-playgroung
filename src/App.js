import React, { Component } from "react";
import "./App.css";

import Square from "./Square";
import Hideable from "./Hideable";
// import SimpleSquare from "./SimpleSquare";
// import Refs from "./playgroung/Refs.js";

const HideableSquare = Hideable(Square); // HOC

class App extends Component {
  render() {
    return (
      <div>
        <HideableSquare isHidden={true} size={100} color={"yellow"} />
        <HideableSquare isHidden={false} size={100} color={"blue"} />

        {/* <Square size={30} />
        <Square size={150} initialColor={"red"} />
        <Square size={50} initialColor={"green"} /> */}

        {/* 
        <SimpleSquare size={30} />
        <SimpleSquare size={100} color={"green"} />
        <SimpleSquare size={200} color={"red"} /> */}

        {/* <Refs /> */}
      </div>
    );
  }
}

export default App;
