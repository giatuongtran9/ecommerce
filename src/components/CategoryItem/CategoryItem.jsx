import React from 'react';
import {CategoryItemContainer, CategoryItemBody, BackgroundImage} from './CategoryItem.style.jsx'

import { useNavigate } from 'react-router-dom'

const CategoryItem = ({ category}) => {
    const navigate = useNavigate()
    const { imageUrl, title, route } = category

    const handleClick = () => {
        navigate(route)
    }

    return (
        <CategoryItemContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <CategoryItemBody onClick={handleClick}>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </CategoryItemBody>
        </CategoryItemContainer>
    );
};

export default CategoryItem;