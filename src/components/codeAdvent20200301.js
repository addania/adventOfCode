import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202003.json"
import "./component.css"

export const CodeAdvent20200301 = () => {
  const [map] = useState(data)
  const [total, setTotal] = useState()
  function handleClick() {
    let result13 = parseMap13(map)
    setTotal(result13)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Toboggan Trajectory:</p>
      <p>Trees on 1st route: {total} </p>
      <button style={{ backgroundColor: "#C21F1F" }}>
        <span onClick={handleClick}>Scan trees</span>
      </button>
    </div>
  )
}

function parseMap13(input) {
  let path = []
  let trees = 0
  let increment = 0
  for (let row = 1; row < input.length; row++) {
    increment = increment + 3
    path.push(input[row][increment % 31])
    if (input[row][increment % 31] === "#") {
      trees = trees + 1
    }
  }
  return trees
}
