import React from 'react';
import SearchComponent from "./SearchComponent.jsx";
import BrandFilter from "./BrandFilter.jsx";
import CategoryFilter from "./CategoryFilter.jsx";
import removeFilterButton from "./RemoveFiltersButton.jsx";
import RemoveFiltersButton from "./RemoveFiltersButton.jsx";
import PriceFilter from "./PriceFilter.jsx";

const FiltersPanel = ({searchText,
                          setSearchText,
                          selectBrand,
                          setSelectBrand,
                          brands,
                          selectCategory,
                          setSelectCategory,
                          categories,
                          removeFilter,
                          priceRange,
                          setPriceRange
                           }) => {
    return (
        <div>
            <SearchComponent searchText={searchText} setSearchText={setSearchText}/>

            <div className="flex items-center gap-4">

                <BrandFilter selectBrand={selectBrand} setSelectBrand={setSelectBrand} brands={brands}/>
                <CategoryFilter selectCategory={selectCategory} setSelectCategory={setSelectCategory} categories={categories}/>
                <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange}/>
                <RemoveFiltersButton removeFilter={removeFilter}/>
            </div>
        </div>
    );
};

export default FiltersPanel;