import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Square.css";

export default class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: this.props.initialColor,
      displaySquare: true
    };
  }

  setCurrentColor = () => {
    console.log("setCurrentColor", this.refs.colorInput.value);
    let color = this.refs.colorInput.value;
    this.setState({
      currentColor: color,
      displaySquare: this.props.initialIsHidden
    });
  };

  showToggle = () => {
    this.setState(currentState => {
      // Correct way to get current value of the state to use a callback
      return {
        displaySquare: !currentState.displaySquare
      };
    });
  };

  render() {
    let size = `${this.props.size}px`;
    let style = {
      width: size,
      height: size,
      border: "2px solid black",
      backgroundColor: this.state.currentColor,
      display: this.state.displaySquare ? "none" : "block"
    };

    return (
      <div className="SquareContainer">
        <div className="Square" style={style} />
        <div className="SquareControls">
          <input
            // ref={input => (this.colorInput = input)}
            ref="colorInput"
            type="text"
            name=""
            id=""
            placeholder="Color..."
          />
          <button onClick={this.setCurrentColor}>Ok</button>
          <button onClick={() => this.showToggle()}>
            {this.state.displaySquare ? "Show" : "Hide"}
          </button>
        </div>
        <div className="clear" />
      </div>
    );
  }
}

// Props validation
Square.propTypes = {
  initialColor: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  initialIsHidden: PropTypes.bool
};

// Default props
Square.defaultProps = {
  initialColor: "gray",
  initialIsHidden: false
};
