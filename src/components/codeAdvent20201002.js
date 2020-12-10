import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202010.json"
import "./component.css"

export const CodeAdvent20201002 = () => {
  const [x] = useState(data)
  const [total, setTotal] = useState()
  function handleClick() {
    const sortedList = x.sort(function(a, b) {
      return a - b
    })
    let prefix = [0]
    let index = 0
    let result = fun(sortedList, prefix, index)
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

function fun(sortedList, prefix, index) {
  let final = [[0]]
  for (let i = index; i < sortedList.length; i++) {
    let additions = []
    for (let j = 0; j < final.length; j++) {
      if (final[j][i] === 0) {
        let diff1 = sortedList[i] - 0
        let diff2 = sortedList[i + 1] - 0
        let diff3 = sortedList[i + 2] - 0
        if (diff1 === 3) {
          final[j].push(sortedList[i])
        } else if (diff1 === 2 && diff2 > 3) {
          final[j].push(sortedList[i])
        } else if (diff1 === 2 && diff2 === 3) {
          final.push([...final[j]])
          final[final.length - 1].push(sortedList[i + 1])
          final[j].push(sortedList[i])
          j = j + 1
        } else if (diff1 === 1 && diff2 > 3) {
          final[j].push(sortedList[i])
        } else if (
          diff1 === 1 &&
          diff2 <= 3 &&
          (diff3 > 3 || Number.isNaN(diff3))
        ) {
          final.push([...final[j]])
          final[final.length - 1].push(sortedList[i + 1])
          final[j].push(sortedList[i])
          j = j + 1
        } else if (diff1 === 1 && diff2 === 2 && diff3 === 3) {
          final.push([...final[j]])
          final[final.length - 1].push(sortedList[i + 1])
          final.push([...final[j]])
          final[final.length - 1].push(sortedList[i + 2])
          final[j].push(sortedList[i])
          j = j + 2
        }
      } else {
        let lastNumber = final[j][i]
        let position = sortedList.indexOf(lastNumber)
        let diff1 = sortedList[position + 1] - sortedList[position]
        let diff2 = sortedList[position + 2] - sortedList[position]
        let diff3 = sortedList[position + 3] - sortedList[position]
        if (diff1 === 3) {
          final[j].push(sortedList[position + 1])
        } else if (diff1 === 2 && diff2 > 3) {
          final[j].push(sortedList[position + 1])
        } else if (diff1 === 2 && diff2 === 3) {
          let x = final[j].slice()
          x.push(sortedList[position + 2])
          additions.push(x)
          final[j].push(sortedList[position + 1])
        } else if (diff1 === 1 && diff2 > 3) {
          final[j].push(sortedList[position + 1])
        } else if (
          diff1 === 1 &&
          diff2 <= 3 &&
          (diff3 > 3 || Number.isNaN(diff3))
        ) {
          let x = final[j].slice()
          x.push(sortedList[position + 2])
          additions.push(x)
          final[j].push(sortedList[position + 1])
        } else if (diff1 === 1 && diff2 === 2 && diff3 === 3) {
          let x = final[j].slice()
          x.push(sortedList[position + 2])
          additions.push(x)
          let y = final[j].slice()
          y.push(sortedList[position + 3])
          additions.push(y)
          final[j].push(sortedList[position + 1])
        }
      }
    }
    if (additions.length > 0) {
      for (let z = 0; z < additions.length; z++) {
        final.push(additions[z])
      }
    }
  }
  console.log(final.length)
  return final.length
}
