import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202002.json"
import "./component.css"

export const CodeAdvent20200201 = () => {
  const [passwords] = useState(data)
  const [total, setTotal] = useState()
  function handleClick() {
    let result = findValid(passwords)
    setTotal(result)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Password Philosophy:</p>
      <p>Valid passwords: {total} </p>
      <button style={{ backgroundColor: "#A7A7A9" }}>
        <span onClick={handleClick}>Find valid</span>
      </button>
    </div>
  )
}

function findValid(input) {
  let validPasswords = []
  let allPasswordsParsed = []
  for (let i = 0; i < input.length; i++) {
    const elements = input[i].split(" ")
    const minMax = elements[0].split("-")
    const letter = elements[1].split(":")
    const pass = elements[2]

    const passwordInfo = {
      min: minMax[0],
      max: minMax[1],
      letter: letter[0],
      password: pass,
    }
    allPasswordsParsed.push(passwordInfo)

    let regularExpression = new RegExp(passwordInfo.letter, "g")

    const occurance = (passwordInfo.password.match(regularExpression) || [])
      .length

    if (occurance >= passwordInfo.min && occurance <= passwordInfo.max) {
      validPasswords.push(passwordInfo)
    }
  }
  return validPasswords.length
}
