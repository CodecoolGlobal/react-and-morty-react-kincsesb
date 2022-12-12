import React from "react";
import { useState } from "react";
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

function Character(props) {

    const [count, setCount] = useState(false)
    let image = props.image
    let name = props.name
    let species = props.species
    let handleClick = props.handleClick


        let location = props.location.name
        let status = props.status
        let gender = props.gender
        let origin = props.origin.name


    return (
        <div className="character">
            <img src={image}></img>
            <h4>{name}</h4>
            <p>{species}</p>
            <Popup trigger={<button >More Information</button>} position="center">
                
                <div>
                <p>Location: {location}</p>
                <p>Status: {status}</p>
                <p>Gender: {gender}</p>
                <p>Oirgin: {origin}</p>
                </div>
            </Popup>
        </div>
    )
}

export default Character