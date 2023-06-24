import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../../context/context';
import { Typewriter } from 'react-simple-typewriter';
import styled from 'styled-components';

const Home = () => {
    const { setNavTextName } = useContext(Context);
    const { home } = useParams();

    useEffect(() => {
        setNavTextName(home === undefined && 'home');
    });
    return (
        <Section>
            <img src="./images/profile.jpg" alt="profile" />
            <p>WEB DEVELOPER</p>
            <h1 className="typeWritter">
                Hello, I'm{' '}
                <span>
                    <Typewriter
                        words={[
                            'Hrithik Biswas',
                            'A Web Developer',
                            'A Front-End Developer',
                            'A React Developer',
                        ]}
                        loop={false}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                </span>
            </h1>
            <h1>Welcome to my page</h1>
        </Section>
    );
};

export default Home;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;

    img {
        width: 180px;
        height: 180px;
        object-fit: cover;
        border-radius: 50%;
        display: none;
    }

    p {
        color: #0bceaf;
        font-weight: 300;
        margin-bottom: 20px;
    }
    h1 {
        color: #212529;
        font-size: 34px;
        font-weight: 500;
        span {
            color: #0bceaf;
        }
    }
    @media (max-width: 992px) {
        justify-content: center;
        align-items: center;
        text-align: center;
        img {
            display: inline;
        }
        p {
            margin: 20px 0;
        }
        h1 {
            font-size: 25px;
            font-weight: 500;
        }
    }
    /* @media (max-width: 600px) {
        h1.typeWritter {
            font-size: 20px;
        }
    } */
`;
