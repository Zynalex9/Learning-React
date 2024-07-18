import React, { useState } from "react";
import Counter from "./Components/Counter";
import UserProfileCard from "./Components/UserProfileCard";
let name = "Zain";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello, {name}!</h1>
      <Counter />

      <UserProfileCard
        name="Zain Ali"
        age={20}
        about="Frontend Developer | React JS "
      />
    </>
  );
}

export default App;
