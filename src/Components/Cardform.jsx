import React from 'react';
import Bgimage from '../assets/bg-main-mobile.png';
import CardFront from '../Ui/CardFront';
import BackCard from '../Ui/CardBack';

function CardForm() {
  return (
    <div className="relative min-h-screen bg-white">

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
        <BackCard />
      </div>

      {/* Front of card */}
      <div className="absolute right-16 top-28 sm:top-32">
        <CardFront />
      </div>

      {/* Form Section */}
      <form className="mt-18 sm:mt-96 md:mt-12 p-6 sm:p-8 md:p-10 max-w-md mx-auto">

        {/* Cardholder Name */}
        <label className="block text-gray-700 uppercase text-xs mb-1">Cardholder Name</label>
        <input 
          type="text" 
          placeholder='e.g. Ali Ahmed' 
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        {/* Card Number */}
        <label className="block text-gray-700 uppercase text-xs mb-1">Card Number</label>
        <input 
          type="text" 
          placeholder='e.g. 1234 1234 1234 1234' 
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        {/* Expiry Date + CVC in one row */}
        <div className="flex space-x-4 mb-4">

          {/* MM */}
          <div className="basis-1/4">
            <label className="block text-gray-700 uppercase text-xs mb-1 ">exp. Date</label>
            <input 
              type="text" 
              placeholder="MM" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* YY */}
          <div className="basis-1/4">
            <label className="block text-gray-700 uppercase text-xs mb-1">(MM/YY)</label>
            <input 
              type="text" 
              placeholder="YY" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* CVC */}
          <div className="basis-1/2">
            <label className="block text-gray-700 uppercase text-xs mb-1">CVC</label>
            <input 
              type="text" 
              placeholder="e.g. 123" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition"
        >
          Confirm
        </button>

      </form>

    </div>
  );
}

export default CardForm;
