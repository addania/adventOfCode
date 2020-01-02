import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201909.json"
import "./component.css"

export const CodeAdvent20190901 = () => {
  // const [input, setInput] = useState(data)

  //const [input, setInput] = useState([9,9,22202,0,0,7,99,0,0,1])

  //const [input, setInput] = useState([9,7,203,5,99,0,0,1])

  // const [input, setInput] = useState([109,2,204,0,99])

  // const [input, setInput] = useState([109,1,2106,0,8,99,104,80000,99,6])

  const [input, setInput] = useState([
    109,
    1,
    21108,
    0,
    0,
    9,
    99,
    104,
    80000,
    0,
    0,
  ])

  const [result, setResult] = useState()

  function handleClick() {
    //let replacedInput=replace(input);
    let calculation = calc2(input)
    //console.log(calculation);
    let numberArray = calculation[0]
    let outputArray = calculation[1]
    console.log("numberArray", numberArray)
    console.log("outputArray", outputArray)

    //console.log("outputArray", outputArray);
    let finalCode = outputArray[outputArray.length - 1]
    // console.log("finalCode", finalCode);
    setResult(finalCode)
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Sensor Boost:</p>
      <p>BOOST keycode: {result} </p>
      <button style={{ backgroundColor: "#A7A7A9" }}>
        <span onClick={handleClick}>Get Keycode</span>
      </button>
    </div>
  )
}

const calc2 = input => {
  let optCodeInput = 1
  let optCodeOutputArray = []
  let x = 0
  let optCodeBase = 0

  for (let i = 0; i < input.length; i += x) {
    //console.log("ii is",i);
    console.log("optCodeBase", optCodeBase)
    let current = parseInput(input[i])
    console.log("current", current)

    /////////// CONDITION 99 ///////////
    if (current.number === 99) {
      //console.log("condition 99 is triggered");
      x = 2
      break
    }

    /////////// CONDITION 1 ///////////
    else if (
      current.one === 1 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "position"
    ) {
      //console.log("condition 1 is triggered");

      let newValue = input[input[i + 1]] + input[input[i + 2]]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one == 1 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "immediate" &&
      current.parameterMode3 === "position"
    ) {
      //console.log("condition 1 is triggered");

      let newValue = input[i + 1] + input[i + 2]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one == 1 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "immediate" &&
      current.parameterMode3 === "position"
    ) {
      //console.log("condition 1 is triggered");

      let newValue = input[input[i + 1]] + input[i + 2]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one == 1 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "position" &&
      current.parameterMode3 === "position"
    ) {
      //console.log("condition 1 is triggered");

      let newValue = input[i + 1] + input[input[i + 2]]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one == 1 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "position" &&
      current.parameterMode3 === "position"
    ) {
      //console.log("condition 1 is triggered");

      let newValue = input[input[i + 1] + optCodeBase] + input[input[i + 2]]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one == 1 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "immediate" &&
      current.parameterMode3 === "position"
    ) {
      //console.log("condition 1 is triggered");

      let newValue = input[input[i + 1] + optCodeBase] + input[i + 2]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one == 1 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "relative" &&
      current.parameterMode3 === "position"
    ) {
      //console.log("condition 1 is triggered");

      let newValue = input[input[i + 1]] + input[input[i + 2] + optCodeBase]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one == 1 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "relative" &&
      current.parameterMode3 === "position"
    ) {
      //console.log("condition 1 is triggered");

      let newValue = input[i + 1] + input[input[i + 2] + optCodeBase]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one == 1 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "relative" &&
      current.parameterMode3 === "position"
    ) {
      //console.log("condition 1 is triggered");

      let newValue =
        input[input[i + 1] + optCodeBase] + input[input[i + 2] + optCodeBase]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one === 1 &&
      current.parameterMode1 === "position" &&
      current.parameterMode2 === "position" &&
      current.parameterMode3 === "relative"
    ) {
      //console.log("condition 1 is triggered");

      let newValue = input[input[i + 1]] + input[input[i + 2]]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one == 1 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "immediate" &&
      current.parameterMode3 === "relative"
    ) {
      //console.log("condition 1 is triggered");

      let newValue = input[i + 1] + input[i + 2]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one == 1 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "immediate" &&
      current.parameterMode3 === "relative"
    ) {
      //console.log("condition 1 is triggered");

      let newValue = input[input[i + 1]] + input[i + 2]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one == 1 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "position" &&
      current.parameterMode3 === "relative"
    ) {
      //console.log("condition 1 is triggered");

      let newValue = input[i + 1] + input[input[i + 2]]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one == 1 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "position" &&
      current.parameterMode3 === "relative"
    ) {
      //console.log("condition 1 is triggered");

      let newValue = input[input[i + 1] + optCodeBase] + input[input[i + 2]]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one == 1 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "immediate" &&
      current.parameterMode3 === "relative"
    ) {
      //console.log("condition 1 is triggered");

      let newValue = input[input[i + 1] + optCodeBase] + input[i + 2]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one == 1 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "relative" &&
      current.parameterMode3 === "relative"
    ) {
      //console.log("condition 1 is triggered");

      let newValue = input[input[i + 1]] + input[input[i + 2] + optCodeBase]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one == 1 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "relative" &&
      current.parameterMode3 === "relative"
    ) {
      //console.log("condition 1 is triggered");

      let newValue = input[i + 1] + input[input[i + 2] + optCodeBase]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one == 1 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "relative" &&
      current.parameterMode3 === "relative"
    ) {
      //console.log("condition 1 is triggered");

      let newValue =
        input[input[i + 1] + optCodeBase] + input[input[i + 2] + optCodeBase]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    }

    /////////// CONDITION 2 ///////////
    else if (
      current.one == 2 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "position" &&
      current.parameterMode3 === "position"
    ) {
      //console.log("condition 2 is triggered");

      let newValue = input[input[i + 1]] * input[input[i + 2]]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one == 2 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "immediate" &&
      current.parameterMode3 === "position"
    ) {
      //console.log("condition 2 is triggered");

      let newValue = input[i + 1] * input[i + 2]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one == 2 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "immediate" &&
      current.parameterMode3 === "position"
    ) {
      //console.log("condition 2 is triggered");

      let newValue = input[input[i + 1]] * input[i + 2]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one == 2 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "position" &&
      current.parameterMode3 === "position"
    ) {
      //console.log("condition 2 is triggered");

      let newValue = input[i + 1] * input[input[i + 2]]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one == 2 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "position" &&
      current.parameterMode3 === "position"
    ) {
      //console.log("condition 2 is triggered");

      let newValue = input[input[i + 1] + optCodeBase] * input[input[i + 2]]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one == 2 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "immediate" &&
      current.parameterMode3 === "position"
    ) {
      //console.log("condition 2 is triggered");

      let newValue = input[input[i + 1] + optCodeBase] * input[i + 2]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one == 2 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "relative" &&
      current.parameterMode3 === "position"
    ) {
      //console.log("condition 2 is triggered");

      let newValue = input[input[i + 1]] * input[input[i + 2] + optCodeBase]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one == 2 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "relative" &&
      current.parameterMode3 === "position"
    ) {
      //console.log("condition 2 is triggered");

      let newValue = input[i + 1] * input[input[i + 2] + optCodeBase]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one == 2 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "relative" &&
      current.parameterMode3 === "position"
    ) {
      //console.log("condition 2 is triggered");

      let newValue =
        input[input[i + 1] + optCodeBase] * input[input[i + 2] + optCodeBase]
      input[input[i + 3]] = newValue
      x = 4
    } else if (
      current.one == 2 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "position" &&
      current.parameterMode3 === "relative"
    ) {
      //console.log("condition 2 is triggered");

      let newValue = input[input[i + 1]] * input[input[i + 2]]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one == 2 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "immediate" &&
      current.parameterMode3 === "relative"
    ) {
      //console.log("condition 2 is triggered");

      let newValue = input[i + 1] * input[i + 2]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one == 2 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "immediate" &&
      current.parameterMode3 === "relative"
    ) {
      //console.log("condition 2 is triggered");

      let newValue = input[input[i + 1]] * input[i + 2]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one == 2 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "position" &&
      current.parameterMode3 === "relative"
    ) {
      //console.log("condition 2 is triggered");

      let newValue = input[i + 1] * input[input[i + 2]]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one == 2 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "position" &&
      current.parameterMode3 === "relative"
    ) {
      //console.log("condition 2 is triggered");

      let newValue = input[input[i + 1] + optCodeBase] * input[input[i + 2]]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one == 2 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "immediate" &&
      current.parameterMode3 === "relative"
    ) {
      //console.log("condition 2 is triggered");

      let newValue = input[input[i + 1] + optCodeBase] * input[i + 2]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one == 2 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "relative" &&
      current.parameterMode3 === "relative"
    ) {
      //console.log("condition 2 is triggered");

      let newValue = input[input[i + 1]] * input[input[i + 2] + optCodeBase]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one == 2 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "relative" &&
      current.parameterMode3 === "relative"
    ) {
      //console.log("condition 2 is triggered");

      let newValue = input[i + 1] * input[input[i + 2] + optCodeBase]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    } else if (
      current.one == 2 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "relative" &&
      current.parameterMode3 === "relative"
    ) {
      //console.log("condition 2 is triggered");

      let newValue =
        input[input[i + 1] + optCodeBase] * input[input[i + 2] + optCodeBase]
      input[input[i + 3] + optCodeBase] = newValue
      x = 4
    }

    /////////// CONDITION 3 ///////////
    else if (current.one == 3 && current.parameterMode1 == "position") {
      // console.log("3 is triggered");
      input[input[i + 1]] = optCodeInput
      x = 2
    } else if (current.one == 3 && current.parameterMode1 == "relative") {
      //console.log("3 is triggered");
      input[input[i + 1] + optCodeBase] = optCodeInput
      x = 2
    }

    /////////// CONDITION 4 ///////////
    else if (current.one == 4 && current.parameterMode1 == "position") {
      //console.log("4 is triggered");
      let givenOutput = input[input[i + 1]]
      //console.log("givenOutput", givenOutput)
      optCodeOutputArray.push(givenOutput)
      x = 2
    } else if (current.one == 4 && current.parameterMode1 == "immediate") {
      //console.log("4 is triggered");
      let givenOutput = input[i + 1]
      //console.log("givenOutput", givenOutput)
      optCodeOutputArray.push(givenOutput)
      x = 2
    } else if (current.one == 4 && current.parameterMode1 == "relative") {
      //console.log("4 is triggered");
      let givenOutput = input[input[i + 1] + optCodeBase]
      //console.log("givenOutput", givenOutput)
      optCodeOutputArray.push(givenOutput)
      x = 2
    }

    /////////// CONDITION 5 ///////////
    else if (
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
      current.one == 5 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "position"
    ) {
      //console.log("4 is triggered");
      if (input[input[i + 1] + optCodeBase] != 0) {
        x = 0
        i = input[input[i + 2]]
      } else {
        x = 3
      }
    } else if (
      current.one == 5 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "immediate"
    ) {
      //console.log("4 is triggered");
      if (input[input[i + 1] + optCodeBase] != 0) {
        x = 0
        i = input[i + 2]
      } else {
        x = 3
      }
    } else if (
      current.one == 5 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "relative"
    ) {
      //console.log("4 is triggered");
      if (input[input[i + 1]] != 0) {
        x = 0
        i = input[input[i + 2] + optCodeBase]
      } else {
        x = 3
      }
    } else if (
      current.one == 5 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "relative"
    ) {
      //console.log("4 is triggered");
      //debugger;
      if (input[i + 1] != 0) {
        x = 0
        i = input[input[i + 2] + optCodeBase]
      } else {
        x = 3
      }
    } else if (
      current.one == 5 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "relative"
    ) {
      //console.log("4 is triggered");
      if (input[input[i + 1] + optCodeBase] != 0) {
        x = 0
        i = input[input[i + 2] + optCodeBase]
      } else {
        x = 3
      }
    }

    /////////// CONDITION 6 ///////////
    else if (
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
      current.one == 6 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "position"
    ) {
      //console.log("4 is triggered");
      if (input[input[i + 1] + optCodeBase] == 0) {
        x = 0
        i = input[input[i + 2]]
      } else {
        x = 3
      }
    } else if (
      current.one == 6 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "immediate"
    ) {
      //console.log("4 is triggered");
      if (input[input[i + 1] + optCodeBase] == 0) {
        x = 0
        i = input[i + 2]
      } else {
        x = 3
      }
    } else if (
      current.one == 6 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "relative"
    ) {
      //console.log("4 is triggered");
      if (input[input[i + 1]] == 0) {
        x = 0
        i = input[input[i + 2] + optCodeBase]
      } else {
        x = 3
      }
    } else if (
      current.one == 6 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "relative"
    ) {
      //console.log("4 is triggered");
      if (input[i + 1] == 0) {
        x = 0
        i = input[input[i + 2] + optCodeBase]
      } else {
        x = 3
      }
    } else if (
      current.one == 6 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "relative"
    ) {
      //console.log("4 is triggered");
      if (input[input[i + 1] + optCodeBase] == 0) {
        x = 0
        i = input[input[i + 2] + optCodeBase]
      } else {
        x = 3
      }
    }

    /////////// CONDITION 7 ///////////
    else if (
      current.one == 7 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "position" &&
      current.parameterMode3 == "position"
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
      current.parameterMode2 == "immediate" &&
      current.parameterMode3 == "position"
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
      current.parameterMode2 == "immediate" &&
      current.parameterMode3 == "position"
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
      current.parameterMode2 == "position" &&
      current.parameterMode3 == "position"
    ) {
      //console.log("condition 2 is triggered");
      if (input[i + 1] < input[input[i + 2]]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one == 7 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "position" &&
      current.parameterMode3 == "position"
    ) {
      //console.log("condition 2 is triggered");
      if (input[input[i + 1] + optCodeBase] < input[input[i + 2]]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one == 7 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "immediate" &&
      current.parameterMode3 == "position"
    ) {
      //console.log("condition 2 is triggered");
      if (input[input[i + 1] + optCodeBase] < input[i + 2]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one == 7 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "relative" &&
      current.parameterMode3 == "position"
    ) {
      //console.log("condition 2 is triggered");
      if (input[input[i + 1]] < input[input[i + 2] + optCodeBase]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one == 7 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "relative" &&
      current.parameterMode3 == "position"
    ) {
      //console.log("condition 2 is triggered");
      if (input[i + 1] < input[input[i + 2] + optCodeBase]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one == 7 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "relative" &&
      current.parameterMode3 == "position"
    ) {
      //console.log("condition 2 is triggered");
      if (
        input[input[i + 1] + optCodeBase] < input[input[i + 2] + optCodeBase]
      ) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one == 7 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "position" &&
      current.parameterMode3 == "relative"
    ) {
      //console.log("condition 2 is triggered");
      if (input[input[i + 1]] < input[input[i + 2]]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one == 7 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "immediate" &&
      current.parameterMode3 == "relative"
    ) {
      //console.log("condition 2 is triggered");
      if (input[i + 1] < input[i + 2]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one == 7 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "immediate" &&
      current.parameterMode3 == "relative"
    ) {
      //console.log("condition 2 is triggered");
      if (input[input[i + 1]] < input[i + 2]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one == 7 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "position" &&
      current.parameterMode3 == "relative"
    ) {
      //console.log("condition 2 is triggered");
      if (input[i + 1] < input[input[i + 2]]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one == 7 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "position" &&
      current.parameterMode3 == "relative"
    ) {
      //console.log("condition 2 is triggered");
      if (input[input[i + 1] + optCodeBase] < input[input[i + 2]]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one == 7 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "immediate" &&
      current.parameterMode3 == "relative"
    ) {
      //console.log("condition 2 is triggered");
      if (input[input[i + 1] + optCodeBase] < input[i + 2]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one == 7 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "relative" &&
      current.parameterMode3 == "relative"
    ) {
      //console.log("condition 2 is triggered");
      if (input[input[i + 1]] < input[input[i + 2] + optCodeBase]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one == 7 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "relative" &&
      current.parameterMode3 == "relative"
    ) {
      //console.log("condition 2 is triggered");
      if (input[i + 1] < input[input[i + 2] + optCodeBase]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one == 7 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "relative" &&
      current.parameterMode3 == "relative"
    ) {
      //console.log("condition 2 is triggered");
      if (
        input[input[i + 1] + optCodeBase] < input[input[i + 2] + optCodeBase]
      ) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    }

    /////////// CONDITION 8 ///////////
    else if (
      current.one == 8 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "position" &&
      current.parameterMode3 == "position"
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
      current.parameterMode2 == "immediate" &&
      current.parameterMode3 == "position"
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
      current.parameterMode2 == "immediate" &&
      current.parameterMode3 == "position"
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
      current.parameterMode2 == "position" &&
      current.parameterMode3 == "position"
    ) {
      //console.log("condition 2 is triggered");
      if (input[i + 1] == input[input[i + 2]]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one == 8 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "position" &&
      current.parameterMode3 == "position"
    ) {
      //console.log("condition 2 is triggered");
      if (input[input[i + 1] + optCodeBase] == input[input[i + 2]]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one == 8 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "immediate" &&
      current.parameterMode3 == "position"
    ) {
      //console.log("condition 2 is triggered");
      if (input[input[i + 1] + optCodeBase] == input[i + 2]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one == 8 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "relative" &&
      current.parameterMode3 == "position"
    ) {
      //console.log("condition 2 is triggered");
      if (input[input[i + 1]] == input[input[i + 2] + optCodeBase]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one == 8 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "relative" &&
      current.parameterMode3 == "position"
    ) {
      //console.log("condition 2 is triggered");
      if (input[i + 1] == input[input[i + 2] + optCodeBase]) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one == 8 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "relative" &&
      current.parameterMode3 == "position"
    ) {
      //console.log("condition 2 is triggered");
      if (
        input[input[i + 1] + optCodeBase] == input[input[i + 2] + optCodeBase]
      ) {
        input[input[i + 3]] = 1
      } else {
        input[input[i + 3]] = 0
      }
      x = 4
    } else if (
      current.one == 8 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "position" &&
      current.parameterMode3 == "relative"
    ) {
      //console.log("condition 2 is triggered");
      if (input[input[i + 1]] == input[input[i + 2]]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one == 8 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "immediate" &&
      current.parameterMode3 == "relative"
    ) {
      //console.log("condition 2 is triggered");
      if (input[i + 1] == input[i + 2]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one == 8 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "immediate" &&
      current.parameterMode3 == "relative"
    ) {
      //console.log("condition 2 is triggered");
      if (input[input[i + 1]] == input[i + 2]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one == 8 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "position" &&
      current.parameterMode3 == "relative"
    ) {
      //console.log("condition 2 is triggered");
      if (input[i + 1] == input[input[i + 2]]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one == 8 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "position" &&
      current.parameterMode3 == "relative"
    ) {
      //console.log("condition 2 is triggered");
      if (input[input[i + 1] + optCodeBase] == input[input[i + 2]]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one == 8 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "immediate" &&
      current.parameterMode3 == "relative"
    ) {
      //console.log("condition 2 is triggered");
      if (input[input[i + 1] + optCodeBase] == input[i + 2]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one == 8 &&
      current.parameterMode1 == "position" &&
      current.parameterMode2 == "relative" &&
      current.parameterMode3 == "relative"
    ) {
      //console.log("condition 2 is triggered");
      if (input[input[i + 1]] == input[input[i + 2] + optCodeBase]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one == 8 &&
      current.parameterMode1 == "immediate" &&
      current.parameterMode2 == "relative" &&
      current.parameterMode3 == "relative"
    ) {
      //console.log("condition 2 is triggered");
      if (input[i + 1] == input[input[i + 2] + optCodeBase]) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    } else if (
      current.one == 8 &&
      current.parameterMode1 == "relative" &&
      current.parameterMode2 == "relative" &&
      current.parameterMode3 == "reelative"
    ) {
      //console.log("condition 2 is triggered");
      if (
        input[input[i + 1] + optCodeBase] == input[input[i + 2] + optCodeBase]
      ) {
        input[input[i + 3] + optCodeBase] = 1
      } else {
        input[input[i + 3] + optCodeBase] = 0
      }
      x = 4
    }

    /////////// CONDITION 9 ///////////
    else if (current.one == 9 && current.parameterMode1 == "position") {
      //console.log("condition 2 is triggered");
      optCodeBase = optCodeBase + input[input[i + 1]]
      x = 2
    } else if (current.one == 9 && current.parameterMode1 == "immediate") {
      //console.log("condition 2 is triggered");
      optCodeBase = optCodeBase + input[i + 1]
      x = 2
    } else if (current.one == 9 && current.parameterMode1 == "relative") {
      //console.log("condition 2 is triggered");
      optCodeBase = optCodeBase + input[input[i + 1] + optCodeBase]
      x = 2
    } else {
      //console.log("nothing is triggered");
      break
    }
  }
  //console.log("optCodeOutputArray", optCodeOutputArray);
  return [input, optCodeOutputArray]
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
  } else if (hundert == 2) {
    parsedObject.parameterMode1 = "relative"
  }

  if (thousand == 0) {
    parsedObject.parameterMode2 = "position"
  } else if (thousand == 1) {
    parsedObject.parameterMode2 = "immediate"
  } else if (thousand == 2) {
    parsedObject.parameterMode2 = "relative"
  }

  if (tenThousand == 0) {
    parsedObject.parameterMode3 = "position"
  } else if (tenThousand == 1) {
    parsedObject.parameterMode3 = "immediate"
  } else if (tenThousand == 2) {
    parsedObject.parameterMode3 = "relative"
  }

  return parsedObject
}
