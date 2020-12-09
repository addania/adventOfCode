import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202005.json"
import "./component.css"

export const CodeAdvent20200502 = () => {
  const [x] = useState(data)
  const [total, setTotal] = useState()
  function handleClick() {
    let result = fun(x)
    setTotal(result)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Binary Boarding:</p>
      <p>My seat alas: {total} </p>
      <button style={{ backgroundColor: "#8E0C0C" }}>
        <span onClick={handleClick}>Find seat</span>
      </button>
    </div>
  )
}

function fun(input) {
  const boardingPasses = []
  const ids = []
  const mySet = new Set()
  const field = []
  for (let z = 0; z < 127 + 1; z++) {
    field.push(new Array(8).fill(0))
  }

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

    if (start !== end) {
    }

    if (startIndex !== endIndex) {
    }
    let id = startIndex * 8 + start
    if (input[i][6] === "B") {
      id = endIndex * 8 + start
    }

    if (id > max) {
      max = id
    }

    boardingPasses.push({
      name: input[i],
      row: startIndex,
      col: start,
      id: startIndex * 8 + start,
    })

    ids.push(id)
    mySet.add(id)
    field[startIndex][start] = 1
  }

  const sortedSet = Array.from(mySet).sort(function(a, b) {
    return a - b
  })

  let final = 0

  for (let z = 0; z < sortedSet.length - 2; z++) {
    if (sortedSet[z] + 1 !== sortedSet[z + 1]) {
      final = sortedSet[z] + 1
    }
  }
  return final
}
