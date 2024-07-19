import React, { useState } from "react";
import Counter from "./Components/Counter";
import UserProfileCard from "./Components/UserProfileCard";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/textForm";
let name = "Zain";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <TextForm />
    </>
  );
}

export default App;
