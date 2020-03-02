import React, { useState } from "react"
import _ from "lodash"
import data from "./AdventCodeInputs/CodeAdvent201915.json"
// Below is the entire maze
import optCodeInput from "./AdventCodeInputs/CodeAdvent201915Input.json"
// Here is the shortest path to oxygen
// import optCodeInput from "./AdventCodeInputs/CodeAdvent201915Input2.json"
import "./component.css"
// start / oxygen {x: 36, y: 23}
export const CodeAdvent20191502 = () => {
  const [input, setInput] = useState(data)
  const [result, setResult] = useState()

  function handleClick() {
    let longInput = increaseMemory(input)
    let calculation = calc2(longInput)
    let numberArray = calculation[0]
    let outputArray = calculation[1]
    let labyrinth = calculation[2]
    console.log("labyrinth", labyrinth)
    let start = findOxygen(labyrinth)
    console.log("start", start)
    let time = oxygenate(labyrinth, start)
    setResult(time)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Oxygen System:</p>
      <p>Minutes to oxygenate: {result} </p>
      <button style={{ backgroundColor: "#68C1B4" }}>
        <span onClick={handleClick}>Breathe!</span>
      </button>
    </div>
  )
}

const calc2 = input => {
  let field = generateEmptyField(41, 41)
  // console.log("field", field)
  let currentPosition = { x: 21, y: 21 }
  field[currentPosition.y][currentPosition.x] = "."
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
      }
      if (givenOutput === 2) {
        if (optCodeInput[optCodeInputIndex - 1] === 1) {
          field[currentPosition.y - 1][currentPosition.x] = "X"
          currentPosition.y = currentPosition.y - 1
        } else if (optCodeInput[optCodeInputIndex - 1] === 2) {
          field[currentPosition.y + 1][currentPosition.x] = "X"
          currentPosition.y = currentPosition.y + 1
        } else if (optCodeInput[optCodeInputIndex - 1] === 3) {
          field[currentPosition.y][currentPosition.x - 1] = "X"
          currentPosition.x = currentPosition.x - 1
        } else if (optCodeInput[optCodeInputIndex - 1] === 4) {
          field[currentPosition.y][currentPosition.x + 1] = "X"
          currentPosition.x = currentPosition.x + 1
        }
      }
      // console.log("currentPosition", currentPosition)
      /* if (currentPosition.x === 31 && currentPosition.y === 23 ){
      	console.log("outputttt", optCodeOutputArray)
      	debugger;
      }*/
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
  return [input, optCodeOutputArray, field, currentPosition]
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

const findOxygen = labyrinth => {
  let start
  for (let y = 0; y < labyrinth.length; y++) {
    for (let x = 0; x < labyrinth[0].length; x++) {
      if (labyrinth[y][x] === "X") {
        start = { x: x, y: y }
        break
      }
    }
  }
  return start
}

const oxygenate = (labyrinth, start) => {
  let vacuumStatus = countVacuum(labyrinth)
  console.log("vacuumStatus", vacuumStatus)
  let time = 0
  let benchmark = _.cloneDeep(labyrinth)
  let nextBenchmark = _.cloneDeep(benchmark)
  console.log("labOriginal", labyrinth)
  console.log("labCloned", benchmark)
  console.log("labClonedCloned", nextBenchmark)

  while (vacuumStatus > 0) {
    for (let y = 0; y < benchmark.length; y++) {
      for (let x = 0; x < benchmark[0].length; x++) {
        if (benchmark[y][x] === "X") {
          if (benchmark[y - 1][x] === ".") {
            nextBenchmark[y - 1][x] = "X"
          }
          if (benchmark[y + 1][x] === ".") {
            nextBenchmark[y + 1][x] = "X"
          }
          if (benchmark[y][x - 1] === ".") {
            nextBenchmark[y][x - 1] = "X"
          }
          if (benchmark[y][x + 1] === ".") {
            nextBenchmark[y][x + 1] = "X"
          }
        }
      }
    }
    time++
    benchmark = _.cloneDeep(nextBenchmark)
    vacuumStatus = countVacuum(nextBenchmark)
  }
  return time
}

const countVacuum = labyrinth => {
  let count = 0
  for (let y = 0; y < labyrinth.length; y++) {
    for (let x = 0; x < labyrinth[0].length; x++) {
      if (labyrinth[y][x] === ".") {
        count++
      }
    }
  }
  return count
}
