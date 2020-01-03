import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201802.json"
import "./component.css"

export const CodeAdvent20180201 = () => {
  const [boxIDs, setboxIDs] = useState(data)
  const [checkSum, setCheckSum] = useState()

  function handleClick() {
    setCheckSum(checkSumcalculation(boxIDs))
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Boxes checksum:</p>
      {/* <p>Boxes Ids: {JSON.stringify(boxIDs)}</p> */}
      <p>CheckSum: {JSON.stringify(checkSum)}</p>
      <button style={{ backgroundColor: "#6BAA75" }} onClick={handleClick}>
        <span onClick={handleClick}>Calculate</span>
      </button>
    </div>
  )
}

function returnLetterCount(string) {
  let letterCount = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  }

  for (let i = 0; i < string.length; i++) {
    letterCount[string[i]] = letterCount[string[i]] + 1
  }
  return letterCount
}

function returnArrayOfCounts(array) {
  let countTwos = 0
  let countThrees = 0
  let totalLetterCount = []
  array.map((item, index) => {
    let twoProceed = true
    let threeProceed = true
    let position = returnLetterCount(item)
    let keys = Object.keys(position)
    keys.map((key, i) => {
      if (position[key] === 2 && twoProceed) {
        countTwos += 1
        twoProceed = false
      } else if (position[key] === 3 && threeProceed) {
        countThrees += 1
        threeProceed = false
      } else {
      }
    })
    totalLetterCount.push(position)
  })
  return {
    twos: countTwos,
    threes: countThrees,
    arrayOfCounts: totalLetterCount,
  }
}

function checkSumcalculation(input) {
  let infoObject = returnArrayOfCounts(input)
  return infoObject.twos * infoObject.threes
}
