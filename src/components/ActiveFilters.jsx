import React from 'react';
import {X} from "lucide-react"

const ActiveFilters = ({searchText, selectBrand, selectCategory, setSearchText, setSelectBrand, setSelectCategory}) => {
    const hasActiveFilters = searchText || selectBrand || selectCategory;
    if (!hasActiveFilters) {
        return null;
    }
    return (
        <div className="bg-blue-100 p-4 rounded-xl mb-5">
            <h1 className="text-blue-700 font-semibold mb-2"> Active Filters:</h1>
            <div className="flex flex-wrap gap-2">
                {searchText && ( <span className="bg-violet-500 text-white rounded-full text-sm px-2 py-1 flex items-center gap-1">
                    {searchText}
                    <X size={16} className="cursor-pointer" onClick={setSearchText}/>
                </span>)}{" "}
                {selectBrand && ( <span className="bg-orange-500 text-white rounded-full text-sm px-2 py-1 flex items-center gap-1">
                    {selectBrand}
                    <X size={16} className="cursor-pointer" onClick={setSelectBrand}/>
                </span>)}{" "}
                {selectCategory && ( <span className="bg-green-500 text-white rounded-full text-sm px-2 py-1 flex items-center gap-1">
                    {selectCategory}
                    <X size={16} className="cursor-pointer" onClick={setSelectCategory}/>
                </span>)}

            </div>
        </div>
    );
};

export default ActiveFilters;