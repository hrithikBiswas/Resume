import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const RightSide = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const date = new Date();
    const nameOfMonth = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    useEffect(() => {
        setInterval(myTimer, 1000);

        function myTimer() {
            const dateNew = new Date();
            setTime(dateNew.toLocaleTimeString());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <RightSideContainer className="rightSide">
            <CurrentDate>
                <div className="date">
                    <h2>{date.getDate()}</h2>
                    <span>{nameOfMonth[date.getMonth()]}</span>
                    <span>{date.getFullYear()}</span>
                </div>
                <h5>{time}</h5>
            </CurrentDate>

            <SocialLink>
                <p>
                    <span>Follow Me</span>
                </p>
                <ul>
                    <li>
                        <a
                            href="https://github.com/hrithikBiswas"
                            target="blank"
                        >
                            <img src="../images/github-alt.svg" alt="github" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/hrithik-biswas-727331180/"
                            target="blank"
                        >
                            <img
                                src="../images/linkedin-alt.svg"
                                alt="linkedin"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.facebook.com/Hrithik.Biswas.coder/"
                            target="blank"
                        >
                            <img
                                src="../images/facebook-f.svg"
                                alt="facebook"
                            />
                        </a>
                    </li>
                </ul>
            </SocialLink>
            <UpDownArrow>
                <img src="../images/upArrow.svg" alt="up" />
                <img src="../images/downArrow.svg" alt="down" />
            </UpDownArrow>
        </RightSideContainer>
    );
};

export default RightSide;

const RightSideContainer = styled.div`
    background-color: #fff;
    border-radius: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    flex-grow: 0;

    @media (max-width: 992px) {
        position: absolute;
        width: 100%;
        height: 100%;
        left: ${({ theme }) => (theme.rightSideModal === true ? '0' : '100%')};
        align-items: center;
        justify-content: space-evenly;
        z-index: 110;
        transition: all 0.4s ease-in-out;
    }
`;
const CurrentDate = styled.div`
    div.date {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        row-gap: 0.35rem;
        padding-bottom: 0.5rem;

        h2 {
            color: #0cc0de;
            font-weight: 600;
        }
        span {
            font-weight: 500;
            font-size: 15px;
        }

        @media (max-width: 992px) {
            flex-direction: row;
            column-gap: 1rem;
            h2 {
                font-size: 30px;
            }
            span {
                font-size: 20px;
                font-weight: 600;
            }
        }
    }

    & > h5 {
        font-weight: 500;

        @media (max-width: 992px) {
            font-size: 20px;
            font-weight: 600;
        }
    }
`;
const SocialLink = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 5rem;
    p {
        margin-top: 1.5rem;
        white-space: nowrap;
        transform: rotate(90deg);

        span {
            padding-right: 1rem;
            color: #212529;
        }

        &:after {
            content: '';
            width: 55px;
            height: 2px;
            background-color: #0cc0de;
            position: absolute;
            top: 50%;
        }
    }
    ul {
        margin-top: 2.5rem;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        row-gap: 0.5rem;
    }

    @media (max-width: 992px) {
        row-gap: 1rem;
        p {
            transform: rotate(0);
            font-size: 2rem;
            font-weight: 500;
        }
        ul {
            flex-direction: row;
            column-gap: 1rem;
            margin-top: 0.5rem;
            text-align: center;
            align-items: center;
            justify-content: space-evenly;
            transform: scale(1.3);
        }
    }
`;
const UpDownArrow = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.9rem;
    row-gap: 1rem;

    img {
        border: 2px solid #0cc0de;
        border-radius: 13px;
        padding: 4px;
    }
    @media (max-width: 992px) {
        flex-direction: row;
        column-gap: 2rem;

        img {
            transform: scale(1.5);
        }
    }
`;
