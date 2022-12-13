import React from "react";
import Location from "./Location";
import { useRef } from "react";


function LocationsTable(props){

    //Mit csinál a handleClick?
    const handleClick = props.handleClick

    const listInnerRef = useRef()

    const {page,setPage} = props
    
    function scrollHandler() {
        
        const {scrollTop,scrollHeight,clientHeight} = listInnerRef.current

        console.log({scrollTop,scrollHeight,clientHeight})

        if(Math.abs(scrollTop + clientHeight - scrollHeight) < 50){
            setPage((page) => page + 1)
        }

    }



    return(
        <div className="locationsTable" ref={listInnerRef} onScroll={scrollHandler}>
            {props.data.map(element => <Location {...element} handleClick={handleClick}/>)}
        </div>
    )


}


export default LocationsTable