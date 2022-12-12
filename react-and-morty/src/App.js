import React from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";

function App() {
  const characters = useCharacters(1);
  const locations = useLocations(1);

  const listLocations = () => {
    return locations.results.map((location) => (
      <div className="locations">
        <div className="location-name">{location.name}</div>
        <div className="location-type">{location.type}</div>
      </div>
    ));
  };

  console.log("Characters data: ");
  console.log(characters);
  console.log("Locations data: ");
  console.log(locations);

  return (
    <>
      <div className="App">Take a look at the console! (F12)</div>
      {listLocations()}
    </>
  );
}

export default App;
