import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202006.json"
import "./component.css"

export const CodeAdvent20200602 = () => {
  const [x] = useState(data)
  const [total, setTotal] = useState()
  function handleClick() {
    let result = fun(x)
    setTotal(result)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Custom Customs:</p>
      <p>Everyone in group: {total} </p>
      <button style={{ backgroundColor: "#A7A7A9" }}>
        <span onClick={handleClick}>Count "yes"</span>
      </button>
    </div>
  )
}

function fun(input) {
  let groupId = 0
  let data = []
  let allYes = 0
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  let resultsGroup = new Array(alphabet.length).fill(1)
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "") {
      let sum = 0
      for (let k = 0; k < resultsGroup.length; k++) {
        sum = sum + resultsGroup[k]
      }
      data.push({
        groupId: groupId,
        resultsGroup: resultsGroup,
        totalYes: sum,
      })
      allYes = allYes + sum
      groupId = groupId + 1
      resultsGroup = new Array(alphabet.length).fill(1)
    } else {
      for (let j = 0; j < alphabet.length; j++) {
        if (!input[i].includes(alphabet[j])) {
          resultsGroup[j] = 0
        }
      }
    }
  }
  return allYes
}
