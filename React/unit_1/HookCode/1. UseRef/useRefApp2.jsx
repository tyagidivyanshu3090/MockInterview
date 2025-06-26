// * Changing the color and using inputRef.current.value

import React, { useRef } from "react";

const App = () => {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    inputRef.current.style.background = "red";
    alert("You entered: " + inputRef.current.value); // ⬅️ Access the value here
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Type something" />
      <button onClick={handleSubmit}>Show Input</button>
    </div>
  );
};

export default App;
