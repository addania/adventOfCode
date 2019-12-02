import React, { useState } from "react";
import data from "./AdventCodeInputs/CodeAdvent201807.json";
import "./component.css";

export const CodeAdvent20180701 = () => {
//const[instructions, setInstructions] = useState(data);
const[instructions, setInstructions] = useState([
"Step C must be finished before step A can begin.",
"Step C must be finished before step F can begin.",
"Step A must be finished before step B can begin.",
"Step A must be finished before step D can begin.",
"Step B must be finished before step E can begin.",
"Step D must be finished before step E can begin.",
"Step F must be finished before step E can begin.",
]);

  const [result, setResult] = useState();

  function handleClick() {
    let output=topologicalSort(instructions);
   setResult(output);
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Topological Sort:</p>
      <p>Instructions order: {result} </p>
      <button style={{ backgroundColor: "#6BAA75" }} ><span onClick={handleClick}>Compute order</span>
      </button>
      
    </div>
  );
};

function topologicalSort(steps){
	steps.sort();
//	console.log(steps);
	/*expected result:
	[
"Step A must be finished before step B can begin.",
"Step A must be finished before step D can begin.",
"Step B must be finished before step E can begin.",
"Step C must be finished before step A can begin.",
"Step C must be finished before step F can begin.",
"Step D must be finished before step E can begin.",
"Step F must be finished before step E can begin.",
]
	*/
	let stepsDict= generateDict(steps);
	let sortedKeys= generateSortedDictKeys(stepsDict);
	let sortedDict=generateSortedDependenciesArray(stepsDict, sortedKeys);
  //  console.log("stepsDict", stepsDict);
	//walkTheGraph(sortedDict, sortedKeys);
return 0;
}

function generateDict(input){
	//PROBLEM HERE
	/*
	{A: [C], B:[A], C: [], D: [A], E:[B, D, F], F:[C]};
	
	*/
	let deptDict={};
	for (let i of input){
		//console.log(i);
		let edgeEnd=i.indexOf(" must");
		//console.log("edgeEnd", edgeEnd);
		let edgeStart=edgeEnd-1;
		//console.log("edgeStart", edgeStart);
		//debugger;
		let edge=i.slice(edgeStart,edgeEnd);
		//console.log("edge", edge);
		let nodeEnd=i.indexOf(" can");
		let nodeStart=nodeEnd-1;
		debugger;
		let node=i.slice(nodeStart,nodeEnd);
		console.log("node is", node);
		
		if ( node in deptDict){
		deptDict[node].push(edge);
		}
		else {
		  deptDict[node]=[edge];
			}
	}
	//console.log("dependency dictionary",deptDict);
	return deptDict;
}

function generateSortedDictKeys(input){
	let dictKeys= Object.keys(input);
	//SORT Function
	let sortedKeys=dictKeys.sort();
	return sortedKeys;
}


function generateSortedDependenciesArray(input, dictKey){
	/* input
	   {A: [C], B:[A], C: [], D: [A], E:[F, B, D], F:[C]};
	*/
	
	/* dictKey
	   [A,B,C,D,E,F]
	*/
	
	for ( let k of dictKey){
		input[k].sort();
	
	}
//	console.log(input);
	// Expected result:
	// {A: [C], B:[A], C: [], D: [A], E:[B, D, F], F:[C]};
	return input;
	
}

function walkTheGraph(dic, key){
	/* dic 
	   {A: [C], B:[A], C: [], D: [A], E:[B, D, F], F:[C]};
	*/
	
	/* key
	   [A,B,C,D,E,F]
	*/
	for (let item of key){
		console.log("item is:", item);
	  for ( let lineItem of dic[item]){
		//  console.log("lineItem is", lineItem);
		  walkTheGraph(dic, dic[item]);
	  } 
	/* Expected result:
	   [A, C, B, A, C, C, D, A, C, E, B, A, C, D, A, C, F, C, E, F, C]
	*/
	}
}

function singleKeyWalk(dic, singleKey, resolved){
	console.log(singleKey);
	for ( let lineItem of dic[singleKey]){
		//  console.log("lineItem is", lineItem);
		  walkTheGraph(dic, lineItem, resolved);
	  } 
	resolved.push(singleKey)
}