import React, { useState } from "react"
//import data from "./AdventCodeInputs/CodeAdvent201924.json"
import "./component.css"

export const CodeAdvent20192401 = () => {
  const [result, setResult] = useState()
  const data = ["....#", "#..#.", "#..##", "..#..", "#...."]

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
    console.log("newInput", newInput)
    console.log("history", history)
    console.log("biodiversityLayout", biodiversityLayout)
    setResult(0)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Planet of Discord (in Progress):</p>
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
      const count = 0
      console.log("i", i, "j", j)
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

      console.log("count", count)
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
  console.log("field", field)
  const newString = stringify(field)
  console.log("newString", newString)
  return { field: field, string: newString }
}

const generateEmptyField = (rows, columns) => {
  const empty = []
  for (let i = 0; i < rows; i++) {
    empty.push(new Array(columns))
  }
  console.log(empty)
  return empty
}

const stringify = input => {
  let string = ""
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      string = string + input[i][j]
    }
  }
  console.log(string)
  return string
}
