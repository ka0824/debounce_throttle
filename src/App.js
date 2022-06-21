import React, { useState, useCallback } from "react";
import DisplayProps from "./DisplayProps";
import debounce from "lodash/debounce";
import { throttle } from "lodash";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const debounceInputValue = useCallback(debounce(setInputValue, 300), []);
  const throttleInputValue = useCallback(throttle(setInputValue, 1000), []);

  const handleInput = (e) => {
    // debounceInputValue(e.target.value);
    throttleInputValue(e.target.value);
    // throttle(setInputValue(e.target.value), 500);
  };

  return (
    <div className="App">
      <input
        // onChange={(e) => setInputValue(e.target.value)}
        onChange={handleInput}
      ></input>
      <DisplayProps inputValue={inputValue}></DisplayProps>
    </div>
  );
}

export default App;
