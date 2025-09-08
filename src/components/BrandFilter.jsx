import React from 'react';

const BrandFilter = ({selectBrand, setSelectBrand, brands}) => {
    return (
        <div>
            <label className="block mb-1 font-bold">Filter by Brand:</label>
            <select
                value={selectBrand}
                onChange= {e => setSelectBrand(e.target.value)}
                className="p-2 text-sm rounded border-2 border-gray-300 min-w-[120px]"
            >

                <option value="">All Brands</option>
                {
                    brands.map((brand) => (
                        <option key={brand} value={brand}>{brand}</option>
                    ))
                }
            </select>
        </div>
    );
};

export default BrandFilter;