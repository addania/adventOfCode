import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201910.json"
import "./component.css"
import _ from "lodash"

export const CodeAdvent20191002 = () => {
  const asteroidData = data
  const [maxAsteroids, setMaxAsteroids] = useState()
  const [stationLocation, setStationLocation] = useState()
  const [asteroidsCount, setAsteroidsCount] = useState()
  const [winnerAsteroid, setWinnerAsteroid] = useState({})
  const [positionCalculation, setPositionCalculation] = useState()
  console.log(maxAsteroids, stationLocation, asteroidsCount)
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
          asteroidArray.push(equation)
        }
      }
      const uniqueEquasions = [
        ...new Set(asteroidArray.map(item => item.eqRC1)),
      ]

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
        seenAsteroids.push(minAsteroid)
      })
      const finalAsteroidArray = asteroidArray.map(item => {
        seenAsteroids.forEach(seen => {
          if (item.asteroid.x === seen.x && item.asteroid.y === seen.y) {
            item.isSeen = true
          } else {
          }
        })

        return item
      })
      const stationInfo = {}
      stationInfo.station = asteroidPositions[station]
      stationInfo.asteroids = finalAsteroidArray
      stationInfo.numSeenAsteroids = seenAsteroids.length

      stationsArray.push(stationInfo)
    }
    let maxNumSeen = 0
    let maxStation = {}
    let astroidsMap = []
    stationsArray.forEach(station => {
      if (station.numSeenAsteroids > maxNumSeen) {
        maxNumSeen = station.numSeenAsteroids
        maxStation = station.station
        astroidsMap = station.asteroids
      }
    })
    setMaxAsteroids(maxNumSeen)
    setStationLocation(maxStation)

    const groupedAsteroidsMap = groupAsteroids(astroidsMap, maxStation)
    const asteroidGroups = _.groupBy(groupedAsteroidsMap, "group")

    const verticalTop = _.orderBy(
      asteroidGroups.verticalTop,
      ["distance"],
      ["asc"]
    )
    const topRightQuarter = _.orderBy(
      asteroidGroups.topRightQuarter,
      ["eqRC1"],
      ["desc"]
    )
    const horizontalRight = _.orderBy(
      asteroidGroups.horizontalRight,
      ["distance"],
      ["asc"]
    )
    const bottomRightQuarter = _.orderBy(
      asteroidGroups.bottomRightQuarter,
      ["eqRC1"],
      ["desc"]
    )
    const verticalBottom = _.orderBy(
      asteroidGroups.verticalBottom,
      ["distance"],
      ["asc"]
    )
    const topLeftQuarter = _.orderBy(
      asteroidGroups.topLeftQuarter,
      ["eqRC1"],
      ["desc"]
    )
    const horizontalLeft = _.orderBy(
      asteroidGroups.horizontalLeft,
      ["distance"],
      ["asc"]
    )
    const bottomLeftQuarter = _.orderBy(
      asteroidGroups.bottomLeftQuarter,
      ["eqRC1"],
      ["desc"]
    )
    let count = 0
    let winnerAsteroid = {}
    const result = vaporize(
      verticalTop,
      topRightQuarter,
      horizontalRight,
      bottomRightQuarter,
      verticalBottom,
      topLeftQuarter,
      horizontalLeft,
      bottomLeftQuarter,
      asteroidData,
      count,
      winnerAsteroid,
      groupAsteroids
    )
    setAsteroidsCount(result[0])
    setWinnerAsteroid(result[1])
    setPositionCalculation(result[1].x * 100 + result[1].y)
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Monitoring Station:</p>
      <p>Last Asteroid location: {JSON.stringify(winnerAsteroid)} </p>
      <p>Postion Calculation: {positionCalculation} </p>
      <button style={{ backgroundColor: "#A7A7A9" }}>
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
  const equationRightConstant1 = (pointA.x - pointB.x) / (pointA.y - pointB.y)

  const dist = calculateDistance(pointA, pointB)
  if (pointA.y === pointB.y) {
    return {
      asteroid: pointB,
      eqRC1: equationRightConstant1,
      distance: dist,
      isHorizontal: true,
      isVertical: false,
      isSeen: false,
      isVaporized: false,
      vaporizationNumber: 0,
    }
  } else if (pointA.x === pointB.x && pointB.y < pointA.y) {
    return {
      asteroid: pointB,
      eqRC1: "-0",
      distance: dist,
      isHorizontal: false,
      isVertical: true,
      isSeen: false,
      isVaporized: false,
      vaporizationNumber: 0,
    }
  } else if (pointA.x === pointB.x && pointB.y > pointA.y) {
    return {
      asteroid: pointB,
      eqRC1: "0",
      distance: dist,
      isHorizontal: false,
      isVertical: true,
      isSeen: false,
      isVaporized: false,
      vaporizationNumber: 0,
    }
  } else if (pointB.y < pointA.y) {
    return {
      asteroid: pointB,
      eqRC1: 1000000000 * equationRightConstant1,
      distance: dist,
      isHorizontal: false,
      isVertical: false,
      isSeen: false,
      isVaporized: false,
      vaporizationNumber: 0,
    }
  } else if (pointB.y > pointA.y) {
    return {
      asteroid: pointB,
      eqRC1: equationRightConstant1,
      distance: dist,
      isHorizontal: false,
      isVertical: false,
      isSeen: false,
      isVaporized: false,
      vaporizationNumber: 0,
    }
  }
}

/*const checkIfOnSameLine = (pointA, pointB, pointC) => {
  const equation = getEquation(pointA, pointB)
  if (equation.isHorizontal) {
    return pointC.y === equation.eqLC
  } else if (equation.isVertical) {
    return pointC.x === equation.eqRC2
  } else {
    return (
      pointC.y - equation.eqLC === equation.eqRC1 * (pointC.x - equation.eqRC2)
    )
  }
}*/

const calculateDistance = (pointA, pointB) => {
  const distance = Math.sqrt(
    (pointA.x - pointB.x) * (pointA.x - pointB.x) +
      (pointA.y - pointB.y) * (pointA.y - pointB.y)
  )
  return distance
}

/*const checkMinDistance = (pointA, pointB, pointC) => {
  let min
  const checkPoint = checkIfOnSameLine(pointA, pointB, pointC)
  if (checkPoint) {
    const distanceAB = calculateDistance(pointA, pointB)
    const distanceAC = calculateDistance(pointA, pointC)
    if (distanceAB < distanceAC) {
      min = pointB
    } else {
      min = pointC
    }
  }
  return min
}*/

const groupAsteroids = (input, station) => {
  const newInput = input.map(item => {
    if (item.isVertical === true && item.asteroid.y < station.y) {
      item.group = "verticalTop"
    } else if (item.isVertical === true && item.asteroid.y > station.y) {
      item.group = "verticalBottom"
    } else if (item.isHorizontal === true && item.asteroid.x > station.x) {
      item.group = "horizontalRight"
    } else if (item.isHorizontal === true && item.asteroid.x < station.x) {
      item.group = "horizontalLeft"
    } else if (
      item.isHorizontal === false &&
      item.isVertical === false &&
      item.asteroid.x > station.x &&
      item.asteroid.y < station.y
    ) {
      item.group = "topRightQuarter"
    } else if (
      item.isHorizontal === false &&
      item.isVertical === false &&
      item.asteroid.x > station.x &&
      item.asteroid.y > station.y
    ) {
      item.group = "bottomRightQuarter"
    } else if (
      item.isHorizontal === false &&
      item.isVertical === false &&
      item.asteroid.x < station.x &&
      item.asteroid.y < station.y
    ) {
      item.group = "topLeftQuarter"
    } else if (
      item.isHorizontal === false &&
      item.isVertical === false &&
      item.asteroid.x < station.x &&
      item.asteroid.y > station.y
    ) {
      item.group = "bottomLeftQuarter"
    }
    return item
  })
  return newInput
}

const vaporize = (
  verticalTop,
  topRightQuarter,
  horizontalRight,
  bottomRightQuarter,
  verticalBottom,
  topLeftQuarter,
  horizontalLeft,
  bottomLeftQuarter,
  asteroidData,
  count,
  winnerAsteroid,
  asteroidArray
) => {
  if (count >= 200 || count >= asteroidArray.length) {
    console.log("Im finished")
  } else {
    verticalTop.forEach(item => {
      if (item.isSeen && !item.isVaporized) {
        count = count + 1
        item.isVaporized = true
        item.vaporizationNumber = count
        if (count === 200) {
          winnerAsteroid = item.asteroid
        } else if (count === asteroidArray.length) {
          winnerAsteroid = item.asteroid
        }
      }
    })
    const newVerticalTop = checkIfSeen(verticalTop, asteroidData)
    topRightQuarter.forEach(item => {
      if (item.isSeen && !item.isVaporized) {
        count = count + 1
        item.isVaporized = true
        item.vaporizationNumber = count
        if (count === 200) {
          winnerAsteroid = item.asteroid
        } else if (count === asteroidArray.length) {
          winnerAsteroid = item.asteroid
        }
      }
    })
    const newTopRightQuarter = checkIfSeen(topRightQuarter, asteroidData)
    horizontalRight.forEach(item => {
      if (item.isSeen && !item.isVaporized) {
        count = count + 1
        item.isVaporized = true
        item.vaporizationNumber = count
        if (count === 200) {
          winnerAsteroid = item.asteroid
        } else if (count === asteroidArray.length) {
          winnerAsteroid = item.asteroid
        }
      }
    })
    const newHorizontalRight = checkIfSeen(horizontalRight, asteroidData)
    bottomRightQuarter.forEach(item => {
      if (item.isSeen && !item.isVaporized) {
        count = count + 1
        item.isVaporized = true
        item.vaporizationNumber = count
        if (count === 200) {
          winnerAsteroid = item.asteroid
        } else if (count === asteroidArray.length) {
          winnerAsteroid = item.asteroid
        }
      }
    })
    const newBottomRightQuarter = checkIfSeen(bottomRightQuarter, asteroidData)
    verticalBottom.forEach(item => {
      if (item.isSeen && !item.isVaporized) {
        count = count + 1
        item.isVaporized = true
        item.vaporizationNumber = count
        if (count === 200) {
          winnerAsteroid = item.asteroid
        } else if (count === asteroidArray.length) {
          winnerAsteroid = item.asteroid
        }
      }
    })
    const newVerticalBottom = checkIfSeen(verticalBottom, asteroidData)
    bottomLeftQuarter.forEach(item => {
      if (item.isSeen && !item.isVaporized) {
        count = count + 1
        item.isVaporized = true
        item.vaporizationNumber = count
        if (count === 200) {
          winnerAsteroid = item.asteroid
        } else if (count === asteroidArray.length) {
          winnerAsteroid = item.asteroid
        }
      }
    })
    const newBottomLeftQuarter = checkIfSeen(bottomLeftQuarter, asteroidData)
    horizontalLeft.forEach(item => {
      if (item.isSeen && !item.isVaporized) {
        count = count + 1
        item.isVaporized = true
        item.vaporizationNumber = count
        if (count === 200) {
          winnerAsteroid = item.asteroid
        } else if (count === asteroidArray.length) {
          winnerAsteroid = item.asteroid
        }
      }
    })
    const newHorizontalLeft = checkIfSeen(horizontalLeft, asteroidData)
    topLeftQuarter.forEach(item => {
      if (item.isSeen && !item.isVaporized) {
        count = count + 1
        item.isVaporized = true
        item.vaporizationNumber = count
        if (count === 200) {
          winnerAsteroid = item.asteroid
        } else if (count === asteroidArray.length) {
          winnerAsteroid = item.asteroid
        }
      }
    })
    const newTopLeftQuarter = checkIfSeen(topLeftQuarter, asteroidData)

    vaporize(
      newVerticalTop,
      newTopRightQuarter,
      newHorizontalRight,
      newBottomRightQuarter,
      newVerticalBottom,
      newTopLeftQuarter,
      newHorizontalLeft,
      newBottomLeftQuarter,
      asteroidData,
      count,
      winnerAsteroid,
      asteroidArray
    )
  }

  return [count, winnerAsteroid]
}

const checkIfSeen = (asteroids, asteroidData) => {
  const uniqueEquasions = [...new Set(asteroids.map(item => item.eqRC1))]
  const seenAsteroids = []
  uniqueEquasions.forEach(item => {
    let minDistance = asteroidData.length * asteroidData[0].length
    let minAsteroid = {}
    asteroids.forEach(astr => {
      if (
        astr.eqRC1 === item &&
        !astr.isSeen &&
        !astr.isVaporized &&
        astr.distance < minDistance
      ) {
        minDistance = astr.distance
        minAsteroid = astr.asteroid
      }
    })
    seenAsteroids.push(minAsteroid)
  })

  const finalAsteroidArray = asteroids.map(item => {
    seenAsteroids.forEach(seen => {
      if (item.asteroid.x === seen.x && item.asteroid.y === seen.y) {
        item.isSeen = true
      } else {
      }
    })

    return item
  })

  return finalAsteroidArray
}
