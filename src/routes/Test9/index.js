import Solar from "./Solar";
import { useState } from 'react';

const Test9 = () => {
  const [numOfPlanets, setNumOfPlanets] = useState(5)

  return (
    <>
      <ul>
        <li>Make a solar system</li>
        <li>Number of planets must revolves around the sun</li>
        <li>The color of each planet must be unique</li>
        <li>More far the planet = more time it's revolves</li>
      </ul>
      <input type="number" placeholder="number of planet" value={numOfPlanets} onChange={(e) => setNumOfPlanets(e.target.value)} />
      <Solar numOfPlanets={numOfPlanets}/>
    </>
  )
}

export default Test9;