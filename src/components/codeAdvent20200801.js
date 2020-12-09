import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202008.json"
import "./component.css"

export const CodeAdvent20200801 = () => {
  const [x] = useState(data)
  const [total, setTotal] = useState()
  function handleClick() {
    let result = fun(x)
    setTotal(result)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Handheld Halting:</p>
      <p>Accumulator: {total} </p>
      <button style={{ backgroundColor: "#A7A7A9" }}>
        <span onClick={handleClick}>Stop infinite loop</span>
      </button>
    </div>
  )
}

function fun(input) {
  let acc = 0
  let offset = 1
  const parsedInput = []
  let loop = true
  for (let i = 0; i < input.length; i++) {
    const split = input[i].split(" ")
    parsedInput.push({
      instruction: split[0],
      value: parseInt(split[1]),
      visited: 0,
    })
  }

  for (let i = 0; loop; i += offset) {
    if (parsedInput[i].instruction === "nop" && parsedInput[i].visited === 0) {
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
    }
  }
  return acc
}
