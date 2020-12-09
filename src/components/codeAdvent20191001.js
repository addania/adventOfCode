import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201910.json"
import "./component.css"

export const CodeAdvent20191001 = () => {
  const [asteroidData] = useState(data)
  /*const [asteroidData, setAsteroidData] = useState([
    ".#..#",
    ".....",
    "#####",
    "....#",
    "...##",
  ])

  */
  /*const [asteroidData, setAsteroidData] = useState([
    ".###.",
  ])
*/
  /*
  const [asteroidData, setAsteroidData] = useState([
    ".#...",
    ".#...",
    ".#...",
  ])
*/
  //const [asteroidData, setAsteroidData] = useState([".#.#.", "..#..", ".#.#."])
  /*
  const [asteroidData, setAsteroidData] = useState([
    "#...#",
    ".#...",
    "..#..",
    "...#.",
    "....#",
  ])
*/
  /*
const [asteroidData, setAsteroidData] = useState([
".#..#",
".....",
"#####",
"....#",
"...##"
  ])
*/
  /*
const [asteroidData, setAsteroidData] = useState([
"......#.#.",
"#..#.#....",
"..#######.",
".#.#.###..",
".#..#.....",
"..#....#.#",
"#..#....#.",
".##.#..###",
"##...#..#.",
".#....####"
  ])
*/
  /* 
const [asteroidData, setAsteroidData] = useState([
"#.#...#.#.",
".###....#.",
".#....#...",
"##.#.#.#.#",
"....#.#.#.",
".##..###.#",
"..#...##..",
"..##....##",
"......#...",
".####.###."
  ])
*/
  /*
const [asteroidData, setAsteroidData] = useState([
".#..#..###",
"####.###.#",
"....###.#.",
"..###.##.#",
"##.##.#.#.",
"....###..#",
"..#.#..#.#",
"#..#.#.###",
".##...##.#",
".....#.#.."
 ])
*/
  /*
const [asteroidData, setAsteroidData] = useState([
".#..##.###...#######",
"##.############..##.",
".#.######.########.#",
".###.#######.####.#.",
"#####.##.#.##.###.##",
"..#####..#.#########",
"####################",
"#.####....###.#.#.##",
"##.#################",
"#####.##.###..####..",
"..######..##.#######",
"####.##.####...##..#",
".#####..#.######.###",
"##...#.##########...",
"#.##########.#######",
".####.#.###.###.#.##",
"....##.##.###..#####",
".#.#.###########.###",
"#.#.#.#####.####.###",
"###.##.####.##.#..##"
 ])
*/
  const [maxAsteroids, setMaxAsteroids] = useState()
  const [stationLocation, setStationLocation] = useState()
  const handleClick = () => {
    const asteroidPositions = asteroidData
      .map((row, i) => getXCoordinates(row, i))
      .flat()
    const stationsArray = []
    for (let station = 0; station < asteroidPositions.length; station++) {
      const asteroidArray = []
      for (
        let candidate = 0;
        candidate < asteroidPositions.length;
        candidate++
      ) {
        if (station !== candidate) {
          const equation = getEquation(
            asteroidPositions[station],
            asteroidPositions[candidate]
          )
          //console.log(equation);
          asteroidArray.push(equation)
        }
        /*  for (let otherAsteroid=0; otherAsteroid<asteroidPositions.length;otherAsteroid++){
         if (station !== candidate && candidate !== otherAsteroid && station !== otherAsteroid){
          console.log ("station", station, "candidate", candidate, "otherAsteroid", otherAsteroid);
          const equation = getEquation(asteroidPositions[station], asteroidPositions[candidate])
          const minDistance = checkMinDistance(
            asteroidPositions[station], asteroidPositions[candidate], asteroidPositions[otherAsteroid]
          )
          console.log("minDistance", minDistance);
    }
}
*/
      }
      //console.log("asteroidArray", asteroidArray);

      //console.log("stationInfo", stationInfo);

      const uniqueEquasions = [
        ...new Set(asteroidArray.map(item => item.eqRC1)),
      ]
      // console.log("uniqueEquasions", uniqueEquasions);

      const seenAsteroids = []
      uniqueEquasions.forEach(item => {
        let minDistance = asteroidData.length * asteroidData[0].length
        let minAsteroid = {}
        asteroidArray.forEach(astr => {
          if (astr.eqRC1 === item && astr.distance < minDistance) {
            minDistance = astr.distance
            minAsteroid = astr.asteroid
          }
        })
        //  console.log("minDistance", minDistance);
        // console.log("minAsteroid", minAsteroid);

        seenAsteroids.push(minAsteroid)
      })
      // console.log("station", asteroidPositions[station]);
      //console.log("seenAsteroids",seenAsteroids);
      const finalAsteroidArray = asteroidArray.map(item => {
        seenAsteroids.forEach(seen => {
          if (item.asteroid.x === seen.x && item.asteroid.y === seen.y) {
            // console.log("true is triggered");
            item.isSeen = true
          } else {
            //  console.log("false is triggered");
          }
        })

        return item
      })
      //console.log("finalAsteroidArray", finalAsteroidArray)

      /*uniqueEquasions.forEach(item => {
        if(asteroidArray.asteroid===minAsteroid){
          asteroidArray
        }
      })*/

      const stationInfo = {}
      stationInfo.station = asteroidPositions[station]
      stationInfo.asteroids = finalAsteroidArray
      stationInfo.numSeenAsteroids = seenAsteroids.length

      stationsArray.push(stationInfo)
    }
    ////////console.log("stationsArray", stationsArray)
    let maxNumSeen = 0
    let maxStation = {}
    stationsArray.forEach(station => {
      if (station.numSeenAsteroids > maxNumSeen) {
        maxNumSeen = station.numSeenAsteroids
        maxStation = station.station
      }
    })

    //console.log("maxNumSeen", maxNumSeen)
    // console.log("maxStation", maxStation)
    setMaxAsteroids(maxNumSeen)
    setStationLocation(maxStation)
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Monitoring Station:</p>
      <p>Max asteroids detected: {maxAsteroids} </p>
      <p>Station location: {JSON.stringify(stationLocation)} </p>
      <button style={{ backgroundColor: "#27A7C6" }}>
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
  const dist = calculateDistance(pointA, pointB)
  if (pointA.y === pointB.y) {
    return {
      //  eqY: undefined,
      //  eqLC: equationLeftConstant,
      // station: pointA,
      asteroid: pointB,
      eqRC1: equationRightConstant1,
      distance: dist,
      //  eqX: undefined,
      //  eqRC2: equationRightConstant2,
      isHorizontal: true,
      isVertical: false,
      isSeen: false,
    }
  } else if (pointA.x === pointB.x && pointB.y < pointA.y) {
    return {
      //  eqY: undefined,
      //  eqLC: equationLeftConstant,
      //     station: pointA,
      asteroid: pointB,
      eqRC1: "-0",
      distance: dist,
      //  eqX: undefined,
      //  eqRC2: equationRightConstant2,
      isHorizontal: false,
      isVertical: true,
      isSeen: false,
    }
  } else if (pointA.x === pointB.x && pointB.y > pointA.y) {
    return {
      //  eqY: undefined,
      //  eqLC: equationLeftConstant,
      //     station: pointA,
      asteroid: pointB,
      eqRC1: "0",
      distance: dist,
      //  eqX: undefined,
      //  eqRC2: equationRightConstant2,
      isHorizontal: false,
      isVertical: true,
      isSeen: false,
    }
  } else if (pointB.y < pointA.y) {
    return {
      //  eqY: undefined,
      //  eqLC: equationLeftConstant,
      //     station: pointA,
      asteroid: pointB,
      eqRC1: 1000000000 * equationRightConstant1,
      distance: dist,
      //  eqX: undefined,
      //  eqRC2: equationRightConstant2,
      isHorizontal: false,
      isVertical: false,
      isSeen: false,
    }
  } else if (pointB.y > pointA.y) {
    return {
      //  eqY: undefined,
      //  eqLC: equationLeftConstant,
      //     station: pointA,
      asteroid: pointB,
      eqRC1: equationRightConstant1,
      distance: dist,
      //  eqX: undefined,
      //  eqRC2: equationRightConstant2,
      isHorizontal: false,
      isVertical: false,
      isSeen: false,
    }
  }
}

const checkIfOnSameLine = (pointA, pointB, pointC) => {
  const equation = getEquation(pointA, pointB)
  if (equation.isHorizontal) {
    //console.log("horizontal")
    return pointC.y === equation.eqLC
  } else if (equation.isVertical) {
    //console.log("veertical")
    return pointC.x === equation.eqRC2
  } else {
    //console.log("other")
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
    //console.log("distanceAB", distanceAB)
    const distanceAC = calculateDistance(pointA, pointC)
    //console.log("distanceAC", distanceAC)
    if (distanceAB < distanceAC) {
      min = pointB
    } else {
      min = pointC
    }
  }
  // console.log("min", min);
  return min
}
