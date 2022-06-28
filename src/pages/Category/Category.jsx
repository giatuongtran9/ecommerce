import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./Category.scss"

import { CircularProgress } from '@mui/material'

import { selectCategories, selectCategoriesIsLoading } from '../../store/categories/categories.selector';

import Product from '../../components/Product/Product';

// import { CategoriesContext } from '../../context/caterogies.context';


const Category = () => {
    // const { categories } = useContext(CategoriesContext)
    const categories = useSelector(selectCategories)
    const isLoading = useSelector(selectCategoriesIsLoading)
console.log(isLoading)
    const { category } = useParams()
    const [products, setProducts] = useState(categories[category])

    useEffect(() => {
        setProducts(categories[category])
    }, [category, categories])


    return (
        <div>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            {
                isLoading ? 
                (<CircularProgress />) 
                : 
                (<div className="category-container">
                    {products && products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>)
            }

        </div>
    );
};

export default Category;