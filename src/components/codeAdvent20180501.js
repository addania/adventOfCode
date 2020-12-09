import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201805.json"
import "./component.css"

export const CodeAdvent20180501 = () => {
  const [introPolymer] = useState(data[0])
  const [result, setResult] = useState()

  function handleClick() {
    let output = polymerize(introPolymer).length
    setResult(output)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Polymerization:</p>
      <p>Length of end polymer is: {result} </p>
      <button style={{ backgroundColor: "#69747C" }}>
        <span onClick={handleClick}>Polymerize</span>
      </button>
    </div>
  )
}

function generateArray() {
  let string = "abcdefghijklmnopqrstuvwxyz"
  let array = string.split("")
  let arrayCapital = string.toUpperCase().split("")
  let combinations = {}
  for (let i = 0; i < array.length; i++) {
    let char = array[i] + arrayCapital[i]
    let char2 = arrayCapital[i] + array[i]
    combinations[char] = "value"
    combinations[char2] = "value"
  }
  return combinations
}

function polymerize(input) {
  let units = generateArray()
  let inputPolymer = input
  let result = recursion(units, inputPolymer)
  return result
}

function recursion(units, inputPolymer) {
  for (let j = 0; j < inputPolymer.length - 1; j++) {
    let element = inputPolymer[j] + inputPolymer[j + 1]
    if (units[element] === "value") {
      let part1 = inputPolymer.slice(0, j)
      let part2 = inputPolymer.slice(j + 2, inputPolymer.length)
      inputPolymer = part1 + part2
      j = j - 2
    }
  }
  return inputPolymer
}
