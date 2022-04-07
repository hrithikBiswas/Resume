import React from 'react';
import { categoriesName } from '../../../../data/WorkData';
import styled from 'styled-components';
import { Outlet, useSearchParams, Link } from 'react-router-dom';
import CategoryLink from './CategoryLink';

const Layout = () => {
    const [searchParams] = useSearchParams();
    const isActive = searchParams.get('categoryName') === null;

    return (
        <div>
            <nav>
                <Row>
                    <li>
                        <Link to="" className={isActive ? 'active' : ''}>
                            All
                        </Link>
                    </li>
                    {categoriesName.map((categoryName) => (
                        <li key={categoryName}>
                            <CategoryLink categoryName={categoryName}>
                                {categoryName}
                            </CategoryLink>
                        </li>
                    ))}
                </Row>
            </nav>

            <Outlet />
        </div>
    );
};

export default Layout;

const Row = styled.ul`
    list-style-type: none;
    display: flex;
    column-gap: 1.5rem;
    justify-content: center;
    margin-top: 2.5rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;

    li {
        font-size: 18px;
        cursor: pointer;

        a {
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
    .active {
        background-color: #0bceaf;
        color: #fff;
        padding: 2px 7px;
        border-radius: 6px;
    }
`;
