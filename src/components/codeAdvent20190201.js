import React, { useState } from "react";
import data from "./AdventCodeInputs/CodeAdvent201902.json";
import "./component.css";

export const CodeAdvent20190201 = () => {
  const [input, setInput] = useState(data);
  const [result, setResult] = useState();

  function handleClick() {
    let replacedInput=replace(input);
    let output= calc (replacedInput);
    setResult(output[0]);
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Program Alarm:</p>
      <p>Program halts at position: {result} </p>
      <button style={{ backgroundColor: "#69747C" }}><span onClick={handleClick}>Get Position</span>
      </button>      
    </div>
  );
};

const replace = (input)=> {
 input[1]=12;
 input[2]=2;
 console.log(input);
 return input;
}


const calc = (input)=> {
console.log("len",input.length);
for (let i=0;i<input.length;i+=4){
 console.log("i is",i);
if (input[i]==99){
 console.log("condition 99 is triggered");
break;
}else if(input[i]==1){
 console.log("condition 1 is triggered");
let newValue=input[input[i+1]]+input[input[i+2]];
console.log("val1", input[i+1], "val2",input[i+2], "new value", newValue);
input[input[i+3]]=newValue;
}else if(input[i]==2){
 console.log("condition 2 is triggered");
let newValue2=input[input[i+1]]*input[input[i+2]];
input[input[i+3]]=newValue2;
} else{
 console.log("nothing is triggered");
}
}
return input;
}
