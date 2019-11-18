import React, { useState } from "react";
import data from "./AdventCodeInputs/CodeAdvent201802.json";

export const CodeAdvent20180202 = () => {
  const [boxIDs, setboxIDs] = useState(data);
  const [correctBoxIDs, setCorrectBoxIDs] = useState();

  function handleClick() {
    let result = checkIDs(boxIDs);
    setCorrectBoxIDs(result);
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Correct Box IDs:</p>
      <p>Correct Box IDs {JSON.stringify(correctBoxIDs)}</p>
      <button style={{ backgroundColor: "darkgreen" }} onClick={handleClick}>
        Correct IDs
      </button>
    </div>
  );
};

function checkIDs(input) {
  let resultString;
  input.forEach((item, index) => {
    console.log(index);
    for (let i = index + 1; i < input.length; i++) {
      let letterComparison = [];
      let letterSum = 0;
      for (let letter = 0; letter < item.length; letter++) {
        if (item[letter] == input[i][letter]) {
          letterComparison.push(1);
          letterSum = letterSum + 1;
        } else {
          letterComparison.push(0);
        }
      }

      if (letterSum == item.length - 1) {
        console.log("I AM TH WINNER", item, input[i]);
        console.log(letterComparison);
        let differenceIndex;
        let slicedArray1;
        let slicedArray2;
        letterComparison.map((pos, number) => {
          if (pos == 0) {
            differenceIndex = number;
            console.log("Difference index is", differenceIndex);
            slicedArray1 = item.slice(0, differenceIndex);
            slicedArray2 = item.slice(differenceIndex + 1, item.length);
            console.log(slicedArray1, slicedArray2);
            resultString = slicedArray1.concat(slicedArray2);
          } else {
          }
        });
      }
    }
  });

  return resultString;
}
