import React from "react";
import './timeline.css';
function Timeline() {
    return (
        <div className="container timeline-container">
            <div className="header">
                <h1>🏴‍☠️ The Grand Voyage Timeline 🏴‍☠️</h1>
            </div>
            <div className="timeline">
               
                <div className="event">
                    <div className="icon-container">
                        <i className="fas fa-anchor"></i>
                    </div>
                    <div className="content">
                        <h3>Set Sail: Registration Opens</h3>
                        <p className="date">11th Jan 2025</p>
                        <p>Join the crew! Registration begins for all brave souls</p>
                    </div>
                </div>
                
                <div className="event">
                    <div className="icon-container">
                        <i className="fas fa-map"></i>
                    </div>
                    <div className="content">
                        <h3>Anchor Down: Registration Closes</h3>
                        <p className="date">15th Feb 2025</p>
                        <p>Last chance to board the ship, matey!</p>
                    </div>
                </div>
               
                <div className="event">
                    <div className="icon-container">
                        <i className="fas fa-compass"></i>
                    </div>
                    <div className="content">
                        <h3>First Voyage Begins</h3>
                        <p className="date">11th Jan 2025</p>
                        <p>The first challenge of your journey starts</p>
                    </div>
                </div>
               
                <div className="event">
                    <div className="icon-container">
                        <i className="fas fa-flag"></i>
                    </div>
                    <div className="content">
                        <h3>First Voyage Ends</h3>
                        <p className="date">16th Feb 2025</p>
                        <p>Drop anchor! First round comes to close</p>
                    </div>
                </div>
                
                <div className="event">
                    <div className="icon-container">
                        <i className="fas fa-scroll"></i>
                    </div>
                    <div className="content">
                        <h3>Captain's Verdict</h3>
                        <p className="date">20th Feb 2025</p>
                        <p>Results of the first voyage revealed</p>
                    </div>
                </div>
                
                <div className="event">
                    <div className="icon-container">
                        <i className="fas fa-crown"></i>
                    </div>
                    <div className="content">
                        <h3>Final Battle</h3>
                        <p className="date">March 4th - 6th, 2025</p>
                        <p>The ultimate challenge awaits the worthy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Timeline;