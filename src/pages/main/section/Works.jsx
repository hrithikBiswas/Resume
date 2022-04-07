import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../../context/context';
import styled from 'styled-components';
import PortfolioBorder from '../../../components/PortfolioBorder';
import { Routes, Route } from 'react-router-dom';
import Layout from './work/Layout';
import AllWorks from './work/FilteredTemplate';

const Works = () => {
    const { setNavTextName } = useContext(Context);
    const { work } = useParams();

    useEffect(() => {
        setNavTextName(work);
    });

    return (
        <Section>
            <HeaderMetaContainer>
                <h1>PORTFOLIO</h1>
                <h4>See My Works</h4>
                <PortfolioBorder />
            </HeaderMetaContainer>

            <Routes>
                <Route path="" element={<Layout />}>
                    <Route index element={<AllWorks />} />
                </Route>
            </Routes>
        </Section>
    );
};

export default Works;

const Section = styled.section``;
const HeaderMetaContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 0.2rem;

    h1 {
        font-weight: 400;
        letter-spacing: 1.5px;
    }
    h4 {
        font-weight: 400;
        color: #0bceaf;
        letter-spacing: 1.5px;
    }
`;
