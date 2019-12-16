import React, { useState } from "react";
import data from "./AdventCodeInputs/CodeAdvent201908.json";
import "./component.css";

export const CodeAdvent20190801 = () => {
  const [imageData, setImageData] = useState(data);
  const [result, setResult] = useState();

  function handleClick() {
   let imageWidth=25;
   let imageHeight=6;
   let imageSize=imageWidth*imageHeight;
   let numberOfLayers=imageData.length/imageSize;
   let computedLayerInfo=computeLayerInfo(imageData,imageSize,numberOfLayers);

   setResult(computedLayerInfo);
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Space Image Formats:</p>
      <p>Selected Layer: {result} </p>
      <button style={{ backgroundColor: "#69747C" }}><span onClick={handleClick}>Detect Layer</span>
      </button>      
    </div>
  );
};

function computeLayerInfo(imageDataInput,imageSizeInput,numberOfLayersInput){
  let layersArray=[];
  let layersDictionary={};

  for (let pixel=0;pixel<imageDataInput.length;pixel+=imageSizeInput){
    let newLayer=imageDataInput.slice(pixel,pixel+imageSizeInput);
    layersArray.push(newLayer);
  }
  let minZeroes=imageSizeInput;
  let minLayer;
  
  for (let layer=0;layer<layersArray.length;layer++){
    let layerInfo={}
    let sum0=0;
    let sum1=0;
    let sum2=0;
    let sum3=0;
    let sum4=0;
    let sum5=0;
    let sum6=0;
    let sum7=0;
    let sum8=0;
    let sum9=0;

    
    for (let char=0;char<layersArray[layer].length;char++){
      if (layersArray[layer][char]==0){
        sum0=sum0+1;
      } else if (layersArray[layer][char]==1){
        sum1=sum1+1;
      } else if (layersArray[layer][char]==2){
        sum2=sum2+1;
      } else if (layersArray[layer][char]==3){
        sum3=sum3+1;
      } else if (layersArray[layer][char]==4){
        sum4=sum4+1;
      } else if (layersArray[layer][char]==5){
        sum5=sum5+1;
      } else if (layersArray[layer][char]==6){
        sum6=sum6+1;
      } else if (layersArray[layer][char]==7){
        sum7=sum7+1;
      } else if (layersArray[layer][char]==8){
        sum8=sum8+1;
      } else if (layersArray[layer][char]==9){
        sum9=sum9+1;
      }
    
    }
   if (sum0<minZeroes){
    minZeroes=sum0;
    minLayer=layer;
   }
   layerInfo.zero=sum0;
   layerInfo.one=sum1;
   layerInfo.two=sum2;
   layerInfo.three=sum3;
   layerInfo.four=sum4;
   layerInfo.five=sum5;
   layerInfo.six=sum6;
   layerInfo.seven=sum7;
   layerInfo.eight=sum8;
   layerInfo.nine=sum9;
   //console.log("layerInfo", layerInfo);
   layersDictionary[layer]=layerInfo;
  }

  //console.log(layersArray);
  //console.log(layersDictionary);
  //console.log("minZeroes",minZeroes);
  //console.log("minLayer",minLayer);

  let onesTimesTwos=layersDictionary[minLayer].one*layersDictionary[minLayer].two;
  //console.log("onesTimesTwos",onesTimesTwos);
  return onesTimesTwos;
}