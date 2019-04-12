import React from "react";

export default function Hideable(Component) {
  return props => {
    const ownProps = { ...props };
    delete Hideable.isHidden;
    const style = {
      display: props.isHidden ? "none" : "block"
    };
    return (
      <div style={style}>
        <Component {...ownProps} />
      </div>
    );
  };
}
