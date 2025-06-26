// * Linking the useRef with the DOM element
import React, { useRef } from "react";

const App = () => {
  const inputRef = useRef(null); // Step 1: create ref

  const handleFocus = () => {
    inputRef.current.focus(); // Step 3: use ref to access DOM node
  };

  return (
    <div>
      <h1>useRef to Access DOM Element</h1>
      <input ref={inputRef} type="text" placeholder="Type here..." />{" "}
      {/* Step 2: attach ref */}
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default App;
