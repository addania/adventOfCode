import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201916.json"
import "./component.css"

export const CodeAdvent20191601 = () => {
  const pattern = [0, 1, 0, -1]
  const [result, setResult] = useState()

  function handleClick() {
    const resultAfterPhases = simulatePhases(data, pattern, 100)
    setResult(
      resultAfterPhases[0].toString() +
        resultAfterPhases[1].toString() +
        resultAfterPhases[2].toString() +
        resultAfterPhases[3].toString() +
        resultAfterPhases[4].toString() +
        resultAfterPhases[5].toString() +
        resultAfterPhases[6].toString() +
        resultAfterPhases[7].toString()
    )
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Flawed Frequency Transmission:</p>
      <p>First 8 digits: {result} </p>
      <button style={{ backgroundColor: "#27A7C6" }}>
        <span onClick={handleClick}>Trigger Final Output</span>
      </button>
    </div>
  )
}
/*const parseInput = input => {
  return input.split("").map(Number)
}*/

const generatePattern = (pattern, length, iteration) => {
  let newPattern = []
  let i = 0
  let count = 0
  while (count <= length) {
    for (let j = 0; j < iteration; j++) {
      if (count <= length) {
        if (i < pattern.length) {
          newPattern.push(pattern[i])
          count = count + 1
        } else if (i <= pattern.length) {
          i = 0
          newPattern.push(pattern[i])
          count = count + 1
        }
      }
    }
    i = i + 1
  }
  newPattern.shift()
  return newPattern
}

const calculatePhase = (data, pattern) => {
  const result = []

  for (let i = 1; i <= data.length; i++) {
    const currentPattern = generatePattern(pattern, data.length, i)
    let output = 0
    for (let j = 0; j < data.length; j++) {
      output = output + data[j] * currentPattern[j]
    }
    result.push(Math.abs(output % 10))
  }
  return result
}

const simulatePhases = (input, pattern, iterations) => {
  for (let i = 0; i < iterations; i++) {
    input = calculatePhase(input, pattern)
  }
  return input
}
