import React from "react";
import './timeline.css';

function Detail() {
    return (
        <div className="container" id="details">
            <div className="overlay"></div>
            <div className="content">

                <div className="header">
                    <div className="icon">
                        <i className="fas fa-anchor"></i>
                    </div>
                    <div >
                        <img src="./images/Prayatna.png" alt="Prayatna 2.0" className="header-logo" />
                        <div className="subtitle">
                            <i className="fas fa-compass icon"></i>
                            <p>A Pirate's Quest for Innovation</p>
                        </div>
                    </div>
                    <div className="icon">
                        <i className="fas fa-ship"></i>
                    </div>
                </div>


                <p className="tagline">Unleashing Innovation, One Code at a Time</p>


                <div className="main-content">
                    <p>Acropolis Institute of Technology and Research, in collaboration with AITR ACM and AITR ACM-W student chapters, proudly presents Prayatna 2.0, the second edition of our signature nationwide hackathon...</p>


                    <div className="rounds">
                        <h2 style={{'textAlign':'center'}}>The Journey Map</h2>

                        <div className="round">
                            <div className="icon-container">
                                <i className="fas fa-trophy"></i>
                            </div>
                            <div>
                                <h3>Round 1: Online Submission of Ideas</h3>
                                <p>Participants are invited to submit innovative ideas via PowerPoint presentations. Top submissions will advance to the next round.</p>
                            </div>
                        </div>

                        <div className="round">
                            <div className="icon-container">
                                <i className="fas fa-trophy"></i>
                            </div>
                            <div>
                                <h3>Round 2: 36-Hour Onsite Hackathon</h3>
                                <p>It is an offline round that will take place at AITR Premises, Indore. 40 shortlisted teams will compete in an intensive 36-hour onsite hackathon, implementing and showcasing their ideas.</p>
                            </div>
                        </div>
                    </div>


                    <div className="footer">
                        <p>With enhanced challenges, a dynamic structure, and cutting-edge resources, Prayatna 2.0 provides the perfect platform for participants to turn ideas into impactful solutions...</p>
                        <p className="text-xl font-bold text-amber-400 text-center">The future starts here. Are you ready to be part of it?</p>
                    </div>


                    <div className="location-duration">
                        <div>
                            <a href="https://maps.app.goo.gl/Jrx5ZnB87Be8eUks7" target="_blank" style={{textDecoration : 'none'}}>
                            <i className="fas fa-map-pin icon"></i>
                            <span> AITR Premises, Indore</span>
                            </a>
                        </div>
                        <div>
                            <i className="fas fa-clock icon"></i>
                            <span> 36 Hours of Innovation</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Detail;