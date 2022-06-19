import React from 'react';
import { Routes, Route } from 'react-router-dom'
import "./Shop.scss"


import Category from '../Category/Category';
import CategoriesPreview from '../../components/CategoriesPreview/CategoriesPreview';

const Shop = () => {
    return (
        <Routes>
            <Route index element={ <CategoriesPreview /> } />
            <Route path=":category" element={ <Category /> } />
        </Routes>
    );
};

export default Shop;