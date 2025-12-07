import React from 'react';
import Backimg from '../assets/bg-card-back.png';

function BackCard({ cvc }) {
  return (
    <div className="relative w-60 sm:w-72 md:w-80 h-32 sm:h-40 md:h-41 overflow-hidden font-sans">
      {/* Card background */}
      <img 
        src={Backimg} 
        alt="Back of Card" 
        className="w-full h-full object-cover"
      />

      {/* CVC number */}
      <div className="absolute top-14 right-7 sm:top-16 sm:right-10 md:top-17 md:right-12 text-white text-[12px] sm:text-base md:text-lg">
        {cvc || "000"}
      </div>
    </div>
  );
}

export default BackCard;
