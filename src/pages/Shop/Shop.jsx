import React, { useContext } from 'react';
import "./Shop.scss"

import { ProductContext } from '../../context/product.context';

import Product from '../../components/Product/Product';

const Shop = () => {
    const { products } = useContext(ProductContext)

    return (
        <div className='shop-container'>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Shop;