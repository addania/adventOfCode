import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201922.json"
import "./component.css"

export const CodeAdvent20192202 = () => {
  const deck = data
  const [result, setResult] = useState()

  function handleClick() {
    const cards = createCards(20011)
    const parsedData = parseInput(deck)
    let finalDeck = cards
    // let winner=[];
    //let winner2=[];
    // let position2020=[finalDeck[2020]];
    for (let i = 0; i < 20010; i++) {
      //console.log("i:", i)
      finalDeck = play(parsedData, finalDeck)
      //console.log("finalDeck", finalDeck)
      //position2020.push(finalDeck[2020])
      //console.log("i:", i, "finalDeck[2020]:", finalDeck[2020])
      /* if (finalDeck[2020] === 2020){
      winner.push(i+1);
     }
    
    if (finalDeck[2020] === 6533){
      winner2.push(i+1);
     }*/
    }

    //console.log("finalDeck", finalDeck)
    //console.log("winner", winner)
    //console.log("winner2", winner2)
    //console.log("position2020", position2020)
    setResult(finalDeck[2020])
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Slam Shuffle (in Progress):</p>
      <p>Position 2020 Card: {result} </p>
      <button style={{ backgroundColor: "#27A7C6" }}>
        <span onClick={handleClick}>Shuffle Cards</span>
      </button>
    </div>
  )
}

const parseInput = input => {
  let parsedCards = input.map(item => {
    if (item.includes("cut")) {
      let cutValue = item.slice(item.indexOf("cut") + 4, item.length)
      return { type: "cut", value: parseInt(cutValue) }
    } else if (item.includes("new")) {
      return { type: "new", value: 0 }
    } else if (item.includes("increment")) {
      let increment = item.slice(item.indexOf("increment") + 10, item.length)
      return { type: "increment", value: parseInt(increment) }
    }
  })
  return parsedCards
}

const dealIntoNewDeck = input => {
  let newDeck = new Array(input.length)
  let iteration = input.length - 1
  input.forEach(item => {
    newDeck[iteration] = item
    iteration--
  })
  return newDeck
}

const cutNcards = (input, n) => {
  let newDeck = new Array(input.length)
  if (n > 0) {
    for (let i = 0; i < n; i++) {
      newDeck[input.length - n + i] = input[i]
    }
    for (let j = n; j < input.length; j++) {
      newDeck[j - n] = input[j]
    }
  }

  if (n < 0) {
    for (let i = 0; i < -n; i++) {
      newDeck[i] = input[input.length + n + i]
    }

    for (let j = -n; j < input.length; j++) {
      newDeck[j] = input[j + n]
    }
  }
  return newDeck
}

const dealWithIncrement = (input, n) => {
  let newDeck = new Array(input.length)
  let position = 0
  for (let i = 0; i < input.length; i++) {
    if (position < input.length) {
      newDeck[position] = input[i]
      position = position + n
    } else {
      newDeck[position - input.length] = input[i]
      position = position - input.length + n
    }
  }
  return newDeck
}

const play = (input, cards) => {
  let newCards = cards
  input.forEach(item => {
    if (item.type === "cut") {
      newCards = cutNcards(newCards, item.value)
    } else if (item.type === "increment") {
      newCards = dealWithIncrement(newCards, item.value)
    } else if (item.type === "new") {
      newCards = dealIntoNewDeck(newCards)
    }
  })
  return newCards
}

const createCards = n => {
  let newCards = []
  for (let i = 0; i < n; i++) {
    newCards.push(i)
  }
  return newCards
}
