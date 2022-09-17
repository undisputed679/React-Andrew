import React from "react";

function OptionApp(props) {
  return <div>
    {props.optionText}
    <button onClick={(e)=>{
        props.handleDeleteOption(props.optionText)
    }}  > == remove</button>

  </div>;
}

export default OptionApp;
