
import React, { useEffect, useState } from "react";


function Countdown() {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    
      useEffect(() => {
        const eventDate = new Date("2025-03-04T16:00:00").getTime();
    
        const updateCountdown = () => {
          const now = new Date().getTime();
          const distance = eventDate - now;
        
          if (distance <= 0) {
            setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            clearInterval(interval);
            return;
          }

          setCountdown({
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
          });
        };
    
        const interval = setInterval(updateCountdown, 1000);
        updateCountdown();
    
        return () => clearInterval(interval);
      }, []);
    
      
    return (
        <div >
            <div className="flex items-center justify-center my-7 px-6 sm:px-10 lg:px-32">
                <div className="bg-black bg-opacity-75 border-4 sm:border-2 lg:border-4 border-yellow-600 rounded-[8px] p-4 sm:p-8 lg:p-12 w-full max-w-5xl shadow-lg" style={{"border": "4px solid #f59e0b"}}>
                    <div className="text-center text-white mb-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{'color': '#f59e0b'}}>Ahoy, mateys!</h1>
                        <p className="text-sm sm:text-lg md:text-xl para">
                            Our grand event is setting sail on the <strong>4th, 5th, 6th of March, 2025</strong>. Mark your calendars and join us for an adventure you won’t want to miss!
                        </p>
                    </div>

                    <div className="grid grid-cols-4 gap-2 lg:gap-8 text-white text-center">
                        {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
                            <div key={label} className="inner-box flex flex-col items-center bg-yellow-800 bg-opacity-25 border border-yellow-600 rounded-lg p-2 sm:p-4">
                                <span className="text-2xl sm:text-3xl lg:text-5xl font-bold">
                                    {Object.values(countdown)[index]}
                                </span>
                                <span className="text-xs sm:text-sm lg:text-base uppercase">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>            

        </div>
    )
}
export default Countdown;