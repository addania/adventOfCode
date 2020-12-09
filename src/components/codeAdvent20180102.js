import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201801.json"
import "./component.css"

export const CodeAdvent20180102 = () => {
  const [array] = useState(data)
  const [result, setResult] = useState()

  function handleClick() {
    let sum = 0
    let uniques = { 0: 1 }
    let duplicate
    let proceed = true
    let i = 0
    while (proceed && i < 140) {
      i = i + 1
      array.map(item => {
        sum = sum + item
        if (uniques[sum] === 1 && proceed === true) {
          proceed = false
          duplicate = sum
        } else {
        }
        uniques[sum] = 1
      })
    }
    setResult(duplicate)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Find duplicate frequencies:</p>
      <p>Duplicate frequencies are: {JSON.stringify(result)}</p>
      <button style={{ backgroundColor: "#69747C" }} onClick={handleClick}>
        <span onClick={handleClick}>Find Duplicates</span>
      </button>
    </div>
  )
}
