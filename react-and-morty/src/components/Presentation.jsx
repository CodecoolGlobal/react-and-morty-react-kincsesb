import React from "react";
import Ourteam from "../image/Ourteam.png"
import SecondSlide from "../image/SecondSlide.png"
import HowItsGoing from "../image/HowItsGoing.png"
import Bye from "../image/Bye.png"

function Presentation() {
return (
    <div id="presentation">
        <div className="firstSlide">
            <div id="firstSlideText">
            <h1>Sooo Lets start</h1>
            <h3>Our Team:</h3>
            <p>Gergely Papp</p> 
            <p>Bence Kincses</p>
            </div>
            <img src={Ourteam} id="firstSlideImage"></img>
        </div>
        <div className="secondSlide">
            <div id="secondSlideText">
            <h1>What was the task?</h1>
            <h3>The task was to create a react application</h3>
            <p>There was a starter code that fetched an external api.</p> 
            <p>These fetches were supposed to display your data.</p>
            </div>
        </div>
            <img src={SecondSlide} id="secondSlideImage"></img>
        <div className="thirdSlide">
            <img src={HowItsGoing} id="thirdSlideImage"></img>
            <div id="thirdSlideText">
            <h1>How its goin'?</h1>
            <ul>
                <br />
                <li>The team was formed at the beginning of the week.</li>
                <br />
                <li>We discussed who will take which part.</li>
                <br />
                <li>We met twice a day. Who progressed with his part.</li>
                <br />
                <li>In the middle of the week, we combined the codes.</li>
                <br />
                <li>And to have a little fun. We made two separate presentations and css.</li>
            </ul> 
            </div>
        </div>
        <div className="lastSlide">
            <div>
            <h1>Summary of the Week</h1>
            <h3>There is always something to learn</h3>
            <p>React is not a simple thing</p> 
            </div>
            <img src={Bye} id="lastImage"></img>
        </div>
    </div>
)
}

export default Presentation