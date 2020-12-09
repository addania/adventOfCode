import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202003.json"
import "./component.css"

export const CodeAdvent20200302 = () => {
  const [map] = useState(data)
  const [total, setTotal] = useState()
  function handleClick() {
    let result13 = parseMap13(map)
    let result11 = parseMap11(map)
    let result15 = parseMap15(map)
    let result17 = parseMap17(map)
    let result21 = parseMap21(map)
    setTotal(result13 * result11 * result15 * result17 * result21)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Toboggan Trajectory:</p>
      <p>Trees on all routes: {total} </p>
      <button style={{ backgroundColor: "#A7A7A9" }}>
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

function parseMap11(input) {
  let path = []
  let trees = 0
  let increment = 0
  for (let row = 1; row < input.length; row++) {
    increment = increment + 1
    path.push(input[row][increment % 31])
    if (input[row][increment % 31] === "#") {
      trees = trees + 1
    }
  }
  return trees
}

function parseMap15(input) {
  let path = []
  let trees = 0
  let increment = 0
  for (let row = 1; row < input.length; row++) {
    increment = increment + 5
    path.push(input[row][increment % 31])
    if (input[row][increment % 31] === "#") {
      trees = trees + 1
    }
  }
  return trees
}

function parseMap17(input) {
  let path = []
  let trees = 0
  let increment = 0
  for (let row = 1; row < input.length; row++) {
    increment = increment + 7
    path.push(input[row][increment % 31])
    if (input[row][increment % 31] === "#") {
      trees = trees + 1
    }
  }
  return trees
}

function parseMap21(input) {
  let path = []
  let trees = 0
  let increment = 0
  for (let row = 2; row < input.length; row += 2) {
    increment = increment + 1
    path.push(input[row][increment % 31])
    if (input[row][increment % 31] === "#") {
      trees = trees + 1
    }
  }
  return trees
}
