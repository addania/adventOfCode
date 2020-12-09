import React, { useState } from "react"
import data from "./AdventCodeInputs/CodeAdvent201922.json"
import "./component.css"

export const CodeAdvent20192201 = () => {
  const deck = data
  const [result, setResult] = useState()

  function handleClick() {
    const cards = createCards(10007)
    const parsedData = parseInput(deck)
    let finalDeck = play(parsedData, cards)
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
