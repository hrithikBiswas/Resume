import React from 'react';
import styled from 'styled-components';

const PortfolioBorder = () => {
    return <Border></Border>;
};

export default PortfolioBorder;

const Border = styled.div`
    width: 150px;
    height: 1px;
    background: linear-gradient(to right, #fff, #0cc0de, #fff);
    margin: 0.7rem 0;
    position: relative;
    &::before {
        content: '';
        width: 26px;
        height: 6px;
        background: #0cc0de;
        position: absolute;
        transform: translateY(-50%);
        left: 40%;
    }

    @media (max-width: 768px) {
        margin-top: 0.5rem;
    }
`;
