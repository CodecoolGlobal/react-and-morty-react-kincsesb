import React from "react";

import { useState } from "react";

function Character(props) {

    const [count,setCount] = useState(false)

    let image = props.image
    let name = props.name
    let species = props.species


    let location = props.location.name
    let status = props.status
    let gender = props.gender
    let origin = props.origin.name
  

    return (
        <div className="character">
            <img src={image} className="character_image"></img>
            <h4>Name: {name}</h4>
            <p>Species: {species}</p>

            
            <Popup className={"popup"} trigger={<button >More Information</button>} position="center">

            <p>Location: {location}</p>
            <p>Status: {status}</p>
            <p>Gender: {gender}</p>
            <p>Oirgin: {origin}</p>
            { </Popup> }
            
            
            </div>
        </div>
    )
}

export default Character