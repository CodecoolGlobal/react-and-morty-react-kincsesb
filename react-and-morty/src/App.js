import React, { useEffect } from "react";

// import Presentation from "./components/Presentation";

import "./App.css";

import { useCharacters, useLocations } from "./api/useData";

import CharactersTable from "./components/CharactersTable";
import LocationsTable from "./components/LocationsTable";

import { useState } from "react";

function App() {

  const [page,setPage] = useState(1)
  
  const characters = useCharacters(page);
  const locations = useLocations(page);

  const [toggle, setToggle] = useState(0)


  const [charactersArray, setCharactersArray] = useState([])
  const [locationsArray, setLocationsArray] = useState([])


  //console.log(characters)

  useEffect(() => {
    async function load() {

      if(characters !== 'Loading...'){

        setCharactersArray([...charactersArray,...characters.results])

      }
    }
    load();
  }, [characters]);

  useEffect(() => {
    async function load() {

      if(locations !== 'Loading...'){

        setLocationsArray([...locationsArray,...locations.results])

      }
    }
    load();
  }, [locations]);

  console.log(locationsArray)

  return (
  <div id="simplebackground">
  <button className="Button" onClick={() => setToggle((toggle) => toggle = 0)}>Presentation</button>
  <button className="Button" onClick={() => setToggle((toggle) => toggle = 1)}>Characters</button>
  <button className="Button" onClick={() => setToggle((toggle) => toggle = 2)}>Locations</button>
  {
  // toggle === 0 ? <Presentation/> :
  toggle === 1 && characters !== "Loading..." ? <CharactersTable data={charactersArray.flat()} page={page} setPage={setPage}/> :
  toggle === 2 && locations !== "Loading..." ? <LocationsTable data={locationsArray.flat()} page={page} setPage={setPage}/> : 
  ""
  }
  </div>
  )
}

export default App;
