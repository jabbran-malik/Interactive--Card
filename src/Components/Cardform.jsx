import React from 'react';

function CardForm({ cardData, setCardData, setIsCompleted }) {
  const handleChange = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCompleted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-18 sm:mt-96 md:mt-12 p-6 sm:p-8 md:p-10 max-w-md mx-auto">
        {/* Cardholder Name */}
        <label className="block text-gray-700 uppercase text-xs mb-1">Cardholder Name</label>
        <input
          type="text"
          name="name"
          value={cardData.name}
          onChange={handleChange}
          placeholder="e.g. Ali Ahmed"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        {/* Card Number */}
        <label className="block text-gray-700 uppercase text-xs mb-1">Card Number</label>
        <input
          type="text"
          name="number"
          value={cardData.number}
          onChange={handleChange}
          placeholder="e.g. 1234 1234 1234 1234"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        {/* Expiry Date + CVC */}
        <div className="flex space-x-4 mb-4">
          {/* MM */}
          <div className="basis-1/4">
            <label className="block text-gray-700 uppercase text-xs mb-1">exp. Date</label>
            <input
              type="text"
              name="month"
              value={cardData.month}
              onChange={handleChange}
              placeholder="MM"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* YY */}
          <div className="basis-1/4">
            <label className="block text-gray-700 uppercase text-xs mb-1">(MM/YY)</label>
            <input
              type="text"
              name="year"
              value={cardData.year}
              onChange={handleChange}
              placeholder="YY"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* CVC */}
          <div className="basis-1/2">
            <label className="block text-gray-700 uppercase text-xs mb-1">CVC</label>
            <input
              type="text"
              name="cvc"
              value={cardData.cvc}
              onChange={handleChange}
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
