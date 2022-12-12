import React, { useEffect } from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import CharactersTable from "./components/CharactersTable";
import LocationsTable from "./components/LocationsTable";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);

  const characters = useCharacters(page);
  const locations = useLocations(page);

  console.log(characters);
  // useEffect(() => {
  //   async function load() {
  //     const characters = useCharacters(page)
  //   }
  //   load();
  // }, [page]);

  return (
    <div>
      <button>Characters</button>
      {characters !== "Loading..." ? (
        <CharactersTable data={characters.results} />
      ) : (
        <p>Loading...</p>
      )}
      {characters !== "Loading..." ? (
        <LocationsTable data={locations.results} />
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={() => setPage((page) => page - 1)} disabled={page < 2}>
        Previous Page
      </button>
      <button onClick={() => setPage((page) => page + 1)}>Next Page</button>
    </div>
  );
}

export default App;
