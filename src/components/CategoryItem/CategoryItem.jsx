import React from 'react';
import './CategoryItem.scss'

const CategoryItem = ({ category}) => {
    const { imageUrl, title } = category
    return (
        <div className="categoryitem-container">
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`}}></div>
            <div className="categoryitem-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
};

export default CategoryItem;