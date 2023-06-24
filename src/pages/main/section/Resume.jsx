import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Context } from '../../../context/context';
import SubtitleBorder from '../../../components/SubtitleBorder';
import ProgressBar from '../../../components/ProgressBar';
import Hr from '../../../components/Hr';

const Resume = () => {
    const { setNavTextName } = useContext(Context);
    const { resume } = useParams();

    useEffect(() => {
        setNavTextName(resume);
    });
    return (
        <Section>
            <Education>
                <h1>
                    <span>
                        <img src="../images/education.svg" alt="education" />
                    </span>
                    Education
                </h1>
                <SubtitleBorder />
                <ContentBlog>
                    <div>
                        <span>2018- 2022</span>
                        <h3>BBA - Honors</h3>
                        <p>Government of Titumir College</p>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                    <div>
                        <span>2016-2017</span>
                        <h3>HSC</h3>
                        <p>AKM Rahmatulla University & College</p>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                    <div>
                        <span>2014- 2015</span>
                        <h3>SSC</h3>
                        <p>St. Nicholas High School & College</p>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </ContentBlog>
            </Education>
            <Experience>
                <h1>
                    <span>
                        <img src="../images/experience.svg" alt="education" />
                    </span>
                    Experience
                </h1>
                <SubtitleBorder />
                <ExperienceContent>
                    <div>
                        <span>2020-At present</span>
                        <h3>Front-end Web Developer</h3>
                        <p>
                            <strong>Resorces: </strong>
                            <a href="https://www.w3schools.com/" target="blank">
                                w3school.com
                            </a>
                            ,
                            <a
                                href="https://www.freecodecamp.org/learn/front-end-development-libraries/"
                                target="blank"
                            >
                                {' '}
                                freecodecamp.com
                            </a>
                        </p>
                    </div>
                    <div>
                        <span>2021-At present</span>
                        <h3>React Developer</h3>
                        <p>
                            <strong>Resorces: </strong>
                            <a href="https://reactjs.org/" target="balnk">
                                reactjs.org
                            </a>
                            ,
                            <a href="https://www.w3schools.com/" target="blank">
                                {' '}
                                w3schools.com
                            </a>
                            ,
                            <a
                                href="https://www.freecodecamp.org/learn/front-end-development-libraries/"
                                target="blank"
                            >
                                {' '}
                                freecodecamp.com
                            </a>
                        </p>
                    </div>
                    <div>
                        <span>2021-At present</span>
                        <h3>Problem Solver</h3>
                        <p>
                            <strong>Resorces: </strong>
                            <a
                                href="https://www.hackerrank.com/dashboard"
                                target="blank"
                            >
                                hackerrank.com
                            </a>
                        </p>
                    </div>
                    <div>
                        <span>2021-At present</span>
                        <h3>Responsive Web Designer</h3>
                        <p>
                            <strong>Resorces: </strong>
                            <a
                                href="https://www.freecodecamp.org/learn/responsive-web-design/"
                                target="blank"
                            >
                                freecodecamp.com
                            </a>
                        </p>
                    </div>
                    <div>
                        <span>2020-2021</span>
                        <h3>PhotoShop</h3>
                        <p>
                            <strong>Resorces: </strong>
                            <a
                                href="https://www.udemy.com/course/master-web-design-in-photoshop/"
                                target="blank"
                            >
                                Udemy
                            </a>
                        </p>
                    </div>
                </ExperienceContent>
            </Experience>
            <Skills>
                <h1>
                    <span>
                        <img src="../images/skill.svg" alt="skills" />
                    </span>
                    Skills
                </h1>
                <SubtitleBorder />
                <SkillsContent>
                    <div>
                        <h3>Programming Language</h3>
                        <Hr />
                        <ul>
                            <li>
                                <strong>HTML5</strong>{' '}
                                <ProgressBar
                                    percentageOfSkill="95"
                                    progressColor="#E34C26"
                                />
                            </li>
                            <li>
                                <strong>CSS</strong>{' '}
                                <ProgressBar
                                    percentageOfSkill="90"
                                    progressColor="#264DE4"
                                />
                            </li>
                            <li>
                                <strong>Sass</strong>{' '}
                                <ProgressBar
                                    percentageOfSkill="80"
                                    progressColor="#CC6699"
                                />
                            </li>
                            <li>
                                <strong>Javascript</strong>{' '}
                                <ProgressBar
                                    percentageOfSkill="75"
                                    progressColor="#F7DF1E"
                                />
                            </li>
                            <li>
                                <strong>PHP</strong>{' '}
                                <ProgressBar
                                    percentageOfSkill="65"
                                    progressColor="#8892BE"
                                />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Libraries</h3>
                        <Hr />
                        <ul>
                            <li>
                                <strong>React</strong>{' '}
                                <ProgressBar
                                    percentageOfSkill="85"
                                    progressColor="#61DBFB"
                                />
                            </li>
                            <li>
                                <strong>Jquery</strong>{' '}
                                <ProgressBar
                                    percentageOfSkill="55"
                                    progressColor="#0865A7"
                                />
                            </li>
                            <li>
                                <strong>Bootstrap5</strong>{' '}
                                <ProgressBar
                                    percentageOfSkill="80"
                                    progressColor="#563D7C"
                                />
                            </li>
                            <li>
                                <strong>Tailwind Css</strong>{' '}
                                <ProgressBar
                                    percentageOfSkill="95"
                                    progressColor="#38BDF8"
                                />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Technologies & Others</h3>
                        <Hr />
                        <ul>
                            <li>
                                <strong>Git & Github</strong>{' '}
                                <ProgressBar
                                    percentageOfSkill="75"
                                    progressColor="#F05033"
                                />
                            </li>
                            <li>
                                <strong>Webpack5</strong>{' '}
                                <ProgressBar
                                    percentageOfSkill="65"
                                    progressColor="#1C78C0"
                                />
                            </li>
                            <li>
                                <strong>Npm & Yarn</strong>{' '}
                                <ProgressBar
                                    percentageOfSkill="95"
                                    progressColor="#CC3534"
                                />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Adobe</h3>
                        <Hr />
                        <ul>
                            <li>
                                <strong>Adobe Photoshop</strong>{' '}
                                <ProgressBar
                                    percentageOfSkill="57"
                                    progressColor="#001834"
                                />
                            </li>
                            <li>
                                <strong>Adobe XD</strong>{' '}
                                <ProgressBar
                                    percentageOfSkill="20"
                                    progressColor="#FF61F6"
                                />
                            </li>
                            <li>
                                <strong>Adobe Illustrator</strong>{' '}
                                <ProgressBar
                                    percentageOfSkill="15"
                                    progressColor="#FF9A00"
                                />
                            </li>
                        </ul>
                    </div>
                </SkillsContent>
            </Skills>
            <Certificate>
                <h1>
                    <span>
                        <img src="../images/education.svg" alt="education" />
                    </span>
                    Certificate
                </h1>
                <SubtitleBorder />
                <CertificateContent>
                    <div>
                        <h3>Responsive Web Designe</h3>
                        <p>
                            <strong>View: </strong>{' '}
                            <a
                                href="https://www.freecodecamp.org/certification/biswas/responsive-web-design"
                                target="blank"
                            >
                                certificate
                            </a>
                        </p>
                    </div>
                </CertificateContent>
            </Certificate>
        </Section>
    );
};

export default Resume;

const Section = styled.section``;
const Education = styled.div`
    & > h1 {
        color: #0cc0de;
        font-size: 25px;
        font-weight: 600;
        display: flex;
        align-items: center;
        span {
            display: inline-flex;
            margin-right: 10px;
        }
    }
`;
const ContentBlog = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-row-gap: 3rem;
    margin-top: 3rem;

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 0.3rem;

        span {
            background-color: #0cc0de;
            border-radius: 0.5rem;
            font-size: 15px;
            color: #fff;
            padding: 5px;
            font-weight: 600;
        }

        h3 {
            letter-spacing: 4px;
            margin-bottom: 0.5rem;
        }
        p {
            color: #595959;
            font-size: 16px;
        }

        &:nth-child(2) span {
            background-color: #fbdd62;
        }
        &:nth-child(3) span {
            background-color: #ff5380;
        }
        &:nth-child(4) span {
            background-color: #0bceaf;
        }
    }

    @media (max-width: 768px) {
        grid-template-columns: auto;
        margin-top: 1.5rem;
        grid-row-gap: 2rem;

        div {
            h3 {
                margin-bottom: 0.3rem;
            }
            p {
                margin: -2px 0;
            }
        }
    }
`;
const Experience = styled(Education)`
    margin-top: 5rem;
`;

const ExperienceContent = styled(ContentBlog)`
    div {
        h3 {
            letter-spacing: 1.5px;
        }
    }
`;
const Skills = styled(Experience)``;
const SkillsContent = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-row-gap: 3rem;
    margin-top: 3rem;

    div {
        /* width: 100%; */
        h3 {
            letter-spacing: 1.5px;
            /* margin-bottom: 1rem; */
        }
        ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            row-gap: 1rem;
            width: 90%;

            li {
                display: flex;
                flex-direction: column;
                row-gap: 0.3rem;
                strong {
                    font-size: 15px;
                }
            }
        }
    }

    @media (max-width: 768px) {
        grid-template-columns: auto;
        margin-top: 1.2rem;
        grid-row-gap: 1.5rem;

        div {
            ul {
                row-gap: 0.5rem;
                li {
                    row-gap: 0;
                }
            }
        }
    }
`;
const Certificate = styled(Experience)``;
const CertificateContent = styled(ExperienceContent)``;
