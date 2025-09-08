import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div className="bg-white p-5 rounded-xl text-center shadow hover:scale-105 transition-transform cursor-pointer">
            <div className="text-5xl mb-4">{product.image}</div>
            <h3 className="text-gray-800 font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 font-bold mb-2">{product.brand}</p>
            <p className="text-gray-500 mb-4">{product.category}</p>
            <p className="text-gray-500 text-2xl font-bold m-0">{product.price}</p>
        </div>
    );
};

export default ProductCard;