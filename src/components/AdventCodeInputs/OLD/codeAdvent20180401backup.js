import React, { useState } from "react";
import data from "./AdventCodeInputs/CodeAdvent201804.json";
import "./component.css";

export const CodeAdvent20180401 = () => {
  /*const [observations, setObservations] = useState([
    "[1518-11-01 00:00] Guard #10 begins shift",
    "[1518-11-01 00:05] falls asleep",
    "[1518-11-01 00:25] wakes up",
    "[1518-11-01 00:30] falls asleep",
    "[1518-11-01 00:55] wakes up",
    "[1518-11-01 23:58] Guard #99 begins shift",
    "[1518-11-02 00:40] falls asleep",
    "[1518-11-02 00:50] wakes up",
    "[1518-11-03 00:05] Guard #10 begins shift",
    "[1518-11-03 00:24] falls asleep",
    "[1518-11-03 00:29] wakes up",
    "[1518-11-04 00:02] Guard #99 begins shift",
    "[1518-11-04 00:36] falls asleep",  
    "[1518-11-04 00:46] wakes up",
    "[1518-11-05 00:03] Guard #99 begins shift",
    "[1518-11-05 00:45] falls asleep",
    "[1518-11-05 00:55] wakes up", 
  ]);
  */

  const [observations, setObservations] = useState(data);
  const [result, setResult] = useState();

  function handleClick() {
  //  debugger;
    let output = computeObservations(observations);
    let finalNumber= strategyAnalysis(output);
    setResult(finalNumber);
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Guards Observation:</p>
      <p>ID * Minutes: {JSON.stringify(result)}</p>
      <button style={{ backgroundColor: "#6BAA75" }}>
        <span onClick={handleClick}>Get Strategy1</span>
      </button>
    </div>
  );
};

function computeObservations(input) {
  
  let sortedObservations = input.sort();

  let countGuards=0;
  let iteratedGuards=0;
  for (let counter =0; counter < input.length; counter++) {
   if (input[counter].includes("Guard")) {
      countGuards+=1;
   }
  }

  //console.log("countGuards is: ", countGuards)
  let initialGuardIndex;
  var resultArray=[];
  for (let row = 0; row < input.length; row++) {
     
    var dictionary = {};
    //console.log("row iterations", row)
    if (input[row].includes("Guard")) {       
      initialGuardIndex = row;
      iteratedGuards+=1;

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

      var event = new Date(year, month, day, hour, minute, 0);
 

      if(event.getHours()==23){
        event.setDate(event.getDate() + 1)

      }else {

      }
      dictionary.date = event;

  //  console.log("Dict data year is:", dictionary.date.getFullYear());
  //  console.log("Dict data DATE is:", dictionary.date.getDate());

      dictionary.id = input[row].slice(
        input[row].indexOf("#") + 1,
        input[row].indexOf(" ", input[row].indexOf("#"))
      );
      let minutes=[];
      for (let minute=0; minute<60; minute++){
       minutes.push(0);
      }
      dictionary.times=minutes;

let subsequentGuardIndex;
    let iterate=true;
    let endReached =false;
    if (iteratedGuards==countGuards){
      endReached=true;
    }

    for (let line=row+1; line<input.length; line++){
      if ((input[line].includes("Guard") && iterate) || endReached){
        if (!endReached){
          subsequentGuardIndex=line;
        } else{
          subsequentGuardIndex=input.length;
        }
        iterate =false;
      }}

        var sleepStarts=[];
        var sleepEnds=[];
        
          for (let n=initialGuardIndex +1; n<subsequentGuardIndex; n++){
              if (input[n].includes("asleep")){
              
              let min = parseInt(input[n].slice(
                input[n].indexOf(":") + 1,
                input[n].indexOf("]")));
               sleepStarts.push(min);
             
              }
          }
          for (let m=initialGuardIndex +1; m<subsequentGuardIndex; m++){
            if (input[m].includes("wakes")){
            

            let minEnd = parseInt(input[m].slice(
              input[m].indexOf(":") + 1,
              input[m].indexOf("]")));
              sleepEnds.push(minEnd);
         //    console.log("input n",input[m]);
         //    console.log("min", minEnd);
         //    console.log(dictionary.date);
         //    console.log("sleep ends",sleepEnds);
            }
        }
      //  console.log("sleep starts", sleepStarts);
       
        for (let sleepCycle=0;sleepCycle<sleepStarts.length;sleepCycle++){
        for (let time=sleepStarts[sleepCycle]; time<sleepEnds[sleepCycle]; time++){
        //  debugger;
          dictionary.times[time]=dictionary.times[time]+1;
        //  console.log("sleep cycle:", sleepCycle, "time:", time, "dict", dictionary.times);
        }
      }


    } else {

    }


    
  if (Object.entries(dictionary).length>0){
  resultArray.push(dictionary);
  }
  }
  //console.log(resultArray);
  return resultArray;
}

function strategyAnalysis(input){
  for (let i=0; i<input.length;i++){
    let count=0;
    for (let j=0;j<input[i].times.length;j++){
    count=count+input[i].times[j];
    }
    input[i].totalMinutesPerDay=count;
  }
//console.log(input);

let uniqueGuards=checkUniqueGuards(input);
//console.log("unique guards aree:",uniqueGuards);
//debugger;
let totalSleeping=[];
let maxSleepTime=0;
let maxSleepId=0;
for(let guard=0;guard<uniqueGuards.length; guard++){
  let totalMinutesCount=0;
  
  for (let timeLine=0;timeLine<input.length; timeLine++){
    if (input[timeLine].id==uniqueGuards[guard]){
    //  debugger;
      totalMinutesCount=totalMinutesCount+input[timeLine].totalMinutesPerDay;
    }
    
  }
  totalSleeping.push(totalMinutesCount);
  if (totalSleeping >maxSleepTime){
    maxSleepTime=totalSleeping[guard];
    maxSleepId=uniqueGuards[guard];
  }
//  console.log("total minutes count", totalMinutesCount);
}

/*console.log("total sleeping times", totalSleeping);
console.log("maxSleeptime", maxSleepTime);
console.log("maxSleepID", maxSleepId);
*/
let finalCalculation=analyzeDays(input, maxSleepId);
//console.log(analyzedDay);
  return finalCalculation;
}

function checkUniqueGuards(observations){
  var uniqueArray=[];
  for (let i=0; i<observations.length;i++)
    if (!uniqueArray.includes(observations[i].id)){
      uniqueArray.push(observations[i].id);

    }
   // console.log(uniqueArray);
  return uniqueArray;
}

function analyzeDays(dataSet, maxSleeper){
  let dayStatistics=[];
      for (let minute=0; minute<60; minute++){
       dayStatistics.push(0);
      }
for (let row=0;row<dataSet.length;row++){
//  debugger;
if (parseInt(dataSet[row].id)==maxSleeper){
  for (let day=0;day<dataSet[row].times.length;day++)
   dayStatistics[day]=dayStatistics[day]+dataSet[row].times[day];
}
}
//console.log(dataSet);
//console.log(dayStatistics);

let maxDay=0;
let maxDayID;
for (let value=0;value<dayStatistics.length;value++){
  if (dayStatistics[value]>maxDay){
    maxDay=dayStatistics[value];
    maxDayID=value;
  }
}
//console.log("max day value", maxDay, "max day ID", maxDayID);
let finalResult=maxDayID*maxSleeper;
//console.log(finalResult);
  return finalResult;
}