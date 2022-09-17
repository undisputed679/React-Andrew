import React, { useState } from "react";

function CounterI() {
    const [count, setCount] = useState(0);
  return <div>CounterI
    <p>count:{count}</p>
    <button onClick={() => setCount(count + 1)}>+1</button>
    <button onClick={() => setCount(count - 1)} >-1</button>
    <button onClick={() => setCount(count - count)}>Reset</button>
  </div>;
}

export default CounterI;
