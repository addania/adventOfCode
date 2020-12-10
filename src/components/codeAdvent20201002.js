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
      <button style={{ backgroundColor: "#7F6A93" }}>
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
      if (final[j][0] === 0) {
        let diff1 = sortedList[0]
        let diff2 = sortedList[1]
        let diff3 = sortedList[2]
        if (diff1 === 3) {
          final[j] = [sortedList[0]]
        } else if (diff1 === 2 && diff2 > 3) {
          final[j] = [sortedList[0]]
        } else if (diff1 === 2 && diff2 === 3) {
          final.push([sortedList[1]])
          final[j] = [sortedList[0]]

          j = j + 1
        } else if (diff1 === 1 && diff2 > 3) {
          final[j] = [sortedList[0]]
        } else if (
          diff1 === 1 &&
          diff2 <= 3 &&
          (diff3 > 3 || Number.isNaN(diff3))
        ) {
          final.push([sortedList[1]])
          final[j] = [sortedList[0]]

          j = j + 1
        } else if (diff1 === 1 && diff2 === 2 && diff3 === 3) {
          final.push([sortedList[1]])
          final[j] = [sortedList[0]]
          final.push([sortedList[2]])

          j = j + 2
        }
      } else {
        let lastNumber = final[j][0]
        let position = sortedList.indexOf(lastNumber)
        let diff1 = sortedList[position + 1] - sortedList[position]
        let diff2 = sortedList[position + 2] - sortedList[position]
        let diff3 = sortedList[position + 3] - sortedList[position]
        if (diff1 === 3) {
          final[j] = [sortedList[position + 1]]
        } else if (diff1 === 2 && diff2 > 3) {
          final[j] = [sortedList[position + 1]]
        } else if (diff1 === 2 && diff2 === 3) {
          additions.push([sortedList[position + 2]])
          final[j] = [sortedList[position + 1]]
        } else if (diff1 === 1 && diff2 > 3) {
          final[j] = [sortedList[position + 1]]
        } else if (
          diff1 === 1 &&
          diff2 <= 3 &&
          (diff3 > 3 || Number.isNaN(diff3))
        ) {
          additions.push([sortedList[position + 2]])
          final[j] = [sortedList[position + 1]]
        } else if (diff1 === 1 && diff2 === 2 && diff3 === 3) {
          additions.push([sortedList[position + 2]])
          final[j] = [sortedList[position + 1]]
          additions.push([sortedList[position + 3]])
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
