import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Context } from '../../../context/context';

const Blogs = () => {
    const { setNavTextName } = useContext(Context);
    const currentPathname = window.location.pathname;
    const currentPageName = currentPathname.substring(1);

    useEffect(() => {
        setNavTextName(currentPageName);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BlogSection>
            <h1>Coming soon blog section...</h1>
        </BlogSection>
    );
};

export default Blogs;

const BlogSection = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
