import { useState } from "react";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";


const Presentation = ({presentationPage, setPresentationPage}) => {
    
    
    const nextPage = () => {
        console.log("Page: " + presentationPage);
        
        setPresentationPage(presentationPage + 1);
        
    }


    
    return(
        <div className="presentation">
            {presentationPage === 1 ? <Slide1 /> : null}
            {presentationPage === 2 ? <Slide2 /> : null}
            {presentationPage === 3 ? <Slide3 /> : null}
            {presentationPage === 4 ? <Slide4 /> : null}
            <button onClick={nextPage} className="presentation-button">Next slide</button>
        </div>
    )
}

export default Presentation;