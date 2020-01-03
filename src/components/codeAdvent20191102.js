import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201911.json"
import "./component.css"

export const CodeAdvent20191102 = () => {
  const input = data
  const [result, setResult] = useState()
  function handleClick() {
    let longInput = increaseMemory(input)
    let calculation = calc2(longInput)
    const joinedRows = joinRow(calculation[3])
    const joinedString = joinString(joinedRows)
    console.log("joinedString", joinedString)
    download(joinedString, "registrationNumber.txt", "text/plain")
    setResult("ABEKZGFG")
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Space Police:</p>
      <p>Registration identifier: {result} </p>
      <button style={{ backgroundColor: "#27A7C6" }}>
        <span onClick={handleClick}>Download ID</span>
      </button>
    </div>
  )
}

const calc2 = input => {
  let optCodeInput = 1
  let optCodeOutputArray = []
  let x = 0
  let optCodeBase = 0
  let colours = generateField(".")
  let frequency = generateField(0)
  let currentX = 0
  let currentY = 20
  let pointer = "^"
  colours[currentY][currentX] = "#"
  for (let i = 0; i < input.length; i += x) {
    let current = parseInput(input[i])
    if (optCodeOutputArray.length === 2) {
      if (optCodeOutputArray[0] === 1) {
        colours[currentY][currentX] = "#"
        frequency[currentY][currentX] = frequency[currentY][currentX] + 1
      } else if (optCodeOutputArray[0] === 0) {
        colours[currentY][currentX] = "."
        frequency[currentY][currentX] = frequency[currentY][currentX] + 1
      }
      if (pointer === "^" && optCodeOutputArray[1] === 0) {
        pointer = "<"
        currentX = currentX - 1
      } else if (pointer === "<" && optCodeOutputArray[1] === 0) {
        pointer = "v"
        currentY = currentY + 1
      } else if (pointer === "v" && optCodeOutputArray[1] === 0) {
        pointer = ">"
        currentX = currentX + 1
      } else if (pointer === ">" && optCodeOutputArray[1] === 0) {
        pointer = "^"
        currentY = currentY - 1
      }

      if (pointer === "^" && optCodeOutputArray[1] === 1) {
        pointer = ">"
        currentX = currentX + 1
      } else if (pointer === ">" && optCodeOutputArray[1] === 1) {
        pointer = "v"
        currentY = currentY + 1
      } else if (pointer === "v" && optCodeOutputArray[1] === 1) {
        pointer = "<"
        currentX = currentX - 1
      } else if (pointer === "<" && optCodeOutputArray[1] === 1) {
        pointer = "^"
        currentY = currentY - 1
      }
      optCodeOutputArray = []
    }
    if (colours[currentY][currentX] === ".") {
      optCodeInput = 0
    } else if (colours[currentY][currentX] === "#") {
      optCodeInput = 1
    }

    /////////// CONDITION 99 ///////////
    if (current.number === 99) {
      x = 2
      break
    }
    /////////// CONDITION 1 ///////////
    else if (
      current.one === 1 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "position"
    ) {
      let newValue = input[input[i + 1]] + input[input[i + 2]]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 1 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "immediate" &&
      current.parameterMode3 === "position"
    ) {
      let newValue = input[i + 1] + input[i + 2]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 1 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "immediate" &&
      current.parameterMode3 === "position"
    ) {
      let newValue = input[input[i + 1]] + input[i + 2]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 1 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "position"
    ) {
      let newValue = input[i + 1] + input[input[i + 2]]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 1 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "position"
    ) {
      let newValue = input[input[i + 1] + optCodeBase] + input[input[i + 2]]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 1 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "immediate" &&
      current.parameterMode3 === "position"
    ) {
      let newValue = input[input[i + 1] + optCodeBase] + input[i + 2]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 1 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "relative" &&
      current.parameterMode3 === "position"
    ) {
      let newValue = input[input[i + 1]] + input[input[i + 2] + optCodeBase]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 1 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "relative" &&
      current.parameterMode3 === "position"
    ) {
      let newValue = input[i + 1] + input[input[i + 2] + optCodeBase]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 1 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "relative" &&
      current.parameterMode3 === "position"
    ) {
      let newValue =
        input[input[i + 1] + optCodeBase] + input[input[i + 2] + optCodeBase]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 1 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "relative"
    ) {
      let newValue = input[input[i + 1]] + input[input[i + 2]]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one === 1 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "immediate" &&
      current.parameterMode3 === "relative"
    ) {
      let newValue = input[i + 1] + input[i + 2]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one === 1 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "immediate" &&
      current.parameterMode3 === "relative"
    ) {
      let newValue = input[input[i + 1]] + input[i + 2]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one === 1 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "relative"
    ) {
      let newValue = input[i + 1] + input[input[i + 2]]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one === 1 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "relative"
    ) {
      let newValue = input[input[i + 1] + optCodeBase] + input[input[i + 2]]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one === 1 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "immediate" &&
      current.parameterMode3 === "relative"
    ) {
      let newValue = input[input[i + 1] + optCodeBase] + input[i + 2]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one === 1 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "relative" &&
      current.parameterMode3 === "relative"
    ) {
      let newValue = input[input[i + 1]] + input[input[i + 2] + optCodeBase]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one === 1 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "relative" &&
      current.parameterMode3 === "relative"
    ) {
      let newValue = input[i + 1] + input[input[i + 2] + optCodeBase]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one === 1 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "relative" &&
      current.parameterMode3 === "relative"
    ) {
      let newValue =
        input[input[i + 1] + optCodeBase] + input[input[i + 2] + optCodeBase]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    }
    /////////// CONDITION 2 ///////////
    else if (
      current.one === 2 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "position"
    ) {
      let newValue = input[input[i + 1]] * input[input[i + 2]]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 2 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "immediate" &&
      current.parameterMode3 === "position"
    ) {
      let newValue = input[i + 1] * input[i + 2]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 2 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "immediate" &&
      current.parameterMode3 === "position"
    ) {
      let newValue = input[input[i + 1]] * input[i + 2]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 2 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "position"
    ) {
      let newValue = input[i + 1] * input[input[i + 2]]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 2 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "position"
    ) {
      let newValue = input[input[i + 1] + optCodeBase] * input[input[i + 2]]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 2 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "immediate" &&
      current.parameterMode3 === "position"
    ) {
      let newValue = input[input[i + 1] + optCodeBase] * input[i + 2]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 2 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "relative" &&
      current.parameterMode3 === "position"
    ) {
      let newValue = input[input[i + 1]] * input[input[i + 2] + optCodeBase]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 2 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "relative" &&
      current.parameterMode3 === "position"
    ) {
      let newValue = input[i + 1] * input[input[i + 2] + optCodeBase]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 2 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "relative" &&
      current.parameterMode3 === "position"
    ) {
      let newValue =
        input[input[i + 1] + optCodeBase] * input[input[i + 2] + optCodeBase]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 2 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "relative"
    ) {
      let newValue = input[input[i + 1]] * input[input[i + 2]]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one === 2 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "immediate" &&
      current.parameterMode3 === "relative"
    ) {
      let newValue = input[i + 1] * input[i + 2]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one === 2 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "immediate" &&
      current.parameterMode3 === "relative"
    ) {
      let newValue = input[input[i + 1]] * input[i + 2]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one === 2 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "relative"
    ) {
      let newValue = input[i + 1] * input[input[i + 2]]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one === 2 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "relative"
    ) {
      let newValue = input[input[i + 1] + optCodeBase] * input[input[i + 2]]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one === 2 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "immediate" &&
      current.parameterMode3 === "relative"
    ) {
      let newValue = input[input[i + 1] + optCodeBase] * input[i + 2]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one === 2 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "relative" &&
      current.parameterMode3 === "relative"
    ) {
      let newValue = input[input[i + 1]] * input[input[i + 2] + optCodeBase]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one === 2 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "relative" &&
      current.parameterMode3 === "relative"
    ) {
      let newValue = input[i + 1] * input[input[i + 2] + optCodeBase]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one === 2 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "relative" &&
      current.parameterMode3 === "relative"
    ) {
      let newValue =
        input[input[i + 1] + optCodeBase] * input[input[i + 2] + optCodeBase]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    }
    /////////// CONDITION 3 ///////////
    else if (current.one === 3 && current.parameterMode1 === "position") {
      input[input[i + 1]] = optCodeInput
      x = 2
    } else if (current.one === 3 && current.parameterMode1 === "relative") {
      input[input[i + 1] + optCodeBase] = optCodeInput
      x = 2
    }
    /////////// CONDITION 4 ///////////
    else if (current.one === 4 && current.parameterMode1 === "position") {
      let givenOutput = input[input[i + 1]]
      optCodeOutputArray.push(givenOutput)
      x = 2
    } else if (current.one === 4 && current.parameterMode1 === "immediate") {
      let givenOutput = input[i + 1]
      optCodeOutputArray.push(givenOutput)
      x = 2
    } else if (current.one === 4 && current.parameterMode1 === "relative") {
      let givenOutput = input[input[i + 1] + optCodeBase]
      optCodeOutputArray.push(givenOutput)
      x = 2
    }
    /////////// CONDITION 5 ///////////
    else if (
      current.one === 5 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "position"
    ) {
      if (input[input[i + 1]] !== 0) {
        x = 0
        i = input[input[i + 2]]
      } else {
        x = 3
      }
    } else if (
      current.one === 5 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "immediate"
    ) {
      if (input[i + 1] !== 0) {
        x = 0
        i = input[i + 2]
      } else {
        x = 3
      }
    } else if (
      current.one === 5 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "immediate"
    ) {
      if (input[input[i + 1]] !== 0) {
        x = 0
        i = input[i + 2]
      } else {
        x = 3
      }
    } else if (
      current.one === 5 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "position"
    ) {
      if (input[i + 1] !== 0) {
        x = 0
        i = input[input[i + 2]]
      } else {
        x = 3
      }
    } else if (
      current.one === 5 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "position"
    ) {
      if (input[input[i + 1] + optCodeBase] !== 0) {
        x = 0
        i = input[input[i + 2]]
      } else {
        x = 3
      }
    } else if (
      current.one === 5 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "immediate"
    ) {
      if (input[input[i + 1] + optCodeBase] !== 0) {
        x = 0
        i = input[i + 2]
      } else {
        x = 3
      }
    } else if (
      current.one === 5 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "relative"
    ) {
      if (input[input[i + 1]] !== 0) {
        x = 0
        i = input[input[i + 2] + optCodeBase]
      } else {
        x = 3
      }
    } else if (
      current.one === 5 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "relative"
    ) {
      if (input[i + 1] !== 0) {
        x = 0
        i = input[input[i + 2] + optCodeBase]
      } else {
        x = 3
      }
    } else if (
      current.one === 5 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "relative"
    ) {
      if (input[input[i + 1] + optCodeBase] !== 0) {
        x = 0
        i = input[input[i + 2] + optCodeBase]
      } else {
        x = 3
      }
    }
    /////////// CONDITION 6 ///////////
    else if (
      current.one === 6 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "position"
    ) {
      if (input[input[i + 1]] === 0) {
        x = 0
        i = input[input[i + 2]]
      } else {
        x = 3
      }
    } else if (
      current.one === 6 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "immediate"
    ) {
      if (input[i + 1] === 0) {
        x = 0
        i = input[i + 2]
      } else {
        x = 3
      }
    } else if (
      current.one === 6 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "immediate"
    ) {
      if (input[input[i + 1]] === 0) {
        x = 0
        i = input[i + 2]
      } else {
        x = 3
      }
    } else if (
      current.one === 6 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "position"
    ) {
      if (input[i + 1] === 0) {
        x = 0
        i = input[input[i + 2]]
      } else {
        x = 3
      }
    } else if (
      current.one === 6 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "position"
    ) {
      if (input[input[i + 1] + optCodeBase] === 0) {
        x = 0
        i = input[input[i + 2]]
      } else {
        x = 3
      }
    } else if (
      current.one === 6 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "immediate"
    ) {
      if (input[input[i + 1] + optCodeBase] === 0) {
        x = 0
        i = input[i + 2]
      } else {
        x = 3
      }
    } else if (
      current.one === 6 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "relative"
    ) {
      if (input[input[i + 1]] === 0) {
        x = 0
        i = input[input[i + 2] + optCodeBase]
      } else {
        x = 3
      }
    } else if (
      current.one === 6 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "relative"
    ) {
      if (input[i + 1] === 0) {
        x = 0
        i = input[input[i + 2] + optCodeBase]
      } else {
        x = 3
      }
    } else if (
      current.one === 6 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "relative"
    ) {
      if (input[input[i + 1] + optCodeBase] === 0) {
        x = 0
        i = input[input[i + 2] + optCodeBase]
      } else {
        x = 3
      }
    }
    /////////// CONDITION 7 ///////////
    else if (
      current.one === 7 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "position"
    ) {
      if (input[input[i + 1]] < input[input[i + 2]]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one === 7 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "immediate" &&
      current.parameterMode3 === "position"
    ) {
      if (input[i + 1] < input[i + 2]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one === 7 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "immediate" &&
      current.parameterMode3 === "position"
    ) {
      if (input[input[i + 1]] < input[i + 2]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one === 7 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "position"
    ) {
      if (input[i + 1] < input[input[i + 2]]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one === 7 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "position"
    ) {
      if (input[input[i + 1] + optCodeBase] < input[input[i + 2]]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one === 7 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "immediate" &&
      current.parameterMode3 === "position"
    ) {
      if (input[input[i + 1] + optCodeBase] < input[i + 2]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one === 7 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "relative" &&
      current.parameterMode3 === "position"
    ) {
      if (input[input[i + 1]] < input[input[i + 2] + optCodeBase]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one === 7 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "relative" &&
      current.parameterMode3 === "position"
    ) {
      if (input[i + 1] < input[input[i + 2] + optCodeBase]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one === 7 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "relative" &&
      current.parameterMode3 === "position"
    ) {
      if (
        input[input[i + 1] + optCodeBase] < input[input[i + 2] + optCodeBase]
      ) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one === 7 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "relative"
    ) {
      if (input[input[i + 1]] < input[input[i + 2]]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one === 7 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "immediate" &&
      current.parameterMode3 === "relative"
    ) {
      if (input[i + 1] < input[i + 2]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one === 7 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "immediate" &&
      current.parameterMode3 === "relative"
    ) {
      if (input[input[i + 1]] < input[i + 2]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one === 7 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "relative"
    ) {
      if (input[i + 1] < input[input[i + 2]]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one === 7 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "relative"
    ) {
      if (input[input[i + 1] + optCodeBase] < input[input[i + 2]]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one === 7 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "immediate" &&
      current.parameterMode3 === "relative"
    ) {
      if (input[input[i + 1] + optCodeBase] < input[i + 2]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one === 7 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "relative" &&
      current.parameterMode3 === "relative"
    ) {
      if (input[input[i + 1]] < input[input[i + 2] + optCodeBase]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one === 7 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "relative" &&
      current.parameterMode3 === "relative"
    ) {
      if (input[i + 1] < input[input[i + 2] + optCodeBase]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one === 7 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "relative" &&
      current.parameterMode3 === "relative"
    ) {
      if (
        input[input[i + 1] + optCodeBase] < input[input[i + 2] + optCodeBase]
      ) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    }
    /////////// CONDITION 8 ///////////
    else if (
      current.one === 8 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "position"
    ) {
      if (input[input[i + 1]] === input[input[i + 2]]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one === 8 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "immediate" &&
      current.parameterMode3 === "position"
    ) {
      if (input[i + 1] === input[i + 2]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one === 8 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "immediate" &&
      current.parameterMode3 === "position"
    ) {
      if (input[input[i + 1]] === input[i + 2]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one === 8 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "position"
    ) {
      if (input[i + 1] === input[input[i + 2]]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one === 8 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "position"
    ) {
      if (input[input[i + 1] + optCodeBase] === input[input[i + 2]]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one === 8 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "immediate" &&
      current.parameterMode3 === "position"
    ) {
      if (input[input[i + 1] + optCodeBase] === input[i + 2]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one === 8 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "relative" &&
      current.parameterMode3 === "position"
    ) {
      if (input[input[i + 1]] === input[input[i + 2] + optCodeBase]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one === 8 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "relative" &&
      current.parameterMode3 === "position"
    ) {
      if (input[i + 1] === input[input[i + 2] + optCodeBase]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one === 8 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "relative" &&
      current.parameterMode3 === "position"
    ) {
      if (
        input[input[i + 1] + optCodeBase] === input[input[i + 2] + optCodeBase]
      ) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one === 8 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "relative"
    ) {
      if (input[input[i + 1]] === input[input[i + 2]]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one === 8 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "immediate" &&
      current.parameterMode3 === "relative"
    ) {
      if (input[i + 1] === input[i + 2]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one === 8 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "immediate" &&
      current.parameterMode3 === "relative"
    ) {
      if (input[input[i + 1]] === input[i + 2]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one === 8 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "relative"
    ) {
      if (input[i + 1] === input[input[i + 2]]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one === 8 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "relative"
    ) {
      if (input[input[i + 1] + optCodeBase] === input[input[i + 2]]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one === 8 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "immediate" &&
      current.parameterMode3 === "relative"
    ) {
      if (input[input[i + 1] + optCodeBase] === input[i + 2]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one === 8 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "relative" &&
      current.parameterMode3 === "relative"
    ) {
      if (input[input[i + 1]] === input[input[i + 2] + optCodeBase]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one === 8 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "relative" &&
      current.parameterMode3 === "relative"
    ) {
      if (input[i + 1] === input[input[i + 2] + optCodeBase]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one === 8 &&
      current.parameterMode1 === "relative" &&
      current.parameterMode2 === "relative" &&
      current.parameterMode3 === "reelative"
    ) {
      if (
        input[input[i + 1] + optCodeBase] === input[input[i + 2] + optCodeBase]
      ) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    }
    /////////// CONDITION 9 ///////////
    else if (current.one === 9 && current.parameterMode1 === "position") {
      optCodeBase = optCodeBase + input[input[i + 1]]
      x = 2
    } else if (current.one === 9 && current.parameterMode1 === "immediate") {
      optCodeBase = optCodeBase + input[i + 1]
      x = 2
    } else if (current.one === 9 && current.parameterMode1 === "relative") {
      optCodeBase = optCodeBase + input[input[i + 1] + optCodeBase]
      x = 2
    } else {
      break
    }
  }
  const count = countPaintedTiles(frequency)
  return [input, optCodeOutputArray, count, colours]
}

function parseInput(number) {
  let parsedObject = {}
  let tenThousand = Math.floor(number / 10000)
  let thousand = Math.floor((number % 10000) / 1000)
  let hundert = Math.floor(((number % 10000) % 1000) / 100)
  let ten = Math.floor((((number % 10000) % 1000) % 100) / 10)
  let one = Math.floor((((number % 10000) % 1000) % 100) % 10)
  parsedObject.tenThousand = tenThousand
  parsedObject.thousand = thousand
  parsedObject.hundert = hundert
  parsedObject.ten = ten
  parsedObject.one = one
  parsedObject.number = number
  if (hundert === 0) {
    parsedObject.parameterMode1 = "position"
  } else if (hundert === 1) {
    parsedObject.parameterMode1 = "immediate"
  } else if (hundert === 2) {
    parsedObject.parameterMode1 = "relative"
  }
  if (thousand === 0) {
    parsedObject.parameterMode2 = "position"
  } else if (thousand === 1) {
    parsedObject.parameterMode2 = "immediate"
  } else if (thousand === 2) {
    parsedObject.parameterMode2 = "relative"
  }
  if (tenThousand === 0) {
    parsedObject.parameterMode3 = "position"
  } else if (tenThousand === 1) {
    parsedObject.parameterMode3 = "immediate"
  } else if (tenThousand === 2) {
    parsedObject.parameterMode3 = "relative"
  }
  return parsedObject
}

const increaseMemory = input => {
  const input2 = [...input]
  for (let i = 0; i < 1000000; i += 1) {
    input2.push(0)
  }
  return input2
}

const generateField = item => {
  const array = []

  for (let i = 0; i <= 50; i++) {
    let row = []
    for (let j = 0; j <= 50; j++) {
      row.push(item)
    }
    array.push(row)
  }
  return array
}

const countPaintedTiles = input => {
  let number = 0

  for (let i = 0; i <= 50; i++) {
    for (let j = 0; j <= 50; j++) {
      if (input[i][j] !== 0) {
        number = number + 1
      }
    }
  }
  return number
}

function download(data, filename, type) {
  var file = new Blob([data], { type: type })
  if (window.navigator.msSaveOrOpenBlob)
    // IE10+
    window.navigator.msSaveOrOpenBlob(file, filename)
  else {
    // Others
    var a = document.createElement("a"),
      url = URL.createObjectURL(file)
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    setTimeout(function() {
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    }, 0)
  }
}

function joinRow(input) {
  const newInput = input.map(item => {
    return item.join("")
  })
  return newInput
}

function joinString(input) {
  return input.join("\n")
}
