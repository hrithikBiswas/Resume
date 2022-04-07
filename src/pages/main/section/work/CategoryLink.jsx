import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const CategoryLink = ({ categoryName, children, props }) => {
    const [searchParams] = useSearchParams();
    const isActive = searchParams.get('categoryName') === categoryName;

    return (
        <Link
            to={`?categoryName=${categoryName}`}
            className={isActive ? 'active' : ''}
        >
            {children}
        </Link>
    );
};

export default CategoryLink;
