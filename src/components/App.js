import React, { useState, useEffect } from 'react'
import StarField from '../visual-effects/StarField'
import PlanetsContainer from "./PlanetsContainer"

function App() {

  const [planets, setPlanets] = useState([])
  const [toggleLight, setToggleLight] = useState(true)

  useEffect(() => {
    console.log('fetching planets...')
    fetch('http://localhost:4001/planets')
    .then(res => res.json())
    .then(data => setPlanets(data))
  }, [])

  return (
    <div className={toggleLight ? "App" : "App light-mode" }>

      {/* You won't have to touch StarField, it's just here for visual things */}
      <StarField />

      <button onClick={() => {setToggleLight(!toggleLight)}}>{toggleLight ? "Light Mode" : "Dark Mode"}</button>

      <PlanetsContainer planets={planets} />

    </div>
  );
}

export default App;
