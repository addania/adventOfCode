import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201924.json"
import "./component.css"

export const CodeAdvent20192401 = () => {
  const [result, setResult] = useState()

  function handleClick() {
    const history = []
    let biodiversityLayout
    let newInput = {
      field: parseInput(data),
      string: stringify(parseInput(data)),
    }
    history.push(newInput.string)
    let forward = true
    while (forward) {
      newInput = infest(newInput)
      if (history.includes(newInput.string)) {
        forward = false
        biodiversityLayout = newInput.string
      } else {
        history.push(newInput.string)
      }
    }
    setResult(calculateBiodiversity(biodiversityLayout))
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Planet of Discord:</p>
      <p>Bio-diversity: {result} </p>
      <button style={{ backgroundColor: "#27A7C6" }}>
        <span onClick={handleClick}>Observe bugs</span>
      </button>
    </div>
  )
}

const parseInput = input => {
  const output = input.map(row => {
    return row.split("")
  })
  return output
}

const infest = input => {
  const eris = input.field
  const field = generateEmptyField(eris.length, eris[0].length)
  for (let i = 0; i < eris.length; i++) {
    for (let j = 0; j < eris[0].length; j++) {
      let count = 0
      if (i === 0 && j > 0 && j < eris[0].length - 1) {
        if (eris[i][j + 1] === "#") {
          count++
        }
        if (eris[i][j - 1] === "#") {
          count++
        }
        if (eris[i + 1][j] === "#") {
          count++
        }
      }
      if (i === 0 && j === 0) {
        if (eris[i][j + 1] === "#") {
          count++
        }
        if (eris[i + 1][j] === "#") {
          count++
        }
      }
      if (i === 0 && j === eris[0].length - 1) {
        if (eris[i][j - 1] === "#") {
          count++
        }
        if (eris[i + 1][j] === "#") {
          count++
        }
      }
      if (i === eris.length - 1 && j > 0 && j < eris[0].length - 1) {
        if (eris[i][j + 1] === "#") {
          count++
        }
        if (eris[i][j - 1] === "#") {
          count++
        }
        if (eris[i - 1][j] === "#") {
          count++
        }
      }
      if (i === eris.length - 1 && j === 0) {
        if (eris[i][j + 1] === "#") {
          count++
        }
        if (eris[i - 1][j] === "#") {
          count++
        }
      }
      if (i === eris.length - 1 && j === eris[0].length - 1) {
        if (eris[i][j - 1] === "#") {
          count++
        }
        if (eris[i - 1][j] === "#") {
          count++
        }
      }
      if (i > 0 && i < eris.length - 1 && j > 0 && j < eris[0].length - 1) {
        if (eris[i][j + 1] === "#") {
          count++
        }
        if (eris[i][j - 1] === "#") {
          count++
        }
        if (eris[i + 1][j] === "#") {
          count++
        }
        if (eris[i - 1][j] === "#") {
          count++
        }
      }
      if (i > 0 && i < eris.length - 1 && j === 0) {
        if (eris[i][j + 1] === "#") {
          count++
        }
        if (eris[i + 1][j] === "#") {
          count++
        }
        if (eris[i - 1][j] === "#") {
          count++
        }
      }
      if (i > 0 && i < eris.length - 1 && j === eris[0].length - 1) {
        if (eris[i][j - 1] === "#") {
          count++
        }
        if (eris[i + 1][j] === "#") {
          count++
        }
        if (eris[i - 1][j] === "#") {
          count++
        }
      }
      if (eris[i][j] === "#" && count === 1) {
        field[i][j] = "#"
      } else if (eris[i][j] === "#" && count !== 1) {
        field[i][j] = "."
      } else if (eris[i][j] === "." && (count === 1 || count === 2)) {
        field[i][j] = "#"
      } else if (eris[i][j] === "." && (count === 0 || count > 2)) {
        field[i][j] = "."
      }
    }
  }
  const newString = stringify(field)
  return { field: field, string: newString }
}

const generateEmptyField = (rows, columns) => {
  const empty = []
  for (let i = 0; i < rows; i++) {
    empty.push(new Array(columns))
  }
  return empty
}

const stringify = input => {
  let string = ""
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      string = string + input[i][j]
    }
  }
  return string
}

const calculateBiodiversity = input => {
  let sum = 0
  let power = 0
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (input[i][j] === "#") {
        sum = sum + Math.pow(2, power)
      }
      power++
    }
  }
  return sum
}
