import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Square.css";

export default function SimpleSquare({ size, color }) {
  let sizeWithPx = `${size}px`;
  let style = {
    width: sizeWithPx,
    height: sizeWithPx,
    border: "2px solid black",
    backgroundColor: color
  };

  return <div className="Square" style={style} />;
}

// Props validation
SimpleSquare.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};

// Default props
SimpleSquare.defaultProps = {
  color: "gray"
};
