import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202015.json"
import "./component.css"

export const CodeAdvent20201501 = () => {
  const [total, setTotal] = useState()

  function handleClick() {
    const result = startGame(data)
    setTotal(result)
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Rambunctious Recitation:</p>
      <p>2020th number: {total} </p>
      <button style={{ backgroundColor: "#C21F1F" }}>
        <span onClick={handleClick}>Start chanting</span>
      </button>
    </div>
  )
}

const indexOfAll = (arr, val) =>
  arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), [])

const startGame = input => {
  for (let i = input.length - 1; i < 2019; i++) {
    const reducedInput = input.slice(0, input.length - 1)
    if (!reducedInput.includes(input[i])) {
      input.push(0)
    } else {
      const all = indexOfAll(input, input[i])
      const difference = all[all.length - 1] - all[all.length - 2]
      input.push(difference)
    }
  }

  return input[input.length - 1]
}
