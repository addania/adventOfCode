import React, { useState } from "react";
import data from "./AdventCodeInputs/CodeAdvent201901.json";
import "./component.css";

export const CodeAdvent20190102 = () => {
  const [masses, setMasses] = useState(data);
  const [fuelSum, setFuelSum] = useState();

  function handleClick() {
    let result = calculateIndividualRequirements(masses);
    let sum=sumRequirements(result);
    setFuelSum(sum);
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Rocket Equation Inception:</p>
      <p>Fuel Requirements: {fuelSum} </p>
      <button style={{ backgroundColor: "#A7A7A9" }} onClick={handleClick}><span onClick={handleClick}>Run Calculation</span>
      </button>      
    </div>
  );
};

function calculateIndividualRequirements(input){
  let requirementsArray=input.map( item=>recursion(item));
  return requirementsArray;
}

function recursion(module){
  if((Math.floor(module/3))-2<=0){
    return 0;
  } else{
    let fuelRequired=(Math.floor(module/3))-2;
      return fuelRequired + recursion(fuelRequired);
  }
}

function sumRequirements(input){
  let reducer = (accumulator, currentValue ) => accumulator + currentValue;
  let total = input.reduce(reducer, 0);
    return total
}