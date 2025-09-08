import React, {useState} from 'react';
import Header from "../components/Header.jsx";
import ProductsGrid from "../components/ProductsGrid.jsx";
import {SAMPLE_PRODUCTS} from "../../allProducts.js"
import FiltersPanel from "../components/FiltersPanel.jsx";

const ProductsCatalogApp = () => {
    const [searchText, setSearchText] = useState("");
    const [selectBrand, setSelectBrand] = useState("");
    const [selectCategory, setSelectCategory] = useState("")

    const getFilteredProducts = () => {
        let filtered = SAMPLE_PRODUCTS;
        if(searchText){
            filtered = filtered.filter((product) =>
            product.name.toLowerCase().includes(searchText.toLowerCase()) ||
                product.brand.toLowerCase().includes(searchText.toLowerCase())
            )
        }
        if(selectBrand){
            filtered = filtered.filter((product) => product.brand === selectBrand)
        }
        if(selectCategory){
            filtered = filtered.filter((product) => product.category === selectCategory)
        }

        return filtered;
    }
    const filterProducts = getFilteredProducts();

    return (
        <div className="p-5 bg-gray-100 min-h-screen">
            <Header />
            <FiltersPanel searchText={searchText} setSearchText={setSearchText}/>
            <ProductsGrid products={filterProducts}/>
        </div>
    );
};

export default ProductsCatalogApp;