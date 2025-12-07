import React from "react";
import Tickimag from "../assets/icon-complete.svg";

function Completed({onContinue}) {
  return (
    <div className="mt-20 mb-10 sm:mt-48 md:mt-28 px-6 flex flex-col items-center text-center">

      {/* Tick Icon */}
      <img 
        src={Tickimag} 
        alt="completed" 
        className="w-16 h-16 mb-6"
      />

      {/* Heading */}
      <h1 className="text-3xl tracking-widest font-semibold mb-3">
        THANK YOU!
      </h1>

      {/* Subtext */}
      <p className="text-gray-500 mb-8 text-sm sm:text-base">
        We've added your card details
      </p>

      {/* Continue Button */}
      <button onClick={onContinue}
        className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition max-w-xs"
      >
        Continue
      </button>

    </div>
  );
}

export default Completed;
