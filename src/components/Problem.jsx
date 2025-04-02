import React, { useState, useEffect } from 'react';
import './problem.css';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slides = [
    {
      title: "Artificial Intelligence",
      description: "Imagine having a smart companion that can think and learn just like us humans. That's Artificial Intelligence! It's a powerful technology that mimics human intelligence, analyzing mountains of data to recognize patterns and make decisions."
    },
    {
      title: "App Development",
      description: "Think of app development as crafting the perfect digital tool for your needs. It's all about creating software applications for your phone, tablet, or computer. Developers design, code, test, and launch apps that can do anything from ordering pizza to tracking your fitness goals."
    },
    {
      title: "Web Development",
      description: "Web development is like constructing the ultimate online home. It's the art and science of building and maintaining websites and web applications. Front-end developers create the visual part you see and interact with using HTML, CSS, and JavaScript, while back-end developers manage servers, databases, and APIs."
    },
    {
      title: "Cyber Security",
      description: "Imagine being the digital guardian of a virtual castle. Cybersecurity is all about protecting our digital world from attacks, theft, and damage. It involves using tools like encryption, firewalls, and ethical hacking to keep our information safe and systems secure."
    },
    {
      title: "Blockchain",
      description: "Blockchain is a decentralized technology that underpins cryptocurrencies like Bitcoin and Ethereum. Each transaction is grouped into blocks, which are linked together in a chain. Beyond finance, blockchain has incredible potential in areas like supply chain management, voting systems, and secure data sharing."
    }
  ];
  
  const totalSlides = slides.length;
  const [autoSlideInterval, setAutoSlideInterval] = useState(null);

  useEffect(() => {
    const startAutoSlide = () => {
      setAutoSlideInterval(setInterval(() => {
        if (!isHovered) {
          setCurrentSlide(prev => (prev + 1) % totalSlides);
        }
      }, 5000));
    };

    startAutoSlide();

    return () => clearInterval(autoSlideInterval);
  }, [isHovered, totalSlides]);

  const showSlide = (index) => {
    setCurrentSlide((index + totalSlides) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e) => {
    const touchStartX = e.changedTouches[0].screenX;
    const touchStartY = e.changedTouches[0].screenY;

    const handleTouchEnd = (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const swipeThreshold = 50;
      const verticalThreshold = 30;
      const verticalDiff = Math.abs(touchEndY - touchStartY);

      if (verticalDiff < verticalThreshold) {
        if (touchEndX < touchStartX - swipeThreshold) {
          handleNext();
        }
        if (touchEndX > touchStartX + swipeThreshold) {
          handlePrev();
        }
      }
    };

    document.addEventListener('touchend', handleTouchEnd, { once: true });
  };

  return (
    <div className= "slide-main" id='tracks'>
      <div className="slideshow-container"
         onMouseEnter={() => setIsHovered(true)} 
         onMouseLeave={() => setIsHovered(false)}
         onTouchStart={handleTouchStart}>

      {slides.map((slide, index) => (
        <div key={index} className={`slide ${currentSlide === index ? 'active' : ''}`}>
          <h2 className="domain-title pulse-hover">{slide.title}</h2>
          <p className="domain-description pulse-hover">{slide.description}</p>
        </div>
      ))}

      <button className="prev" onClick={handlePrev}>❮</button>
      <button className="next" onClick={handleNext}>❯</button>

      <div className="navigation">
        {slides.map((_, index) => (
          <div 
            key={index} 
            className={`nav-dot ${currentSlide === index ? 'active' : ''}`} 
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Slideshow;
