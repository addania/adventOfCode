import React, { useState } from "react";
import data from "./AdventCodeInputs/CodeAdvent201804.json";
//import data from "./AdventCodeInputs/test.json";
import "./component.css";

export const CodeAdvent20180402 = () => {
/*  const [observations, setObservations] = useState(["[1518-11-02 00:40] falls asleep",
  "[1518-01-30 00:55] wakes up",
  "[1518-12-24 00:02] Guard #8 begins shift",
  "[1518-10-08 00:45] falls asleep",
  "[1518-12-25 00:42] falls asleep", 
  "[1518-12-03 00:05] Guard #5 begins shift",
  "[1518-10-08 00:37] falls asleep",
  "[1518-12-30 23:58] Guard #225 begins shift",
  "[1518-01-30 00:03] Guard #109 begins shift",
  "[1518-11-01 23:58] Guard #225 begins shift",
  "[1518-12-24 00:45] falls asleep", 
  "[1518-11-24 00:35] falls asleep", 
  "[1518-11-24 00:02] Guard #8 begins shift",
  "[1518-12-24 00:59] wakes up",
  "[1518-01-30 00:45] falls asleep",
  "[1518-10-08 00:00] Guard #1000 begins shift",
  "[1518-11-24 00:55] wakes up",
  "[1518-12-03 00:49] wakes up",
  "[1518-12-25 00:46] wakes up",
  "[1518-11-06 00:03] Guard #9 begins shift",
  "[1518-10-08 00:55] wakes up",
  "[1518-10-08 00:44] wakes up",
  "[1518-12-31 00:30] falls asleep",
  "[1518-12-31 00:50] wakes up",
  "[1518-12-03 00:34] falls asleep",
  "[1518-12-24 23:52] Guard #8 begins shift",
  "[1518-11-02 00:50] wakes up",
  ]
  );
 */ 

  const [observations, setObservations] = useState(data);
  const [result, setResult] = useState();

  function handleClick() {
  //  debugger;
    let output = computeObservations(observations);
  //  console.log(output);
    let finalNumber= strategyAnalysis(output);
    setResult(finalNumber);
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Guards Observation:</p>
      <p>ID * Minutes: {JSON.stringify(result)}</p>
      <button style={{ backgroundColor: "#A7A7A9" }}>
        <span onClick={handleClick}>Get Strategy2</span>
      </button>
    </div>
  );
};

function computeObservations(input) {
  
  let sortedObservations = input.sort();
//console.log(sortedObservations);
  let countGuards=0;
  let iteratedGuards=0;
  for (let counter =0; counter < sortedObservations.length; counter++) {
   if (sortedObservations[counter].includes("Guard")) {
      countGuards+=1;
   }
  }

  //console.log("countGuards is: ", countGuards)
  let initialGuardIndex;
  var resultArray=[];
  for (let row = 0; row < sortedObservations.length; row++) {
     
    var dictionary = {};
    //console.log("row iterations", row)
    if (sortedObservations[row].includes("Guard")) {       
      initialGuardIndex = row;
      iteratedGuards+=1;

      let year = sortedObservations[row].slice(1, sortedObservations[row].indexOf("-"));
      let month = sortedObservations[row].slice(
        sortedObservations[row].indexOf("-") + 1,
        sortedObservations[row].indexOf("-", sortedObservations[row].indexOf("-") + 1)
      );
      let day = sortedObservations[row].slice(
        sortedObservations[row].indexOf("-", sortedObservations[row].indexOf("-") + 1) + 1,
        sortedObservations[row].indexOf(" ")
      );
      let hour = sortedObservations[row].slice(
        sortedObservations[row].indexOf(" ") + 1,
        sortedObservations[row].indexOf(":")
      );
      let minute = sortedObservations[row].slice(
        sortedObservations[row].indexOf(":") + 1,
        sortedObservations[row].indexOf("]")
      );

      let something = sortedObservations[row].slice(
        1,
        sortedObservations[row].indexOf("]")
      )+":00";
     
      
      var event = new Date(something);
    //  console.log(event);
     

      if(event.getHours()==23){
        event.setDate(event.getDate() + 1)

      }else {

      }
      dictionary.date = event;

  //  console.log("Dict data year is:", dictionary.date.getFullYear());
  //  console.log("Dict data DATE is:", dictionary.date.getDate());

      dictionary.id = sortedObservations[row].slice(
        sortedObservations[row].indexOf("#") + 1,
        sortedObservations[row].indexOf(" ", sortedObservations[row].indexOf("#"))
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

    for (let line=row+1; line<sortedObservations.length; line++){
      if ((sortedObservations[line].includes("Guard") && iterate) || endReached){
        if (!endReached){
          subsequentGuardIndex=line;
        } else{
          subsequentGuardIndex=sortedObservations.length;
        }
        iterate =false;
      }}

        var sleepStarts=[];
        var sleepEnds=[];
        
          for (let n=initialGuardIndex +1; n<subsequentGuardIndex; n++){
              if (sortedObservations[n].includes("asleep")){
              
              let min = parseInt(sortedObservations[n].slice(
                sortedObservations[n].indexOf(":") + 1,
                sortedObservations[n].indexOf("]")));
               sleepStarts.push(min);
             
              }
          }
          for (let m=initialGuardIndex +1; m<subsequentGuardIndex; m++){
            if (sortedObservations[m].includes("wakes")){
            

            let minEnd = parseInt(sortedObservations[m].slice(
              sortedObservations[m].indexOf(":") + 1,
              sortedObservations[m].indexOf("]")));
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
//console.log("INPUT TO STRATEGY ANALYSIS IS: ", input);

let uniqueGuards=checkUniqueGuards(input);
//console.log("unique guards aree:",uniqueGuards);
let frequencyArray=[];
for (let guard=0; guard<uniqueGuards.length;guard++){
  let minuteFrequency=[];
  for (let min=0; min<60; min++){
    minuteFrequency.push(0);
   }
  // console.log(minuteFrequency);
//console.log("guard", guard);
  for (let timeStamp=0;timeStamp<input.length;timeStamp++ ){
    //console.log("timeStamp", timeStamp);
    //  console.log("min", singleMinute);
    if(input[timeStamp].id==uniqueGuards[guard]){
      //console.log("i identified guard",uniqueGuards[guard], input[timeStamp].id, "in row", timeStamp  )
      
      for (let singleMinute=0;singleMinute<input[timeStamp].times.length;singleMinute++){
       minuteFrequency[singleMinute]=minuteFrequency[singleMinute]+input[timeStamp].times[singleMinute];
      
    }
    }

  }
 // console.log(minuteFrequency);
  frequencyArray.push(minuteFrequency);
}
//console.log("frequency array", frequencyArray);
//debugger;
/*let totalSleeping=[];
let maxSleepTime=0;
let maxSleepId;
for(let guard=0;guard<uniqueGuards.length; guard++){
  let totalMinutesCount=0;
  
  for (let timeLine=0;timeLine<input.length; timeLine++){
    if (input[timeLine].id==uniqueGuards[guard]){
    //  debugger;
      totalMinutesCount=totalMinutesCount+input[timeLine].totalMinutesPerDay;
    }
    
  }
  totalSleeping.push(totalMinutesCount);
  //console.log("total minutesCount",totalMinutesCount);
  
  //console.log("total minutes count", totalSleeping);
}
for (let guy=0;guy<uniqueGuards.length;guy++){
if (totalSleeping[guy] >maxSleepTime){
  maxSleepTime=totalSleeping[guy];
  maxSleepId=uniqueGuards[guy];
}
}
//console.log("total sleeping times", totalSleeping);
//console.log("maxSleeptime", maxSleepTime);
//console.log("maxSleepID", maxSleepId);

let finalCalculation=analyzeDays(input, maxSleepId);
//console.log(analyzedDay);
*/
let maxMinuteID;
let maxMinuteCount=0;
let maxGuardID;
for (let iteration=0; iteration<frequencyArray.length; iteration++){
  for (let m=0;m<frequencyArray[iteration].length; m++){
    if (frequencyArray[iteration][m]>maxMinuteCount){
    // debugger;
     maxMinuteCount=frequencyArray[iteration][m];
     maxMinuteID=m;
     maxGuardID=uniqueGuards[iteration];
    // console.log("Maxes", maxMinuteID, maxMinuteCount, maxGuardID);
    }
  }
}
console.log("Maxes", maxMinuteID, maxMinuteCount, maxGuardID);
let finalMultiplication=maxGuardID*maxMinuteID;
  return finalMultiplication;
}

function checkUniqueGuards(observe){
  var uniqueArray=[];
  for (let i=0; i<observe.length;i++)
    if (!uniqueArray.includes(observe[i].id)){
      uniqueArray.push(observe[i].id);

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
//console.log("max sleepr",maxSleeper);
let finalResult=maxDayID*maxSleeper;

//console.log(finalResult);
  return finalResult;
}