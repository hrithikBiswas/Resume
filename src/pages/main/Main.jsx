import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './section/Home';
import About from './section/About';
import Resume from './section/Resume';
import Works from './section/Works';
import Blogs from './section/Blogs';
import Contact from './section/Contact';

const Main = () => {
    return (
        <MainContainer className="main-content">
            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/work/*" element={<Works />} />
                <Route path="/blog" element={<Blogs />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </MainContainer>
    );
};

export default Main;

const MainContainer = styled.main`
    background-color: #fff;
    border-radius: 1.2rem;
    overflow-y: auto;
    padding: 2.5rem 3rem;
    flex-grow: 10;

    @media (max-width: 768px) {
        padding: 0.8rem 1rem;
    }
`;
