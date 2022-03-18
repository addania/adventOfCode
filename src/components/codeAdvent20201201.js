import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202012.json"
import "./component.css"

export const CodeAdvent20201201 = () => {
  const [total, setTotal] = useState()

  function handleClick() {
    let actualX = 0
    let actualY = 0
    let face = "E"
    let movements = []
    for (let i = 0; i < data.length; i++) {
      const nextMove = nextStep(data, actualX, actualY, face, data[i])
      movements.push({
        currentX: actualX,
        currentY: actualY,
        currentFace: face,
        instruction: data[i],
        nextX: nextMove.x,
        nextY: nextMove.y,
        nextFace: nextMove.face,
      })
      actualX = nextMove.x
      actualY = nextMove.y
      face = nextMove.face
    }

    setTotal(Math.abs(actualX) + Math.abs(actualY))
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Rain Risk:</p>
      <p>Manhattan distance: {total} </p>
      <button style={{ backgroundColor: "#C21F1F" }}>
        <span onClick={handleClick}>Navigate</span>
      </button>
    </div>
  )
}

const nextStep = (input, x, y, face, instruction) => {
  const direction = instruction[0]
  const num = parseInt(instruction.slice(1))

  if (direction === "N") {
    y = y + num
  } else if (direction === "S") {
    y = y - num
  } else if (direction === "W") {
    x = x - num
  } else if (direction === "E") {
    x = x + num
  } else if (direction === "F" && face === "N") {
    y = y + num
  } else if (direction === "F" && face === "S") {
    y = y - num
  } else if (direction === "F" && face === "W") {
    x = x - num
  } else if (direction === "F" && face === "E") {
    x = x + num
  } else if (direction === "R" && face === "E" && num === 90) {
    face = "S"
  } else if (direction === "R" && face === "E" && num === 180) {
    face = "W"
  } else if (direction === "R" && face === "E" && num === 270) {
    face = "N"
  } else if (direction === "R" && face === "E" && num === 360) {
    face = "E"
  } else if (direction === "R" && face === "N" && num === 90) {
    face = "E"
  } else if (direction === "R" && face === "N" && num === 180) {
    face = "S"
  } else if (direction === "R" && face === "N" && num === 270) {
    face = "W"
  } else if (direction === "R" && face === "N" && num === 360) {
    face = "N"
  } else if (direction === "R" && face === "W" && num === 90) {
    face = "N"
  } else if (direction === "R" && face === "W" && num === 180) {
    face = "E"
  } else if (direction === "R" && face === "W" && num === 270) {
    face = "S"
  } else if (direction === "R" && face === "W" && num === 360) {
    face = "W"
  } else if (direction === "R" && face === "S" && num === 90) {
    face = "W"
  } else if (direction === "R" && face === "S" && num === 180) {
    face = "N"
  } else if (direction === "R" && face === "S" && num === 270) {
    face = "E"
  } else if (direction === "R" && face === "S" && num === 360) {
    face = "S"
  } else if (direction === "L" && face === "E" && num === 90) {
    face = "N"
  } else if (direction === "L" && face === "E" && num === 180) {
    face = "W"
  } else if (direction === "L" && face === "E" && num === 270) {
    face = "S"
  } else if (direction === "L" && face === "E" && num === 360) {
    face = "E"
  } else if (direction === "L" && face === "N" && num === 90) {
    face = "W"
  } else if (direction === "L" && face === "N" && num === 180) {
    face = "S"
  } else if (direction === "L" && face === "N" && num === 270) {
    face = "E"
  } else if (direction === "L" && face === "N" && num === 360) {
    face = "N"
  } else if (direction === "L" && face === "W" && num === 90) {
    face = "S"
  } else if (direction === "L" && face === "W" && num === 180) {
    face = "E"
  } else if (direction === "L" && face === "W" && num === 270) {
    face = "N"
  } else if (direction === "L" && face === "W" && num === 360) {
    face = "W"
  } else if (direction === "L" && face === "S" && num === 90) {
    face = "E"
  } else if (direction === "L" && face === "S" && num === 180) {
    face = "N"
  } else if (direction === "L" && face === "S" && num === 270) {
    face = "W"
  } else if (direction === "L" && face === "S" && num === 360) {
    face = "S"
  }

  return { x: x, y: y, face: face }
}
