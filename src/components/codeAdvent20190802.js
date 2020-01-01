import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201908.json"
import "./component.css"

export const CodeAdvent20190802 = () => {
  const [imageData, setImageData] = useState(data)
  const [result, setResult] = useState()

  function handleClick() {
    let imageWidth = 25
    let imageHeight = 6
    let imageSize = imageWidth * imageHeight
    let numberOfLayers = imageData.length / imageSize
    let computedLayerInfo = computeLayerInfo(
      imageData,
      imageSize,
      numberOfLayers,
      imageWidth,
      imageHeight
    )

    setResult(computedLayerInfo)
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Space Image Formats:</p>
      <p>Selected Layer: {result} </p>
      <button style={{ backgroundColor: "#6BAA75" }}>
        <span onClick={handleClick}>Detect Layer</span>
      </button>
    </div>
  )
}

function computeLayerInfo(
  imageDataInput,
  imageSizeInput,
  numberOfLayersInput,
  imageWidthInput,
  imageHeightInput
) {
  let layersArray = []
  let layersDictionary = {}

  for (let pixel = 0; pixel < imageDataInput.length; pixel += imageSizeInput) {
    let newLayer = imageDataInput.slice(pixel, pixel + imageSizeInput)
    layersArray.push(newLayer)
  }

  //console.log(layersArray);

  let finalArray = []
  for (let position = 0; position < layersArray[0].length; position++) {
    for (let layer = 0; layer < layersArray.length; layer++) {
      if (
        layersArray[layer][position] == 1 ||
        layersArray[layer][position] == 0
      ) {
        finalArray.push(layersArray[layer][position])
        break
      }
    }
  }
  //console.log(layersArray);
  //console.log("finalArray", finalArray);

  let finalImage = []
  for (let height = 0; height < finalArray.length; height += imageWidthInput) {
    let offset = height
    let newRow = []
    for (let width = height; width < imageWidthInput + height; width++) {
      newRow.push(finalArray[width])
    }
    //console.log("newRow", newRow);
    finalImage.push(newRow)
  }
  console.log("finalImage", finalImage)
  return "FPUAR"
}
