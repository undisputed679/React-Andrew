import React from "react";
let count =0;
const addOne=(e)=>{
    count++;
   RenderCounterApp();
}
const minusOne=()=>{
    console.log('-1 fired');
}
const reset=()=>{
    console.log('reset fired');
}

export  const RenderCounterApp=()=>{
    return <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
</div>
}
RenderCounterApp();
function EventsAndAttributes() {
   
   
    
  return <div>
        {/* <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button> */}
  </div>;
}
export default EventsAndAttributes;
