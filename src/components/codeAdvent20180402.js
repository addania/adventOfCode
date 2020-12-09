import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201804.json"
import "./component.css"

export const CodeAdvent20180402 = () => {
  const [observations] = useState(data)
  const [result, setResult] = useState()

  function handleClick() {
    let output = computeObservations(observations)
    let finalNumber = strategyAnalysis(output)
    setResult(finalNumber)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Guards Observation:</p>
      <p>ID * Minutes: {JSON.stringify(result)}</p>
      <button style={{ backgroundColor: "#A7A7A9" }}>
        <span onClick={handleClick}>Get Strategy2</span>
      </button>
    </div>
  )
}

function computeObservations(input) {
  let sortedObservations = input.sort()
  let countGuards = 0
  let iteratedGuards = 0
  for (let counter = 0; counter < sortedObservations.length; counter++) {
    if (sortedObservations[counter].includes("Guard")) {
      countGuards += 1
    }
  }
  let initialGuardIndex
  var resultArray = []
  for (let row = 0; row < sortedObservations.length; row++) {
    var dictionary = {}
    if (sortedObservations[row].includes("Guard")) {
      initialGuardIndex = row
      iteratedGuards += 1
      let year = sortedObservations[row].slice(
        1,
        sortedObservations[row].indexOf("-")
      )
      let month = sortedObservations[row].slice(
        sortedObservations[row].indexOf("-") + 1,
        sortedObservations[row].indexOf(
          "-",
          sortedObservations[row].indexOf("-") + 1
        )
      )
      let day = sortedObservations[row].slice(
        sortedObservations[row].indexOf(
          "-",
          sortedObservations[row].indexOf("-") + 1
        ) + 1,
        sortedObservations[row].indexOf(" ")
      )
      let hour = sortedObservations[row].slice(
        sortedObservations[row].indexOf(" ") + 1,
        sortedObservations[row].indexOf(":")
      )
      let minute = sortedObservations[row].slice(
        sortedObservations[row].indexOf(":") + 1,
        sortedObservations[row].indexOf("]")
      )
      let something =
        sortedObservations[row].slice(1, sortedObservations[row].indexOf("]")) +
        ":00"
      var event = new Date(something)
      if (event.getHours() === 23) {
        event.setDate(event.getDate() + 1)
      } else {
      }
      dictionary.date = event
      dictionary.id = sortedObservations[row].slice(
        sortedObservations[row].indexOf("#") + 1,
        sortedObservations[row].indexOf(
          " ",
          sortedObservations[row].indexOf("#")
        )
      )
      let minutes = []
      for (let minute = 0; minute < 60; minute++) {
        minutes.push(0)
      }
      dictionary.times = minutes
      let subsequentGuardIndex
      let iterate = true
      let endReached = false
      if (iteratedGuards === countGuards) {
        endReached = true
      }
      for (let line = row + 1; line < sortedObservations.length; line++) {
        if (
          (sortedObservations[line].includes("Guard") && iterate) ||
          endReached
        ) {
          if (!endReached) {
            subsequentGuardIndex = line
          } else {
            subsequentGuardIndex = sortedObservations.length
          }
          iterate = false
        }
      }
      var sleepStarts = []
      var sleepEnds = []
      for (let n = initialGuardIndex + 1; n < subsequentGuardIndex; n++) {
        if (sortedObservations[n].includes("asleep")) {
          let min = parseInt(
            sortedObservations[n].slice(
              sortedObservations[n].indexOf(":") + 1,
              sortedObservations[n].indexOf("]")
            )
          )
          sleepStarts.push(min)
        }
      }
      for (let m = initialGuardIndex + 1; m < subsequentGuardIndex; m++) {
        if (sortedObservations[m].includes("wakes")) {
          let minEnd = parseInt(
            sortedObservations[m].slice(
              sortedObservations[m].indexOf(":") + 1,
              sortedObservations[m].indexOf("]")
            )
          )
          sleepEnds.push(minEnd)
        }
      }
      for (let sleepCycle = 0; sleepCycle < sleepStarts.length; sleepCycle++) {
        for (
          let time = sleepStarts[sleepCycle];
          time < sleepEnds[sleepCycle];
          time++
        ) {
          dictionary.times[time] = dictionary.times[time] + 1
        }
      }
    } else {
    }
    if (Object.entries(dictionary).length > 0) {
      resultArray.push(dictionary)
    }
  }
  return resultArray
}

function strategyAnalysis(input) {
  for (let i = 0; i < input.length; i++) {
    let count = 0
    for (let j = 0; j < input[i].times.length; j++) {
      count = count + input[i].times[j]
    }
    input[i].totalMinutesPerDay = count
  }
  let uniqueGuards = checkUniqueGuards(input)
  let frequencyArray = []
  for (let guard = 0; guard < uniqueGuards.length; guard++) {
    let minuteFrequency = []
    for (let min = 0; min < 60; min++) {
      minuteFrequency.push(0)
    }
    for (let timeStamp = 0; timeStamp < input.length; timeStamp++) {
      if (input[timeStamp].id === uniqueGuards[guard]) {
        for (
          let singleMinute = 0;
          singleMinute < input[timeStamp].times.length;
          singleMinute++
        ) {
          minuteFrequency[singleMinute] =
            minuteFrequency[singleMinute] + input[timeStamp].times[singleMinute]
        }
      }
    }
    frequencyArray.push(minuteFrequency)
  }
  let maxMinuteID
  let maxMinuteCount = 0
  let maxGuardID
  for (let iteration = 0; iteration < frequencyArray.length; iteration++) {
    for (let m = 0; m < frequencyArray[iteration].length; m++) {
      if (frequencyArray[iteration][m] > maxMinuteCount) {
        maxMinuteCount = frequencyArray[iteration][m]
        maxMinuteID = m
        maxGuardID = uniqueGuards[iteration]
      }
    }
  }
  let finalMultiplication = maxGuardID * maxMinuteID
  return finalMultiplication
}

function checkUniqueGuards(observe) {
  var uniqueArray = []
  for (let i = 0; i < observe.length; i++) {
    if (!uniqueArray.includes(observe[i].id)) {
      uniqueArray.push(observe[i].id)
    }
  }
  return uniqueArray
}

function analyzeDays(dataSet, maxSleeper) {
  let dayStatistics = []
  for (let minute = 0; minute < 60; minute++) {
    dayStatistics.push(0)
  }
  for (let row = 0; row < dataSet.length; row++) {
    if (parseInt(dataSet[row].id) === maxSleeper) {
      for (let day = 0; day < dataSet[row].times.length; day++) {
        dayStatistics[day] = dayStatistics[day] + dataSet[row].times[day]
      }
    }
  }
  let maxDay = 0
  let maxDayID
  for (let value = 0; value < dayStatistics.length; value++) {
    if (dayStatistics[value] > maxDay) {
      maxDay = dayStatistics[value]
      maxDayID = value
    }
  }
  let finalResult = maxDayID * maxSleeper
  return finalResult
}
