import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201907.json"
import "./component.css"

export const CodeAdvent20190701 = () => {
  const [amplifierControllerSoftware] = useState(data)
  const [maxSetting, setMaxSetting] = useState({
    am1: "",
    am2: "",
    am3: "",
    am4: "",
    am5: "",
  })
  const [result, setResult] = useState()

  function handleClick() {
    let maxThrusterSetting = 0
    let maxPhaseSetting = {}
    for (let am1 = 0; am1 < 5; am1++) {
      for (let am2 = 0; am2 < 5; am2++) {
        for (let am3 = 0; am3 < 5; am3++) {
          for (let am4 = 0; am4 < 5; am4++) {
            for (let am5 = 0; am5 < 5; am5++) {
              if (
                am1 !== am2 &&
                am1 !== am3 &&
                am1 !== am4 &&
                am1 !== am5 &&
                am2 !== am3 &&
                am2 !== am4 &&
                am2 !== am5 &&
                am3 !== am4 &&
                am3 !== am5 &&
                am4 !== am5
              ) {
                let optInput11 = am1
                let optInput12 = 0
                let finalCode1 = calc2(
                  amplifierControllerSoftware,
                  optInput11,
                  optInput12
                )
                let optInput21 = am2
                let optInput22 = finalCode1
                let finalCode2 = calc2(
                  amplifierControllerSoftware,
                  optInput21,
                  optInput22
                )
                let optInput31 = am3
                let optInput32 = finalCode2
                let finalCode3 = calc2(
                  amplifierControllerSoftware,
                  optInput31,
                  optInput32
                )
                let optInput41 = am4
                let optInput42 = finalCode3
                let finalCode4 = calc2(
                  amplifierControllerSoftware,
                  optInput41,
                  optInput42
                )
                let optInput51 = am5
                let optInput52 = finalCode4
                let finalCode5 = calc2(
                  amplifierControllerSoftware,
                  optInput51,
                  optInput52
                )
                if (finalCode5 > maxThrusterSetting) {
                  maxThrusterSetting = finalCode5
                  maxPhaseSetting.am1 = am1
                  maxPhaseSetting.am2 = am2
                  maxPhaseSetting.am3 = am3
                  maxPhaseSetting.am4 = am4
                  maxPhaseSetting.am5 = am5
                }
              }
            }
          }
        }
      }
    }
    setResult(maxThrusterSetting)
    setMaxSetting(maxPhaseSetting)
    console.log(maxPhaseSetting)
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Amplification Circuit:</p>
      <p>Highest amplifier signal: {result} </p>
      <p>
        Max phase setting:{" "}
        {maxSetting.am1 +
          " > " +
          maxSetting.am2 +
          " > " +
          maxSetting.am3 +
          " > " +
          maxSetting.am4 +
          " > " +
          maxSetting.am5}{" "}
      </p>
      <button style={{ backgroundColor: "#27A7C6" }}>
        <span onClick={handleClick}>Compute signal</span>
      </button>
    </div>
  )
}

const calc2 = (input, optCodeInput1, optCodeInput2) => {
  let firstInput = true
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
    } else if (current.number === 3 && firstInput) {
      input[input[i + 1]] = optCodeInput1
      firstInput = false
      x = 2
    } else if (current.number === 3 && !firstInput) {
      input[input[i + 1]] = optCodeInput2
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
  return optCodeOutputArray[optCodeOutputArray.length - 1]
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
