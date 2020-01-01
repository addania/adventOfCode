import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201907.json"
import "./component.css"

export const CodeAdvent20190702 = () => {
  //const [amplifierControllerSoftware, setAmplifierControllerSoftware] = useState([3,26,1001,26,-4,26,3,27,1002,27,2,27,1,27,26,27,4,27,1001,28,-1,28,1005,28,6,99,0,0,5]);
  /*const [amplifierControllerSoftware, setAmplifierControllerSoftware] = useState([3,52,1001,52,-5,52,3,53,1,52,56,54,1007,54,5,55,1005,55,26,1001,54,
-5,54,1105,1,12,1,53,54,53,1008,54,0,55,1001,55,1,55,2,53,55,53,4,
53,1001,56,-1,56,1005,56,6,99,0,0,0,0,10]);*/

  const [
    amplifierControllerSoftware,
    setAmplifierControllerSoftware,
  ] = useState(data)
  const [maxSetting, setMaxSetting] = useState()
  const [result, setResult] = useState()

  function handleClick() {
    let maxThrusterSetting = 0
    let maxPhaseSetting

    for (let am1 = 5; am1 < 10; am1++) {
      for (let am2 = 5; am2 < 10; am2++) {
        for (let am3 = 5; am3 < 10; am3++) {
          for (let am4 = 5; am4 < 10; am4++) {
            for (let am5 = 5; am5 < 10; am5++) {
              let initialInput = 0
              let firstLoop = true
              if (
                am1 != am2 &&
                am1 != am3 &&
                am1 != am4 &&
                am1 != am5 &&
                am2 != am3 &&
                am2 != am4 &&
                am2 != am5 &&
                am3 != am4 &&
                am3 != am5 &&
                am4 != am5
              ) {
                let finalCodesArray = []
                let amplifierControllerSoftware1 = [
                  ...amplifierControllerSoftware,
                ]
                let amplifierControllerSoftware2 = [
                  ...amplifierControllerSoftware,
                ]
                let amplifierControllerSoftware3 = [
                  ...amplifierControllerSoftware,
                ]
                let amplifierControllerSoftware4 = [
                  ...amplifierControllerSoftware,
                ]
                let amplifierControllerSoftware5 = [
                  ...amplifierControllerSoftware,
                ]

                let optInput11 = am1
                let optInput12 = initialInput
                let optInput21 = am2
                let optInput22
                let optInput31 = am3
                let optInput32
                let optInput41 = am4
                let optInput42
                let optInput51 = am5
                let optInput52
                let position1 = 0
                let position2 = 0
                let position3 = 0
                let position4 = 0
                let position5 = 0
                let firstTime = true
                loop(am1, am2, am3, am4, am5)

                function loop(am1, am2, am3, am4, am5, initialInput) {
                  let finalCode1 = calc2(
                    amplifierControllerSoftware1,
                    optInput11,
                    optInput12,
                    position1,
                    firstTime
                  )
                  optInput22 = finalCode1[0]
                  position1 = finalCode1[1]
                  amplifierControllerSoftware1 = finalCode1[2]

                  let finalCode2 = calc2(
                    amplifierControllerSoftware2,
                    optInput21,
                    optInput22,
                    position2,
                    firstTime
                  )
                  optInput32 = finalCode2[0]
                  position2 = finalCode2[1]
                  amplifierControllerSoftware2 = finalCode2[2]

                  let finalCode3 = calc2(
                    amplifierControllerSoftware3,
                    optInput31,
                    optInput32,
                    position3,
                    firstTime
                  )
                  optInput42 = finalCode3[0]
                  position3 = finalCode3[1]
                  amplifierControllerSoftware3 = finalCode3[2]

                  let finalCode4 = calc2(
                    amplifierControllerSoftware4,
                    optInput41,
                    optInput42,
                    position4,
                    firstTime
                  )
                  optInput52 = finalCode4[0]
                  position4 = finalCode4[1]
                  amplifierControllerSoftware4 = finalCode4[2]

                  let finalCode5 = calc2(
                    amplifierControllerSoftware5,
                    optInput51,
                    optInput52,
                    position5,
                    firstTime
                  )
                  optInput12 = finalCode5[0]
                  position5 = finalCode5[1]
                  amplifierControllerSoftware5 = finalCode5[2]
                  if (finalCode5[0] != undefined) {
                    finalCodesArray.push(finalCode5[0])
                  }

                  firstTime = false

                  if (
                    amplifierControllerSoftware1[position1] != 99 &&
                    amplifierControllerSoftware2[position2] != 99 &&
                    amplifierControllerSoftware3[position3] != 99 &&
                    amplifierControllerSoftware4[position4] != 99 &&
                    amplifierControllerSoftware5[position5] != 99
                  ) {
                    loop(am1, am2, am3, am4, am5, initialInput)
                  } else {
                    if (
                      finalCodesArray[finalCodesArray.length - 1] >
                      maxThrusterSetting
                    ) {
                      maxThrusterSetting =
                        finalCodesArray[finalCodesArray.length - 1]
                      maxPhaseSetting =
                        am1.toString() +
                        am2.toString() +
                        am3.toString() +
                        am4.toString() +
                        am5.toString()
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    setResult(maxThrusterSetting)
    setMaxSetting(maxPhaseSetting)
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Amplification Circuit:</p>
      <p>Highest amplifier signal: {result} </p>
      <p>Max phase setting: {maxSetting} </p>
      <button style={{ backgroundColor: "#69747C" }}>
        <span onClick={handleClick}>Compute signal</span>
      </button>
    </div>
  )
}

const calc2 = (input, optCodeInput1, optCodeInput2, position, firstTime) => {
  let firstInput = firstTime
  let optCodeOutputArray = []
  let x = 0
  let currentPosition
  for (let i = position; i < input.length; i += x) {
    currentPosition = i

    let current = parseInput(input[i])

    if (current.number == 99) {
      x = 0
      break
    } else if (
      current.one == 1 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "position"
    ) {
      //console.log("condition 1 is triggered");

      let newValue = input[input[i + 1]] + input[input[i + 2]]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one == 1 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "immediate"
    ) {
      //console.log("condition 1 is triggered");

      let newValue = input[i + 1] + input[i + 2]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one == 1 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "immediate"
    ) {
      //console.log("condition 1 is triggered");

      let newValue = input[input[i + 1]] + input[i + 2]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one == 1 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "position"
    ) {
      //console.log("condition 1 is triggered");

      let newValue = input[i + 1] + input[input[i + 2]]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one == 2 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "position"
    ) {
      //console.log("condition 2 is triggered");

      let newValue = input[input[i + 1]] * input[input[i + 2]]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one == 2 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "immediate"
    ) {
      //console.log("condition 2 is triggered");

      let newValue = input[i + 1] * input[i + 2]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one == 2 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "immediate"
    ) {
      //console.log("condition 2 is triggered");

      let newValue = input[input[i + 1]] * input[i + 2]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one == 2 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "position"
    ) {
      //console.log("condition 2 is triggered");

      let newValue = input[i + 1] * input[input[i + 2]]
      input[input[i + 3]] = newValue
      x = 4
    } else if (current.number == 3 && firstInput) {
      // console.log("3 is triggered");
      input[input[i + 1]] = optCodeInput1
      firstInput = false
      x = 2
    } else if (current.number == 3 && !firstInput) {
      // console.log("3 is triggered");
      input[input[i + 1]] = optCodeInput2
      x = 2
    } else if (current.one == 4 && current.parameterMode1 == "position") {
      //console.log("4 is triggered");
      let givenOutput = input[input[i + 1]]
      //console.log("givenOutput", givenOutput)
      optCodeOutputArray.push(givenOutput)
      x = 2
      break
    } else if (current.one == 4 && current.parameterMode1 == "immediate") {
      //console.log("4 is triggered");
      let givenOutput = input[i + 1]
      //console.log("givenOutput", givenOutput)
      optCodeOutputArray.push(givenOutput)
      x = 2
      break
    } else if (
      current.one == 5 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "position"
    ) {
      //console.log("4 is triggered");
      if (input[input[i + 1]] != 0) {
        x = 0
        i = input[input[i + 2]]
      } else {
        x = 3
      }
    } else if (
      current.one == 5 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "immediate"
    ) {
      //console.log("4 is triggered");
      if (input[i + 1] != 0) {
        x = 0
        i = input[i + 2]
      } else {
        x = 3
      }
    } else if (
      current.one == 5 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "immediate"
    ) {
      //console.log("4 is triggered");
      if (input[input[i + 1]] != 0) {
        x = 0
        i = input[i + 2]
      } else {
        x = 3
      }
    } else if (
      current.one == 5 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "position"
    ) {
      //console.log("4 is triggered");
      if (input[i + 1] != 0) {
        x = 0
        i = input[input[i + 2]]
      } else {
        x = 3
      }
    } else if (
      current.one == 6 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "position"
    ) {
      //console.log("4 is triggered");
      if (input[input[i + 1]] == 0) {
        x = 0
        i = input[input[i + 2]]
      } else {
        x = 3
      }
    } else if (
      current.one == 6 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "immediate"
    ) {
      //console.log("4 is triggered");
      if (input[i + 1] == 0) {
        x = 0
        i = input[i + 2]
      } else {
        x = 3
      }
    } else if (
      current.one == 6 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "immediate"
    ) {
      //console.log("4 is triggered");
      if (input[input[i + 1]] == 0) {
        x = 0
        i = input[i + 2]
      } else {
        x = 3
      }
    } else if (
      current.one == 6 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "position"
    ) {
      //console.log("4 is triggered");
      if (input[i + 1] == 0) {
        x = 0
        i = input[input[i + 2]]
      } else {
        x = 3
      }
    } else if (
      current.one == 7 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "position"
    ) {
      //console.log("condition 2 is triggered");
      if (input[input[i + 1]] < input[input[i + 2]]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one == 7 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "immediate"
    ) {
      //console.log("condition 2 is triggered");
      if (input[i + 1] < input[i + 2]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one == 7 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "immediate"
    ) {
      //console.log("condition 2 is triggered");
      if (input[input[i + 1]] < input[i + 2]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one == 7 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "position"
    ) {
      //console.log("condition 2 is triggered");
      if (input[i + 1] < input[input[i + 2]]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one == 8 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "position"
    ) {
      //console.log("condition 2 is triggered");
      if (input[input[i + 1]] == input[input[i + 2]]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one == 8 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "immediate"
    ) {
      //console.log("condition 2 is triggered");
      if (input[i + 1] == input[i + 2]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one == 8 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "immediate"
    ) {
      //console.log("condition 2 is triggered");
      if (input[input[i + 1]] == input[i + 2]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one == 8 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "position"
    ) {
      //console.log("condition 2 is triggered");
      if (input[i + 1] == input[input[i + 2]]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else {
      //console.log("nothing is triggered");
      break
    }
  }
  //console.log("optCodeOutputArray", optCodeOutputArray);
  return [
    optCodeOutputArray[optCodeOutputArray.length - 1],
    currentPosition + x,
    input,
  ]
}

function parseInput(number) {
  let parsedObject = {}
  let tenThousand = Math.floor(number / 10000)
  let thousand = Math.floor((number % 10000) / 1000)
  let hundert = Math.floor(((number % 10000) % 1000) / 100)
  let ten = Math.floor((((number % 10000) % 1000) % 100) / 10)
  let one = Math.floor((((number % 10000) % 1000) % 100) % 10)
  parsedObject.tenThousand = tenThousand
  parsedObject.thousand = thousand
  parsedObject.hundert = hundert
  parsedObject.ten = ten
  parsedObject.one = one
  parsedObject.number = number
  if (hundert == 0) {
    parsedObject.parameterMode1 = "position"
  } else if (hundert == 1) {
    parsedObject.parameterMode1 = "immediate"
  }

  if (thousand == 0) {
    parsedObject.parameterMode2 = "position"
  } else if (thousand == 1) {
    parsedObject.parameterMode2 = "immediate"
  }
  if (tenThousand == 0) {
    parsedObject.parameterMode3 = "position"
  } else if (tenThousand == 1) {
    parsedObject.parameterMode3 = "immediate"
  }
  return parsedObject
}
