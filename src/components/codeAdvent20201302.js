import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202013.json"
import "./component.css"

export const CodeAdvent20201302 = () => {
  const [total, setTotal] = useState()
  const parsed = parseData(data)

  function handleClick() {
    const result = getTimestamp(parsed)
    setTotal(result)
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Shuttle Search:</p>
      <p>Earliest timestamp: {total} </p>
      <button style={{ backgroundColor: "#008000" }}>
        <span onClick={handleClick}>Hunt timestamp</span>
      </button>
    </div>
  )
}

const parseData = input => {
  let parsed = []

  for (let i = 0; i < input.length; i++) {
    let x = parseInt(input[i])
    if (input[i] !== "x") {
      parsed.push({ value: x, offset: i })
    }
  }
  //console.log("parsed", parsed)
  return parsed
}

const getTimestamp = input => {
  let final = 0
  /*100000000000001*/
  /*200000000000000*/
  //754
  // console.log("I am divided by 29 and 37 and 467, t= 11606322", t)
  // console.log("I am divided by 29 and 37 and 467, t= 5614304793", t)

  /*console.log(
    "I am divided by 29 and 37 and 467 and 23 and 13 t=490355047427397500",
    t
  )*/
  //console.log("input", input)
  //debugger
  for (let t = 0; t < 490355047427397500; t += 11606322) {
    //debugger
    /* if (t % input[0].value === 0 && t !== 0) {
      let difference = input[1].value - (t % input[1].value)
      if (difference === input[1].offset) {
        let difference = input[2].value - (t % input[2].value)
        if (difference === input[2].offset) {
          let difference = input[3].value - (t % input[3].value)
          if (difference === input[3].offset) {
            console.log("I am divided by 29 and 37 and 467 and 23, t=", t)
            break
            let difference = input[4].value - (t % input[4].value)
            if (difference === input[4].offset) {
              let difference = input[5].value - (t % input[5].value)
              if (difference === input[5].offset) {
                let difference = input[6].value - (t % input[6].value)
                if (difference === input[6].offset) {
                  let difference = input[7].value - (t % input[7].value)
                  if (difference === input[7].offset) {
                    let difference = input[8].value - (t % input[8].value)
                    if (difference === input[8].offset) {
                      console.log("I found the difference for t: ", t)
                      final = t
                      break
                    }
                  }
                }
              }
            }
          }
        }
      }
    }*/
    if (t % input[0].value === 0 && t !== 0) {
      //let difference = input[1].value - (t % input[1].value)
      if ((t + input[1].offset) % input[1].value === 0) {
        //console.log("I am divided by 29 and 37 t=", t)
        //  break
        // let difference = input[2].value - (t % input[2].value)
        if ((t + input[2].offset) % input[2].value === 0) {
          //console.log("I am divided by 29 and 37 and 467 t=", t)
          //  break
          if ((t + input[3].offset) % input[3].value === 0) {
            //console.log("I am divided by 29 and 37 and 467 and 23 t=", t)
            //  break
            if ((t + input[4].offset) % input[4].value === 0) {
              console.log(
                "I am divided by 29 and 37 and 467 and 23 and 13 t=",
                t
              )
              break
            }
          }
          // let difference = input[3].value - (t % input[3].value)
          /* if (difference === input[3].offset) {
            console.log("I am divided by 29 and 37 and 467 and 23, t=", t)
            break
            let difference = input[4].value - (t % input[4].value)
            if (difference === input[4].offset) {
              let difference = input[5].value - (t % input[5].value)
              if (difference === input[5].offset) {
                let difference = input[6].value - (t % input[6].value)
                if (difference === input[6].offset) {
                  let difference = input[7].value - (t % input[7].value)
                  if (difference === input[7].offset) {
                    let difference = input[8].value - (t % input[8].value)
                    if (difference === input[8].offset) {
                      console.log("I found the difference for t: ", t)
                      final = t
                      break
                    }
                  }
                }
              }
            }
          }*/
        }
      }
    }
  }
  return final
}
