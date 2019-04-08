import React, { Component } from "react";
import PropTypes from "prop-types";
import "../Square.css";

const getTitile = () => "Function title";

export default class Square extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentColor: this.props.initialColor
    }
  }



  setCurrentColor = () => {
    let color = this.testInput.value
    this.setState({
      currentColor: color
    })
  }

  render() {

    let style = {
      width: "100px",
      height: "100px",
      border: "2px solid black",
      backgroundColor: this.state.currentColor
    }


    return (
      <div >
        <div className="Square" style={style}>

        </div>
        <div className="SquareControls">
          <input
            ref={(input) => this.testInput = input}
            type="text"
            name=""
            id=""
            placeholder="Color..."
          />
          <button
            onClick={this.setCurrentColor}
          >
            Ok
          </button>
        </div>
      </div >
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
