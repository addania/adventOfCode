import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202014.json"
import "./component.css"

const binaryCount = () => {
  let arr = []
  for (let i = 35; i >= 0; i--) {
    arr.push(2 ** i)
  }
  return arr
}

const binaryArray = binaryCount()

export const CodeAdvent20201401 = () => {
  const [total, setTotal] = useState()

  const arr = decimalToBinary(11)

  const number = binaryToDecimal(arr, [...binaryArray])

  function handleClick() {
    const memory = allocateMemories(data)

    const summarize = sumMemories(memory)
    setTotal(summarize)
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Docking Data:</p>
      <p>Memory sum: {total} </p>
      <button style={{ backgroundColor: "#A7A7A9" }}>
        <span onClick={handleClick}>Review memory</span>
      </button>
    </div>
  )
}

const decimalToBinary = num => {
  let arr = new Array(36).fill(0)
  let i = 35
  while (num > 0) {
    let celok = Math.floor(num / 2)
    let zvysok = num % 2
    num = celok
    arr[i] = zvysok
    i = i - 1
  }
  return arr
}

const binaryToDecimal = (arr, binArray) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i] * binArray[i]
  }
  return sum
}

const allocateMemories = input => {
  let memory = {}
  let mask = []
  for (let i = 0; i < input.length; i++) {
    if (input[i].includes("mask")) {
      const newMask = input[i].split("mask = ")[1].split("")
      mask = [...newMask]
    } else {
      const memoryAddress = parseInt(input[i].split("mem[")[1].split("]")[0])

      const memoryValue = parseInt(input[i].split("] = ")[1])
      const binary = decimalToBinary(memoryValue)

      const afterMaskBinary = applyMask(mask, binary)
      const finalNumber = binaryToDecimal(afterMaskBinary, [...binaryArray])

      memory[memoryAddress] = finalNumber
    }
  }

  return memory
}

const applyMask = (mask, bin) => {
  let result = [...bin]
  for (let i = 0; i < bin.length; i++) {
    if (mask[i] !== "X") {
      result[i] = parseInt(mask[i])
    }
  }
  return result
}

const sumMemories = mem => {
  const objectKeys = Object.keys(mem)
  let sum = 0
  for (let i = 0; i < objectKeys.length; i++) {
    sum = sum + mem[objectKeys[i]]
  }
  return sum
}
