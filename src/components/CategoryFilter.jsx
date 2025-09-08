import React from 'react';

const CategoryFilter = ({selectCategory, setSelectCategory, categories}) => {
    return (
        <div>
            <label className="block mb-1 font-bold">Filter by Category:</label>
            <select value={selectCategory}
                    onChange={(e) => setSelectCategory(e.target.value)}
                    className="p-2 text-sm rounded border-2 border-gray-300 min-w-[120px]"
            >

                <option value="">All Category</option>
                {
                    categories.map((category)=> (
                        <option key={category} value={category}>{category}</option>
                    ))
                }
            </select>
        </div>
    );
};

export default CategoryFilter;