import React from 'react';
import ProductCard from "./ProductCard.jsx";

const ProductsGrid = ({products}) => {
    return (
        <div className="grid grid-cols-4 gap-5">
            {
                products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))
            }
        </div>
    );
};

export default ProductsGrid;