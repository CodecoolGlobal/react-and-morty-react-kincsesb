import React from "react";
import Location from "./Location";

function LocationsTable(data){

    return(
        <div className="charactersTable">
            {data.data.map(element => <Location {...element}/>)}
        </div>
    )


}


export default LocationsTable