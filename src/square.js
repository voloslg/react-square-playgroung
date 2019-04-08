import React, { Component } from "react";

export default class Square extends Component {
  render() {
    let style = {
      width: "200px",
      height: "200px",
      border: "2px solid black",
      backgroundColor: this.props.initialColor
    };

    return <div style={style}>{/* <h1>Square</h1> */}</div>;
  }
}
