import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import "./Shop.scss"

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { fetchCategoriesAsync } from '../../store/categories/categories.action';

import Category from '../Category/Category';
import CategoriesPreview from '../../components/CategoriesPreview/CategoriesPreview';

const Shop = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategoriesAsync())
    }, [])

    return (
        <Routes>
            <Route index element={ <CategoriesPreview /> } />
            <Route path=":category" element={ <Category /> } />
        </Routes>
    );
};

export default Shop;