import React, { useContext} from 'react';
import "./Product.scss"
import Button from '../Button/Button';

import { CartContext } from '../../context/cart.context';


const Product = ( { product }) => {
    const { addItemToCart } = useContext(CartContext)

    const addItem = () => addItemToCart(product)

    return (
        <div className='product-container'>
            <img className='product-img' src={product.imageUrl} alt={`${product.name}`} />
            <div className='product-footer'>
                <span className="product-name">{product.name}</span>
                <span className="product-price">{product.price}</span>
            </div>
            <Button buttonType='inverted' onClick={addItem}>Add to Cart</Button>
        </div>
    );
};

export default Product;