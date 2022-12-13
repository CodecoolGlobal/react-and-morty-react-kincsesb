import React from "react";

function Location(data){
    return data.data.map((location) => (
      <div className="locations">
        <div className="location-name">{location.name}</div>
        <div className="location-type">{location.type}</div>
      </div>
    ));
  };

export default Location