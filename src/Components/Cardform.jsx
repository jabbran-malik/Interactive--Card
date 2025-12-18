import React, { useState } from "react";


function Cardform({ cardData, setCardData, setIsCompleted }) {
  const [errors, setErrors] = useState({})


  function handleChange(e) {
    let { name, value } = e.target;

    if(name=== "name"){
     value = value.replace(/[^a-zA-Z\s]/g, "");
    }
    if (name === "number") {
      value = value.replace(/\D/g, "").slice(0,16) .replace(/(.{4})/g, "$1 ").trim();
    }
  if (["month", "year", "cvc"].includes(name)) {
  value = value.replace(/\D/g, "");
}
  if (["month", "year"].includes(name)) {
  value = value.slice(0,2)
}
  if (["cvc"].includes(name)) {
  value = value.slice(0,3)
}
    setCardData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!cardData.name.trim()) newErrors.name = "Can't be blank";

    if (!cardData.number) newErrors.number = "Can't be blank";
    else if (!/^\d{16}$/.test(cardData.number.replace(/\s/g, "")))
      newErrors.number = "card must be 16 digits"

    if (!cardData.month) newErrors.month = "Can't be blank";
    else if (!/^(0?[1-9]|1[0-2])$/.test(cardData.month))
      newErrors.month = "Invalid month";

    if (!cardData.year) newErrors.year = "Can't be blank";
    else if (!/^\d{2}$/.test(cardData.year)) newErrors.year = 'invalid year'

    if (!cardData.cvc) newErrors.cvc = "Can't be blank";
    else if (!/^\d{3}$/.test(cardData.cvc)) newErrors.cvc = "CVC must be 3 digits";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsCompleted(true);
    }
  }
  return (
    <div className="py-10">
      <div className="mx-auto max-w-xl px-4">
        <form onSubmit={handleSubmit} className=" bg-white p-6 space-y-5 shadow-sm  ">

          {/* Cardholder Name */}
          <div>
            <label className="mb-1 block text-sm text-gray-600 uppercase">
              Cardholder Name
            </label>
            <input
              type="text"
              name="name"
              value={cardData.name}
              onChange={handleChange}
              placeholder="e.g. Jane Appleseed"
              className="w-full rounded-md border border-gray-300 p-2 text-sm
              outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          {/* Card Number */}
          <div>
            <label className="mb-1 block text-sm text-gray-600 uppercase">
              Card Number
            </label>
            <input
              type="text"
              name="number"
              value={cardData.number}
              onChange={handleChange}
              placeholder="e.g. 1234 1234 1234 1234"
              className="w-full rounded-md border border-gray-300 p-2 text-sm
              outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            {errors.number && <p className="text-red-500 text-xs">{errors.number}</p>}

          </div>

          {/* Exp Date & CVC */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="mb-1 block text-sm text-gray-600">
                Exp.Date
              </label>
              <input
                type="text"
                name="month"
                placeholder="MM"
                value={cardData.month}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 p-2 text-sm
                outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
              {errors.month && <p className="text-red-500 text-xs">{errors.month}</p>}

            </div>

            <div>
              <label className="mb-1 block text-sm text-gray-600">
                (MM/YY)
              </label>
              <input
                type="text"
                placeholder="YY"
                name="year"
                value={cardData.year}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 p-2 text-sm
                outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
              {errors.year && <p className="text-red-500 text-xs">{errors.year}</p>}

            </div>

            <div>
              <label className="mb-1 block text-sm text-gray-600">
                CVC
              </label>
              <input
                type="text"
                name="cvc"
                placeholder="123"
                value={cardData.cvc}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 p-2 text-sm
                outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
              {errors.cvc && <p className="text-red-500 text-xs">{errors.cvc}</p>}

            </div>
          </div>

          {/* Button */}
          <button
            type="submit"

            className="w-full rounded-md bg-indigo-600 py-2 text-sm font-medium text-white
            hover:bg-indigo-700 transition"
          >
            Confirm
          </button>

        </form>
      </div>
    </div>
  );
}

export default Cardform;
