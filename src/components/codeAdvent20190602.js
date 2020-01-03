import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201906.json"
import "./component.css"

export const CodeAdvent20190602 = () => {
  const [orbits, setOrbits] = useState(data)
  const [result, setResult] = useState()

  function handleClick() {
    let parsedOrbits = parseInput(orbits)
    let countOfOrbits = countOrbits(parsedOrbits)
    setResult(countOfOrbits)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Universal Orbit Map:</p>
      <p>Number of orbits: {result} </p>
      <button style={{ backgroundColor: "#68C1B4" }}>
        <span onClick={handleClick}>Calculate orbits</span>
      </button>
    </div>
  )
}

function parseInput(input) {
  let orbitDictionary = {}
  for (let i = 0; i < input.length; i++) {
    let orbit = input[i].slice(0, input[i].indexOf(")"))
    let object = input[i].slice(input[i].indexOf(")") + 1, input[i].length)
    orbitDictionary[object] = orbit
  }
  return orbitDictionary
}

function countOrbits(inputOrbitsDictionary) {
  let objectsArray = Object.keys(inputOrbitsDictionary)
  let count = 0
  let pathArrayYOU = []
  let pathArraySAN = []
  let recursiveCountYOU = recursion(inputOrbitsDictionary, "YOU")
  let recursiveCountSAN = recursion(inputOrbitsDictionary, "SAN")
  let recursivePathYOU = recursionPath(
    inputOrbitsDictionary,
    "YOU",
    pathArrayYOU
  )
  let recursivePathSAN = recursionPath(
    inputOrbitsDictionary,
    "SAN",
    pathArraySAN
  )
  let firstCommonOrbit
  let forward = true
  for (let j = 0; j < recursivePathYOU.length; j++) {
    for (let k = 0; k < recursivePathSAN.length; k++) {
      if (recursivePathYOU[j] === recursivePathSAN[k] && forward) {
        firstCommonOrbit = recursivePathYOU[j]
        forward = false
        break
      }
    }
  }
  let countYOU = 0
  let forwardYOU = true
  for (let j = 0; j < recursivePathYOU.length; j++) {
    if (recursivePathYOU[j] !== firstCommonOrbit && forwardYOU) {
      countYOU = countYOU + 1
    } else {
      forwardYOU = false
    }
  }
  let countSAN = 0
  let forwardSAN = true
  for (let k = 0; k < recursivePathSAN.length; k++) {
    if (recursivePathSAN[k] !== firstCommonOrbit && forwardSAN) {
      countSAN = countSAN + 1
    } else {
      forwardSAN = false
    }
  }
  let finalOrbitCount = countYOU + countSAN
  return finalOrbitCount
}

function recursion(array, object) {
  let newObject = array[object]
  if (newObject === "COM") {
    return 1
  } else {
    return 1 + recursion(array, newObject)
  }
}

function recursionPath(array, object, path) {
  let newObject = array[object]
  if (newObject === "COM") {
    path.push(newObject)
    return path
  } else {
    path.push(newObject)
    return recursionPath(array, newObject, path)
  }
}
