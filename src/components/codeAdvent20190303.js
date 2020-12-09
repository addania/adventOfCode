import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201903.json"
import "./component.css"

export const CodeAdvent20190303 = () => {
  const [wires] = useState(data)
  const [result, setResult] = useState()

  function handleClick() {
    let wireInfo = processInput(wires)
    let grid = generateGrid(wireInfo)
    let overlaps = checkOvelaps(grid, wireInfo)
    let minDistance = calculateMinDistance(overlaps, wireInfo)
    setResult(minDistance)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Crossed Wires (in progress):</p>
      <p>Manhattan Distance: {result} </p>
      <button style={{ backgroundColor: "#A7A7A9" }}>
        <span onClick={handleClick}>Check Wires</span>
      </button>
    </div>
  )
}

function processInput(input) {
  let wire1 = input[0]
  let wire2 = input[1]
  let wireInfo1 = []
  let wireInfo2 = []
  let sumRL1 = 0
  let sumUD1 = 0
  let sumRL2 = 0
  let sumUD2 = 0

  for (let i = 0; i < wire1.length; i++) {
    let direction1 = wire1[i].slice(0, 1)
    let movement1 = parseInt(wire1[i].slice(1))
    let dict1 = { direction: direction1, movement: movement1 }
    wireInfo1.push(dict1)
    if (direction1 === "R" || direction1 === "L") {
      sumRL1 = sumRL1 + movement1
    } else if (direction1 === "U" || direction1 === "D") {
      sumUD1 = sumUD1 + movement1
    }
  }

  for (let i = 0; i < wire2.length; i++) {
    let direction2 = wire2[i].slice(0, 1)
    let movement2 = parseInt(wire2[i].slice(1))
    let dict2 = { direction: direction2, movement: movement2 }
    wireInfo2.push(dict2)
    if (direction2 == "R" || direction2 == "L") {
      sumRL2 = sumRL2 + movement2
    } else if (direction2 == "U" || direction2 == "D") {
      sumUD2 = sumUD2 + movement2
    }
  }
  let gridWidth = (sumRL1 + sumRL2) * 2 + 1
  let gridHeight = (sumUD1 + sumUD2) * 2 + 1
  let wireInfo = {}
  wireInfo.wire1 = wireInfo1
  wireInfo.wire2 = wireInfo2
  wireInfo.gridWidth = gridWidth
  wireInfo.gridHeight = gridHeight
  wireInfo.centralPortPositionVertical = sumRL1 + sumRL2 + 1
  wireInfo.centralPortPositionHorizontal = sumUD1 + sumUD2 + 1
  return wireInfo
}

function generateGrid(input) {
  let grid = []
  for (let i = 0; i < input.gridHeight; i++) {
    let row = []
    for (let j = 0; j < input.gridWidth; j++) {
      row.push(" ")
    }
    grid.push(row)
  }
  return grid
}

function checkOvelaps(inputGrid, inputWireInfo) {
  let newGrid = [...inputGrid]
  newGrid[inputWireInfo.centralPortPositionVertical][
    inputWireInfo.centralPortPositionHorizontal
  ] = "X"
  let currentNode = [
    inputWireInfo.centralPortPositionVertical,
    inputWireInfo.centralPortPositionHorizontal,
  ]
  for (
    let wirePosition = 0;
    wirePosition < inputWireInfo.wire1.length;
    wirePosition++
  ) {
    if (inputWireInfo.wire1[wirePosition].direction === "R") {
      for (
        let iteration = 1;
        iteration <= inputWireInfo.wire1[wirePosition].movement;
        iteration++
      ) {
        newGrid[currentNode[0]][currentNode[1] + iteration] = "-"
      }
      currentNode[1] =
        currentNode[1] + inputWireInfo.wire1[wirePosition].movement
    } else if (inputWireInfo.wire1[wirePosition].direction === "L") {
      for (
        let iteration = 1;
        iteration <= inputWireInfo.wire1[wirePosition].movement;
        iteration++
      ) {
        newGrid[currentNode[0]][currentNode[1] - iteration] = "-"
      }
      currentNode[1] =
        currentNode[1] - inputWireInfo.wire1[wirePosition].movement
    } else if (inputWireInfo.wire1[wirePosition].direction === "U") {
      for (
        let iteration = 1;
        iteration <= inputWireInfo.wire1[wirePosition].movement;
        iteration++
      ) {
        newGrid[currentNode[0] - iteration][currentNode[1]] = "-"
      }
      currentNode[0] =
        currentNode[0] - inputWireInfo.wire1[wirePosition].movement
    } else if (inputWireInfo.wire1[wirePosition].direction === "D") {
      for (
        let iteration = 1;
        iteration <= inputWireInfo.wire1[wirePosition].movement;
        iteration++
      ) {
        newGrid[currentNode[0] + iteration][currentNode[1]] = "-"
      }
      currentNode[0] =
        currentNode[0] + inputWireInfo.wire1[wirePosition].movement
    }
  }
  currentNode = [
    inputWireInfo.centralPortPositionVertical,
    inputWireInfo.centralPortPositionHorizontal,
  ]
  let overlapsArray = []
  for (
    let wirePosition = 0;
    wirePosition < inputWireInfo.wire2.length;
    wirePosition++
  ) {
    if (inputWireInfo.wire2[wirePosition].direction === "R") {
      for (
        let iterate = 1;
        iterate <= inputWireInfo.wire2[wirePosition].movement;
        iterate++
      ) {
        if (newGrid[currentNode[0]][currentNode[1] + iterate] === " ") {
          newGrid[currentNode[0]][currentNode[1] + iterate] = "|"
        } else if (newGrid[currentNode[0]][currentNode[1] + iterate] === "-") {
          overlapsArray.push([currentNode[0], currentNode[1] + iterate])
        }
      }
      currentNode[1] =
        currentNode[1] + inputWireInfo.wire2[wirePosition].movement
    } else if (inputWireInfo.wire2[wirePosition].direction === "L") {
      for (
        let iterate = 1;
        iterate <= inputWireInfo.wire2[wirePosition].movement;
        iterate++
      ) {
        if (newGrid[currentNode[0]][currentNode[1] - iterate] === " ") {
          newGrid[currentNode[0]][currentNode[1] - iterate] = "|"
        } else if (newGrid[currentNode[0]][currentNode[1] - iterate] === "-") {
          overlapsArray.push([currentNode[0], currentNode[1] - iterate])
        }
      }
      currentNode[1] =
        currentNode[1] - inputWireInfo.wire2[wirePosition].movement
    } else if (inputWireInfo.wire2[wirePosition].direction === "U") {
      for (
        let iterate = 1;
        iterate <= inputWireInfo.wire2[wirePosition].movement;
        iterate++
      ) {
        if (newGrid[currentNode[0] - iterate][currentNode[1]] === " ") {
          newGrid[currentNode[0] - iterate][currentNode[1]] = "|"
        } else if (newGrid[currentNode[0] - iterate][currentNode[1]] === "-") {
          overlapsArray.push([currentNode[0] - iterate, currentNode[1]])
        }
      }
      currentNode[0] =
        currentNode[0] - inputWireInfo.wire2[wirePosition].movement
    } else if (inputWireInfo.wire2[wirePosition].direction === "D") {
      for (
        let iterate = 1;
        iterate <= inputWireInfo.wire2[wirePosition].movement;
        iterate++
      ) {
        if (newGrid[currentNode[0] + iterate][currentNode[1]] === " ") {
          newGrid[currentNode[0] + iterate][currentNode[1]] = "|"
        } else if (newGrid[currentNode[0] + iterate][currentNode[1]] === "-") {
          overlapsArray.push([currentNode[0] + iterate, currentNode[1]])
        }
      }
      currentNode[0] =
        currentNode[0] + inputWireInfo.wire2[wirePosition].movement
    }
  }
  return overlapsArray
}

function calculateMinDistance(overlapsInput, wireInfoInput) {
  let minDistance = wireInfoInput.gridHeight + wireInfoInput.gridWidth
  for (let overlapping = 0; overlapping < overlapsInput.length; overlapping++) {
    let distance =
      Math.abs(
        overlapsInput[overlapping][0] -
          wireInfoInput.centralPortPositionVertical
      ) +
      Math.abs(
        overlapsInput[overlapping][1] -
          wireInfoInput.centralPortPositionHorizontal
      )
    if (distance < minDistance) {
      minDistance = distance
    }
  }
  return minDistance
}
