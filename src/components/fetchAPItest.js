import React, { useState, useEffect } from "react"

export const FetchAPItest = () => {
  const [person, setPerson] = useState(null)

  /* VERSION 1 - but ESLINT complains

  useEffect(async () => {
    const response = await fetch("https://api.randomuser.me/")
    const data = await response.json()
    const [item] = data.results
    setPerson(item)
  }, [])
*/

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.randomuser.me/")
      const data = await response.json()
      const [item] = data.results
      setPerson(item)
    }
    fetchData()
  }, [])

  return <div>{person && <p>{person.name.first}</p>}</div>
}
