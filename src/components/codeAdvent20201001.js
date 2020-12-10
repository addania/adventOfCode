import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202010.json"
import "./component.css"

export const CodeAdvent20201001 = () => {
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
      <button style={{ backgroundColor: "#8E0C0C" }}>
        <span onClick={handleClick}>Click</span>
      </button>
    </div>
  )
}

function fun(input) {
  console.log("input[0]", input[0])
  const sortedList = input.sort(function(a, b) {
    return a - b
  })
  console.log("sortedList", sortedList)
  let base = 0
  let count1 = 0
  let count2 = 0
  let count3 = 0
  let deviceOutput = sortedList[sortedList.length - 1] + 3
  console.log("deviceOutput", deviceOutput)
  let data = []
  for (let i = 0; i < input.length; i++) {
    if (input[i] - base <= 3 && input[i] - base > 0) {
      let difference = input[i] - base
      if (difference === 1) {
        count1 += 1
        data.push({
          adapter: input[i],
          difference: difference,
          currentOutput: input[i],
          count1: count1,
          count2: count2,
          count3: count3,
        })
      } else if (difference === 2) {
        count2 += 1
        data.push({
          adapter: input[i],
          difference: difference,
          currentOutput: input[i],
          count1: count1,
          count2: count2,
          count3: count3,
        })
      } else if (difference === 3) {
        count3 += 1
        data.push({
          adapter: input[i],
          difference: difference,
          currentOutput: input[i],
          count1: count1,
          count2: count2,
          count3: count3,
        })
      }
      base = input[i]
    }
  }

  base = base + 3
  count3 += 1
  data.push({
    adapter: base + 3,
    difference: 3,
    currentOutput: base + 3,
    count1: count1,
    count2: count2,
    count3: count3,
  })
  console.log("data", data)
  console.log("count1", count1)
  console.log("count2", count2)
  console.log("count3", count3)
  console.log("base", base)
  return count1 * count3
}
