import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202007.json"
import "./component.css"

export const CodeAdvent20200702 = () => {
  const [x] = useState(data)
  const [total, setTotal] = useState()
  function handleClick() {
    let result = fun(x)
    setTotal(result)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Handy Haversacks:</p>
      <p>Bags in shiny: {total} </p>
      <button style={{ backgroundColor: "#C21F1F" }}>
        <span onClick={handleClick}>Count bags inception</span>
      </button>
    </div>
  )
}

function fun(input) {
  let data = {}
  let uniqueColors = []
  for (let i = 0; i < input.length; i++) {
    let items = input[i].split(" bags contain ")

    if (items[1] === "no other bags.") {
      if (!uniqueColors.includes(items[0])) {
        uniqueColors.push(items[0])
      }
      data[items[0]] = {}
    } else {
      if (!uniqueColors.includes(items[0])) {
        uniqueColors.push(items[0])
      }
      const contents = items[1].split(", ")
      data[items[0]] = {}
      for (let k = 0; k < contents.length; k++) {
        if (contents[k] === "no other bags.") {
        } else {
          let number = contents[k][0]
          let split = contents[k].split(" ")
          let color = split[1] + " " + split[2]
          if (!uniqueColors.includes(color)) {
            uniqueColors.push(color)
          }
          data[items[0]] = { ...data[items[0]], [color]: parseInt(number) }
        }
      }
    }
  }

  let finalArray = []
  const colorz = Object.keys(data)

  let total = 0

  const rec = color => {
    let count = 0
    let colorKeys = Object.keys(data[color])
    if (
      Object.keys(data[color]).length === 0 &&
      data[color].constructor === Object
    ) {
      return 0
    } else {
      for (let j = 0; j < colorKeys.length; j++) {
        let num = data[color][colorKeys[j]]
        count = count + num + num * rec(colorKeys[j])
      }
    }
    return count
  }
  let result = rec("shiny gold")

  /* const countDown = number => {
    // debugger
    if (number === 1) {
      return number
    } else {
      const update = number - 1
      return number * countDown(update)
    }
  }

  const countDown2 = number => {
    let count = 0
    if (number === 1) {
      return number
    } else {
      for (let i = 1; i < 3; i++) {
        count = count + i + number * countDown2(number - 1)
      }
    }
    return count
  }
  const sum = countDown(5)
  const sum2 = countDown2(3)
  */
  return result
}
