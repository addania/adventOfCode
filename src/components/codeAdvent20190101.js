import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201901.json"
import "./component.css"

export const CodeAdvent20190101 = () => {
  const [masses] = useState(data)
  const [fuelSum, setFuelSum] = useState()

  function handleClick() {
    let result = calculateIndividualRequirements(masses)
    let sum = sumRequirements(result)
    setFuelSum(sum)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Rocket Equation:</p>
      <p>Fuel Requirements: {fuelSum} </p>
      <button style={{ backgroundColor: "#27A7C6" }}>
        <span onClick={handleClick}>Run Calculation</span>
      </button>
    </div>
  )
}

function calculateIndividualRequirements(input) {
  let requirementsArray = input.map(item => Math.floor(item / 3) - 2)
  return requirementsArray
}

function sumRequirements(input) {
  let reducer = (accumulator, currentValue) => accumulator + currentValue
  let total = input.reduce(reducer, 0)
  return total
}
