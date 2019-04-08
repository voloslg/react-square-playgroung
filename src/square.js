import React, { Component } from "react";

export default class Square extends Component {
  render() {
    let style = {
      width: "200px",
      height: "200px",
      border: "1px solid green"
    };

    return (
      <div style={style}>
        <h1>Square</h1>
      </div>
    );
  }
}
