import React from 'react';
import styled from 'styled-components';

const Hr = () => {
    return <Border></Border>;
};

export default Hr;

const Border = styled.div`
    width: 250px;
    height: 1px;
    background: linear-gradient(to right, #0cc0de, #0cc0de, #fff);
    margin: 0.5rem 0 1.2rem 0;
    position: relative;

    @media (max-width: 768px) {
        margin: 0.2rem 0 1rem 0;
    }
`;
