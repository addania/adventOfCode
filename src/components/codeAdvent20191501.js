import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201915.json"
import "./component.css"

export const CodeAdvent20191501 = () => {
  const [input, setInput] = useState(data)
  const [result, setResult] = useState()

  function handleClick() {
    let longInput = increaseMemory(input)
    let calculation = calc2(longInput)
    let numberArray = calculation[0]
    let outputArray = calculation[1]
    console.log("outputArray", outputArray)
    let finalCode = outputArray[outputArray.length - 1]
    setResult(finalCode)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Oxygen System (in progress):</p>
      <p>Movement commands: {result} </p>
      <button style={{ backgroundColor: "#68C1B4" }}>
        <span onClick={handleClick}>Go! Go! Go! Wall!</span>
      </button>
    </div>
  )
}

const calc2 = input => {
  /* const preference = [1, 3, 2, 4]
  let previousMovement=0;
  let preferenceIndex = 0
  let currentPosition = { x: 50, y: 50 }
  let movementPossibilities = { "50-50": { x: 50, y: 50, movementsTried: [], freeMovement: [], walls: [] } }
  */

  let field = generateEmptyField(40, 40)
  console.log("field", field)
  let currentPosition = { x: 20, y: 11 }
  field[currentPosition.y][currentPosition.x] = "."
  let optCodeInput = [
    1,
    2,
    3,
    4,
    1,
    2,
    4,
    1,
    4,
    2,
    4,
    2,
    4,
    3,
    2,
    4,
    3,
    2,
    4,
    2,
    3,
    2,
    3,
    1,
    2,
    3,
    1,
    2,
    3,
    1,
    2,
    3,
    1,
    2,
    3,
    1,
    2,
    3,
    1,
    2,
    3,
    1,
    2,
    3,
    1,
    2,
    3,
    1,
    2,
    3,
    1,
    2,
    3,
    2,
    3,
    1,
    3,
    1,
    3,
    4,
    1,
    3,
    4,
    1,
    4,
    1,
    3,
    1,
    3,
    1,
    3,
    2,
    3,
    2,
    2,
    3,
    2,
    3,
    1,
    3,
    2,
    3,
    2,
    4,
    2,
    3,
    2,
    3,
    1,
    3,
    2,
    3,
    2,
    3,
    2,
    4,
    2,
    4,
    4,
    2,
    4,
    2,
    4,
    2,
    3,
    2,
    3,
    3,
    2,
    3,
    2,
    4,
    3,
    2,
    4,
    3,
    2,
    3,
    2,
    4,
    2,
    4,
    1,
    2,
    4,
    1,
    2,
    4,
    1,
    4,
    2,
    4,
    2,
    3,
    2,
    4,
    2,
    4,
    2,
    4,
    1,
    4,
    1,
    4,
    1,
    3,
    4,
    1,
    4,
    1,
    3,
    1,
    3,
    3,
    3,
    4,
    1,
    4,
    1,
    1,
    4,
    1,
    4,
    1,
    1,
    1,
    2,
    3,
    4,
    2,
    4,
    4,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    1,
    4,
    1,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    4,
    2,
    4,
    2,
    4,
    3,
    2,
    4,
    3,
    2,
    4,
    2,
    3,
    2,
    3,
    1,
    3,
    2,
    3,
    2,
    4,
    3,
    2,
    4,
    3,
    2,
    4,
    2,
    3,
    2,
    3,
    2,
    3,
    1,
    3,
    1,
    3,
    1,
    3,
    1,
    1,
    1,
    4,
    4,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    3,
    2,
    2,
    2,
    2,
    2,
    4,
    3,
    2,
    4,
    2,
    3,
    2,
    3,
    3,
    2,
    3,
    2,
    3,
    2,
    4,
    2,
    4,
    2,
    4,
    1,
    2,
    4,
    2,
    4,
    1,
    4,
    1,
    4,
    4,
    4,
    2,
    4,
    2,
    2,
    4,
    2,
    4,
    1,
    2,
    4,
    1,
    2,
    4,
    1,
    2,
    4,
    1,
    2,
    4,
    2,
    4,
    1,
    4,
    1,
    4,
    1,
    3,
    1,
    3,
    1,
    3,
    1,
    3,
    1,
    1,
    1,
    4,
    1,
    4,
    1,
    4,
    1,
    4,
    4,
    1,
    4,
    1,
    3,
    1,
    4,
    1,
    4,
    1,
    2,
    4,
    1,
    2,
    4,
    1,
    2,
    4,
    1,
    2,
    4,
    1,
    4,
    2,
    4,
    2,
    3,
    2,
    4,
    2,
    4,
    1,
    4,
    2,
    4,
    2,
    3,
    2,
    4,
    2,
    4,
    2,
    4,
    1,
    4,
    1,
    1,
    4,
    1,
    4,
    1,
    4,
    2,
    4,
    2,
    4,
    2,
    3,
    4,
    2,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    1,
    2,
    3,
    2,
    3,
    1,
    3,
    1,
    3,
    1,
    3,
    2,
    3,
    1,
    3,
    1,
    3,
    3,
    2,
    3,
    2,
    2,
    4,
    2,
    2,
    4,
    2,
    4,
    2,
    4,
    3,
    3,
    1,
    1,
    1,
    1,
    4,
    4,
    2,
    2,
    4,
    4,
    2,
    2,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    2,
    4,
    1,
    2,
    4,
    1,
    2,
    4,
    2,
    4,
    1,
    4,
    1,
    4,
    1,
    3,
    1,
    3,
    1,
    1,
    1,
    4,
    1,
    4,
    4,
    1,
    4,
    1,
    4,
    3,
    1,
    3,
    4,
    1,
    4,
    3,
    1,
    4,
    3,
    1,
    4,
    3,
    1,
    3,
    4,
    1,
    3,
    4,
    1,
    4,
    3,
    1,
    4,
    3,
    1,
    4,
    3,
    1,
    4,
    3,
    1,
    4,
    3,
    1,
    4,
    1,
    3,
    1,
    3,
    1,
    3,
    2,
    3,
    1,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    2,
    3,
    2,
    3,
    2,
    3,
    2,
    1,
    3,
    1,
    1,
    3,
    1,
    3,
    1,
    2,
    3,
    1,
    2,
    3,
    1,
    3,
    2,
    3,
    2,
    3,
    2,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    2,
    3,
    2,
    3,
    2,
    2,
    4,
    4,
    4,
    4,
    4,
    1,
    3,
    4,
    1,
    4,
    4,
    2,
    2,
  ]
  //console.log("optCodeInput", optCodeInput)
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

      if (givenOutput === 0) {
        if (optCodeInput[optCodeInputIndex - 1] === 1) {
          field[currentPosition.y - 1][currentPosition.x] = "#"
        } else if (optCodeInput[optCodeInputIndex - 1] === 2) {
          field[currentPosition.y + 1][currentPosition.x] = "#"
        } else if (optCodeInput[optCodeInputIndex - 1] === 3) {
          field[currentPosition.y][currentPosition.x - 1] = "#"
        } else if (optCodeInput[optCodeInputIndex - 1] === 4) {
          field[currentPosition.y][currentPosition.x + 1] = "#"
        }
      }

      if (givenOutput === 1) {
        if (optCodeInput[optCodeInputIndex - 1] === 1) {
          field[currentPosition.y - 1][currentPosition.x] = "."
          currentPosition.y = currentPosition.y - 1
        } else if (optCodeInput[optCodeInputIndex - 1] === 2) {
          field[currentPosition.y + 1][currentPosition.x] = "."
          currentPosition.y = currentPosition.y + 1
        } else if (optCodeInput[optCodeInputIndex - 1] === 3) {
          field[currentPosition.y][currentPosition.x - 1] = "."
          currentPosition.x = currentPosition.x - 1
        } else if (optCodeInput[optCodeInputIndex - 1] === 4) {
          field[currentPosition.y][currentPosition.x + 1] = "."
          currentPosition.x = currentPosition.x + 1
        }

        //console.log("currentPosition", currentPosition)
      }

      // console.log("optCodeOutputArray", optCodeOutputArray)
      x = 2
    } else if (current.one === 4 && current.parameterMode1 === "immediate") {
      let givenOutput = input[i + 1]
      optCodeOutputArray.push(givenOutput)
      x = 2
      // console.log("optCodeOutputArray", optCodeOutputArray)
    } else if (current.one === 4 && current.parameterMode1 === "relative") {
      let givenOutput = input[input[i + 1] + optCodeBase]
      optCodeOutputArray.push(givenOutput)
      x = 2
      //  console.log("optCodeOutputArray", optCodeOutputArray)
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
  for (let i = 0; i < 1000; i += 1) {
    input2.push(0)
  }
  return input2
}

const generateEmptyField2 = (rows, columns) => {
  const empty = []
  for (let i = 0; i < rows; i++) {
    empty.push(new Array(columns))
  }
  return empty
}

const generateEmptyField = (rows, columns) => {
  const empty = []
  for (let i = 0; i < rows; i++) {
    let row = []
    for (let j = 0; j < columns; j++) {
      row.push("?")
    }
    empty.push(row)
  }
  return empty
}
