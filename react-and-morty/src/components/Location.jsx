import React from "react";
import { useState } from "react";

function Location(props) {

    
    
    let name = props.name
    let type = props.type

    return (
        <div className="character">
            
            <h4>{name}</h4>
            <p>{type}</p>
            
            
            
        </div>
    )
}

export default Location