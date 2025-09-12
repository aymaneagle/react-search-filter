import React from 'react';

const PriceFilter = ({priceRange, setPriceRange}) => {
    return (
        <div className="bg-gray-100 p-4 rounded-xl mb-5">
            <label className="block text-gray-700 font-semibold mb-2"> Price Range: {priceRange.min} - {priceRange.max}</label>
            <div className="flex items-center gap-4">
                <input type="range"
                       min="0"
                       max="9999"
                       value={priceRange.min}
                       onChange={e => setPriceRange({...priceRange, min: parseInt(e.target.value)})

                }
                       className="w-full h-2 bg-violet-200 rounded-lg appearance-none cursor-pointer"
              />
                <input type="range"
                       min="0"
                       max="9999"
                       value={priceRange.max}
                       onChange={e => setPriceRange({...priceRange, max: parseInt(e.target.value)})
                       }
                       className="w-full h-2 bg-violet-200 rounded-lg appearance-none cursor-pointer"
                />
            </div>
        </div>
    );
};

export default PriceFilter;