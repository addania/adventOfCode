import React, { useState } from "react";
import data from "./AdventCodeInputs/CodeAdvent201801.json";

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
      <button style={{ backgroundColor: "darkgreen" }} onClick={handleClick}>
        Calibrate
      </button>
      <button style={{ backgroundColor: "grey" }} onClick={handleReset}>
        Reset
      </button>
      <button style={{ backgroundColor: "orange" }} onClick={handleRandomize}>
        Randomize
      </button>
      
    </div>
  );
};
