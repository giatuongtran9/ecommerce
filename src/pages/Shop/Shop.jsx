import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import "./Shop.scss"

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { setCategories } from '../../store/categories/categories.action';

import Category from '../Category/Category';
import CategoriesPreview from '../../components/CategoriesPreview/CategoriesPreview';

const Shop = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const getCategories = async () => {
            const categories = await getCategoriesAndDocuments()
            dispatch(setCategories(categories))
            // console.log(categories)
        }


        getCategories()

    }, [])

    return (
        <Routes>
            <Route index element={ <CategoriesPreview /> } />
            <Route path=":category" element={ <Category /> } />
        </Routes>
    );
};

export default Shop;