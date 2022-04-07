import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Context } from '../../context/context';

const LeftSide = () => {
    const { showNavMenuHandle } = useContext(Context);

    return (
        <LeftSideContainer className="leftSide">
            <Profile>
                <img src="../images/profile.jpg" alt="" />
                <h1>Hrithik Biswas</h1>
                <button download>Download CV</button>
            </Profile>
            <Navbar>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'nav-active' : ''
                            }
                            onClick={() => showNavMenuHandle(false)}
                        >
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="#0bceaf"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                            </span>
                            <span style={{ color: '#0bceaf' }}>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about/about"
                            className={({ isActive }) =>
                                isActive ? 'nav-active' : ''
                            }
                            onClick={() => showNavMenuHandle(false)}
                        >
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="#f13a3a"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </span>
                            <span style={{ color: '#f13a3a' }}>About</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/resume/resume"
                            className={({ isActive }) =>
                                isActive ? 'nav-active' : ''
                            }
                            onClick={() => showNavMenuHandle(false)}
                        >
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="#dba423"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                                    />
                                </svg>
                            </span>
                            <span style={{ color: '#dba423' }}>Resume</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="work/work"
                            className={({ isActive }) =>
                                isActive ? 'nav-active' : ''
                            }
                            onClick={() => showNavMenuHandle(false)}
                        >
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="#0cc0de"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                    />
                                </svg>
                            </span>
                            <span style={{ color: '#0cc0de' }}>Works</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog/blog"
                            className={({ isActive }) =>
                                isActive ? 'nav-active' : ''
                            }
                            onClick={() => showNavMenuHandle(false)}
                        >
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="#d78fd6"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                    />
                                </svg>
                            </span>
                            <span style={{ color: '#d78fd6' }}>Blog</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact/contact"
                            className={({ isActive }) =>
                                isActive ? 'nav-active' : ''
                            }
                            onClick={() => showNavMenuHandle(false)}
                        >
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="#ff4274"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </span>
                            <span style={{ color: '#ff4274' }}>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </Navbar>
        </LeftSideContainer>
    );
};

export default LeftSide;

const LeftSideContainer = styled.div`
    background-color: #fff;
    border-radius: 1.2rem;
    text-align: center;
    padding: ${({ theme }) =>
        theme.navTextName === 'home' || theme.navTextName === 'contact'
            ? '2.7rem 1rem'
            : '1rem 0.5rem'};
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
    flex-basis: ${({ theme }) =>
        theme.navTextName === 'home' || theme.navTextName === 'contact'
            ? '300px'
            : '80px'};
    transition: all 0.4s ease;

    @media (max-width: 992px) {
        position: absolute;
        width: 100%;
        height: 100%;
        left: ${({ theme }) => (theme.navMenu === true ? '0' : '100%')};
        align-items: center;
        justify-content: center;
        z-index: 120;
        transition: all 0.4s ease-in-out;
    }
`;
const Profile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1.4rem;
    img {
        width: ${({ theme }) =>
            theme.navTextName === 'home' || theme.navTextName === 'contact'
                ? '180px'
                : '70px'};
        height: ${({ theme }) =>
            theme.navTextName === 'home' || theme.navTextName === 'contact'
                ? '180px'
                : '70px'};
        object-fit: cover;
        border-radius: 50%;
        transition: all 0.4s ease;

        @media (max-width: 992px) {
            height: 180px;
            width: 180px;
        }
    }
    h1 {
        color: #212529;
        font-size: ${({ theme }) =>
            theme.navTextName === 'home' || theme.navTextName === 'contact'
                ? ''
                : '17px'};
        transition: all 0.4s ease;

        @media (max-width: 992px) {
            font-size: revert;
        }
    }
    button {
        font-size: 17px;
        letter-spacing: 1px;
        background-color: #0bceaf;
        outline: none;
        border: none;
        padding: 1rem 2.5rem;
        border-radius: 1.4rem;
        font-weight: 300;
        color: #fff;
        display: ${({ theme }) =>
            theme.navTextName === 'home' || theme.navTextName === 'contact'
                ? 'inline'
                : 'none'};

        @media (max-width: 992px) {
            display: inline;
        }
    }
`;
const Navbar = styled.nav`
    ul {
        display: grid;
        grid-template-columns: ${({ theme }) =>
            theme.navTextName === 'home' || theme.navTextName === 'contact'
                ? 'auto auto auto'
                : 'auto'};
        list-style-type: none;
        grid-gap: ${({ theme }) =>
            theme.navTextName === 'home' || theme.navTextName === 'contact'
                ? '2rem 0'
                : '1.5rem 0'}; //2rem 0
        transition: all 0.4s ease;

        li {
            transition: all 0.4s ease;
            .nav-active {
                & span:nth-child(1) {
                    transform: translateY(0);
                }
                & span:nth-child(2) {
                    transform: translateY(0);
                    opacity: 1;
                }
            }

            & > a {
                display: flex;
                flex-direction: column;
                text-decoration: none;
                & span:nth-child(1) {
                    transform: translateY(50%);
                    transition: all 0.3s ease;
                }
                & span:nth-child(2) {
                    font-weight: 300;
                    font-size: 15px;
                    opacity: 0;
                    transform: translateY(-50%);
                    transition: all 0.3s ease;
                }
            }
            svg {
                height: 25px;
                width: 25px;
            }

            &:hover {
                & span:nth-child(1) {
                    transform: translateY(0);
                }
                & span:nth-child(2) {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        }
        @media (max-width: 992px) {
            grid-gap: 1.5rem 3rem;
            margin-top: 3rem;
            grid-template-columns: auto auto auto;
            align-items: center;
            justify-content: center;
        }
    }
`;
