import React, { useState } from "react";
import data from "./AdventCodeInputs/CodeAdvent201806.json";
import "./component.css";

export const CodeAdvent20180601 = () => {
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
      <p>Size of largest area: {result} </p>
      <button style={{ backgroundColor: "#A7A7A9" }} ><span onClick={handleClick}>Compute area</span>
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
	let distanceMap=calculateDistances(populatedMap, coordinatesArray);
	//console.log("distanceMap", distanceMap);
  let eliminatedCoordinates=eliminateEdgeCoordinates(distanceMap);
  let areaArray=calculateAreas(distanceMap, eliminatedCoordinates, coordinatesArray);
  let largestArea=getLargestArea(areaArray);
  //console.log("largest are name is", largestArea[0], "largest are count is", largestArea[1]);
	
return largestArea[1];
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
	  // console.log("coordinateMap is", coordinateMap);
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
	
	return field;
  }
  
  function calculateDistances(mapWithCoords, arrayWithCoords ){
    // WORKS CORRECT
    //console.log("mapWithCoords", mapWithCoords,"arrayWithCoords",arrayWithCoords )
		let distanceArray=[];
		
	  for (let r=0;r<mapWithCoords.length;r++){
	    for (let c=0; c<mapWithCoords[r].length; c++){
	      let distanceDict={};
	      distanceArray.coordY=r;
	      distanceArray.coordX=c;
	      distanceArray.value=mapWithCoords[r][c];
				distanceArray.distances=[];
				
	     // console.log("distance array", distanceArray);
	      let minDistance=mapWithCoords.length+mapWithCoords[0].length;
		    let minID;
		    let dist={}
	      for (let coordInstance=0;coordInstance<arrayWithCoords.length;coordInstance++){
		      if (mapWithCoords[r][c]==0){
		        let pointDistance=Math.abs(r-arrayWithCoords[coordInstance].value[1]) + Math.abs(c-arrayWithCoords[coordInstance].value[0]);
		        let value=arrayWithCoords[coordInstance].id;
						dist[value]=pointDistance;
	 
		 if (pointDistance<=minDistance){
		   minDistance=pointDistance;
		   minID=arrayWithCoords[coordInstance].id;
		 }
		}
		}
		distanceArray.distances=dist;
		distanceArray.minValue=minDistance;
		
		let minIDs=[];
		
		Object.keys(distanceArray.distances).forEach(key=>{
		//	console.log(`${key} : ${distanceArray.distances[key]}`);
     // debugger;
			if (distanceArray.distances[key]==minDistance){
				minIDs.push(key);
			}
	 });

		distanceArray.minIDs=minIDs;
		//debugger;
		//console.log("minIDs are", distanceArray.minIDs);
		if (distanceArray.minIDs.length>1){
		  mapWithCoords[r][c]="."
		
		} else if (distanceArray.minIDs.length==1){
		mapWithCoords[r][c]=distanceArray.minIDs[0];
		
		}
	//	console.log(distanceArray);
	  }
	}  
	
	//console.log("map with coords", mapWithCoords);
	
 return mapWithCoords;
	}
	

  function eliminateEdgeCoordinates(map){
		// WORKS CORRECT
		let eliminated=[];
		
	  for (let row=0; row<map.length;row++){
			
		  if(!eliminated.includes(map[row][0])){
		  eliminated.push(map[row][0]);
		  //eliminated.push(map[row][map.length-1]);
			}
			
	  if(!eliminated.includes(map[row][(map[row].length-1)])){
		  eliminated.push(map[row][(map[row].length-1)]);
			}
			
		}
	  for (let column=1; column<map[0].length; column++){
		  if(!eliminated.includes(map[0][column])){
		  eliminated.push(map[0][column]);
		  }
		  if(!eliminated.includes(map[map.length-1][column])){
		  eliminated.push(map[map.length-1][column]);
		  }
	  }
		//console.log("eliminated", eliminated);
	  return eliminated;
  }

  function calculateAreas(map, eliminated, coordinatesArray){
		// WORKS CORRECT
		let resultArray=[];
		
	  for (let id=0;id<coordinatesArray.length;id++){
		  let countArea=0;
		  if (!eliminated.includes(coordinatesArray[id].id)){
			for (let r=0;r<map.length;r++){
				for (let c=0; c<map[r].length; c++){ 
                if(map[r][c]==coordinatesArray[id].id){
					countArea=countArea+1;
				}				
			 }
			}
			let dic={areaName: coordinatesArray[id], areaCount: countArea} 
        resultArray.push(dic);
		  }
		/*let dic={areaName: coordinatesArray[id], areaCount: countArea} 
        resultArray.push(dic);	*/	
	  }
	  //console.log("resultArray", resultArray);
	  
	  return resultArray;
  }
  
  function getLargestArea(areaArray){
	  let max=0;
	  let maxID;
	  for (let item=0;item<areaArray.length;item++){
		  if(areaArray[item].areaCount>max){
			  max=areaArray[item].areaCount;
			  maxID=areaArray[item].areaName.id;
		  }
	  }
  let output=[maxID, max];
 //[{areaName: a, areaCount: 10}, 
 //{areaName: b, areaCount: 5}]
  //console.log("output is", output);
  return output;
  }