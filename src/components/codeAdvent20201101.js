import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202011.json"
import "./component.css"

export const CodeAdvent20201101 = () => {
  const [x] = useState(data)
  const [total, setTotal] = useState()

  function handleClick() {
    const history = []
    let finalLayout
    let newInput = {
      field: parseInput(x),
      string: stringify(parseInput(x)),
    }

    history.push(newInput.string)

    let forward = true
    while (forward) {
      newInput = infest(newInput)

      if (history.includes(newInput.string)) {
        forward = false

        finalLayout = newInput.string
        console.log("finalLayout", finalLayout)
      } else {
        history.push(newInput.string)
      }
    }
    setTotal(calculateSeats(finalLayout))
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Seating System:</p>
      <p>Occupied seats: {total} </p>
      <button style={{ backgroundColor: "#8E0C0C" }}>
        <span onClick={handleClick}>Predict</span>
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
      if (eris[i][j] !== "." && i === 0 && j > 0 && j < eris[0].length - 1) {
        if (eris[i][j + 1] === "#") {
          count++
        }
        if (eris[i][j - 1] === "#") {
          count++
        }
        if (eris[i + 1][j] === "#") {
          count++
        }
        if (eris[i + 1][j + 1] === "#") {
          count++
        }
        if (eris[i + 1][j - 1] === "#") {
          count++
        }
      }
      if (eris[i][j] !== "." && i === 0 && j === 0) {
        if (eris[i][j + 1] === "#") {
          count++
        }
        if (eris[i + 1][j] === "#") {
          count++
        }
        if (eris[i + 1][j + 1] === "#") {
          count++
        }
      }
      if (eris[i][j] !== "." && i === 0 && j === eris[0].length - 1) {
        if (eris[i][j - 1] === "#") {
          count++
        }
        if (eris[i + 1][j] === "#") {
          count++
        }
        if (eris[i + 1][j - 1] === "#") {
          count++
        }
      }
      if (
        eris[i][j] !== "." &&
        i === eris.length - 1 &&
        j > 0 &&
        j < eris[0].length - 1
      ) {
        if (eris[i][j + 1] === "#") {
          count++
        }
        if (eris[i][j - 1] === "#") {
          count++
        }
        if (eris[i - 1][j] === "#") {
          count++
        }
        if (eris[i - 1][j - 1] === "#") {
          count++
        }
        if (eris[i - 1][j + 1] === "#") {
          count++
        }
      }
      if (eris[i][j] !== "." && i === eris.length - 1 && j === 0) {
        if (eris[i][j + 1] === "#") {
          count++
        }
        if (eris[i - 1][j] === "#") {
          count++
        }
        if (eris[i - 1][j + 1] === "#") {
          count++
        }
      }
      if (
        eris[i][j] !== "." &&
        i === eris.length - 1 &&
        j === eris[0].length - 1
      ) {
        if (eris[i][j - 1] === "#") {
          count++
        }
        if (eris[i - 1][j] === "#") {
          count++
        }
        if (eris[i - 1][j - 1] === "#") {
          count++
        }
      }
      if (
        eris[i][j] !== "." &&
        i > 0 &&
        i < eris.length - 1 &&
        j > 0 &&
        j < eris[0].length - 1
      ) {
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
        if (eris[i - 1][j - 1] === "#") {
          count++
        }
        if (eris[i - 1][j + 1] === "#") {
          count++
        }
        if (eris[i + 1][j - 1] === "#") {
          count++
        }
        if (eris[i + 1][j + 1] === "#") {
          count++
        }
      }
      if (eris[i][j] !== "." && i > 0 && i < eris.length - 1 && j === 0) {
        if (eris[i][j + 1] === "#") {
          count++
        }
        if (eris[i + 1][j] === "#") {
          count++
        }
        if (eris[i - 1][j] === "#") {
          count++
        }

        if (eris[i + 1][j + 1] === "#") {
          count++
        }
        if (eris[i - 1][j + 1] === "#") {
          count++
        }
      }
      if (
        eris[i][j] !== "." &&
        i > 0 &&
        i < eris.length - 1 &&
        j === eris[0].length - 1
      ) {
        if (eris[i][j - 1] === "#") {
          count++
        }
        if (eris[i + 1][j] === "#") {
          count++
        }
        if (eris[i - 1][j] === "#") {
          count++
        }
        if (eris[i + 1][j - 1] === "#") {
          count++
        }
        if (eris[i - 1][j - 1] === "#") {
          count++
        }
      }
      if (eris[i][j] === "L" && count === 0) {
        field[i][j] = "#"
      } else if (eris[i][j] === "#" && count >= 4) {
        field[i][j] = "L"
      } else {
        field[i][j] = eris[i][j]
      } /* else if (eris[i][j] === "." && (count === 1 || count === 2)) {
        field[i][j] = "#"
      } else if (eris[i][j] === "." && (count === 0 || count > 2)) {
        field[i][j] = "."
      }*/
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

const calculateSeats = input => {
  let sum = 0

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === "#") {
        sum = sum + 1
      }
    }
  }
  return sum
}
