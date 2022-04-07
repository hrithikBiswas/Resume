import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProgressBar = ({ percentageOfSkill, progressColor }) => {
    const [progressValue, setProgressValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgressValue((oldValue) => {
                const newValue = oldValue + 1;

                if (newValue === parseInt(percentageOfSkill)) {
                    clearInterval(interval);
                }
                return newValue;
            });
        }, 20);

        return progressValue === parseInt(percentageOfSkill)
            ? clearInterval(interval)
            : null;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Progress>
            <div>
                <Span width={progressValue} color={progressColor}></Span>
            </div>
            <span>{progressValue}%</span>
        </Progress>
    );
};

export default ProgressBar;
const Progress = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 0.5rem;

    div {
        width: 100%;
        height: 12px;
        border-radius: 8px;
        background-color: #e9ecef;
        position: relative;
    }

    @media (max-width: 768px) {
        div {
            height: 8px;
        }
    }
`;
const Span = styled.span.attrs((props) => ({
    style: {
        width: props.width + '%',
    },
}))`
    height: 12px;
    border-radius: 8px;
    background-color: ${({ color }) => color};
    position: absolute;
    transition: all 0.4s ease-out;

    @media (max-width: 768px) {
        height: 8px;
    }
`;
