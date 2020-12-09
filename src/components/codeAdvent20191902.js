import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201919.json"
import "./component.css"

export const CodeAdvent20191902 = () => {
  const [input] = useState(data)
  const [result, setResult] = useState()

  function handleClick() {
    let longInput = increaseMemory(input)
    let beam = drawBeam(longInput)
    const test = findSquare(beam.field, 100)
    setResult(test)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Tractor Beam:</p>
      <p>100x100 Square: {result} </p>
      <button style={{ backgroundColor: "#7F6A93" }}>
        <span onClick={handleClick}>Find square</span>
      </button>
    </div>
  )
}

const calc2 = (input, row, col) => {
  let optCodeInput = [row, col]
  let optCodeInputIndex = 0
  let optCodeOutputArray = []
  let x = 0
  let optCodeBase = 0

  for (let i = 0; i < input.length; i += x) {
    let current = parseInput(input[i])
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
      input[input[i + 1]] = optCodeInput[optCodeInputIndex]
      optCodeInputIndex++
      x = 2
    } else if (current.one === 3 && current.parameterMode1 === "relative") {
      input[input[i + 1] + optCodeBase] = optCodeInput[optCodeInputIndex]
      optCodeInputIndex++
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
      current.parameterMode3 === "relative"
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
  return [input, optCodeOutputArray]
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
  for (let i = 0; i < 500; i += 1) {
    input2.push(0)
  }
  return input2
}

const generateEmptyField = (rows, columns) => {
  const empty = []
  for (let i = 0; i < rows; i++) {
    empty.push(new Array(columns))
  }
  return empty
}

const drawBeam = input => {
  let field = generateEmptyField(1201, 1201)
  let sum = 0
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[0].length; j++) {
      let newInput = [...input]
      const test = calc2(newInput, j, i)
      if (test[1][0] === 1) {
        field[i][j] = "#"
        sum++
      } else if (test[1][0] === 0) {
        field[i][j] = "."
      }
    }
  }
  return { field: field, sum: sum }
}

const findSquare = (field, n) => {
  let x
  let y
  let proceed = true
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[0].length; j++) {
      if (field[i][j] === "#" && proceed) {
        let sumDown = 0
        let sumRight = 0
        for (let k = 0; k < n; k++) {
          if (field[i + k][j] === "#") {
            sumDown++
          }
        }
        for (let l = 0; l < n; l++) {
          if (field[i][j + l] === "#") {
            sumRight++
          }
        }

        if (sumDown === n && sumRight === n) {
          x = j
          y = i
          proceed = false
          break
        }
      }
    }
  }
  return x * 10000 + y
}
