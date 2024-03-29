import React, { useEffect } from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import CharactersTable from "./components/CharactersTable";
import LocationsTable from "./components/LocationsTable";
import Presentation from "./components/Presentation";
import { useState } from "react";
import image from "./rick-and-morty-slide1.png";
import LandingPage from "./components/LandingPage";

function App() {
  const [page, setPage] = useState(1);

  const characters = useCharacters(page);
  const locations = useLocations(page);

  const [toggle, setToggle] = useState(null);

  const [charactersArray, setCharactersArray] = useState([]);
  const [locationsArray, setLocationsArray] = useState([]);

  const [presentationPage, setPresentationPage] = useState(1);
  const [imageSize, setImageSize] = useState(350);

  const image = require("./rick-and-morty-slide1.png");

  //console.log(characters)

  useEffect(() => {
    async function load() {
      if (characters !== "Loading...") {
        setCharactersArray([...charactersArray, ...characters.results]);
      }
    }
    load();
  }, [characters]);

  useEffect(() => {
    async function load() {
      if (locations !== "Loading...") {
        setLocationsArray([...locationsArray, ...locations.results]);
      }
    }
    load();
  }, [locations]);

  console.log(locationsArray);
  return (
    <div>
      {presentationPage < 5 ? (
        <Presentation
          presentationPage={presentationPage}
          setPresentationPage={setPresentationPage}
        />
      ) : (
        <div id="simplebackground">
          <div className="navigation">
            <img className="logo-image" src={image} alt="" width={imageSize} />
            <br></br>
            <div className="navigation-buttons">
              <button
                className="Button"
                onClick={() => {
                  setToggle((toggle) => (toggle = true));
                  setImageSize(150);
                }}
              >
                Characters
              </button>
              <button
                className="Button"
                onClick={() => {
                  setToggle((toggle) => (toggle = false));
                  setImageSize(150);
                }}
              >
                Locations
              </button>
            </div>
          </div>
          <div>
            {toggle === null ? <LandingPage /> : null}
            {toggle === true && characters !== "Loading..." ? (
              <CharactersTable
                data={charactersArray.flat()}
                page={page}
                setPage={setPage}
              />
            ) : toggle === false && locations !== "Loading..." ? (
              <LocationsTable
                data={locationsArray.flat()}
                page={page}
                setPage={setPage}
              />
            ) : (
              <p>Loading</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
