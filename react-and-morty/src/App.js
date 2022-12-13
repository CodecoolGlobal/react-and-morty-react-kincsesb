import React, { useEffect } from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import CharactersTable from "./components/CharactersTable";
import LocationsTable from "./components/LocationsTable";
import { useState } from "react";

function App() {

  const [page,setPage] = useState(1)
  
  const characters = useCharacters(page);
  const locations = useLocations(page);

  const [toggle, setToggle] = useState(null)


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
  <div>
  <button onClick={() => setToggle((toggle) => toggle = true)}>Characters</button>
  <button onClick={() => setToggle((toggle) => toggle = false)}>Locations</button>
  {
  toggle === true && characters !== "Loading..." ? <CharactersTable data={charactersArray.flat()} page={page} setPage={setPage}/> :
  toggle === false && locations !== "Loading..." ? <LocationsTable data={locationsArray.flat()} page={page} setPage={setPage}/> : 
  <p>Loading</p>}
  </div>
  )
}

export default App;
