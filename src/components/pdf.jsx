import React from "react";
import './problem.css';
function Pdf() {
    return (
        <div className="problem-statement-container">
            <div className="logo-container">
                <h2 className="problem-statement-heading">Problem Statement Round 1</h2>
            </div>
            <button className="pdf-button">
                <a href='./pdfs/PrayatnaProblemStatements.pdf' target="_blank" style={{"textDecoration":"none","color":"white"}} rel="noopener noreferrer" download>Download PDF</a>
            </button>
                <br/>
            <div className="logo-container">
                <h2 className="problem-statement-heading">Problem Statement Round 2</h2>
            </div>
            <button className="pdf-button">
                <a href='./pdfs/Prayatna_round2_prob.pdf' target="_blank" style={{"textDecoration":"none","color":"white"}} rel="noopener noreferrer" download>Download PDF</a>
            </button>
            <br/>
            <div className="logo-container">
                <h2 className="problem-statement-heading">Marktine Problem Statement<br/>for Round 2</h2>
            </div>
            <button className="pdf-button">
                <a href='./pdfs/Marktine_prob.pdf' target="_blank" style={{"textDecoration":"none","color":"white"}} rel="noopener noreferrer" download>Download PDF</a>
            </button>
            <br/>
        </div>
    )
}
export default Pdf;