import React, { useState } from "react";

export default function Counterr() {
  const [count, countState] = useState(0);
  const decrement = () => {
    if (count <= 0) {
      count = 0;
    }
    countState(count - 1);
  };
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => countState(count + 1)}>Increment</button>
      <button onClick={decrement}> Decrement</button>
    </>
  );
}
