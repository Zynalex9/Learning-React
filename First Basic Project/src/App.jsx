import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark';
  }, [mode]);

  return (
    <>
      <NavBar mode={mode} toggleMode={toggleMode} />
      <TextForm mode={mode} />
    </>
  );
}

export default App;
