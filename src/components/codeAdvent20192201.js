import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201922.json"
import "./component.css"

export const CodeAdvent20192201 = () => {
  const deck = data
  const [result, setResult] = useState()
  //const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  //const deck = ["deal into new stack", "deal with increment 3", "cut 3"];

  function handleClick() {
    const cards = createCards(10007)
    const parsedData = parseInput(deck)
    //console.log("parsedData", parsedData);

    /*let cards1 = dealIntoNewDeck(cards);
console.log("cards1", cards1);

let cards2 = cutNcards(cards, 3);
console.log("cards2", cards2);
let cards3 = cutNcards(cards, -3);
console.log("cards3", cards3);

*/
    let cards4 = dealWithIncrement(cards, 3)
    //console.log("cards4", cards4);

    let finalDeck = play(parsedData, cards)
    //console.log("finalDeck", finalDeck)

    setResult(finalDeck.indexOf(2019))
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Slam Shuffle:</p>
      <p>Card 2019 Position: {result} </p>
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
      //  console.log("cutValue", cutValue);
      return { type: "cut", value: parseInt(cutValue) }
    } else if (item.includes("new")) {
      return { type: "new", value: 0 }
    } else if (item.includes("increment")) {
      let increment = item.slice(item.indexOf("increment") + 10, item.length)
      //  console.log("increment", increment);
      return { type: "increment", value: parseInt(increment) }
    }
  })
  return parsedCards
}

const dealIntoNewDeck = input => {
  let newDeck = new Array(input.length)
  let iteration = input.length - 1
  //console.log(newDeck);
  //console.log(iteration);
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
      //debugger;
    }

    for (let j = n; j < input.length; j++) {
      newDeck[j - n] = input[j]
    }
  }

  if (n < 0) {
    for (let i = 0; i < -n; i++) {
      newDeck[i] = input[input.length + n + i]
      //debugger;
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
  //debugger;
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
  //console.log("first pure newCards", newCards)

  input.forEach(item => {
    if (item.type === "cut") {
      newCards = cutNcards(newCards, item.value)
      // console.log("newCards cut n cards", newCards)
      // console.log("cut n triggered")
      //    return newInput;
    } else if (item.type === "increment") {
      newCards = dealWithIncrement(newCards, item.value)
      // console.log("item.value", item.value)
      // console.log("newCards increment", newCards)
      // console.log("increment triggered")
      //    return newInput;
    } else if (item.type === "new") {
      newCards = dealIntoNewDeck(newCards)
      //console.log("newInput new deck", newCards)
      //console.log("new deck triggered")
      //    return newInput;
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
