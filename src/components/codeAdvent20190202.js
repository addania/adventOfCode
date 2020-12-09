import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201902.json"
import "./component.css"

export const CodeAdvent20190202 = () => {
  const [input] = useState(data)
  const [result, setResult] = useState()

  function handleClick() {
    let output = final(input)
    setResult(output)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Program Alarm:</p>
      <p> Program halts at position: {result} </p>
      <button style={{ backgroundColor: "#27A7C6" }}>
        <span onClick={handleClick}>Get Position</span>
      </button>
    </div>
  )
}

function final(input) {
  let finalNumber = 0
  for (let x = 0; x < 100; x++) {
    for (let y = 0; y < 100; y++) {
      let newInput = [...input]
      let replacedInput = replace(newInput, x, y)
      let output = calc(replacedInput)
      let first = output[0]
      if (first === 19690720) {
        finalNumber = 100 * x + y
      }
    }
  }
  return finalNumber
}

const replace = (input, first, second) => {
  input[1] = first
  input[2] = second
  return input
}

const calc = input => {
  for (let i = 0; i < input.length; i += 4) {
    if (input[i] === 99) {
      i = input.length
    } else if (input[i] === 1) {
      let newValue = input[input[i + 1]] + input[input[i + 2]]
      input[input[i + 3]] = newValue
    } else if (input[i] === 2) {
      let newValue2 = input[input[i + 1]] * input[input[i + 2]]
      input[input[i + 3]] = newValue2
    } else {
    }
  }
  return input
}
