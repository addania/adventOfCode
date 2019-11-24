import React, { useState } from "react";
//import data from "./AdventCodeInputs/CodeAdvent201805.json";
import "./component.css";

export const CodeAdvent20180501 = () => {
//  const [introPolymer, setIntroPolymer] = useState(data);
  const [introPolymer, setIntroPolymer] = useState("dabAcCaCBAcCcaDA");
  const [result, setResult] = useState();

  function handleClick() {
    let output=polymerize(introPolymer);
   setResult(0);
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Polymerization:</p>
      <p>End polymer is: {result} </p>
      <button style={{ backgroundColor: "#A7A7A9" }} ><span onClick={handleClick}>Polymerize</span>
      </button>
      
    </div>
  );
};

function generateArray(){
let string ="abcdefghijklmnopqrstuvwxyz";
let array=string.split("");
let arrayCapital=string.toUpperCase().split("");
let combinations=[];
for ( let i=0;i<array.length;i++){
 let char=array[i]+arrayCapital[i];
 let char2=arrayCapital[i]+array[i];
// console.log(char, char2);
 combinations.push(char, char2);
}
return combinations;
}

function polymerize(input){
  let units= generateArray();
  console.log(units);
 let inputPolymer=input;
  recursion(units, inputPolymer);
  
  


  return 0
}

function recursion (units, inputPolymer){
  let k=0;
  let newInputPolymer;
  if (k==inputPolymer.length-1) return;
  for (let j=0;j<inputPolymer.length-1;j++){
    k=j;
    let element = inputPolymer[j]+inputPolymer[j+1];
  //  console.log(element);
    if (units.includes(element)){
console.log("i include", element);
let part1 = inputPolymer.slice(0,j);
let part2 = inputPolymer.slice(j+2,inputPolymer.length);
newInputPolymer=part1+part2;
console.log (newInputPolymer);

    }
  }
return newInputPolymer;
}