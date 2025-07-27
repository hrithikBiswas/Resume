import React, { useContext, useEffect } from 'react';
import { Context } from '../../../context/context';
import styled from 'styled-components';
import SwiperContent from '../../../components/Swiper';
import { calculateAge } from '../../../utils/actions';
const About = () => {
    const { setNavTextName } = useContext(Context);
    const currentPathname = window.location.pathname;
    const currentPageName = currentPathname.substring(1);

    useEffect(() => {
        setNavTextName(currentPageName);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <Introduction>
                <Image>
                    <div>
                        <img src="../images/profile.jpg" alt="profile" />
                        <div></div>
                    </div>
                </Image>
                <Content>
                    <h1>A snapshot of me</h1>
                    <div>
                        <p>
                            I’m Hrithik Biswas, a front-end web developer with
                            over 3 years of experience in building
                            high-performance websites and applications using
                            React.js and Next.js. I specialize in transforming
                            complex designs into responsive, scalable, and
                            business-focused web solutions. My approach stays
                            current with the latest tools and trends, ensuring
                            optimized, user-friendly experiences across all
                            platforms.
                        </p>
                        <p>
                            By leveraging my expertise, I consistently deliver
                            high-quality front-end development and convert
                            intricate designs into functional websites.
                        </p>
                    </div>
                    <div className="adress">
                        <ul>
                            <li>
                                Mail:{' '}
                                <span>
                                    <a href="mailto:mr.hrithibiswas@gmail.com">
                                        mr.hrithibiswas@gmail.com
                                    </a>
                                </span>
                            </li>
                            <li>
                                Phone:{' '}
                                <span>
                                    <a href="tel:+8801865696427">
                                        +8801865696427
                                    </a>
                                </span>
                            </li>
                            <li>
                                City: <span>Gazipur,Dhaka</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                Age: <span>{calculateAge('2000-02-14')}</span>
                            </li>
                            <li>
                                Degree: <span>BBA, MBA</span>
                            </li>
                            <li>
                                Freelance:{' '}
                                <span className="available">Available</span>
                            </li>
                        </ul>
                    </div>
                    <button>
                        <a
                            href="https://www.upwork.com/freelancers/hrithikbiswas"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Hire Me
                        </a>
                    </button>
                </Content>
            </Introduction>
            <Border />
            <SwiperContent />
        </Container>
    );
};

export default About;

const Container = styled.section``;

const Introduction = styled.div`
    display: flex;
    column-gap: 2rem;
    padding-bottom: 3rem;

    @media (max-width: 992px) {
        flex-direction: column;
        padding: 1rem 2rem;
    }
    @media (max-width: 768px) {
        padding: 0;
    }
`;
const Image = styled.div`
    flex-basis: 500px;
    div {
        position: relative;
        img {
            width: 90%;
            border-radius: 2rem 2rem 2rem 2rem;
            position: relative;
            top: 15px;
            z-index: 10;
        }
        div {
            position: absolute;
            width: 75%;
            height: 100%;
            border: 1px solid #0cc0de;
            right: 1rem;
            border-radius: 2rem 2rem 0;
            top: 0;
            z-index: 1;
        }
    }
    @media (max-width: 992px) {
        margin-bottom: 3rem;
        flex-basis: 0;
    }
`;
const Content = styled.div`
    flex-basis: 800px;

    h1 {
        font-size: 32px;
        color: #212529;
        margin-bottom: 1rem;
        line-height: 1.5;
    }
    div {
        font-size: 20px;
        line-height: 1.4;

        p {
            margin-bottom: 0.5rem;
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
    div.adress {
        display: flex;
        column-gap: 5rem;
        margin-top: 2rem;
        ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            row-gap: 1.5rem;
            font-size: 20px;

            span {
                color: #595959;
                font-weight: normal;
                a {
                    color: #595959;
                }
            }
            li {
                font-weight: bold;
                .available {
                    color: #38b000;
                }
            }
        }
        @media (max-width: 992px) {
            flex-direction: column;
            row-gap: 1rem;
            ul {
                row-gap: 1rem;
            }
        }
    }

    button {
        outline: none;
        border: none;
        border-radius: 1.4rem;
        margin-top: 2rem;
        cursor: pointer;

        a {
            color: #ffffff;
            background-color: #0bceaf;
            text-decoration: none;
            letter-spacing: 1px;
            font-size: 17px;
            padding: 1rem 2rem;
            font-weight: 300;
            border-radius: 1.4rem;
        }
    }

    @media (max-width: 992px) {
        flex-basis: 0;

        h1 {
            font-size: 25px;
            line-height: 1;
        }
    }
`;
const Border = styled.div`
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #fff, #0cc0de, #fff);

    @media (max-width: 992px) {
        margin-top: 1.5rem;
    }
`;
