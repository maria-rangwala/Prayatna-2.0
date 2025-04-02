import React, { useState, useEffect } from 'react';
import './prize.css';

const imageSequenceOpen = [
  './images/closed-chest.png',
  './images/chest-opening-step1.png',
  './images/chest-opening-step2.png',
  './images/chest-opening-step3.png',
  './images/chest-opening-step4.png',
  './images/open-chest.png'
];

const imageSequenceClose = [
  './images/open-chest.png',
  './images/chest-opening-step4.png',
  './images/chest-opening-step3.png',
  './images/chest-opening-step2.png',
  './images/chest-opening-step1.png',
  './images/closed-chest.png'
];

const Prize = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleOpenChest = () => {
    if (!isOpen && !closing) {
      setIsOpen(true);
      setCurrentImageIndex(0);
    }
  };

  const handleCloseChest = () => {
    if (isOpen && !closing) {
      setClosing(true);
      setCurrentImageIndex(0);
    }
  };

  useEffect(() => {
    const sequence = isOpen ? imageSequenceOpen : imageSequenceClose;

    if ((isOpen || closing) && currentImageIndex < sequence.length - 1) {
      const timer = setTimeout(() => {
        setCurrentImageIndex(currentImageIndex + 1);
      }, 200); 
      return () => clearTimeout(timer);
    } else if (closing && currentImageIndex === sequence.length - 1) {
      setTimeout(() => {
        setIsOpen(false);
        setClosing(false);
      }, 200);
    }
  }, [isOpen, closing, currentImageIndex]);

  const chestImage = (isOpen || closing) ? (closing ? imageSequenceClose : imageSequenceOpen)[currentImageIndex] 
  : './images/closed-chest.png';

  return (
    <div className="prize-section" id='prizes'>
      <div id="treasure-container">
        <h1>The Treasure</h1>
          <h2>Grand Fortune of ₹1,00,000 awaits..</h2>
          <p>The total prize pool includes cash rewards and special goodies for the top performers!</p>
        {isOpen && !closing && currentImageIndex === imageSequenceOpen.length - 1 && (
          <div id="prizes">
            <div className="cards">
              <div className="card glow">
                <img src="./images/silver-trophy.png" alt="Silver Trophy" />Conqueror<br/>Rs. 25,000
              </div>
              <div className="card glow" id="winner">
                <img src="./images/gold-trophy.png" alt="Gold Trophy" />Champion<br/>Rs. 50,000
              </div>
              <div className="card glow">
                <img src="./images/bronze-trophy.png" alt="Bronze Trophy" />Voyager<br/>Rs. 15,000
              </div>
            </div>
          </div>
        )}
        <img
          id="chest"
          src={chestImage}
          alt="Treasure Chest"
          onClick={isOpen ? handleCloseChest : handleOpenChest}
          className={isOpen || closing ? 'open' : ''}
        /><br/>
        <h3>Click the box!</h3><br/>
        <p>The treasure of the seas awaits! Unlock these glorious riches.</p>
      </div>
    </div>
  );
};
export default Prize;
