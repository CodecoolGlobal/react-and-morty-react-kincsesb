import React from "react";
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import rick from "../image/rick-and-morty-transparent.png";

function Location(props) {

    const image = require('../image/rick-and-morty-transparent.png')
    
    let name = props.name
    let type = props.type
    let dimension = props.dimension


    return (
        <div className="location">
            
            <h4>{name}</h4>
            <p>{type}</p>
            <Popup className={"popup"} trigger={<button className="Button-info">More Information</button>} position="center">
                <div>
                    <img src={image} height="150px"/>
                </div>

                <div>
                    <h2 className="popup-title">{name}</h2>
                    <p><strong>Type: </strong>{type}</p>
                    <p><strong>Dimension: </strong> <br></br>{dimension}</p>
                </div>
                
            </Popup>
            
            
        </div>
    )
}

export default Location