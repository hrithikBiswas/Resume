import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ALLWORKS, filteredByCategory } from '../../../../data/WorkData';
import styled from 'styled-components';

const FilteredTemplate = () => {
    let [searchParams] = useSearchParams();
    const categoryName = searchParams.get('categoryName');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const allWorks = useMemo(() => {
        if (!categoryName) return ALLWORKS;
        return filteredByCategory(categoryName);
    });
    return (
        <WorkContainer>
            {allWorks.map((work) => (
                <a href={work.templateLink} target="blank" key={work.id}>
                    <img src={work.image} alt="work" />
                    <h4>{work.templateName}</h4>
                </a>
            ))}
        </WorkContainer>
    );
};

export default FilteredTemplate;
const WorkContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    grid-gap: 3rem 1.5rem;

    a {
        text-decoration: none;
        color: initial;
        transition: all 0.2s ease-out;

        &:hover {
            transform: scale(1.03);
        }
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 1.2rem;
        box-shadow: 0px 0px 15px -7px #000000;
    }

    @media (max-width: 992px) {
        grid-template-columns: repeat(2, minmax(200px, 1fr));
    }
    @media (max-width: 668px) {
        grid-template-columns: repeat(1, minmax(200px, 1fr));
    }
`;
