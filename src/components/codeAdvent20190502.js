import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201905.json"
import "./component.css"

export const CodeAdvent20190502 = () => {
  const [input, setInput] = useState(data)
  const [result, setResult] = useState()

  function handleClick() {
    let calculation = calc2(input)
    let numberArray = calculation[0]
    let outputArray = calculation[1]
    let finalCode = outputArray[outputArray.length - 1]
    setResult(finalCode)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Sunny with a Chance of Asteroids:</p>
      <p>Diagnostic code: {result} </p>
      <button style={{ backgroundColor: "#6BAA75" }}>
        <span onClick={handleClick}>Analyze code</span>
      </button>
    </div>
  )
}

const calc2 = input => {
  let optCodeInput = 5
  let optCodeOutputArray = []
  let x = 0

  for (let i = 0; i < input.length; i += x) {
    let current = parseInput(input[i])
    if (current.number === 99) {
      x = 2
      break
    } else if (
      current.one === 1 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "position"
    ) {
      let newValue = input[input[i + 1]] + input[input[i + 2]]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 1 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "immediate"
    ) {
      let newValue = input[i + 1] + input[i + 2]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 1 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "immediate"
    ) {
      let newValue = input[input[i + 1]] + input[i + 2]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 1 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "position"
    ) {
      let newValue = input[i + 1] + input[input[i + 2]]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 2 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "position"
    ) {
      let newValue = input[input[i + 1]] * input[input[i + 2]]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 2 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "immediate"
    ) {
      let newValue = input[i + 1] * input[i + 2]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 2 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "immediate"
    ) {
      let newValue = input[input[i + 1]] * input[i + 2]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 2 &&
      current.parameterMode1 === "immediate" &&
      current.parameterMode2 === "position"
    ) {
      let newValue = input[i + 1] * input[input[i + 2]]
      input[input[i + 3]] = newValue
      x = 4
    } else if (current.number === 3) {
      input[input[i + 1]] = optCodeInput
      x = 2
    } else if (current.one === 4 && current.parameterMode1 === "position") {
      let givenOutput = input[input[i + 1]]
      optCodeOutputArray.push(givenOutput)
      x = 2
    } else if (current.one === 4 && current.parameterMode1 === "immediate") {
      let givenOutput = input[i + 1]
      optCodeOutputArray.push(givenOutput)
      x = 2
    } else if (
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
      current.one === 7 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "position"
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
      current.parameterMode2 === "immediate"
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
      current.parameterMode2 === "immediate"
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
      current.parameterMode2 === "position"
    ) {
      if (input[i + 1] < input[input[i + 2]]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one === 8 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "position"
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
      current.parameterMode2 === "immediate"
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
      current.parameterMode2 === "immediate"
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
      current.parameterMode2 === "position"
    ) {
      if (input[i + 1] === input[input[i + 2]]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
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
  }
  if (thousand === 0) {
    parsedObject.parameterMode2 = "position"
  } else if (thousand === 1) {
    parsedObject.parameterMode2 = "immediate"
  }
  if (tenThousand === 0) {
    parsedObject.parameterMode3 = "position"
  } else if (tenThousand === 1) {
    parsedObject.parameterMode3 = "immediate"
  }
  return parsedObject
}
