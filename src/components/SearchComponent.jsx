import React from 'react';

const SearchComponent = ({searchText, setSearchText}) => {
    return (
        <div className="mb-4">
            <label className="block mb-1 font-bold">Search Products:</label>
            <input type="text"
                   placeholder="Search by products name or brand"
                   value={searchText}
                   onChange={e => setSearchText(e.target.value)}
                   className="w-full p-3 text-base border-2 border-gray-300 rounded
                              focus:outline-none focus:border-blue-400"
            />

        </div>
    );
};

export default SearchComponent;