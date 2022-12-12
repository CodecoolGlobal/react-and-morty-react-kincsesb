import React from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";

function App() {
  let page = 1;
  const characters = useCharacters(1);
  const locations = useLocations(page);

  const listLocations = () => {
    return locations.results.map((location) => (
      <div className="locations">
        <div className="location-name">{location.name}</div>
        <div className="location-type">{location.type}</div>
      </div>
    ));
  };

  const pagination = () => {
    return (
      <div className="pagination">
        {page > 1 ? (
          <button className="pagination-button">Previous Page</button>
        ) : null}
        <span className="page">Page {page}</span>
        <button className="pagination-button">Next Page</button>
      </div>
    );
  };

  console.log("Characters data: ");
  console.log(characters);
  console.log("Locations data: ");
  console.log(locations);

  return (
    <>
      <div className="App">Take a look at the console! (F12)</div>
      {listLocations()}
      {pagination()}
    </>
  );
}

export default App;
