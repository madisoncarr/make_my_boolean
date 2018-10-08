import React from "react";
import "./styles/boolean_display.css";

let BooleanDisplay = props => {
  return (
    <div className="panel panel-info" type="panel" id="panel-info">
      <p>{props.passBoolean}</p>
    </div>
  );
};

export default BooleanDisplay;
