import React from "react";
import './sponsor.css';

function Head(){
    return(
        <>
        <div className="title-sponsor">
            <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold section-heading mb-16" style={{'color': '#f59e0b'}}>Introducing the Captain!</h2>
            <a href="https://www.getsolo.tech/" target="_blank"><img src="./sponsors/solo.jpg" alt="Solo" className="solo-img"/></a>
        </div>
        <div className="title-sponsor">
            <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold section-heading mb-16" style={{'color': '#f59e0b'}}>Gold Sponsor</h2>
            <a href="https://www.instagram.com/shreeyamnationaltmt/"><img src="./sponsors/Shreeyam-logo.png" alt="Shreeyam National TMT" className="sreeyam-img"/></a>
        </div>
        <div className="title-sponsor">
            <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold section-heading mb-16" style={{'color': '#f59e0b'}}>Problem Statement Sponsor</h2>
            <a href="https://marktine.com/" target="_blank"><img src="./sponsors/marktine-logo.png" alt="Marktine" className="marktine-img"/></a>
        </div>
        <div className="title-sponsor">
            <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold section-heading mb-16" style={{'color': '#f59e0b'}}>Powered By</h2>
            <a href="https://unstop.com/" target="_blank"><img src="./sponsors/unstop-logo.jpeg" alt="Unstop" className="unstop-img"/></a>
        </div>
        </>
    )
}
export default Head;