import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201906.json"
import "./component.css"

export const CodeAdvent20190601 = () => {
  const [orbits, setOrbits] = useState(data)
  const [result, setResult] = useState()

  function handleClick() {
    let parsedOrbits = parseInput(orbits)
    //console.log(parsedOrbits);
    let countOfOrbits = countOrbits(parsedOrbits)
    setResult(countOfOrbits)
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Universal Orbit Map:</p>
      <p>Number of orbits: {result} </p>
      <button style={{ backgroundColor: "#A7A7A9" }}>
        <span onClick={handleClick}>Calculate orbits</span>
      </button>
    </div>
  )
}

function parseInput(input) {
  let orbitDictionary = {}
  for (let i = 0; i < input.length; i++) {
    let orbit = input[i].slice(0, input[i].indexOf(")"))
    //console.log("orbit",orbit);
    let object = input[i].slice(input[i].indexOf(")") + 1, input[i].length)
    //console.log("object",object);
    orbitDictionary[object] = orbit
  }
  //console.log(orbitDictionary, orbitDictionary);
  return orbitDictionary
}

function countOrbits(inputOrbitsDictionary) {
  let objectsArray = Object.keys(inputOrbitsDictionary)
  //console.log(objectsArray);
  let count = 0
  for (let item = 0; item < objectsArray.length; item++) {
    let recursiveCount = recursion(inputOrbitsDictionary, objectsArray[item])
    count = count + recursiveCount
  }
  //console.log("count", count)
  return count
}

function recursion(array, object) {
  let newObject = array[object]
  if (newObject == "COM") {
    return 1
  } else {
    return 1 + recursion(array, newObject)
  }
}
