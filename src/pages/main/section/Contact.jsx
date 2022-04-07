import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../../context/context';
import styled from 'styled-components';
import { db } from '../../../firebase';
import { addDoc, collection } from 'firebase/firestore';

const Contact = () => {
    const { setNavTextName } = useContext(Context);
    const { contact } = useParams();
    const [data, setData] = useState({
        name: '',
        email: '',
        message: '',
        loading: false,
    });

    useEffect(() => {
        setNavTextName(contact);
    });

    const { name, email, message, loading } = data;

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        setData({ ...data, loading: true });

        try {
            await addDoc(collection(db, 'users'), {
                name: name,
                email: email,
                message: message,
            });
            setData({
                name: '',
                email: '',
                message: '',
                loading: false,
            });

            // console.log('Document written with ID: ', docRef.id);
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    };

    return (
        <ContactSection>
            <ContactMe>
                <h1>Contact Me</h1>

                <ul>
                    <li>
                        <span>
                            <img src="../images/location.svg" alt="location" />
                        </span>
                        <p>
                            <strong>Address: </strong>Dhaka, Bangladesh
                        </p>
                    </li>
                    <li>
                        <span>
                            <img src="../images/phone.svg" alt="phone" />
                        </span>
                        <p>
                            <strong>Phone: </strong>+8801865696427
                        </p>
                    </li>
                    <li>
                        <span>
                            <img src="../images/email.svg" alt="email" />
                        </span>
                        <p>
                            <strong>Email: </strong>mr.hrithibiswas@gmail.com
                        </p>
                    </li>
                </ul>
            </ContactMe>
            <SentMessage>
                <h1>Send your message</h1>
                <form action="" onSubmit={submitHandler}>
                    <div>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                required
                                value={name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                value={email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id=""
                            rows="5"
                            value={message}
                            onChange={handleChange}
                            placeholder="Write your message"
                            required
                        ></textarea>
                    </div>
                    <button type="submit">
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </SentMessage>
        </ContactSection>
    );
};

export default Contact;

const ContactSection = styled.section`
    display: flex;
    justify-content: center;
    box-shadow: 1px 5px 29px -7px rgb(0 0 0 / 30%);

    position: relative;
    transform: translateY(-50%);
    top: 50%;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const ContactMe = styled.div`
    flex-basis: 300px;
    background-color: #5ccd95;
    padding: 2rem 1rem;
    color: #fff;

    h1 {
        margin-bottom: 1.5rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        row-gap: 1rem;

        li {
            display: flex;
            align-items: center;
            column-gap: 1rem;

            span {
                box-shadow: 0px 0px 3px 0px rgba(255, 255, 255, 0.9);

                padding: 5px 8px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                height: 30px;
                width: 30px;
            }

            p {
                color: rgba(255, 255, 255, 0.95);
                font-weight: 300;
                strong {
                    color: #fff;
                    font-weight: 600;
                    margin-right: 5px;
                }
            }
        }

        @media (max-width: 668px) {
            row-gap: 1rem;
        }
    }
    @media (max-width: 768px) {
        flex-basis: 250px;
        padding: 1rem 1rem;

        h1 {
            margin-bottom: 1rem;
        }
    }
`;
const SentMessage = styled.div`
    flex-basis: 600px;
    padding: 2rem 2rem;

    h1 {
        margin-bottom: 1.5rem;
    }

    form {
        & > div {
            display: flex;
            justify-content: space-between;
            column-gap: 1rem;

            div {
                display: flex;
                flex-direction: column;
                width: 100%;
                row-gap: 0.5rem;
                margin-bottom: 2rem;

                input {
                    display: block;
                    width: 100%;
                    padding: 0.375rem 0.75rem;
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 1.5;
                    color: #212529;
                    background-color: #fff;
                    background-clip: padding-box;
                    border: 1px solid #ced4da;
                    border-radius: 0.25rem;
                    outline: none;
                    transition: border-color 0.15s ease-in-out,
                        box-shadow 0.15s ease-in-out;
                }
                @media (max-width: 768px) {
                    margin-bottom: 1rem;
                }
            }

            @media (max-width: 668px) {
                flex-direction: column;
            }
        }
        & div:nth-child(2) {
            display: flex;
            flex-direction: column;
            row-gap: 0.5rem;

            textarea {
                display: block;
                width: 100%;
                padding: 0.375rem 0.75rem;
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                color: #212529;
                background-color: #fff;
                background-clip: padding-box;
                border: 1px solid #ced4da;
                border-radius: 0.25rem;
                outline: none;
                resize: none;
                transition: border-color 0.15s ease-in-out,
                    box-shadow 0.15s ease-in-out;
            }
        }
    }

    button {
        background-color: #5ccd95;
        border: none;
        outline: none;
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        padding: 0.5rem 1rem;
        margin-top: 1rem;
        border-radius: 0.25rem;
        text-align: center;
    }

    @media (max-width: 768px) {
        flex-basis: 400px;
        padding: 1rem 1rem;

        h1 {
            margin-bottom: 1rem;
        }
    }
`;
