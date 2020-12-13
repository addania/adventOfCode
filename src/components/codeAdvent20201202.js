import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202012.json"
import "./component.css"

export const CodeAdvent20201202 = () => {
  const [total, setTotal] = useState()

  function handleClick() {
    let actualX = 0
    let actualY = 0
    let face = "E"
    let waypointX = 10
    let waypointY = 1
    let movements = []
    for (let i = 0; i < data.length; i++) {
      const nextMove = nextStep(
        data,
        actualX,
        actualY,
        face,
        waypointX,
        waypointY,
        data[i]
      )
      movements.push({
        currentX: actualX,
        currentY: actualY,
        currentFace: face,
        currentWaypointX: waypointX,
        currentWaypointY: waypointY,
        instruction: data[i],
        nextX: nextMove.x,
        nextY: nextMove.y,
        nextFace: nextMove.face,
        nextWaypointX: nextMove.wptX,
        nextWaypointY: nextMove.wptY,
      })
      actualX = nextMove.x
      actualY = nextMove.y
      face = nextMove.face
      waypointX = nextMove.wptX
      waypointY = nextMove.wptY
    }

    setTotal(Math.abs(actualX) + Math.abs(actualY))
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Rain Risk:</p>
      <p>Manhattan distance with waypoint: {total} </p>
      <button style={{ backgroundColor: "#8E0C0C" }}>
        <span onClick={handleClick}>Navigate</span>
      </button>
    </div>
  )
}

const nextStep = (input, x, y, face, wptX, wptY, instruction) => {
  const direction = instruction[0]
  const num = parseInt(instruction.slice(1))

  if (direction === "N") {
    wptY = wptY + num
  } else if (direction === "S") {
    wptY = wptY - num
  } else if (direction === "W") {
    wptX = wptX - num
  } else if (direction === "E") {
    wptX = wptX + num
  } else if (direction === "F") {
    y = y + num * wptY
    x = x + num * wptX
  } else if (direction === "R" && num === 90) {
    let newWptX = wptY
    let newWptY = -wptX
    wptX = newWptX
    wptY = newWptY
  } else if (direction === "R" && num === 180) {
    wptX = -wptX
    wptY = -wptY
  } else if (direction === "R" && num === 270) {
    let newWptX = -wptY
    let newWptY = wptX
    wptX = newWptX
    wptY = newWptY
  } else if (direction === "R" && num === 360) {
    wptX = wptX
    wptY = wptY
  } else if (direction === "L" && num === 90) {
    let newWptX = -wptY
    let newWptY = wptX
    wptX = newWptX
    wptY = newWptY
  } else if (direction === "L" && num === 180) {
    wptX = -wptX
    wptY = -wptY
  } else if (direction === "L" && num === 270) {
    let newWptX = wptY
    let newWptY = -wptX
    wptX = newWptX
    wptY = newWptY
  } else if (direction === "L" && num === 360) {
    wptX = wptX
    wptY = wptY
  }
  return { x: x, y: y, face: face, wptX: wptX, wptY: wptY }
}
