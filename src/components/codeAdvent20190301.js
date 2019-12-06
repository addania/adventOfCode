import React, { useState } from "react";
import data from "./AdventCodeInputs/CodeAdvent201903.json";
import "./component.css";

export const CodeAdvent20190301 = () => {
  const [wires, setWires] = useState(data);
  const [result, setResult] = useState();

  function handleClick() {
    let processedInput=processInput(wires);
    console.log(processedInput);
    let output=checkMax(wires);
    setResult(output);
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Crossed Wires (in progress):</p>
      <p>Manhattan Distance: {result} </p>
      <button style={{ backgroundColor: "#A7A7A9" }}><span onClick={handleClick}>Check Wires</span>
      </button>      
    </div>
  );
};

function processInput(input){
  let wire1=input[0];
  let wire2=input[1];
  let wireInfo1=[];
  let wireInfo2=[];
  let sumRL1=0;
  let sumUD1=0;
  let sumRL2=0;
  let sumUD2=0;
  for (let i=0;i<wire1.length;i++){
    console.log("wire1 i", wire1[i]);
    let direction1=wire1[i].slice(0,1);
    let movement1=parseInt(wire1[i].slice(1));
    let dict1={direction: direction1, movement: movement1};
    wireInfo1.push(dict1);
    if (direction1=="R" || direction1=="L" ){
      sumRL1=sumRL1 + movement1;
    }else if (direction1=="U" || direction1=="D"){
      sumUD1=sumUD1 + movement1;
    }
  }
  
  for (let i=0;i<wire2.length;i++){
   
    let direction2=wire2[i].slice(0,1);
    let movement2=parseInt(wire2[i].slice(1));
    let dict2={direction: direction2, movement: movement2};
    wireInfo2.push(dict2);
    if (direction2=="R" || direction2=="L" ){
      sumRL2=sumRL2 + movement2;
    }else if (direction2=="U" || direction2=="D"){
      sumUD2=sumUD2 + movement2;
    }
  }
  let wireInfo=[wireInfo1,wireInfo2];
  console.log(wireInfo);
  console.log("sumRL1", sumRL1, "sumUD1", sumUD1,"sumRL2", sumRL2, "sumUD2", sumUD2);
  return wireInfo;
}

function checkMax(input){
  let wire1=input[0];
  let wire2=input[1];
  let maxR=0;
  let maxL=0;
  let maxU=0;
  let maxD=0;
  for (let i=0;i<wire1.length;i++){
    let direction=wire1[i]
    if (wire1[i]>maxR){
      console.Log("maxR",wire1[i]);
    }

  }
  console.log(wire1, wire2);
  return 0;
}