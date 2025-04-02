import React, { useState , useEffect} from 'react';
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import {useTypewriter , Cursor} from 'react-simple-typewriter';
// import AutoPopup from './popup';
import './home.css';

function Home() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.title = "Prayatna 2.0";
  }, []);

  const handleMenuClick = () => {
    if (window.innerWidth < 768) {
      setShowMenu(false);
    }
  };
  
  const [text] = useTypewriter({
    words: ['Attempt<>Innovate<>Succeed'],
    loop: true,
  });
  return (
    <div id='home' className="headerr">
    {/* <AutoPopup/> */}
      <div className='background-image'></div>
      <div className="scroll-image blur-image">
          <div className={`navbarr ${!showMenu ? 'responsive' : ''}`} id='navbarr'>
            <div className='navr'>
            <div className='navr-logo'></div>
            <button onClick={() => setShowMenu(!showMenu)}>{showMenu ? (<IoIosMenu  color="#f59e0b" size="2em" alt="Menu"/>) : (<RxCross2 color="#f59e0b" size="2em" alt="Close"/>)}</button>
            </div>
            <div className="menu">
            {!showMenu ?
            (<ul type="none">
                <li><a href="#prayatna2-home" onClick={handleMenuClick}>Home</a></li>
                <li><a href="#about" onClick={handleMenuClick}>About</a></li>
                <li><a href="#sponsors" onClick={handleMenuClick}>Sponsors</a></li>
                <li><a href="#prizes" onClick={handleMenuClick}>Prizes</a></li>
                <li><a href="#details" onClick={handleMenuClick}>Timeline</a></li>
                <li><a href="#tracks" onClick={handleMenuClick}>Tracks</a></li>
                {/* <li><a href='./pdfs/SponsorshipBrochurePrayatna2.pdf' target='_blank' rel="noopener noreferrer" onClick={handleMenuClick} download>Brochure</a></li> */}
                <li><a href='./pdfs/BusRoute_Aug24.pdf' target='_blank' rel="noopener noreferrer" onClick={handleMenuClick} download>Bus Route</a></li>
                <li><a href="#faqs" onClick={handleMenuClick}>FAQ's</a></li>
            </ul>) : null
            }
            </div>
          </div>
          <div className="home-content">
            <div className='home-intro'>
            <div className="prayatna-logo"></div>
            <h1 className='home-heading'>
            Ahoy Pirates!<br/>
            </h1>
            <h3 className="typewriter">
            {text}<Cursor/><br/>
            </h3>
            </div>
            <div className="button">
            <button className='home-btn'><a href='https://bit.ly/prayatna2-0' target='_blank'>Register Now</a></button>
            <button className='home-btn'><a href='https://discord.gg/fDJzvBuNkj' target='_blank'>Join Discord</a></button>
            </div>
          </div>
      </div>
      
    </div>
  )
}
export default Home;