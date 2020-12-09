import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202009.json"
import "./component.css"

export const CodeAdvent20200901 = () => {
  const [x] = useState(data)
  const [total, setTotal] = useState()
  function handleClick() {
    let result = fun(x, 25)
    setTotal(result)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Encoding Error:</p>
      <p>XMAS weakness number: {total} </p>
      <button style={{ backgroundColor: "#C21F1F" }}>
        <span onClick={handleClick}>Find weakness</span>
      </button>
    </div>
  )
}

function fun(input, preamble) {
  let data = []
  let final = -1
  for (let i = preamble; i < input.length; i++) {
    let sums = []

    for (let j = i - preamble; j < i; j++) {
      for (let k = j; k < i - 1; k++) {
        if (parseInt(input[j]) != parseInt(input[k + 1])) {
          data.push({
            position: i,
            number: parseInt(input[i]),
            one: parseInt(input[j]),
            two: parseInt(input[k + 1]),
            sum: parseInt(input[j]) + parseInt(input[k + 1]),
          })
          sums.push(parseInt(input[j]) + parseInt(input[k + 1]))
        } else {
        }
      }
    }
    if (sums.includes(parseInt(input[i]))) {
    } else {
      final = parseInt(input[i])

      break
    }
  }

  return final
}
