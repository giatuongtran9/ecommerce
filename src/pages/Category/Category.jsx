import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./Category.scss"

import Product from '../../components/Product/Product';

import { CategoriesContext } from '../../context/caterogies.context';


const Category = () => {
    const { categories } = useContext(CategoriesContext)
    const { category } = useParams()
    const [products, setProducts] = useState(categories[category])

    useEffect(() => {
        setProducts(categories[category])
    }, [category, categories])


    return (
        <div>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className="category-container">
                {products && products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Category;