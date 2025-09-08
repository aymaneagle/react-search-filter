import React from 'react';
import SearchComponent from "./SearchComponent.jsx";

const FiltersPanel = ({searchText, setSearchText}) => {
    return (
        <div>
            <SearchComponent searchText={searchText} setSearchText={setSearchText}/>
        </div>
    );
};

export default FiltersPanel;