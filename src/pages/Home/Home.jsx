import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import { useState } from "react";

 

const Home = () => {
    const categories = useLoaderData()
    const [search, setSearch] = useState('')
    const [filteredCategories, setFilteredCategories] = useState(categories)
    
    const handleSearch = () => {
        const filtered = categories.filter(category => category.cate_gory.toLowerCase().includes(search.toLowerCase()))
        setFilteredCategories(filtered)
    }
     
    return (
        <div>
            <Banner 
                search={search}
                onSearchChange={setSearch}
                handleSearch = {handleSearch}
            ></Banner>
            <Categories categories={filteredCategories}></Categories>
        </div>
    );
};

export default Home;