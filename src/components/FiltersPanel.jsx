import React from 'react';
import SearchComponent from "./SearchComponent.jsx";
import BrandFilter from "./BrandFilter.jsx";
import CategoryFilter from "./CategoryFilter.jsx";

const FiltersPanel = ({searchText, setSearchText,selectBrand,setSelectBrand, brands, selectCategory, setSelectCategory, categories}) => {
    return (
        <div>
            <SearchComponent searchText={searchText} setSearchText={setSearchText}/>

            <div className="flex items-center gap-4">

                <BrandFilter selectBrand={selectBrand} setSelectBrand={setSelectBrand} brands={brands}/>
                <CategoryFilter selectCategory={selectCategory} setSelectCategory={setSelectCategory} categories={categories}/>

            </div>
        </div>
    );
};

export default FiltersPanel;