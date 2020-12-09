import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201803.json"
import "./component.css"

export const CodeAdvent20180301 = () => {
  const [claims] = useState(data)
  const [overlaps, setOverlaps] = useState()
  const [uniqueClaim, setUniqueClaim] = useState()

  function handleClick() {
    let result = checkFabric(claims)
    setOverlaps(result[0])
    setUniqueClaim(result[1])
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Santa Fabric Overlaps:</p>
      <p>Number of overlaps: {JSON.stringify(overlaps)}</p>
      <p>Unique claim: {JSON.stringify(uniqueClaim)}</p>
      <button style={{ backgroundColor: "#69747C" }} onClick={handleClick}>
        <span onClick={handleClick}>Check Overlaps</span>
      </button>
    </div>
  )
}

function checkFabric(input) {
  let fabricWidth = 1000
  let fabricHeight = 1000
  let fabric = []
  let claimsArray = []
  for (let i = 0; i < fabricHeight; i++) {
    fabric.push([])
    for (let j = 0; j < fabricWidth; j++) {
      fabric[i].push(0)
    }
  }
  for (let i = 0; i < input.length; i++) {
    let id = input[i].slice(1, input[i].indexOf(" @"))
    let horizontalOffset = input[i].slice(
      input[i].indexOf("@ ") + 2,
      input[i].indexOf(",")
    )
    let verticalOffset = input[i].slice(
      input[i].indexOf(",") + 1,
      input[i].indexOf(":")
    )
    let rectangleWidth = input[i].slice(
      input[i].indexOf(": ") + 2,
      input[i].indexOf("x")
    )
    let rectangleHeight = input[i].slice(input[i].indexOf("x") + 1)
    claimsArray.push([
      id,
      horizontalOffset,
      verticalOffset,
      rectangleWidth,
      rectangleHeight,
    ])
  }
  let output = computation(fabric, claimsArray)
  return output
}

function computation(textile, claims) {
  let numberOfOverlaps = 0
  for (let claim = 0; claim < claims.length; claim++) {
    for (
      let row = parseInt(claims[claim][2]);
      row < parseInt(claims[claim][2]) + parseInt(claims[claim][4]);
      row++
    ) {
      for (
        let column = parseInt(claims[claim][1]);
        column < parseInt(claims[claim][1]) + parseInt(claims[claim][3]);
        column++
      ) {
        textile[row][column] = textile[row][column] + 1
      }
    }
  }
  for (let line = 0; line < textile.length; line++) {
    for (let col = 0; col < textile[line].length; col++) {
      if (textile[line][col] > 1) {
        numberOfOverlaps = numberOfOverlaps + 1
      } else {
      }
    }
  }
  let unique = getUnique(textile, claims)
  return [numberOfOverlaps, unique]
}

function getUnique(cloth, claimZ) {
  let uniqueID
  for (let claim = 0; claim < claimZ.length; claim++) {
    let isOverlapping = true
    let area = parseInt(claimZ[claim][3]) * parseInt(claimZ[claim][4])
    let countArea = 0
    for (
      let row = parseInt(claimZ[claim][2]);
      row < parseInt(claimZ[claim][2]) + parseInt(claimZ[claim][4]);
      row++
    ) {
      for (
        let column = parseInt(claimZ[claim][1]);
        column < parseInt(claimZ[claim][1]) + parseInt(claimZ[claim][3]);
        column++
      ) {
        if (cloth[row][column] === 1) {
          countArea = countArea + 1
        } else {
        }
      }
    }
    if (area === countArea) {
      uniqueID = claimZ[claim][0]
      console.log("uniqueID is:", uniqueID)
    }
  }
  return uniqueID
}
