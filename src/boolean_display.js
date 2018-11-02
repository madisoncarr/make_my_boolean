import React from "react";
import "./styles/boolean_display.css";

let BooleanDisplay = props => {
  return (
    <div>
      <div className="boolean-instructions">
        <p>Here is your Boolean Search:</p>
      </div>
      <div className="panel panel-info" type="panel" id="panel-info">
        <p>{props.passBoolean}</p>
      </div>
    </div>
  );
};

export default BooleanDisplay;
