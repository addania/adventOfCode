import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202006.json"
import "./component.css"

export const CodeAdvent20200601 = () => {
  const [x] = useState(data)
  const [total, setTotal] = useState()
  function handleClick() {
    let result = fun(x)
    setTotal(result)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Custom Customs:</p>
      <p>Some in group: {total} </p>
      <button style={{ backgroundColor: "#C21F1F" }}>
        <span onClick={handleClick}>Count "yes"</span>
      </button>
    </div>
  )
}

function fun(input) {
  let groupId = 0
  let uniques = new Set()
  let data = []
  let allYes = 0
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {}
    if (input[i] === "") {
      data.push({
        groupId: groupId,
        uniques: uniques,
        totalYes: uniques.size,
      })
      allYes = allYes + uniques.size
      groupId = groupId + 1
      uniques = new Set()
    } else {
      for (let j = 0; j < input[i].length; j++) {
        uniques.add(input[i][j])
      }
    }
  }
  return allYes
}
