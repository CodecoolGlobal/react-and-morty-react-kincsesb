import React from "react";
import Character from "./Character";

function CharactersTable(data, handleClick){

    return(
        <>
        <h1>Characters</h1>
        <div className="charactersTable">
            
            {data.data.map(element => <Character {...element} handleClick={handleClick}/>)}
        </div>
        </>
    )


}


export default CharactersTable