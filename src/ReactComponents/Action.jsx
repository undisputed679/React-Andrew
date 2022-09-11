import React from "react";
// function handleClick() {
//     alert('handle clicked');
// }
function Action(props) {
  return <div>
    <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
        What should i do</button>
  </div>;
}

export default Action;
