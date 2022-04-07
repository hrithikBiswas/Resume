import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../lib/style/swiper.css';
import { Pagination } from 'swiper';
import styled from 'styled-components';

const SwiperContent = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Wrapper>
                        <p>
                            "My motivation is customer satisfaction. Trust me
                            and trust your growth asset management to my
                            expertise gained over the years. My goal is
                            continuous achievement.!"
                        </p>
                        <div>
                            <img src="../images/user.png" alt="user" />
                            <div>
                                <p>Lord Beratheon</p>
                                <span>King of 7 kingdom</span>
                            </div>
                        </div>
                    </Wrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <Wrapper>
                        <p>
                            "My motivation is customer satisfaction. Trust me
                            and trust your growth asset management to my
                            expertise gained over the years. My goal is
                            continuous achievement.!"
                        </p>
                        <div>
                            <img src="../images/user.png" alt="user" />
                            <div>
                                <p>Lord Beratheon</p>
                                <span>King of 7 kingdom</span>
                            </div>
                        </div>
                    </Wrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <Wrapper>
                        <p>
                            "My motivation is customer satisfaction. Trust me
                            and trust your growth asset management to my
                            expertise gained over the years. My goal is
                            continuous achievement.!"
                        </p>
                        <div>
                            <img src="../images/user.png" alt="user" />
                            <div>
                                <p>Lord Beratheon</p>
                                <span>King of 7 kingdom</span>
                            </div>
                        </div>
                    </Wrapper>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SwiperContent;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    justify-content: center;
    align-items: center;

    & > p {
        font-size: 22px;
        font-style: italic;

        @media (max-width: 668px) {
            font-size: 20px;
        }
    }
    div {
        display: flex;
        column-gap: 1rem;
        img {
            width: 60px;
            height: 60px;
        }
        div {
            display: flex;
            row-gap: 0.5rem;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
`;
