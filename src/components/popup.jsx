import React, { useState, useEffect } from "react";
// import { RxCross2 } from "react-icons/rx";
import { FaSkullCrossbones } from "react-icons/fa6";
// import { ImCross } from "react-icons/im";
import "./popup.css";

function AutoPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
        setTimeout(() => setShowPopup(true), 2000);
  }, []);

  return (
    <div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <div className="popup-content">
            <button className='popup-close' onClick={() => setShowPopup(false)}><FaSkullCrossbones size="2.5em" alt="Close"/></button>
            <h1>Registrations Open!</h1>
            <h4>Last Date to Register : 15th Feb 2025</h4>
            <p style={{'fontFamily':'Poppins', 'fontWeight':'bold'}}>Click the skull to close!</p>
            <a className="popup-btn" href='https://bit.ly/prayatna2-0' target='_blank'><button>Register Now</button></a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AutoPopup;