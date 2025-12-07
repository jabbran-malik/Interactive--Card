import React from 'react';
import Bgimage from '../assets/bg-main-mobile.png';
import CardFront from '../Ui/CardFront';
import BackCard from '../Ui/CardBack';

function CardPreview({ cardData }) {
  return (
    <div className="relative  bg-white">
      {/* Background image section */}
      <div className="w-full h-52 sm:h-80 md:h-96 relative">
        <img 
          src={Bgimage} 
          alt="background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Back of card */}
      <div className="absolute right-2 top-8">
        <BackCard cvc={cardData?.cvc} />
      </div>

      {/* Front of card */}
      <div className="absolute right-16 top-28 sm:top-32">
        <CardFront
          name={cardData?.name}
          number={cardData?.number}
          month={cardData?.month}
          year={cardData?.year}
        />
      </div>
    </div>
  );
}

export default CardPreview;
