import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202009.json"
import "./component.css"

export const CodeAdvent20200902 = () => {
  const [x] = useState(data)
  const [total, setTotal] = useState()
  function handleClick() {
    let result1 = fun(x, 25)
    let result2 = fun2(x, result1)
    setTotal(result2)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Encoding Error:</p>
      <p>Min/Max of weaknesses: {total} </p>
      <button style={{ backgroundColor: "#A7A7A9" }}>
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
        if (parseInt(input[j]) !== parseInt(input[k + 1])) {
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

function fun2(input, sum) {
  let sortedArray = []
  let cont = true
  for (let i = 0; i < input.length - 1 && cont; i++) {
    let calculate = parseInt(input[i])
    let myNums = [parseInt(input[i])]

    for (let j = i + 1; calculate <= sum; j++) {
      calculate = calculate + parseInt(input[j])

      myNums.push(parseInt(input[j]))
      if (calculate === sum) {
        sortedArray = myNums.sort(function(a, b) {
          return a - b
        })
        cont = false
        break
      } else {
      }
    }
  }

  return sortedArray[0] + sortedArray[sortedArray.length - 1]
}
