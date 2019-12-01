import React, { useState } from "react";
import data from "./AdventCodeInputs/CodeAdvent201902.json";
import "./component.css";

export const CodeAdvent20190202 = () => {
  const [input, setInput] = useState(data);
  const [result, setResult] = useState();

  function handleClick() {
    let output=x(input);
    setResult(output);
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>NAME:</p>
      <p>XXX: {result} </p>
      <button style={{ backgroundColor: "#6BAA75" }} onClick={handleClick}><span onClick={handleClick}>XXX</span>
      </button>      
    </div>
  );
};

function x(input){
  
  return 0;
}