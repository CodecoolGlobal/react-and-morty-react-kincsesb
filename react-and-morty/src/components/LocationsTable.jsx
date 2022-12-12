import React from "react";
import Location from "./Location";

function LocationsTable(data, handleClick){

    return(
        <>
        <h1>Locations</h1>
        <div className="charactersTable">
            
            {data.data.map(element => <Location {...element} handleClick={handleClick}/>)}
        </div>
        </>
    )


}


export default LocationsTable