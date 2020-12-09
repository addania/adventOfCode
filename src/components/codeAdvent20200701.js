import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202007.json"
import "./component.css"

export const CodeAdvent20200701 = () => {
  const [x] = useState(data)
  const [total, setTotal] = useState()
  function handleClick() {
    let result = fun(x)
    setTotal(result)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Handy Haversacks:</p>
      <p>Shiny gold in bags: {total} </p>
      <button style={{ backgroundColor: "#8E0C0C" }}>
        <span onClick={handleClick}>Find my shiny</span>
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
  for (let k = 0; k < colorz.length; k++) {
    let count = 0
    let total = 0

    const rec = color => {
      if ("shiny gold" in data[color]) {
        count = count + 1
        finalArray.push({ [colorz[k]]: 1 })
      } else {
        const keys = Object.keys(data[color])
        for (let j = 0; j < keys.length; j++) {
          if (count > 0) {
            break
          } else {
            rec(keys[j])
          }
        }
      }
    }
    rec(colorz[k])
  }
  return finalArray.length
}
