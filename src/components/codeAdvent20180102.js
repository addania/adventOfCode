import React, { useState } from "react";
import data from "./AdventCodeInputs/CodeAdvent201801.json";
import "./component.css";

export const CodeAdvent20180102 = () => {
  const [array, setArray] = useState(data);
  const [total, setTotal] = useState(0);
  const [uniq, setUniq] = useState({ 0: 1 });
  const [result, setResult] = useState();
  const [goOn, setGoOn] = useState(true);

  function handleClick() {
    let sum = 0;
    let uniques = { 0: 1 };
    let duplicate;
    let proceed = true;
    let i = 0;

    while (proceed && i < 140) {
      i = i + 1;
      array.map((item, index) => {
        sum = sum + item;

        if (uniques[sum] == 1 && proceed == true) {
          proceed = false;
          duplicate = sum;
          console.log("FAAALSE");
        } else {
        }
        uniques[sum] = 1;
      });
      console.log(i);
    }
    setResult(duplicate);
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>
        Find duplicate frequencies:
      </p>
      <p>Duplicate frequencies are: {JSON.stringify(result)}</p>
      <button style={{ backgroundColor: "#69747C" }} onClick={handleClick}>
      <span>Find Duplicates</span>
      </button>
      
    </div>
  );
};
