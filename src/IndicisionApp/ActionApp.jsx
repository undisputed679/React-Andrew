import React from "react";

function ActionApp(props) {
  return <div>
    <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
        What should i do</button>
  </div>;
}

export default ActionApp;
