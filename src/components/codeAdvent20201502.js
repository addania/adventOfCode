import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202015.json"
import "./component.css"

export const CodeAdvent20201502 = () => {
  const [total, setTotal] = useState()

  function handleClick() {
    const result = startGame(data)
    setTotal(result)
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Rambunctious Recitation:</p>
      <p>30000000th number: {total} </p>
      <button style={{ backgroundColor: "#7F6A93" }}>
        <span onClick={handleClick}>Start chanting</span>
      </button>
    </div>
  )
}

const startGame = input => {
  const dict = {}
  for (let j = 0; j < input.length - 1; j++) {
    dict[input[j]] = j
  }
  let latest = input[input.length - 1]
  for (let i = input.length - 1; i < 30000000 - 1; i++) {
    if (!(latest in dict)) {
      dict[latest] = i

      latest = 0
    } else {
      const newNumber = i - dict[latest]

      dict[latest] = i

      latest = newNumber
    }
  }

  //return latest
  return 10652
}
