import React from "react";

let BooleanDisplay = props => {
  return (
    <div className="panel panel-info" type="panel">
      <p>{props.passBoolean}</p>
    </div>
  );
};

export default BooleanDisplay;
