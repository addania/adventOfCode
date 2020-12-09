import { includes } from "lodash"
import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202004.json"
import "./component.css"

export const CodeAdvent20200402 = () => {
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
      <button style={{ backgroundColor: "#C21F1F" }}>
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
      let re = new RegExp("^\\d{2,3}(cm|in)$")
      let hair = new RegExp("^#[a-f0-9]{6}$")
      let nums = new RegExp("^[0-9]{9}$")
      if (scanNoCid[key] in allDocuments[k]) {
        if (
          scanNoCid[key] === "byr" &&
          allDocuments[k].byr >= 1920 &&
          allDocuments[k].byr <= 2002
        ) {
          score.push(1)
          sum = sum + 1
        } else if (
          scanNoCid[key] === "iyr" &&
          allDocuments[k].iyr >= 2010 &&
          allDocuments[k].iyr <= 2020
        ) {
          score.push(1)
          sum = sum + 1
        } else if (
          scanNoCid[key] === "eyr" &&
          allDocuments[k].eyr >= 2020 &&
          allDocuments[k].eyr <= 2030
        ) {
          score.push(1)
          sum = sum + 1
        } else if (scanNoCid[key] === "hgt" && re.test(allDocuments[k].hgt)) {
          if (
            allDocuments[k].hgt.includes("cm") &&
            allDocuments[k].hgt.split("cm")[0] >= 150 &&
            allDocuments[k].hgt.split("cm")[0] <= 193
          ) {
            score.push(1)
            sum = sum + 1
          } else if (
            allDocuments[k].hgt.includes("in") &&
            allDocuments[k].hgt.split("in")[0] >= 59 &&
            allDocuments[k].hgt.split("in")[0] <= 76
          ) {
            score.push(1)
            sum = sum + 1
          }
        } else if (scanNoCid[key] === "hcl" && hair.test(allDocuments[k].hcl)) {
          score.push(1)
          sum = sum + 1
        } else if (
          scanNoCid[key] === "ecl" &&
          ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(
            allDocuments[k].ecl
          )
        ) {
          score.push(1)
          sum = sum + 1
        } else if (scanNoCid[key] === "pid" && nums.test(allDocuments[k].pid)) {
          score.push(1)
          sum = sum + 1
        } else {
          score.push(0)
        }
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
