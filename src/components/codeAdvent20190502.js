import React, { useState } from "react";
import data from "./AdventCodeInputs/CodeAdvent201905.json";
import "./component.css";

export const CodeAdvent20190502 = () => {
  const [input, setInput] = useState([3,9,8,9,10,9,4,9,99,-1,8]);
  const [result, setResult] = useState();

  function handleClick() {
    //let replacedInput=replace(input);
    let calculation= calc2(input);
   // console.log(calculation);
    let numberArray=calculation[0];
    let outputArray=calculation[1];
    console.log("numberArray", numberArray);
    console.log("outputArray", outputArray);
    let finalCode=outputArray[outputArray.length-1];
    console.log("finalCode", finalCode);
    setResult(finalCode);
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Sunny with a Chance of Asteroids:</p>
      <p>Diagnostic code: {result} </p>
      <button style={{ backgroundColor: "#69747C" }}><span onClick={handleClick}>Analyze code</span>
      </button>      
    </div>
  );
};


const calc2 = (input)=> {
let optCodeInput=8;
let optCodeOutputArray=[];
let x=0;

for (let i=0;i<input.length;i+=x){
//console.log("ii is",i);
let current=parseInput(input[i]);

if (current.number==99){
 //console.log("condition 99 is triggered");
x=2;
break;
} else if (current.number==3) {
// console.log("3 is triggered");
input[input[i+1]]=optCodeInput;
x=2;

} else if (current.one==4 && current.parameterMode1=="position") {
//console.log("4 is triggered");
let givenOutput=input[input[i+1]];
//console.log("givenOutput", givenOutput)
optCodeOutputArray.push(givenOutput);
x=2;

} else if (current.one==4 && current.parameterMode1=="immediate") {
//console.log("4 is triggered");
let givenOutput=input[i+1];
//console.log("givenOutput", givenOutput)
optCodeOutputArray.push(givenOutput);
x=2;

} else if(current.one==1 && current.parameterMode1=="position" && current.parameterMode2=="position"){
 //console.log("condition 1 is triggered");

let newValue=input[input[i+1]]+input[input[i+2]];
input[input[i+3]]=newValue;
x=4;

} else if(current.one==1 && current.parameterMode1=="immediate" && current.parameterMode2=="immediate"){
 //console.log("condition 1 is triggered");

let newValue=input[i+1]+input[i+2];
input[input[i+3]]=newValue;
x=4;

} else if(current.one==1 && current.parameterMode1=="position" && current.parameterMode2=="immediate"){
 //console.log("condition 1 is triggered");

let newValue=input[input[i+1]]+input[i+2];
input[input[i+3]]=newValue;
x=4;

} else if(current.one==1 && current.parameterMode1=="immediate" && current.parameterMode2=="position"){
 //console.log("condition 1 is triggered");

let newValue=input[i+1]+input[input[i+2]];
input[input[i+3]]=newValue;
x=4;

} else if(current.one==2 && current.parameterMode1=="position" && current.parameterMode2=="position"){
 //console.log("condition 2 is triggered");

let newValue=input[input[i+1]]*input[input[i+2]];
input[input[i+3]]=newValue;
x=4;

} else if(current.one==2 && current.parameterMode1=="immediate" && current.parameterMode2=="immediate"){
 //console.log("condition 2 is triggered");

let newValue=input[i+1]*input[i+2];
input[input[i+3]]=newValue;
x=4;

} else if(current.one==2 && current.parameterMode1=="position" && current.parameterMode2=="immediate"){
 //console.log("condition 2 is triggered");

let newValue=input[input[i+1]]*input[i+2];
input[input[i+3]]=newValue;
x=4;

} else if(current.one==2 && current.parameterMode1=="immediate" && current.parameterMode2=="position"){
 //console.log("condition 2 is triggered");

let newValue=input[i+1]*input[input[i+2]];
input[input[i+3]]=newValue;
x=4;

} else if(current.one==8 && current.parameterMode1=="position" && current.parameterMode2=="position"){
 //console.log("condition 2 is triggered");
if (input[input[i+1]]==input[input[i+2]]){
  input[input[i+3]]=1;
} else {
  input[input[i+3]]=0;
}
x=4;
} else if(current.one==8 && current.parameterMode1=="immediate" && current.parameterMode2=="immediate"){
 //console.log("condition 2 is triggered");
if (input[i+1]==input[i+2]){
  input[input[i+3]]=1;
} else {
  input[input[i+3]]=0;
}
x=4;
} else if(current.one==8 && current.parameterMode1=="position" && current.parameterMode2=="immediate"){
 //console.log("condition 2 is triggered");
if (input[input[i+1]]==input[i+2]){
  input[input[i+3]]=1;
} else {
  input[input[i+3]]=0;
}
x=4;
} else if(current.one==8 && current.parameterMode1=="immediate" && current.parameterMode2=="position"){
 //console.log("condition 2 is triggered");
if (input[i+1]==input[input[i+2]]){
  input[input[i+3]]=1;
} else {
  input[input[i+3]]=0;
}
x=4;
} else {
 //console.log("nothing is triggered");
 break;
}
}
//console.log("optCodeOutputArray", optCodeOutputArray);
return [input, optCodeOutputArray];
}


function parseInput(number){
  let parsedObject={};
  let tenThousand=Math.floor(number/10000);
  let thousand=Math.floor(number%10000/1000);
  let hundert=Math.floor(number%10000%1000/100);
  let ten=Math.floor(number%10000%1000%100/10);
  let one=Math.floor(number%10000%1000%100%10);
  parsedObject.tenThousand=tenThousand;
  parsedObject.thousand=thousand;
  parsedObject.hundert=hundert;
  parsedObject.ten=ten;
  parsedObject.one=one;
  parsedObject.number=number;
  if (hundert ==0){
    parsedObject.parameterMode1="position"
  } else if (hundert ==1){
    parsedObject.parameterMode1="immediate"
  };

  if (thousand ==0){
    parsedObject.parameterMode2="position"
  } else if (thousand ==1){
    parsedObject.parameterMode2="immediate"
  };
  if (tenThousand ==0){
    parsedObject.parameterMode3="position"
  } else if (tenThousand ==1){
    parsedObject.parameterMode3="immediate"
  };
  return parsedObject;
}