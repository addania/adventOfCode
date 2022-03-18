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

export const CodeAdvent20201402 = () => {
  const [total, setTotal] = useState()
  function handleClick() {
    const memory = allocateMemories(data)

    const summarize = sumMemories(memory)
    setTotal(summarize)
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Docking Data:</p>
      <p>Memory sum: {total} </p>
      <button style={{ backgroundColor: "#8E0C0C" }}>
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
      const binary = decimalToBinary(memoryAddress)

      const afterMaskBinary = applyMask(mask, binary)
      const allMasks = getMaskCombinations(afterMaskBinary)
      for (let j = 0; j < allMasks.length; j++) {
        const finalNumber = binaryToDecimal(allMasks[j], [...binaryArray])
        memory[finalNumber] = memoryValue
      }
    }
  }
  return memory
}

const applyMask = (mask, bin) => {
  let result = [...bin]
  for (let i = 0; i < bin.length; i++) {
    if (mask[i] === "1") {
      result[i] = parseInt(mask[i])
    } else if (mask[i] === "X") {
      result[i] = mask[i]
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

const getMaskCombinations = mask => {
  let allMasks = []
  if (mask[0] === 1 || mask[0] === 0) {
    allMasks.push([mask[0]])
  } else {
    allMasks.push([0])
    allMasks.push([1])
  }

  for (let i = 1; i < mask.length; i++) {
    if (mask[i] !== "X") {
      for (let j = 0; j < allMasks.length; j++) {
        allMasks[j].push(mask[i])
      }
    } else if (mask[i] === "X") {
      let newbies = []
      for (let k = 0; k < allMasks.length; k++) {
        let newArr = [...allMasks[k]]
        newArr.push(1)
        newbies.push(newArr)
        allMasks[k].push(0)
      }
      const concatedArray = allMasks.concat(newbies)
      allMasks = [...concatedArray]
    }
  }
  return allMasks
}
