import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202004.json"
import "./component.css"

export const CodeAdvent20200401 = () => {
  const [passports] = useState(data)
  const [total, setTotal] = useState()
  function handleClick() {
    let result = fun(passports)
    setTotal(result)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Passport Processing:</p>
      <p>Passports: {total} </p>
      <button style={{ backgroundColor: "#8E0C0C" }}>
        <span onClick={handleClick}>Find valid</span>
      </button>
    </div>
  )
}

function fun(input) {
  let scanNoCid = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
  let allDocuments = Array(265).fill({})
  let next = 0

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "" || input[i] === undefined || input[i] === null) {
      next = next + 1
    } else {
      let individual = input[i].split(" ")

      for (let j = 0; j < individual.length; j++) {
        const item = individual[j].split(":")
        allDocuments[next] = { ...allDocuments[next], [item[0]]: item[1] }
      }
    }
  }
  let totalValid = 0
  for (let k = 0; k < allDocuments.length; k++) {
    let score = []
    let sum = 0
    for (let key = 0; key < scanNoCid.length; key++) {
      if (scanNoCid[key] in allDocuments[k]) {
        score.push(1)
        sum = sum + 1
      } else {
        score.push(0)
      }
    }
    allDocuments[k] = {
      ...allDocuments[k],
      score: score,
      valid: sum === 7,
    }
    if (sum === 7) {
      totalValid = totalValid + 1
    }
  }
  return totalValid
}
