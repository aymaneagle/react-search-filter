import React from 'react';

const Header = () => {
    return (
        <div className="text-center bg-white p-5 rounded-xl mb-5">
            <h1 className="text-gray-800 mb-2  font-semibold text-xl">
                Product Catalog Components
            </h1>
            <p className="text-gray-500 m-0">
                Individual Components: Search | Brands Filter | Category Filter
            </p>
        </div>
    );
};

export default Header;