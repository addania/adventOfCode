import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202013.json"
import "./component.css"

export const CodeAdvent20201302 = () => {
  const [total, setTotal] = useState()
  const parsed = parseData(data)

  function handleClick() {
    const result = getTimestamp(parsed)
    setTotal(result)
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Shuttle Search:</p>
      <p>Earliest timestamp: {total} </p>
      <button style={{ backgroundColor: "#8E0C0C" }}>
        <span onClick={handleClick}>Hunt timestamp</span>
      </button>
    </div>
  )
}

const parseData = input => {
  let parsed = []

  for (let i = 0; i < input.length; i++) {
    let x = parseInt(input[i])
    if (input[i] !== "x") {
      parsed.push({ value: x, offset: i })
    }
  }
  console.log("parsed", parsed)
  return parsed
}

const getTimestamp = input => {
  let final = 0
  for (let t = 100000000000000; t < 10000000000000000; t++) {
    if (t % input[0].value === 0) {
      let difference = input[1].value - (t % input[1].value)
      if (difference === input[1].offset) {
        let difference = input[2].value - (t % input[2].value)
        if (difference === input[2].offset) {
          let difference = input[3].value - (t % input[3].value)
          if (difference === input[3].offset) {
            let difference = input[4].value - (t % input[4].value)
            if (difference === input[4].offset) {
              let difference = input[5].value - (t % input[5].value)
              if (difference === input[5].offset) {
                let difference = input[6].value - (t % input[6].value)
                if (difference === input[6].offset) {
                  let difference = input[7].value - (t % input[7].value)
                  if (difference === input[7].offset) {
                    let difference = input[8].value - (t % input[8].value)
                    if (difference === input[8].offset) {
                      console.log("I found the difference for t: ", t)
                      final = t
                      break
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return final
}
