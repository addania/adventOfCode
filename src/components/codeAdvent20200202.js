import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202002.json"
import "./component.css"

export const CodeAdvent20200202 = () => {
  const [passwords] = useState(data)
  const [total, setTotal] = useState()
  function handleClick() {
    let result = findValid(passwords)
    setTotal(result)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Password Philosophy:</p>
      <p>Valider passwords: {total} </p>
      <button style={{ backgroundColor: "#8E0C0C" }}>
        <span onClick={handleClick}>Find valider</span>
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

    let count = 0
    if (passwordInfo.password[passwordInfo.min - 1] === passwordInfo.letter) {
      count = count + 1
    }

    if (passwordInfo.password[passwordInfo.max - 1] === passwordInfo.letter) {
      count = count + 1
    }

    passwordInfo.countValid = count
    allPasswordsParsed.push(passwordInfo)

    if (count === 1) {
      validPasswords.push(passwordInfo)
    }
  }
  return validPasswords.length
}
