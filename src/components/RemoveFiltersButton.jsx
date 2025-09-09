import React from 'react';

const RemoveFiltersButton = ({removeFilter}) => {
    return (
        <div className="mt-5">
            <button
            onClick={removeFilter}
            className="px-4 py-2 bg-red-500 text-white rounded font-bold text-sm hover:bg-red-600 transition-colors"
            >Clear all filters</button>
        </div>
    );
};

export default RemoveFiltersButton;