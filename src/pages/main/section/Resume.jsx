import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Context } from '../../../context/context';
import SubtitleBorder from '../../../components/SubtitleBorder';
import ProgressBar from '../../../components/ProgressBar';
import Hr from '../../../components/Hr';

const Resume = () => {
    const { setNavTextName } = useContext(Context);
    const currentPathname = window.location.pathname;
    const currentPageName = currentPathname.substring(1);

    useEffect(() => {
        setNavTextName(currentPageName);
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
                        <span>2022 - 2023</span>
                        <h3>MBA</h3>
                        <p>Government Titumir College</p>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                    <div>
                        <span>2018- 2022</span>
                        <h3>BBA - Honors</h3>
                        <p>Government Titumir College</p>
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
            <Learning>
                <h1>
                    <span>
                        <img src="../images/experience.svg" alt="education" />
                    </span>
                    Learning Hub
                </h1>
                <SubtitleBorder />
                <LearningContent>
                    <div>
                        <span>2025</span>
                        <h3>Next.js App Router Fundamentals</h3>
                        <p>
                            <strong>Resorces: </strong>
                            <a href="https://nextjs.org/learn" target="blank">
                                nextjs.org
                            </a>
                        </p>
                    </div>
                    <div>
                        <span>2021-At present</span>
                        <h3>Front-end Web Development</h3>
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
                        <span>2022-At present</span>
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
                        <span>2021-2022</span>
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
                </LearningContent>
            </Learning>
            <Experience>
                <h1>
                    <span>
                        <img src="../images/briefcase.svg" alt="briefcase" />
                    </span>
                    Working Exeperience
                </h1>
                <SubtitleBorder />
                <ExperienceContent>
                    <ul>
                        <li>
                            🛠️ Expertise in HTML, CSS, JavaScript, and modern
                            JavaScript features like ES6.
                        </li>
                        <li>
                            🎨 Proficient with SASS, SCSS, and CSS frameworks
                            like Tailwind CSS, Bootstrap 5, etc.
                        </li>
                        <li>
                            🔄 Converting PSD/Figma to HTML5, CSS3, React.js,
                            and Next.js.
                        </li>
                        <li>
                            🖌️ Strong understanding of Front-End UI Frameworks:
                            Next UI, Shade CN, Bootstrap, React Bootstrap,
                            Material-UI, and Tailwind-UI.
                        </li>
                        <li>
                            🛠️ Fixing any HTML, CSS, and UI issues in React.js
                            and Next.js.
                        </li>
                        <li>📊 Knowledge of databases such as MySQL.</li>
                        <li>
                            🔌 Working experience with WordPress REST API
                            Integration.
                        </li>
                        <li>
                            🧩 Ability to implement any front-end plugin in an
                            existing project.
                        </li>
                        <li>
                            🗂️ Proficient with version control systems like Git.
                        </li>
                        <li>
                            📦 Experienced with front-end build tools and
                            package managers like Webpack and npm.
                        </li>
                        <li>
                            📈 Staying updated with the latest web development
                            trends and technologies.
                        </li>
                        <li>
                            🧠 Deep knowledge of design patterns and front-end
                            architecture.
                        </li>
                        <li>
                            🛠️ Problem-solving and communication skills that
                            ensure smooth project delivery.
                        </li>
                    </ul>
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
                                <strong>Next.js</strong>{' '}
                                <ProgressBar
                                    percentageOfSkill="85"
                                    progressColor="#57cc99"
                                />
                            </li>
                            <li>
                                <strong>Axios</strong>{' '}
                                <ProgressBar
                                    percentageOfSkill="55"
                                    progressColor="#7c5cb1"
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
                        <h3>Database</h3>
                        <Hr />
                        <ul>
                            <li>
                                <strong>MySql</strong>{' '}
                                <ProgressBar
                                    percentageOfSkill="65"
                                    progressColor="#ffb700"
                                />
                            </li>
                            <li>
                                <strong>MongoDB</strong>{' '}
                                <ProgressBar
                                    percentageOfSkill="45"
                                    progressColor="#199555"
                                />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>CMS</h3>
                        <Hr />
                        <ul>
                            <li>
                                <strong>Wordpress</strong>{' '}
                                <ProgressBar
                                    percentageOfSkill="60"
                                    progressColor="#08789E"
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
                                <strong>Vite</strong>{' '}
                                <ProgressBar
                                    percentageOfSkill="65"
                                    progressColor="#9174FD"
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
                        <p className="duration">January 2021 - June 2021</p>
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
                    <div>
                        <h3>Next.js App Router Fundamentals course</h3>
                        <p className="duration">April 2025 - May 2025</p>
                        <p>
                            <strong>View: </strong>{' '}
                            <a
                                href="https://nextjs.org/learn/certificate?course=dashboard-app&user=53433&certId=dashboard-app-53433-1752941505654"
                                target="blank"
                            >
                                certificate
                            </a>
                        </p>
                    </div>
                    <div>
                        <h3>
                            Web Design & Wordpress Theme Development, DreamLand
                            IT Institute
                        </h3>
                        <p className="duration">July 2022 – October 2022</p>
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
const Learning = styled(Education)`
    margin-top: 5rem;
`;

const LearningContent = styled(ContentBlog)`
    div {
        h3 {
            letter-spacing: 1.5px;
        }
    }
`;
const Experience = styled(Learning)``;
const ExperienceContent = styled.div`
    ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        row-gap: 0.8rem;
        font-size: 16px;
        color: #000000;
        margin-top: 3rem;
    }
`;
const Skills = styled(Learning)``;
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
const Certificate = styled(Learning)``;
const CertificateContent = styled(LearningContent)`
    h3 {
        margin-bottom: 0rem !important;
    }
    .duration {
        font-size: 14px;
        color: #595959d;
    }
`;
