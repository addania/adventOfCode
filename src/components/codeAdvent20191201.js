import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201912.json"
import "./component.css"

export const CodeAdvent20191201 = () => {
  const input = data
  /*  const input = [
"<x=-8, y=-10, z=0>",
"<x=5, y=5, z=10>",
"<x=2, y=-7, z=3>",
"<x=9, y=-8, z=-3>",
  ]*/
  const [result, setResult] = useState()
  function handleClick() {
    const parsedInput = parseInput(input)
    const numSteps = 1000
    const finalMap = computeMap(parsedInput, numSteps)
    const totalEnergy = calculateTotalEnergy(finalMap)
    setResult(totalEnergy)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>The N-Body Problem:</p>
      <p>Total Energy: {result} </p>
      <button style={{ backgroundColor: "#A7A7A9" }}>
        <span onClick={handleClick}>Estimate Energy</span>
      </button>
    </div>
  )
}

const parseInput = input => {
  const output = input.map(item => {
    const x = item.slice(item.indexOf("<x=") + 3, item.indexOf(","))
    const y = item.slice(
      item.indexOf("y=") + 2,
      item.indexOf(",", item.indexOf("y="))
    )
    const z = item.slice(
      item.indexOf("z=") + 2,
      item.indexOf(",", item.indexOf("z="))
    )
    return {
      x: parseInt(x),
      y: parseInt(y),
      z: parseInt(z),
      velX: 0,
      velY: 0,
      velZ: 0,
    }
  })
  return output
}

const calculateVelocity = (moon1, moon2) => {
  let velX1 = 0,
    velX2 = 0,
    velY1 = 0,
    velY2 = 0,
    velZ1 = 0,
    velZ2 = 0
  if (moon1.x > moon2.x) {
    velX1 = -1
    velX2 = +1
  } else if (moon1.x < moon2.x) {
    velX2 = -1
    velX1 = +1
  }

  if (moon1.y > moon2.y) {
    velY1 = -1
    velY2 = +1
  } else if (moon1.y < moon2.y) {
    velY2 = -1
    velY1 = +1
  }

  if (moon1.z > moon2.z) {
    velZ1 = -1
    velZ2 = +1
  } else if (moon1.z < moon2.z) {
    velZ2 = -1
    velZ1 = +1
  }
  return [velX1, velX2, velY1, velY2, velZ1, velZ2]
}

const computeAllVelocities = input => {
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      const newVelocity = calculateVelocity(input[i], input[j])
      input[i].velX = input[i].velX + newVelocity[0]
      input[i].velY = input[i].velY + newVelocity[2]
      input[i].velZ = input[i].velZ + newVelocity[4]
      input[j].velX = input[j].velX + newVelocity[1]
      input[j].velY = input[j].velY + newVelocity[3]
      input[j].velZ = input[j].velZ + newVelocity[5]
    }
  }
  return input
}

const applyVelocity = input => {
  input.forEach(item => {
    item.x = item.x + item.velX
    item.y = item.y + item.velY
    item.z = item.z + item.velZ
  })
  return input
}

const computeMap = (input, iteration) => {
  for (let i = 0; i < iteration; i++) {
    const updatedVelocities = computeAllVelocities(input)
    input = applyVelocity(updatedVelocities)
  }
  return input
}

const calculateTotalEnergy = input => {
  const individualEnergies = input.map(item => {
    const itemEnergy =
      (Math.abs(item.x) + Math.abs(item.y) + Math.abs(item.z)) *
      (Math.abs(item.velX) + Math.abs(item.velY) + Math.abs(item.velZ))
    return itemEnergy
  })
  const totalSum = individualEnergies.reduce((accumulator, item) => {
    return accumulator + item
  })
  return totalSum
}
