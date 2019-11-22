import React, { useState } from "react";
//import data from "./AdventCodeInputs/CodeAdvent201805.json";
import "./component.css";

export const CodeAdvent20180501 = () => {
//  const [introPolymer, setIntroPolymer] = useState(data);
  const [introPolymer, setIntroPolymer] = useState("dabAcCaCBAcCcaDA");
  const [result, setResult] = useState();

  function handleClick() {
   setResult(0);
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Polymerization:</p>
      <p>End polymer is: {result} </p>
      <button style={{ backgroundColor: "#A7A7A9" }} onClick={handleClick}><span onClick={handleClick}>Polymerize</span>
      </button>
      
    </div>
  );
};
