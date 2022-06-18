import React, { useContext } from 'react';
import "./CategoriesPreview.scss"

import { Link } from 'react-router-dom'

import { CategoriesContext } from '../../context/caterogies.context';

import Product from '../Product/Product';

const CategoriesPreview = () => {
    const { categories } = useContext(CategoriesContext)

    return (
        <>
            {Object.keys(categories).map((title) => {
                const products = categories[title]

                return (
                    <div className='categoriesPreview-container' key={title}>
                        <h2>
                            <Link to={title} className='categoriesPreview-title'>{title.toUpperCase()}</Link>
                        </h2>
                        <div className="categoriesPreview-preview">
                        {
                            products.filter((_, idx) => idx < 4).map((product) => <Product key={product.id} product={product} />)
                        }
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default CategoriesPreview;