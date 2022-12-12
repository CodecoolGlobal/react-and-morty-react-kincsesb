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
  console.log(locations);
  // useEffect(() => {
  //   async function load() {
  //     const characters = useCharacters(page)
  //   }
  //   load();
  // }, [page]);

  const [charactersShown, setCharactersShown] = useState(false);
  const [locationsShown, setLocationsShown] = useState(false);
  const [characterButton, setCharacterButton] = useState(false);
  const [locationButton, setLocationButton] = useState(false);

  const handleShowCharacters = (event) => {
    setCharactersShown((current) => !current);
    setLocationsShown(false);
    setCharacterButton(true);
    setLocationButton(false);
    setPage(1);
  };

  const handleShowLocations = (event) => {
    // 👇️ toggle shown state
    setLocationsShown((current) => !current);
    setCharactersShown(false);
    setCharacterButton(false);
    setLocationButton(true);
    setPage(1);
  };

  return (
    <div>
      <button onClick={handleShowCharacters} disabled={characterButton}>
        Characters
      </button>
      <button onClick={handleShowLocations} disabled={locationButton}>
        Locations
      </button>
      {charactersShown && (
        <div>
          {characters !== "Loading..." ? (
            <CharactersTable
              data={characters.results}
              handleClick={handleShowCharacters}
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}

      {locationsShown && (
        <div>
          {characters !== "Loading..." ? (
            <LocationsTable
              data={locations.results}
              handleClick={handleShowLocations}
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}

      <button onClick={() => setPage((page) => page - 1)} disabled={page < 2}>
        Previous Page
      </button>
      <span className="page-number">Page {page}</span>
      <button onClick={() => setPage((page) => page + 1)}>Next Page</button>
    </div>
  );
}

export default App;
