import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201902.json"
import "./component.css"

export const CodeAdvent20190201 = () => {
  const [input, setInput] = useState(data)
  const [result, setResult] = useState()

  function handleClick() {
    let replacedInput = replace(input)
    let output = calc(replacedInput)
    setResult(output[0])
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Program Alarm:</p>
      <p>Program halts at position: {result} </p>
      <button style={{ backgroundColor: "#68C1B4" }}>
        <span onClick={handleClick}>Get Position</span>
      </button>
    </div>
  )
}

const replace = input => {
  input[1] = 12
  input[2] = 2
  console.log(input)
  return input
}

const calc = input => {
  for (let i = 0; i < input.length; i += 4) {
    if (input[i] === 99) {
      break
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
