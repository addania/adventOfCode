import React, { useState, useEffect } from "react";

export const FetchAPItest = () => {
  const [person, setPerson] = useState(null);

  useEffect(async () => {
    const response = await fetch("https://api.randomuser.me/");
    const data = await response.json();
    const [item]=data.results;
    setPerson(item);
  }, []);

  return (
    <div>
      {person && <p>{person.name.first}</p>}
    </div>
  )
}