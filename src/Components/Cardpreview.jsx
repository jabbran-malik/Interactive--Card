import React from 'react';
import Bgimage from '../assets/bg-main-mobile.png';
import desktopimage from'../assets/bg-main-desktop.png'
import CardFront from '../Ui/CardFront';
import BackCard from '../Ui/CardBack';

function CardPreview({ cardData }) {
  return (
    <div className="relative bg-white ">
      {/* Background image section */}
      <div className="w-full h-52 sm:h-80  relative">
        <img 
          src={Bgimage} 
          alt="background" 
          className="w-full h-full object-cover md:hidden"
        />
      <img src={desktopimage} className="w-2/3 h-screen  object-cover hidden md:block"
      />
      </div>

      {/* Back of card */}
      <div className="absolute right-2 top-8
      md:absolute md:top-90 md:left-24
      lg:absolute lg:top-90 lg:left-54
       xl:absolute  xl:left-95
      ">
        <BackCard cvc={cardData?.cvc} />
      </div>

      {/* Front of card */}
      <div className="absolute right-16 top-28 sm:top-32
       md:absolute md:top-40
       20 md:left-10
        lg:absolute lg:top-45 lg:left-30
       xl:absolute  xl:left-75
       ">
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
