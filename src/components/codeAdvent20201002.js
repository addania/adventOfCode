import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent202010.json"
import "./component.css"

export const CodeAdvent20201002 = () => {
  const [x] = useState(data)
  const [total, setTotal] = useState()
  function handleClick() {
    const sortedList = x.sort(function(a, b) {
      return a - b
    })
    let prefix = [0]
    let index = 0
    let result = fun(sortedList, prefix, index)
    setTotal(result)
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>XX:</p>
      <p>YY: {total} </p>
      <button style={{ backgroundColor: "#C21F1F" }}>
        <span onClick={handleClick}>Click</span>
      </button>
    </div>
  )
}

function fun(sortedList, prefix, index) {
  let final = [[0]]
  for (let i = index; i < sortedList.length; i++) {
    let additions = []
    for (let j = 0; j < final.length; j++) {
      if (final[j][i] === 0) {
        let diff1 = sortedList[i] - 0
        let diff2 = sortedList[i + 1] - 0
        let diff3 = sortedList[i + 2] - 0
        //     console.log("diff1", diff1)
        //    console.log("diff2", diff2)
        //    console.log("diff3", diff3)
        if (diff1 === 3) {
          final[j].push(sortedList[i])
          //     console.log("condition 1")
          //     console.log("final", final)
        } else if (diff1 === 2 && diff2 > 3) {
          final[j].push(sortedList[i])
          //    console.log("condition 2")
          //    console.log("final", final)
        } else if (diff1 === 2 && diff2 === 3) {
          //    console.log("final[j]", final[j])
          //    console.log("sortedList[i]", sortedList[i])
          final.push([...final[j]])
          final[final.length - 1].push(sortedList[i + 1])
          final[j].push(sortedList[i])
          j = j + 1
          //   console.log("condition 3")
          //   console.log("final", final)
        } else if (diff1 === 1 && diff2 > 3) {
          final[j].push(sortedList[i])
          //    console.log("condition 4")
          //   console.log("final", final)
        } else if (
          diff1 === 1 &&
          diff2 <= 3 &&
          (diff3 > 3 || Number.isNaN(diff3))
        ) {
          //   console.log("final[j]", final[j])
          //   console.log("sortedList[i]", sortedList[i])
          final.push([...final[j]])
          final[final.length - 1].push(sortedList[i + 1])
          final[j].push(sortedList[i])
          j = j + 1
          //   console.log("condition 5")
          //   console.log("final", final)
        } else if (diff1 === 1 && diff2 === 2 && diff3 === 3) {
          //  console.log("final[j]", final[j])
          //  console.log("sortedList[i]", sortedList[i])
          final.push([...final[j]])
          final[final.length - 1].push(sortedList[i + 1])
          final.push([...final[j]])
          final[final.length - 1].push(sortedList[i + 2])
          final[j].push(sortedList[i])
          j = j + 2
          //   console.log("condition 6")
          //  console.log("final", final)
        }
      } else {
        let lastNumber = final[j][i]
        //  console.log("lastNumber", lastNumber)
        let position = sortedList.indexOf(lastNumber)
        //  console.log("position", position)
        let diff1 = sortedList[position + 1] - sortedList[position]
        let diff2 = sortedList[position + 2] - sortedList[position]
        let diff3 = sortedList[position + 3] - sortedList[position]
        //  console.log("diff1", diff1)
        //  console.log("diff2", diff2)
        //  console.log("diff3", diff3)
        //  console.log("final", final)

        if (diff1 === 3) {
          final[j].push(sortedList[position + 1])
          //    console.log("conditionnnnn 1")
          //    console.log("final", final)
        } else if (diff1 === 2 && diff2 > 3) {
          final[j].push(sortedList[position + 1])
          //    console.log("conditionnnnn 2")
          //    console.log("final", final)
        } else if (diff1 === 2 && diff2 === 3) {
          //    console.log("final[j]", final[j])
          //    console.log("sortedList[i]", sortedList[i])
          let x = final[j].slice()
          x.push(sortedList[position + 2])
          additions.push(x)
          //    console.log("additions", additions)
          final[j].push(sortedList[position + 1])
          //    console.log("conditionnnnn 3")
          //    console.log("final", final)
        } else if (diff1 === 1 && diff2 > 3) {
          final[j].push(sortedList[position + 1])
          //    console.log("conditionnnnn 4")
          //    console.log("final", final)
        } else if (
          diff1 === 1 &&
          diff2 <= 3 &&
          (diff3 > 3 || Number.isNaN(diff3))
        ) {
          //    console.log("final[j]", final[j])
          //    console.log("sortedList[i]", sortedList[i])
          let x = final[j].slice()
          //    console.log("x", x)
          x.push(sortedList[position + 2])
          //debugger
          additions.push(x)
          //    console.log("additions", additions)

          final[j].push(sortedList[position + 1])
          //    console.log("conditionnnnnnnnnnn 5")
          //    console.log("final", final)
          //debugger
        } else if (diff1 === 1 && diff2 === 2 && diff3 === 3) {
          //  console.log("final[j]", final[j])
          //  console.log("sortedList[i]", sortedList[i])

          let x = final[j].slice()
          x.push(sortedList[position + 2])
          additions.push(x)

          let y = final[j].slice()
          y.push(sortedList[position + 3])
          additions.push(y)
          final[j].push(sortedList[position + 1])
          //   console.log("conditionnnnnn 6")
          //  console.log("final", final)
        }
      }
    }
    if (additions.length > 0) {
      for (let z = 0; z < additions.length; z++) {
        final.push(additions[z])
      }
    }
    // console.log("final", final)
  }

  return final.length
}
