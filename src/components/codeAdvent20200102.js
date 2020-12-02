import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202001.json"
import "./component.css"

export const CodeAdvent20200102 = () => {
  const [expenses, setExpenses] = useState(data)
  const [total, setTotal] = useState()
  function handleClick() {
    let result = findNumbers(expenses)
    setTotal(result[0] * result[1] * result[2])
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Report Repair:</p>
      <p>Sum 3 to 2020: {total} </p>
      <button style={{ backgroundColor: "#C21F1F" }}>
        <span onClick={handleClick}>Find 3 entries</span>
      </button>
    </div>
  )
}

function findNumbers(input) {
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = 0; j < input.length - 1; j++) {
      for (let k = 0; k < input.length - 1; k++) {
        if (i !== j && i !== k && j !== k) {
          if (input[i] + input[j] + input[k] === 2020) {
            console.log(input[i], input[j], input[k])
            return [input[i], input[j], input[k]]
          }
        }
      }
    }
  }
}

/*
1361 + 60 + 599=2020
1361 * 60 * 599=48914340
*/
