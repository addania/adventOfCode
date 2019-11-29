import React, { useState } from "react";
import data from "./AdventCodeInputs/CodeAdvent201806.json";
import "./component.css";

export const CodeAdvent20180602 = () => {
const[introCoordinates, setIntroCoordinates] = useState(data);
/*const[introCoordinates, setIntroCoordinates] = useState([
[1, 1],
[1, 6],
[8, 3],
[3, 4],
[5, 5],
[8, 9],
]);
*/
  const [result, setResult] = useState();

  function handleClick() {
    let output=computeArea(introCoordinates);
    setResult(output);
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Chronal Coordinates:</p>
      <p>Area smaller than thousand: {result} </p>
      <button style={{ backgroundColor: "#69747C" }} ><span onClick={handleClick}>Compute area</span>
      </button>
      
    </div>
  );
};

function computeArea(coordinates){
  let max=findMax(coordinates);
  let maximumRow=max[0];
  let maximumColumn=max[1];
  //console.log("maximum row:", maximumRow, "maximum column:", maximumColumn);
  let emptyMap=generateField(maximumRow, maximumColumn);
  //console.log("empty map is",emptyMap);
	let coordinatesArray=generateIDs(coordinates);
	//console.log("coordinatesArray", coordinatesArray)
	let populatedMap=populateCoordinates(emptyMap, coordinatesArray);
	//console.log("populatedMap", populatedMap);
	let areaSize=calculateDistances(populatedMap, coordinatesArray);

return areaSize;
}

function findMax(input){
	//WORKS CORRECT
  let maxRow=0;
  let maxColumn=0;
	for ( let i =0; i<input.length;i++){
		if (input[i][1]>maxRow){
			maxRow=input[i][1];
		}
		if (input[i][0]>maxColumn){
			maxColumn=input[i][0];
		}
  //console.log("maxRow is: ", maxRow, "maxColumn is:", maxColumn);
	}
  let outcome=[maxRow,maxColumn];
  return outcome;
}
  
  function generateField(maxR, maxC){
		//WORKS CORRECT
		let coordinateMap=[];
		
      for ( let y=0;y<=maxR;y++){
		//		console.log("y", y);
			let newRow= new Array(maxC+1);
		//	console.log("newRow", newRow);
	    for ( let x=0; x<=maxC;x++){
		//		console.log("x", x);
			 newRow[x]=0;
		//	 console.log("newrow x", newRow[x])
	   }
	   coordinateMap.push(newRow);
	//console.log("coordinateMap is", coordinateMap);
   }
   return coordinateMap;
  }
  
  function generateIDs(coord){
		//WORK CORRECT
    let idsLower="abcdefghijklmnopqrstuvwxyz";
    let idsUpper=idsLower.toUpperCase();
    let ids=idsLower+idsUpper;
    //console.log("ids are", ids);
    let idsArray=ids.split("");
    //console.log("ids array is", idsArray);
	let enrichedCoordinates=[];
	for (let line=0; line<coord.length; line++){
		let dict={};
		dict.id=idsArray[line];
		dict.value=coord[line];
		dict.areaCount=0;
		enrichedCoordinates.push(dict);
	}
	//console.log("enrichedCoordinates are", enrichedCoordinates);
	return enrichedCoordinates;
  }
  
  function populateCoordinates( field, coords){
		//WORKS CORRECT
		//console.log("field is", field);
		//console.log("coords are", coords);
	for (let entry=0;entry<coords.length;entry++){
	  field[coords[entry].value[1]][coords[entry].value[0]]=coords[entry].id;
	}
	//console.log("field", field);
	return field;
  }
  
  function calculateDistances(mapWithCoords, arrayWithCoords ){
    // WORKS CORRECT
    //console.log("mapWithCoords", mapWithCoords,"arrayWithCoords",arrayWithCoords )
		let distanceArray=[];
		let countArea=0;
	  for (let r=0;r<mapWithCoords.length;r++){
	    for (let c=0; c<mapWithCoords[r].length; c++){
	      let distanceDict={};
	      distanceDict.coordY=r;
	      distanceDict.coordX=c;
	      distanceDict.value=mapWithCoords[r][c];
				distanceDict.distances={};
				distanceDict.sumDist=0;
				
				
				for (let coordInstance=0;coordInstance<arrayWithCoords.length;coordInstance++){
					
					let pointDistance=Math.abs(r-arrayWithCoords[coordInstance].value[1]) + Math.abs(c-arrayWithCoords[coordInstance].value[0]);
					//console.log("pointDistance is", pointDistance, "from coord", arrayWithCoords[coordInstance].id);
					distanceDict.distances[arrayWithCoords[coordInstance].id]=pointDistance;
					distanceDict.sumDist=distanceDict.sumDist+pointDistance;
				}
				
				if (distanceDict.sumDist<10000){
					distanceDict.value=1;
					countArea+=1;
				}
				distanceArray.push(distanceDict);
		  }	
		}
			// console.log("distance array", distanceArray);
			// console.log("countArea", countArea);

 return countArea;
	}