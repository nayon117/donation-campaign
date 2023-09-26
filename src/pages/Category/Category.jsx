import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const Category = () => {
    // state 
    const [category,setCategory] = useState({})
    const categories = useLoaderData()
    const { id } = useParams()
    // handle side effect on finding match id 
    useEffect(() => {
        const findCategories = categories?.find(category => category.id === id);
        setCategory(findCategories)
    }, [categories, id])
    
    return (
        <div>
            <CategoryCard category={category}></CategoryCard>
        </div>
    );
};

export default Category;