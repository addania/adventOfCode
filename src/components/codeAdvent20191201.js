import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201912.json"
import "./component.css"

export const CodeAdvent20191201 = () => {
  const input = data
  const [result, setResult] = useState()
  function handleClick() {
    const parsedInput = parseInput(data)
    console.log(parsedInput)
    setResult("0")
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>The N-Body Problem:</p>
      <p>Total Energy: {result} </p>
      <button style={{ backgroundColor: "#A7A7A9" }}>
        <span onClick={handleClick}>Estimate Energy</span>
      </button>
    </div>
  )
}

const parseInput = input => {
  const output = input.map(item => {
    const x = item.slice(item.indexOf("<x=") + 3, item.indexOf(","))
    const y = item.slice(
      item.indexOf("y=") + 2,
      item.indexOf(",", item.indexOf("y="))
    )
    const z = item.slice(
      item.indexOf("z=") + 2,
      item.indexOf(",", item.indexOf("z="))
    )
    return { x: x, y: y, z: z, velX: 0, velY: 0, velZ: 0 }
  })
  return output
}
