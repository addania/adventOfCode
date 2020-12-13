import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202011.json"
import "./component.css"

export const CodeAdvent20201102 = () => {
  const [x] = useState(data)
  const [total, setTotal] = useState()
  function handleClick() {
    let result = fun(x)
    setTotal(result)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Seating System (in Progress):</p>
      <p>Occupied seats: {total} </p>
      <button style={{ backgroundColor: "#8E0C0C" }}>
        <span onClick={handleClick}>Real-life simulation</span>
      </button>
    </div>
  )
}

function fun(input) {
  for (let i = 0; i < input.length; i++) {}
  return 1
}
