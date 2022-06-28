import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/css';
import { Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Mainbanner = () => {
    return (
        <MainSlider>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                loop={true} //무한루프
                autoplay={{
                    delay:2500,
                    disableOnInteraction:false
                }}
                pagination={{ clickable: true }}
                spaceBetween={0} //슬라이더 사이의 마진
                slidesPerView={1} //한번에 보여지는 슬라이더 개수
                onSlideChange={() => console.log('slide change')} //슬라이드를 넘길때마다 호출됨
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide><img src="./img/slide/slide01.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./img/slide/slide02.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./img/slide/slide03.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./img/slide/slide04.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./img/slide/slide05.png" alt="" /></SwiperSlide>
            </Swiper>
        </MainSlider>
    );
};

export default Mainbanner;

const MainSlider = styled.div`
    width:1200px;
    background:#f00;
    margin:1rem auto;
    & .swiper-slide img{
        width:100%
    }
`