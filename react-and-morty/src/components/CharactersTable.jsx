import React from "react";
import Character from "./Character";

function CharactersTable(data){

    return(
        <div className="charactersTable">
            {data.data.map(element => <Character {...element}/>)}
        </div>
    )


}


export default CharactersTable