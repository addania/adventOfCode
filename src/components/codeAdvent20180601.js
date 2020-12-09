import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201806.json"
import "./component.css"

export const CodeAdvent20180601 = () => {
  const [introCoordinates] = useState(data)
  const [result, setResult] = useState()

  function handleClick() {
    let output = computeArea(introCoordinates)
    setResult(output)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Chronal Coordinates:</p>
      <p>Size of largest area: {result} </p>
      <button style={{ backgroundColor: "#A7A7A9" }}>
        <span onClick={handleClick}>Compute area</span>
      </button>
    </div>
  )
}

function computeArea(coordinates) {
  let max = findMax(coordinates)
  let maximumRow = max[0]
  let maximumColumn = max[1]
  let emptyMap = generateField(maximumRow, maximumColumn)
  let coordinatesArray = generateIDs(coordinates)
  let populatedMap = populateCoordinates(emptyMap, coordinatesArray)
  let distanceMap = calculateDistances(populatedMap, coordinatesArray)
  let eliminatedCoordinates = eliminateEdgeCoordinates(distanceMap)
  let areaArray = calculateAreas(
    distanceMap,
    eliminatedCoordinates,
    coordinatesArray
  )
  let largestArea = getLargestArea(areaArray)
  return largestArea[1]
}

function findMax(input) {
  let maxRow = 0
  let maxColumn = 0
  for (let i = 0; i < input.length; i++) {
    if (input[i][1] > maxRow) {
      maxRow = input[i][1]
    }
    if (input[i][0] > maxColumn) {
      maxColumn = input[i][0]
    }
  }
  let outcome = [maxRow, maxColumn]
  return outcome
}

function generateField(maxR, maxC) {
  let coordinateMap = []
  for (let y = 0; y <= maxR; y++) {
    let newRow = new Array(maxC + 1)
    for (let x = 0; x <= maxC; x++) {
      newRow[x] = 0
    }
    coordinateMap.push(newRow)
  }
  return coordinateMap
}

function generateIDs(coord) {
  let idsLower = "abcdefghijklmnopqrstuvwxyz"
  let idsUpper = idsLower.toUpperCase()
  let ids = idsLower + idsUpper
  let idsArray = ids.split("")
  let enrichedCoordinates = []
  for (let line = 0; line < coord.length; line++) {
    let dict = {}
    dict.id = idsArray[line]
    dict.value = coord[line]
    dict.areaCount = 0
    enrichedCoordinates.push(dict)
  }
  return enrichedCoordinates
}

function populateCoordinates(field, coords) {
  for (let entry = 0; entry < coords.length; entry++) {
    field[coords[entry].value[1]][coords[entry].value[0]] = coords[entry].id
  }
  return field
}

function calculateDistances(mapWithCoords, arrayWithCoords) {
  let distanceArray = []
  for (let r = 0; r < mapWithCoords.length; r++) {
    for (let c = 0; c < mapWithCoords[r].length; c++) {
      let distanceDict = {}
      distanceArray.coordY = r
      distanceArray.coordX = c
      distanceArray.value = mapWithCoords[r][c]
      distanceArray.distances = []
      let minDistance = mapWithCoords.length + mapWithCoords[0].length
      let minID
      let dist = {}
      for (
        let coordInstance = 0;
        coordInstance < arrayWithCoords.length;
        coordInstance++
      ) {
        if (mapWithCoords[r][c] === 0) {
          let pointDistance =
            Math.abs(r - arrayWithCoords[coordInstance].value[1]) +
            Math.abs(c - arrayWithCoords[coordInstance].value[0])
          let value = arrayWithCoords[coordInstance].id
          dist[value] = pointDistance
          if (pointDistance <= minDistance) {
            minDistance = pointDistance
            minID = arrayWithCoords[coordInstance].id
          }
        }
      }
      distanceArray.distances = dist
      distanceArray.minValue = minDistance
      let minIDs = []
      Object.keys(distanceArray.distances).forEach(key => {
        if (distanceArray.distances[key] === minDistance) {
          minIDs.push(key)
        }
      })
      distanceArray.minIDs = minIDs
      if (distanceArray.minIDs.length > 1) {
        mapWithCoords[r][c] = "."
      } else if (distanceArray.minIDs.length === 1) {
        mapWithCoords[r][c] = distanceArray.minIDs[0]
      }
    }
  }
  return mapWithCoords
}

function eliminateEdgeCoordinates(map) {
  let eliminated = []
  for (let row = 0; row < map.length; row++) {
    if (!eliminated.includes(map[row][0])) {
      eliminated.push(map[row][0])
    }
    if (!eliminated.includes(map[row][map[row].length - 1])) {
      eliminated.push(map[row][map[row].length - 1])
    }
  }
  for (let column = 1; column < map[0].length; column++) {
    if (!eliminated.includes(map[0][column])) {
      eliminated.push(map[0][column])
    }
    if (!eliminated.includes(map[map.length - 1][column])) {
      eliminated.push(map[map.length - 1][column])
    }
  }
  return eliminated
}

function calculateAreas(map, eliminated, coordinatesArray) {
  let resultArray = []
  for (let id = 0; id < coordinatesArray.length; id++) {
    let countArea = 0
    if (!eliminated.includes(coordinatesArray[id].id)) {
      for (let r = 0; r < map.length; r++) {
        for (let c = 0; c < map[r].length; c++) {
          if (map[r][c] === coordinatesArray[id].id) {
            countArea = countArea + 1
          }
        }
      }
      let dic = { areaName: coordinatesArray[id], areaCount: countArea }
      resultArray.push(dic)
    }
  }
  return resultArray
}

function getLargestArea(areaArray) {
  let max = 0
  let maxID
  for (let item = 0; item < areaArray.length; item++) {
    if (areaArray[item].areaCount > max) {
      max = areaArray[item].areaCount
      maxID = areaArray[item].areaName.id
    }
  }
  let output = [maxID, max]
  return output
}
