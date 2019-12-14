import React, { useState } from "react";
import data from "./AdventCodeInputs/CodeAdvent201904.json";
import "./component.css";

export const CodeAdvent20190401 = () => {
  const [passwords, setPasswords] = useState(data);
  const [result, setResult] = useState();

  function handleClick() {
    let passwordsArray=generatePasswords(passwords);
    let validPasswordsNumber=analyzePasswords(passwordsArray);
    setResult (validPasswordsNumber);
  }

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Secure Container:</p>
      <p>Valid passwords: {result} </p>
      <button style={{ backgroundColor: "#A7A7A9" }}><span onClick={handleClick}>Analyze passwords</span>
      </button>      
    </div>
  );
};

function generatePasswords(input){
  let array=[];
  for (let i=input[0];i<=input[1];i++){
    array.push(i);
  }
return array;
}

function analyzePasswords(passwordsArrayInput){
  let validPasswordsArray=[];
  let invalidPasswordsArray=[];
  for (let pass=0;pass<passwordsArrayInput.length;pass++){

    if (JSON.stringify(passwordsArrayInput[pass]).length===6){

      let max=0;
      let checkIncrease=true;
      let checkDuplicate=false;
      for (let char=0;char<6;char++){
        if (parseInt(JSON.stringify(passwordsArrayInput[pass])[char])>=max){
          max=parseInt(JSON.stringify(passwordsArrayInput[pass])[char]);

        } else {
          checkIncrease=false;

          break;
        }
      }
      
      for (let char=0;char<5;char++){
        if (parseInt(JSON.stringify(passwordsArrayInput[pass])[char])==parseInt(JSON.stringify(passwordsArrayInput[pass])[char+1])){
          checkDuplicate=true;
          break;
        }
      }

      if(checkIncrease && checkDuplicate){
      validPasswordsArray.push(passwordsArrayInput[pass]);
      } else {
        invalidPasswordsArray.push(passwordsArrayInput[pass]);
      }
    }
  }


  let lenValid=validPasswordsArray.length;
  return lenValid
}