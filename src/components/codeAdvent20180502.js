import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201805.json"
import "./component.css"

export const CodeAdvent20180502 = () => {
  const [introPolymer, setIntroPolymer] = useState(data[0])
  const [result, setResult] = useState()

  function handleClick() {
    let output = polymerize(introPolymer)
    setResult(output)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Polymerization:</p>
      <p>Length of shortest polymer is: {result} </p>
      <button style={{ backgroundColor: "#6BAA75" }}>
        <span onClick={handleClick}>Polymerize</span>
      </button>
    </div>
  )
}

function generateArray(array, arrayCapital) {
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
  let string = "abcdefghijklmnopqrstuvwxyz"
  let array = string.split("")
  let arrayCapital = string.toUpperCase().split("")
  let units = generateArray(array, arrayCapital)
  let resultsArray = []
  let dict = {}
  for (let char = 0; char < array.length; char++) {
    let dict = {}
    let replacingChar = array[char] + "|" + arrayCapital[char]
    var re = new RegExp(replacingChar, "g")
    let newArray = input.replace(re, "")
    var result = poly(units, newArray)
    dict.letter = array[char]
    dict.polymer = result
    dict.len = result.length
    resultsArray.push(dict)
  }
  let min = input.length
  for (let entry = 0; entry < resultsArray.length; entry++) {
    if (resultsArray[entry].len < min) {
      min = resultsArray[entry].len
    }
  }
  return min
}

function poly(units, inputPolymer) {
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
