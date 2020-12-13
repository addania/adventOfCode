import React, { useState } from "react"
//import data from "./AdventCodeInputs/CodeAdvent202013test.json"
import "./component.css"

export const CodeAdvent20201301 = () => {
  const [total, setTotal] = useState()

  function handleClick() {
    // Resolved on piece of paper :) Ol' fashioned way
    setTotal(333)
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Shuttle Search:</p>
      <p>Earliest bus: {total} </p>
      <button style={{ backgroundColor: "#8E0C0C" }}>
        <span onClick={handleClick}>Estimate departure</span>
      </button>
    </div>
  )
}
