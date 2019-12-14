import React, { useState } from "react";
import data from "./AdventCodeInputs/CodeAdvent201905.json";
import "./component.css";

export const CodeAdvent20190501 = () => {
  const [diagnosticProgram, setDiagnosticProgram] = useState(data);
  const [result, setResult] = useState();

  function handleClick() {
    setResult (0);
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Sunny with a Chance of Asteroids (in progress):</p>
      <p>Diagnostic code: {result} </p>
      <button style={{ backgroundColor: "#A7A7A9" }}><span onClick={handleClick}>Generate Code</span>
      </button>      
    </div>
  );
};
