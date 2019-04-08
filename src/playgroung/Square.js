import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Square.css";

const getTitile = () => "Function title";

export default class Square extends Component {
  render() {
    const theTitle = <strong>Bold title</strong>;

    let elements = [<p>1 element</p>, <p>2 element</p>, <p>3 element</p>];

    let style = {
      width: "200px",
      height: "200px",
      border: "2px solid black",
      backgroundColor: this.props.initialColor
    };

    return (
      <div className="Square" style={style}>
        {/* {getTitile()} */}
        {/* {2 + 2} */}
        {/* {theTitle} */}
        {/* {elements} */}
        {this.props.showTitle && <strong>TITLE</strong>}
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
