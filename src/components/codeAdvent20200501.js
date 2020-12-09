import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202005.json"
import "./component.css"

export const CodeAdvent20200501 = () => {
  const [x] = useState(data)
  const [total, setTotal] = useState()
  function handleClick() {
    let result = fun(x)
    setTotal(result)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Binary Boarding:</p>
      <p>Max boarding pass id: {total} </p>
      <button style={{ backgroundColor: "#A7A7A9" }}>
        <span onClick={handleClick}>Get boarding passes</span>
      </button>
    </div>
  )
}

function fun(input) {
  const boardingPasses = []
  let max = 0
  for (let i = 0; i < input.length; i++) {
    let startIndex = 0
    let endIndex = 127

    for (let j = 0; j < 6; j++) {
      let middleIndex = (startIndex + endIndex) / 2

      if (input[i][j] === "F") {
        endIndex = Math.floor(middleIndex)
      }
      if (input[i][j] === "B") {
        startIndex = Math.ceil(middleIndex)
      }
    }

    let start = 0
    let end = 7

    for (let k = 7; k < 10; k++) {
      let middle = (start + end) / 2

      if (input[i][k] === "L") {
        end = Math.floor(middle)
      }
      if (input[i][k] === "R") {
        start = Math.ceil(middle)
      }
    }

    const id = startIndex * 8 + start

    if (id > max) {
      max = id
    }

    boardingPasses.push({
      id: input[i],
      row: startIndex,
      col: start,
      id: startIndex * 8 + start,
    })
  }
  return max
}
