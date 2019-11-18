import React, { useState } from "react";
import data from "./AdventCodeInputs/CodeAdvent201804.json";

export const CodeAdvent20180401 = () => {
  const [observations, setObservations] = useState([
    "[1518-11-03 00:05] Guard #10 begins shift",
    "[1518-11-03 00:24] falls asleep",
    "[1518-11-03 00:29] wakes up",
    "[1518-11-04 00:02] Guard #99 begins shift",
    "[1518-11-04 00:36] falls asleep",
    "[1518-11-01 23:58] Guard #99 begins shift",
    "[1518-11-02 00:40] falls asleep",
    "[1518-11-02 00:50] wakes up",
    "[1518-11-04 00:46] wakes up",
    "[1518-11-05 00:03] Guard #99 begins shift",
    "[1518-11-05 00:45] falls asleep",
    "[1518-11-05 00:55] wakes up",
    "[1518-11-01 00:00] Guard #10 begins shift",
    "[1518-11-01 00:05] falls asleep",
    "[1518-11-01 00:25] wakes up",
    "[1518-11-01 00:30] falls asleep",
    "[1518-11-01 00:55] wakes up"
  ]);
  const [result, setResult] = useState();

  function handleClick() {
    let output = compute(observations);
    setResult(output);
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Guards Observation:</p>
      <p>ID * Minutes: {JSON.stringify(result)}</p>
      <button style={{ backgroundColor: "gold" }} onClick={handleClick}>
        Compute Guard Pattern
      </button>
    </div>
  );
};

function compute(input) {
  let sortedObservations = input.sort();
  console.log(sortedObservations);

  for (let row = 0; row < input.length; row++) {
    let identifyInitialGuard = input[row].includes("Guard");
    let dictionary = {};
    //debugger;
    if (input[row].includes("Guard")) {
      console.log("IM GUARD");
      // debugger;

      let year = input[row].slice(1, input[row].indexOf("-"));
      let month = input[row].slice(
        input[row].indexOf("-") + 1,
        input[row].indexOf("-", input[row].indexOf("-") + 1)
      );
      let day = input[row].slice(
        input[row].indexOf("-", input[row].indexOf("-") + 1) + 1,
        input[row].indexOf(" ")
      );
      let hour = input[row].slice(
        input[row].indexOf(" ") + 1,
        input[row].indexOf(":")
      );
      let minute = input[row].slice(
        input[row].indexOf(":") + 1,
        input[row].indexOf("]")
      );
      console.log("YMD:", year, month, day, hour, minute);

      var event = new Date(Date.UTC(year, month, day, hour, minute, 0));
      dictionary.date = event;
      debugger;
      console.log("Dict is:", dictionary);
      console.log("Dict data is:", dictionary.date.toLocaleString("en-GB"));
      console.log("Dict data year is:", dictionary.date.getUTCFullYear());
      console.log("Dict data DATE is:", dictionary.date.getUTCDate());

      dictionary.id = input[row].slice(
        input[row].indexOf("#") + 1,
        input[row].indexOf(" ", input[row].indexOf("#"))
      );

      console.log(dictionary);
    } else {
      console.log("FALSE");
    }

    //console.log("initial", identifyInitialGuard);
    //console.log("subsequent", identifySubsequentGuard);
  }
  return 0;
}
