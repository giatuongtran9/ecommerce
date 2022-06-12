import React from 'react';
import "./Directory.scss"

import Category from '../Category/Category';

const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <Category key={category.id} category={category} />
            ))}

        </div>
    );
};

export default Directory;