import React from "react";
import Character from "./Character";
import { useRef } from "react";

function CharactersTable(props){

    const listInnerRef = useRef()

    const {page,setPage} = props
    
    function scrollHandler() {
        
        const {scrollTop,scrollHeight,clientHeight} = listInnerRef.current

        console.log({scrollTop,scrollHeight,clientHeight})

        if(Math.abs(scrollTop + clientHeight - scrollHeight) < 20){
            setPage((page) => page + 1)
        }

    }

    return(

        <div className="charactersTable" ref={listInnerRef} onScroll={scrollHandler}>
            {props.data.map(element => <Character {...element}/>)}
        </div>
        
    )


}


export default CharactersTable