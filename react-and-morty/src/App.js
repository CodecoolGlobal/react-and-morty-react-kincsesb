import React, { useEffect } from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import CharactersTable from "./components/CharactersTable";
import Location  from "./components/Location";
import { useState } from "react";

function App() {

  const [page,setPage] = useState(1)
  
  const characters = useCharacters(page);
  const locations = useLocations(page);

  const [toggle, setToggle] = useState(null)

  const [array, setArray] = useState([])


  //console.log(characters)

  useEffect(() => {
    async function load() {

      if(characters !== 'Loading...'){

        setArray([...array,...characters.results])

      }
    }
    load();
  }, [characters]);


  return (
  <div>
  <button onClick={() => setToggle((toggle) => toggle = true)}>Characters</button>
  <button onClick={() => setToggle((toggle) => toggle = false)}>Locations</button>
  {
  toggle === true && characters !== "Loading..." ? <CharactersTable data={array.flat()} page={page} setPage={setPage}/> :
  toggle === false && locations !== "Loading..." ? <Location data={locations.results}/> : 
  <p>Loading</p>}
  <button onClick={() => setPage((page) => page - 1)} disabled={page < 2}>Previous Page</button>
  <button onClick={() => setPage((page) => page + 1)}>Next Page</button>
  </div>
  )
}

export default App;
