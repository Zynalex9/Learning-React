import { useState } from "react";

function App() {
  const [length, setLength] = useState("8");
  return (
    <>
      <h1 className="text-4xl">Password Generator</h1>
    </>
  );
}

export default App;
// useState, useCallBack, useEffect, useRef