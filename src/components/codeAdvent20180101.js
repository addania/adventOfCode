import React, { useState } from "react";
import data from "./AdventCodeInputs/CodeAdvent201801.json";
import "./component.css";

export const CodeAdvent20180101 = () => {
  const [frequencyChanges, setFrequencyChanges] = useState(data);
  const [recalibration, setRecalibration] = useState(0);

  function handleClick() {
    let result = recalibration;
    frequencyChanges.map((item, index) => {
      result = result + item;
    });
    setRecalibration(result);
  }

  function handleReset() {
    setRecalibration(0);
  }

  function handleRandomize() {
    let randomLength = Math.floor(Math.random() * 10) + 1;
    var newArray = [];
    console.log("Random length is:", randomLength);

    for (let i = 0; i <= randomLength; i++) {
      //why concat wont work??
      newArray.push(Math.floor(Math.random() * 100) + 1);
      console.log("i is: ", i);
    }
    console.log(JSON.stringify(newArray));
    setFrequencyChanges(newArray);
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Frequency Calibration:</p>
      <p>Recalibrated freuqency is: {recalibration} </p>
      <button style={{ backgroundColor: "#6BAA75" }} onClick={handleClick}><span>Calibrate </span>
      </button>
      <button style={{ backgroundColor: "#A7A7A9" }} onClick={handleReset}>
      <span>Reset </span>
      </button>
      <button style={{ backgroundColor: "#69747C" }} onClick={handleRandomize}>
      <span>Randomize </span>
      </button>
      
    </div>
  );
};
