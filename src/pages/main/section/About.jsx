import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../../context/context';
import styled from 'styled-components';
import SwiperContent from '../../../components/Swiper';
const About = () => {
    const { setNavTextName } = useContext(Context);
    const { about } = useParams();
    // const pathname = window.location.pathname;
    // const currentPageName = pathname.substring(1);
    // console.log(currentPageName);

    useEffect(() => {
        setNavTextName(about);
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
                    <h1>
                        A short story about me , my mission, thinking and craft.
                    </h1>
                    <div>
                        <p>
                            I'm a Front-End Web Developer who has been awarded
                            Responsive Web Designer from the freeCodeCamp. I
                            have experienced over 2 years of building and
                            maintaining responsive websites in this sector.
                        </p>
                        <p>
                            Currently, I'm looking for a team to improve my
                            skill more and to work together in the web developer
                            community-based in Bangladesh.
                        </p>
                    </div>
                    <div className="adress">
                        <ul>
                            <li>
                                Mail: <span>mr.hrithibiswas@gmail.com</span>
                            </li>
                            <li>
                                Phone: <span>+8801865696427</span>
                            </li>
                            <li>
                                City: <span>Dhaka,Dhaka</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                Age: <span>22</span>
                            </li>
                            <li>
                                Degree: <span>BBA Honors</span>
                            </li>
                            <li>
                                Freelance: <span>Available</span>
                            </li>
                        </ul>
                    </div>
                    <button>Hire Me</button>
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
            border-radius: 2rem 2rem 0 2rem;
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
        font-size: 17px;
        letter-spacing: 1px;
        background-color: #0bceaf;
        outline: none;
        border: none;
        padding: 1rem 2rem;
        border-radius: 1.4rem;
        font-weight: 300;
        color: #fff;
        margin-top: 2rem;
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
