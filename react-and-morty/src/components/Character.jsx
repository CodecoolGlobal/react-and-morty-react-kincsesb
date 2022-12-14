import React from "react";
import { useState } from "react";
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

function Character(props) {

    const [count, setCount] = useState(false)

    let image = props.image
    let name = props.name
    let species = props.species


    let location = props.location.name
    let status = props.status
    let gender = props.gender
    let origin = props.origin.name


    return (
        <div className="character">
            <img src={image}></img>
            <h4>{name}</h4>
            <p>Species: {species}</p>
            {/* <button onClick={() => setCount(!count)}>More Information</button>
            <div className={count === false ? "displaynone" : "displayflex"}> */}
            <Popup className={"popup"} trigger={<button >More Information</button>} position="center">
            <div>
                <img className="character-image"src={image} height="150px"></img>
            </div>
            <div className="character-details">
                <h2 className="popup-title">{name}</h2>
                <p className="character-info">Location: {location}</p>
                <p className="character-info">Status: {status}</p>
                <p className="character-info">Gender: {gender}</p>
                <p className="character-info">Oirgin: {origin}</p>
            </div>
            
            </Popup>
            
            
            {/* </div> */}
        </div>
    )
}

export default Character