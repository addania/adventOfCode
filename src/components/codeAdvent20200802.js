import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202008.json"
import "./component.css"

export const CodeAdvent20200802 = () => {
  const [x] = useState(data)
  const [total, setTotal] = useState()
  const allInputs = generateInputs(data)

  function handleClick() {
    for (let i = 0; i < allInputs.length; i++) {
      let result = fun(allInputs[i])
      //console.log("input", allInputs[i])
      if (result[0] === "FIXED") {
        // console.log("Success", result[1])
        setTotal(result[1])
      } else if (result[0] === "INFINITE") {
        //  console.log("Fails", result[1])
      } else {
        //   console.log("TOTAL FAIL")
      }
    }

    // let result = fun(x)
    // setTotal(result)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Handheld Halting:</p>
      <p>Accumulator: {total} </p>
      <button style={{ backgroundColor: "#8E0C0C" }}>
        <span onClick={handleClick}>Replace instruction</span>
      </button>
    </div>
  )
}

function fun(input) {
  let acc = 0
  let offset = 1
  const parsedInput = []
  let loop = true
  let result = ""
  for (let i = 0; i < input.length; i++) {
    const split = input[i].split(" ")
    parsedInput.push({
      instruction: split[0],
      value: parseInt(split[1]),
      visited: 0,
    })
  }

  for (let i = 0; loop; i += offset) {
    if (i >= input.length) {
      loop = false
      result = "FIXED"
    } else if (
      parsedInput[i].instruction === "nop" &&
      parsedInput[i].visited === 0
    ) {
      parsedInput[i].visited = 1
      offset = 1
    } else if (
      parsedInput[i].instruction === "acc" &&
      parsedInput[i].visited === 0
    ) {
      parsedInput[i].visited = 1
      acc = acc + parsedInput[i].value
      offset = 1
    } else if (
      parsedInput[i].instruction === "jmp" &&
      parsedInput[i].visited === 0
    ) {
      parsedInput[i].visited = 1
      offset = parsedInput[i].value
    } else {
      loop = false
      result = "INFINITE"
    }
  }
  return [result, acc]
}

function generateInputs(input) {
  let allInputs = []
  let first = -1
  for (let i = 0; i < input.length; i++) {
    if (
      input[i].split(" ")[0] === "jmp" ||
      (input[i].split(" ")[0] === "nop" &&
        parseInt(input[i].split(" ")[1]) !== 0)
    ) {
      if (input[i].split(" ")[0] === "jmp") {
        first = i
        let newInput = [...input]
        newInput[i] = "nop " + input[i].split(" ")[1]
        allInputs.push(newInput)
      } else if (
        input[i].split(" ")[0] === "nop" &&
        parseInt(input[i].split(" ")[1]) !== 0
      ) {
        first = i
        first = i
        let newInput = [...input]
        newInput[i] = "jmp " + input[i].split(" ")[1]
        allInputs.push(newInput)
      }
    } else {
    }
  }
  return allInputs
}
