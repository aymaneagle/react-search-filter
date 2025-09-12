import React, {useState} from 'react';
import Header from "../components/Header.jsx";
import ProductsGrid from "../components/ProductsGrid.jsx";
import {SAMPLE_PRODUCTS} from "../../allProducts.js"
import FiltersPanel from "../components/FiltersPanel.jsx";
import ActiveFilters from "../components/ActiveFilters.jsx";

const ProductsCatalogApp = () => {
    const [searchText, setSearchText] = useState("");
    const [selectBrand, setSelectBrand] = useState("");
    const [selectCategory, setSelectCategory] = useState("")
    const [priceRange, setPriceRange] = useState({min:0, max:9999})

    const brands = [...new Set(SAMPLE_PRODUCTS.map((p)=>p.brand))];
    const categories = [...new Set(SAMPLE_PRODUCTS.map((p)=>p.category))]
    // console.log(categories)

    const getFilteredProducts = () => {
        let filtered = SAMPLE_PRODUCTS;
        if(searchText){
            filtered = filtered.filter((product) =>
            product.name.toLowerCase().includes(searchText.toLowerCase()) ||
                product.brand.toLowerCase().includes(searchText.toLowerCase()) ||
                product.category.toLowerCase().includes(searchText.toLowerCase())
            )
        }
        if(selectBrand){
            filtered = filtered.filter((product) => product.brand === selectBrand)
        }
        if(selectCategory){
            filtered = filtered.filter((product) => product.category === selectCategory)
        }
        if(priceRange){
            filtered = filtered.filter((product) => product.price >= priceRange.min && product.price <= priceRange.max)
        }

        return filtered;
    }
    const filterProducts = getFilteredProducts();
   const removeFilter = () => {
       setSearchText("");
       setSelectBrand("");
       setSelectCategory("");
       setPriceRange({min:0, max:9999});
   }

    return (
        <div className="p-5 bg-gray-100 min-h-screen">
            <Header />
            <FiltersPanel searchText={searchText}
                          setSearchText={setSearchText}
                          brands={brands}
                          selectBrand={selectBrand}
                          setSelectBrand={setSelectBrand}
                          selectCategory={selectCategory}
                          setSelectCategory={setSelectCategory}
                          priceRange={priceRange}
                          setPriceRange={setPriceRange}
                          categories={categories}
                          removeFilter={removeFilter}
            />
            <ActiveFilters searchText={searchText}
                           selectBrand={selectBrand}
                           selectCategory={selectCategory}
                           setSearchText={()=> setSearchText("")}
                           setSelectBrand={()=>setSelectBrand("")}
                           setSelectCategory={()=>setSelectCategory("")}

            />
            <ProductsGrid products={filterProducts} />
        </div>
    );
};

export default ProductsCatalogApp;