import React, { Component } from "react";
import PropTypes from "prop-types";
import "../Square.css";

const getTitile = () => "Function title";

export default class Square extends Component {
  render() {
    let textInput;
    let currentColor;

    let style = {
      width: "100px",
      height: "100px",
      border: "2px solid black",
      backgroundColor: this.props.initialColor
    };

    return (
      <div className="Square" style={style}>
        <div className="SquareControls">
          <input
            ref={element => {
              textInput = element;
            }}
            type="text"
            name=""
            id=""
            placeholder="Color..."
          />
          <button
            onClick={() => {
              currentColor = textInput.value;
            }}
          >
            Ok
          </button>
        </div>
      </div>
    );
  }
}

// Props validation
Square.propTypes = {
  initialColor: PropTypes.string.isRequired
};

// Default props
Square.defaultProps = {
  initialColor: "gray"
};
