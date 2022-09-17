import React, { useState } from "react";

function AddOptionApp(props) {
    const [error, seterror] = useState(undefined);
   const handleAddOption =(e)=>{
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const errorvalue = props.handleAddOption(option);
    seterror(errorvalue);
    if(!error){
        e.target.elements.option.value='';
    }
   }
  return <div>
     {error && <p>{error}</p> }
        <form onSubmit={handleAddOption}>
          <input type='text' name='option' />
          <button>submit</button>
        </form>
  </div>;
}

export default AddOptionApp;
