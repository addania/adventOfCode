import React, { useState } from "react";
import data from "./AdventCodeInputs/CodeAdvent201805.json";
import "./component.css";

export const CodeAdvent20180501 = () => {
//const [introPolymer, setIntroPolymer] = useState(data[0]);
//const [introPolymer, setIntroPolymer] = useState("dabAcCaCBAcCcaDA");
// CORRECT ANSWER is dabCBAcaDA
// const [introPolymer, setIntroPolymer] = useState("bAcCa");
// CORRECT ANSWER is b
// const [introPolymer, setIntroPolymer] = useState("aabAAB");
 // CORRECT ANSWER is aabAAB
// const [introPolymer, setIntroPolymer] = useState("abAB");
// CORRECT ANSWER is abAB
//const [introPolymer, setIntroPolymer] = useState("abBA");
// CORRECT ANSWER is ""
// const [introPolymer, setIntroPolymer] = useState("aA");
// CORRECT ANSWER is ""
//const [introPolymer, setIntroPolymer] = useState("ddDabAcCaCBAcCcaDAxXxXaAnMmN");
//  CORRECT ANSWER IS dabCBAcaDA
//const [introPolymer, setIntroPolymer] = useState("cPJjuVWwWwvEeRrfdvXxawTHDFfPVpGWwgPNeeDvcCkzDmjEeJbOtggVvTlCPpysSy");
// CORRECT ANSWER IS cPufdvawTHDPVNeeDvkzDmbOtggTlCyy

const[introPolymer, setIntroPolymer] = useState(data[0]);

  const [result, setResult] = useState();

  function handleClick() {
    let output=polymerize(introPolymer).length;
   setResult(output);
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Polymerization:</p>
      <p>Length of end polymer is: {result} </p>
      <button style={{ backgroundColor: "#69747C" }} ><span onClick={handleClick}>Polymerize</span>
      </button>
      
    </div>
  );
};

function generateArray(){
let string ="abcdefghijklmnopqrstuvwxyz";
let array=string.split("");
let arrayCapital=string.toUpperCase().split("");
let combinations={};
for ( let i=0;i<array.length;i++){
 let char=array[i]+arrayCapital[i];
 let char2=arrayCapital[i]+array[i];
// console.log(char, char2);
 combinations[char]="value";
 combinations[char2]="value";

}
//console.log(combinations);
return combinations;
}

function polymerize(input){
  let units= generateArray();
 // console.log(units);
 let inputPolymer=input;
  let result = recursion(units, inputPolymer);
 // console.log("result is:", result);
  
  return result;
}

function recursion (units, inputPolymer){
  for (let j=0;j<inputPolymer.length-1;j++){
   //console.log("iteration j=", j);
    let element = inputPolymer[j]+inputPolymer[j+1];
  //  console.log(element);
  //debugger;
    if (units[element]=="value"){
//console.log("i include", element);
let part1 = inputPolymer.slice(0,j);
let part2 = inputPolymer.slice(j+2,inputPolymer.length);
inputPolymer=part1+part2;
//console.log (inputPolymer);
j=j-2;
//console.log(j)
}
  }
  return inputPolymer
}

/* NOT FUNCTIONAL RECURSION FUNCTION after returning 
function recursion (units, inputPolymer){
  let k=0;
//  let newInputPolymer=inputPolymer;
  if (k>inputPolymer.length-1){ 
    console.log("break out condition is triggered");
  return
  };
  if (k==inputPolymer.length-1) {
    console.log("last condition is triggered");
    return inputPolymer};
  for (let j=0;j<inputPolymer.length-1;j++){
    debugger;
    k=j;
    console.log("iteration j=", j);
    let element = inputPolymer[j]+inputPolymer[j+1];
  //  console.log(element);
    if (units.includes(element)){
console.log("i include", element);
let part1 = inputPolymer.slice(0,j);
let part2 = inputPolymer.slice(j+2,inputPolymer.length);
inputPolymer=part1+part2;
console.log (inputPolymer);
recursion (units, inputPolymer);
    }
  }
return inputPolymer;
}

*/