import React, { useState } from "react";

function Cardform({ cardData, setCardData, setIsCompleted }) {
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    let { name, value } = e.target;

    if (name === "name") {
      value = value.replace(/[^a-zA-Z\s]/g, "");
    }
    if (name === "number") {
      value = value
        .replace(/\D/g, "")
        .slice(0, 16)
        .replace(/(.{4})/g, "$1 ")
        .trim();
    }
    if (["month", "year", "cvc"].includes(name)) {
      value = value.replace(/\D/g, "");
    }
    if (["month", "year"].includes(name)) {
      value = value.slice(0, 2);
    }
    if (name === "cvc") {
      value = value.slice(0, 3);
    }

    setCardData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!cardData.name.trim()) newErrors.name = "Can't be blank";

    if (!cardData.number) newErrors.number = "Can't be blank";
    else if (!/^\d{16}$/.test(cardData.number.replace(/\s/g, "")))
      newErrors.number = "card must be 16 digits";

    if (!cardData.month) newErrors.month = "Can't be blank";
    else if (!/^(0?[1-9]|1[0-2])$/.test(cardData.month))
      newErrors.month = "Invalid month";

    if (!cardData.year) newErrors.year = "Can't be blank";
    else if (!/^\d{2}$/.test(cardData.year))
      newErrors.year = "invalid year";

    if (!cardData.cvc) newErrors.cvc = "Can't be blank";
    else if (!/^\d{3}$/.test(cardData.cvc))
      newErrors.cvc = "CVC must be 3 digits";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsCompleted(true);
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mt-15 sm:mt-6 md:mt-48 p-6 sm:p-8 md:p-10 md:max-w-90 mx-auto bg-white"
      >
        {/* Cardholder Name */}
        <label className="block text-gray-700 uppercase text-xs mb-1">
          Cardholder Name
        </label>
        <input
          type="text"
          name="name"
          value={cardData.name}
          onChange={handleChange}
          placeholder="e.g. Jane Appleseed"
          className={`w-full p-3 border rounded-lg mb-1 focus:outline-none focus:ring-2 ${
            errors.name
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-purple-600"
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mb-2">{errors.name}</p>
        )}

        {/* Card Number */}
        <label className="block text-gray-700 uppercase text-xs mb-1">
          Card Number
        </label>
        <input
          type="text"
          name="number"
          value={cardData.number}
          onChange={handleChange}
          placeholder="e.g. 1234 1234 1234 1234"
          className={`w-full p-3 border rounded-lg mb-1 focus:outline-none focus:ring-2 ${
            errors.number
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-purple-600"
          }`}
        />
        {errors.number && (
          <p className="text-red-500 text-sm mb-2">{errors.number}</p>
        )}

        {/* Exp Date & CVC */}
        <div className="flex space-x-4 mb-4">
          <div className="basis-1/4">
            <label className="block text-gray-700 uppercase text-xs mb-1">
              Exp.Date
            </label>
            <input
              type="text"
              name="month"
              placeholder="MM"
              value={cardData.month}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.month
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-purple-600"
              }`}
            />
            {errors.month && (
              <p className="text-red-500 text-xs mt-1">{errors.month}</p>
            )}
          </div>

          <div className="basis-1/4">
            <label className="block text-gray-700 uppercase text-xs mb-1">
              (MM/YY)
            </label>
            <input
              type="text"
              name="year"
              placeholder="YY"
              value={cardData.year}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.year
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-purple-600"
              }`}
            />
            {errors.year && (
              <p className="text-red-500 text-xs mt-1">{errors.year}</p>
            )}
          </div>

          <div className="basis-1/2">
            <label className="block text-gray-700 uppercase text-xs mb-1">
              CVC
            </label>
            <input
              type="text"
              name="cvc"
              placeholder="123"
              value={cardData.cvc}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.cvc
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-purple-600"
              }`}
            />
            {errors.cvc && (
              <p className="text-red-500 text-xs mt-1">{errors.cvc}</p>
            )}
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 text-white font-medium rounded-lg bg-purple-600 hover:bg-purple-700 transition"
        >
          Confirm
        </button>
      </form>
    </div>
  );
}

export default Cardform;
