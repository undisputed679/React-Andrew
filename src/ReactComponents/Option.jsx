import React from "react";

function Option(props) {
  return <div>
    {/* Option : {props.textValue} */}
    {props.optionText}
    <button onClick={(e)=>{
        props.handleDeleteOption(props.optionText)
    }}  > == remove</button>

  </div>;
}

export default Option;
