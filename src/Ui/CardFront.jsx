import React from 'react';
import Frontimg from '../assets/bg-card-front.png';
import Icon from '../assets/favicon-32x32.png';

function CardFront() {
  return (
    <div className="w-60 sm:w-72 md:w-80 h-full sm:h-40 md:h-44 relative font-sans">
      
      {/* Card background image */}
      <img 
        src={Frontimg} 
        alt="Front of Card" 
        className="w-full h-full object-cover"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 p-4 text-white flex flex-col justify-between">
        
        {/* Top row: Icon */}
        <div className="flex justify-start">
          <img src={Icon} alt="icon" className="w-5 sm:w-5 md:w-6 h-auto" />
        </div>

        {/* Middle row: Card Number */}
        <div className="text-left mt-5">
          <span className="text-sm sm:text-base md:text-lg tracking-widest">
            1234 5678 9123 0000
          </span>
        </div>

        {/* Bottom row: Name left, Expiry right */}
        <div className="flex justify-between text-[10px] sm:text-sm md:text-base mt-2 sm:mt-3 md:mt-4 uppercase">
          <span>Jane Appleseed</span>
          <span>00/00</span>
        </div>

      </div>
    </div>
  );
}

export default CardFront;
