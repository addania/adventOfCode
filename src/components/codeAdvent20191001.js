import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201910.json"
import "./component.css"

export const CodeAdvent20191001 = () => {
  const [asteroidData, setAsteroidData] = useState([
    ".#..#",
    ".....",
    "#####",
    "....#",
    "...##",
  ])
  const [maxAsteroids, setMaxAsteroids] = useState()

  const handleClick = () => {
    const asteroidPositions = asteroidData
      .map((row, i) => getXCoordinates(row, i))
      .flat()
    const equation = getEquation({ x: 1, y: 0 }, { x: 4, y: 0 })
    console.log("equation", equation)
    const minDistance = checkMinDistance(
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: -2, y: -2 }
    )
    console.log("minDistance", minDistance)

    setMaxAsteroids(0)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Monitoring Station:</p>
      <p>Max asteroids detected: {maxAsteroids} </p>
      <button style={{ backgroundColor: "#69747C" }}>
        <span onClick={handleClick}>Detect Asteroids</span>
      </button>
    </div>
  )
}

const getXCoordinates = (input, yCoordinates) => {
  const positions = input
    .split("")
    .map((item, index) => {
      if (item === "#") {
        return { x: index, y: yCoordinates }
      }
    })
    .filter(item => item !== undefined)
  return positions
}

const getEquation = (pointA, pointB) => {
  // A: {x:1, y:2} a1, a2
  // B: {x:3, y:4} b1, b2
  const equationLeftConstant = pointA.y
  const equationRightConstant1 = (pointA.x - pointB.x) / (pointA.y - pointB.y)
  const equationRightConstant2 = pointA.x
  if (pointA.y === pointB.y) {
    return {
      eqY: undefined,
      eqLC: equationLeftConstant,
      eqRC1: equationRightConstant1,
      eqX: undefined,
      eqRC2: equationRightConstant2,
      isHorizontal: true,
      isVertical: false,
    }
  } else if (pointA.x === pointB.x) {
    return {
      eqY: undefined,
      eqLC: equationLeftConstant,
      eqRC1: equationRightConstant1,
      eqX: undefined,
      eqRC2: equationRightConstant2,
      isHorizontal: false,
      isVertical: true,
    }
  } else {
    return {
      eqY: undefined,
      eqLC: equationLeftConstant,
      eqRC1: equationRightConstant1,
      eqX: undefined,
      eqRC2: equationRightConstant2,
      isHorizontal: false,
      isVertical: false,
    }
  }
}

const checkIfOnSameLine = (pointA, pointB, pointC) => {
  const equation = getEquation(pointA, pointB)
  if (equation.isHorizontal) {
    console.log("horizontal")
    return pointC.y === equation.eqLC
  } else if (equation.isVertical) {
    console.log("veertical")
    return pointC.x === equation.eqRC2
  } else {
    console.log("other")
    return (
      pointC.y - equation.eqLC === equation.eqRC1 * (pointC.x - equation.eqRC2)
    )
  }
}

const calculateDistance = (pointA, pointB) => {
  const distance = Math.sqrt(
    (pointA.x - pointB.x) * (pointA.x - pointB.x) +
      (pointA.y - pointB.y) * (pointA.y - pointB.y)
  )
  return distance
}

const checkMinDistance = (pointA, pointB, pointC) => {
  let min
  const checkPoint = checkIfOnSameLine(pointA, pointB, pointC)
  if (checkPoint) {
    const distanceAB = calculateDistance(pointA, pointB)
    console.log("distanceAB", distanceAB)
    const distanceAC = calculateDistance(pointA, pointC)
    console.log("distanceAC", distanceAC)
    if (distanceAB < distanceAC) {
      min = pointB
    } else {
      min = pointC
    }
  }
  console.log("min", min)
  return min
}
