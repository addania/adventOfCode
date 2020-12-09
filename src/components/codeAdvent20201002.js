import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202010.json"
import "./component.css"

export const CodeAdvent20201002 = () => {
  const [x] = useState(data)
  const [total, setTotal] = useState()
  function handleClick() {
    let result = fun(x)
    setTotal(result)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>XX:</p>
      <p>YY: {total} </p>
      <button style={{ backgroundColor: "#C21F1F" }}>
        <span onClick={handleClick}>Click</span>
      </button>
    </div>
  )
}

function fun(input) {
  console.log("input[0]", input[0])
  for (let i = 0; i < input.length; i++) {}

  return 1
}
