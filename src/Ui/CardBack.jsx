import React from 'react';
import Backimg from '../assets/bg-card-back.png';

function BackCard() {
  return (
    <div className="relative w-60 sm:w-72 md:w-80 h-32 sm:h-40 md:h-41 overflow-hidden font-sans">
      <img 
        src={Backimg} 
        alt="Back of Card" 
        className="w-full h-full object-cover"
      />
     <div className="absolute top-14 right-7 sm:top-16 sm:right-10 md:top-17 md:right-12 text-white text-[12px] sm:text-base md:text-lg">
  000
</div>

    </div>
  );
}

export default BackCard;
