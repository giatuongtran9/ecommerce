import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./Product.scss"
import Button from '../Button/Button';

// import { CartContext } from '../../context/cart.context';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

const Product = ( { product }) => {
    const dispatch = useDispatch()
    // const { addItemToCart } = useContext(CartContext)

    const cartItems = useSelector(selectCartItems)
    const addItem = () => dispatch(addItemToCart(cartItems, product))

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