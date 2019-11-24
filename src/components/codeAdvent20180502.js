import React, { useState } from "react";
import data from "./AdventCodeInputs/CodeAdvent201805.json";
import "./component.css";

export const CodeAdvent20180502 = () => {
const [introPolymer, setIntroPolymer] = useState("dabAcCaCBAcCcaDA");


//const[introPolymer, setIntroPolymer] = useState(data[0]);

  const [result, setResult] = useState();

  function handleClick() {
    let output=polymerize(introPolymer).length;
   setResult(output);
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Polymerization:</p>
      <p>Length of shortest polymer is: {result} </p>
      <button style={{ backgroundColor: "#6BAA75" }} ><span onClick={handleClick}>Polymerize</span>
      </button>
      
    </div>
  );
};

function generateArray(array, arrayCapital){
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
  let string ="abcdefghijklmnopqrstuvwxyz";
  let array=string.split("");
  let arrayCapital=string.toUpperCase().split("");
  let units= generateArray(array, arrayCapital);
let resultsArray=[];
let dict={}
for (let char=0; char<array.length;char++){
  let dict={}
let replacingChar=array[char]+"|"+arrayCapital[char];
  console.log("replacing Char", replacingChar);
   var re = new RegExp(replacingChar,"g");
   console.log("regex", re);
   let newArray=input.replace(re, "");
   console.log(newArray);
   var result = poly(units, newArray);
  dict.letter=array[char];
  dict.polymer=result;
  dict.length=result.length;
  console.log("dict", dict);
  resultsArray.push(dict);
  console.log("resultsArray", resultsArray);
  
  
 

}

  return result;
}

function poly (units, inputPolymer){


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
