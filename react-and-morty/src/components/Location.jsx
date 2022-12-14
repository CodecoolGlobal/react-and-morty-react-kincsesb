import React from "react";

    import { useState } from "react";

function Location(props) {
    // Mit csinál a handleClick
    // let handleClick = props.handleClick
    const [count,setCount] = useState(false)

    let name = props.name
    let type = props.type
    let dimension = props.dimension

    return (
        <div className="location">
            
            <h4>{name}</h4>
            <p>{type}</p>
            <button onClick={() => setCount(!count)} className="moreinfo">More Information</button>
            <div className={count === false ? "displaynone" : "displayflex"}>
                <p>Dimension: {dimension}</p>
            </div>

        </div>
    )
}

export default Location