import React from 'react';
import styled from 'styled-components';

const SubtitleBorder = () => {
    return <Border></Border>;
};

export default SubtitleBorder;

const Border = styled.div`
    width: 250px;
    height: 1px;
    background: linear-gradient(to right, #0cc0de, #0cc0de, #fff);
    margin: 1.2rem 0;
    position: relative;
    &::before {
        content: '';
        width: 70px;
        height: 6px;
        border-radius: 1rem;
        background: #0cc0de;
        position: absolute;
        transform: translateY(-50%);
    }

    @media (max-width: 768px) {
        margin-top: 0.5rem;
    }
`;
