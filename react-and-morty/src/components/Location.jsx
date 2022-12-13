import React from "react";
 import 'reactjs-popup/dist/index.css';
 import Popup from 'reactjs-popup';

function Location(props) {

    // Mit csinál a handleClick
    // let handleClick = props.handleClick
    let name = props.name
    let type = props.type
    let dimension = props.dimension


    return (
        <div className="location">
            
            <h4>{name}</h4>
            <p>{type}</p>
            <Popup trigger={<button >More Information</button>} position="center">
                
                <div>
                <p>Name: {name}</p>
                <p>Type: {type}</p>
                <p>Dimension: {dimension}</p>
                
                </div>
            </Popup>
            
            
        </div>
    )
}

export default Location