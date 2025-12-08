import React, { useState } from 'react';

function CardForm({ cardData, setCardData, setIsCompleted }) {
  const [errors, setErrors] = useState({});

  // Luhn Algorithm for card validation
  const luhnCheck = (cardNumber) => {
    let sum = 0;
    let shouldDouble = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber[i], 10);
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
  };

  // Format card number with spaces every 4 digits
  const formatCardNumber = (value) => {
    return value
      .replace(/\D/g, '') // Remove non-digits
      .substring(0, 16)   // Limit to 16 digits
      .replace(/(.{4})/g, '$1 ')
      .trim();
  };

  // Real-time field validation
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return "Can't be blank";
        if (!/^[A-Z\s]+$/.test(value)) return "Only letters allowed";
        return '';
      case 'number': {
        const numberOnly = value.replace(/\s/g, '');
        if (!numberOnly) return "Can't be blank";
        if (!/^\d{16}$/.test(numberOnly)) return "Must be 16 digits";
        if (!luhnCheck(numberOnly)) return "Invalid card number";
        return '';
      }
      case 'month':
        if (!value) return "Can't be blank";
        if (!/^(0[1-9]|1[0-2])$/.test(value)) return "Invalid month";
        return '';
      case 'year': {
        if (!value) return "Can't be blank";
        if (!/^\d{2}$/.test(value)) return "Invalid year";
        const currentYear = new Date().getFullYear() % 100;
        if (parseInt(value, 10) < currentYear) return "Card expired";
        return '';
      }
      case 'cvc':
        if (!value) return "Can't be blank";
        if (!/^\d{3,4}$/.test(value)) return "CVC must be 3 or 4 digits";
        return '';
      default:
        return '';
    }
  };

  // Handle input changes with real-time validation
  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'number') formattedValue = formatCardNumber(value);
    if (name === 'name') formattedValue = value.toUpperCase();

    setCardData({ ...cardData, [name]: formattedValue });

    const error = validateField(name, formattedValue);
    setErrors({ ...errors, [name]: error });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(cardData).forEach((key) => {
      const error = validateField(key, cardData[key]);
      if (error) newErrors[key] = error;
    });

    // Expiry date additional check (month+year not in past)
    if (!newErrors.month && !newErrors.year) {
      const inputMonth = parseInt(cardData.month, 10);
      const inputYear = parseInt(cardData.year, 10);
      const currentMonth = new Date().getMonth() + 1;
      const currentYear = new Date().getFullYear() % 100;
      if (inputYear === currentYear && inputMonth < currentMonth) {
        newErrors.month = "Card expired";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setIsCompleted(true);
    }
  };

  // Check if form has any errors to disable submit
  const isFormInvalid = Object.values(errors).some((err) => err) || 
                        !cardData.name || !cardData.number || !cardData.month || !cardData.year || !cardData.cvc;

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mt-4 sm:mt-6 md:mt-8 p-6 sm:p-8 md:p-10 max-w-md mx-auto"
      >
        {/* Cardholder Name */}
        <label htmlFor="name" className="block text-gray-700 uppercase text-xs mb-1">Cardholder Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={cardData.name}
          onChange={handleChange}
          placeholder="e.g. ALI AHMED"
          className={`w-full p-3 border rounded-lg mb-1 focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-purple-600'}`}
        />
        {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}

        {/* Card Number */}
        <label htmlFor="number" className="block text-gray-700 uppercase text-xs mb-1">Card Number</label>
        <input
          id="number"
          type="text"
          name="number"
          value={cardData.number}
          onChange={handleChange}
          placeholder="1234 5678 1234 5678"
          maxLength={19} // 16 digits + 3 spaces
          className={`w-full p-3 border rounded-lg mb-1 focus:outline-none focus:ring-2 ${errors.number ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-purple-600'}`}
        />
        {errors.number && <p className="text-red-500 text-sm mb-2">{errors.number}</p>}

        {/* Expiry Month + Year + CVC */}
        <div className="flex space-x-4 mb-4">
          {/* Month */}
          <div className="basis-1/4">
            <label htmlFor="month" className="block text-gray-700 uppercase text-xs mb-1">Exp.Date</label>
            <input
              id="month"
              type="text"
              name="month"
              value={cardData.month}
              onChange={handleChange}
              placeholder="MM"
              maxLength={2}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.month ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-purple-600'}`}
            />
            {errors.month && <p className="text-red-500 text-xs mt-1">{errors.month}</p>}
          </div>

          {/* Year */}
          <div className="basis-1/4">
            <label htmlFor="year" className="block text-gray-700 uppercase text-xs mb-1">(MM/YY)</label>
            <input
              id="year"
              type="text"
              name="year"
              value={cardData.year}
              onChange={handleChange}
              placeholder="YY"
              maxLength={2}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.year ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-purple-600'}`}
            />
            {errors.year && <p className="text-red-500 text-xs mt-1">{errors.year}</p>}
          </div>

          {/* CVC */}
          <div className="basis-1/2">
            <label htmlFor="cvc" className="block text-gray-700 uppercase text-xs mb-1">CVC</label>
            <input
              id="cvc"
              type="text"
              name="cvc"
              value={cardData.cvc}
              onChange={handleChange}
              placeholder="123"
              maxLength={4}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.cvc ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-purple-600'}`}
            />
            {errors.cvc && <p className="text-red-500 text-xs mt-1">{errors.cvc}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isFormInvalid}
          className={`w-full py-3 text-white font-medium rounded-lg transition ${isFormInvalid ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'}`}
        >
          Confirm
        </button>
      </form>
    </div>
  );
}

export default CardForm;
