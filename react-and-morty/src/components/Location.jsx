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
            <Popup className={"popup"} trigger={<button >More Information</button>} position="center">
                <div>
                    <img src="https://freepngimg.com/thumb/rick_and_morty/27448-8-rick-and-morty-transparent.png" alt="" height="150px"/>
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