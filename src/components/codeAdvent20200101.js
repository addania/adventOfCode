import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202001.json"
import "./component.css"

export const CodeAdvent20200101 = () => {
  const [expenses, setExpenses] = useState(data)
  const [total, setTotal] = useState()
  function handleClick() {
    let result = findNumbers(expenses)
    let tot = result[0] * result[1]
    setTotal(tot)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Report Repair:</p>
      <p>Sum 2 to 2020: {total} </p>
      <button style={{ backgroundColor: "#8E0C0C" }}>
        <span onClick={handleClick}>Find 2 entries</span>
      </button>
    </div>
  )
}

function findNumbers(input) {
  let final = []
  input.forEach(item => {
    const [two] = input.filter(item2 => item + item2 === 2020)
    if (two !== undefined) {
      final.push(item)
      final.push(two)
    }
  })
  return final
}

/*
897+1123=2020
897*1123=1007331
*/
