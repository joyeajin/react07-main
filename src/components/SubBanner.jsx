import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/css';
import { Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SubBanner = () => {
    const pagination={
        clickable: true,
        el: '.pagination-box',
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    }

    return (
        <SubSlider>
            <Swiper 
                className='mySwiper'
                modules={[Navigation, Pagination, Autoplay]}
                pagination={pagination}
                navigation
                loop={true} //무한루프
                autoplay={{
                    delay:2500,
                    disableOnInteraction:false
                }}
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
                <div className='pagination-box'></div>
            </Swiper>
        </SubSlider>
    );
};

export default SubBanner;

const SubSlider = styled.div`
    width:1200px;
    margin:1rem auto;
    & .swiper-slide img{
        width:100%
    }

    & .mySwiper .pagination-box{
        display:flex;
        justify-content:center;
        margin-top:1rem;
    }
    & .mySwiper .pagination-box .swiper-pagination-bullet{
        width:24px;
        height:24px;
        opacity:1;
        border:2px solid transparent;
        font-size:0;
    }
    & .mySwiper .pagination-box .swiper-pagination-bullet .swiper-pagination-bullet-active{
        border-color:#007aff
    }
    & .mySwiper .pagination-box .swiper-pagination-bullet:nth-of-type(1){
        background:url(./img/slide/thumb01.png) center / cover;
    }
    & .mySwiper .pagination-box .swiper-pagination-bullet:nth-of-type(2){
        background:url(./img/slide/thumb02.png) center / cover;

    }
    & .mySwiper .pagination-box .swiper-pagination-bullet:nth-of-type(3){
        background:url(./img/slide/thumb03.png) center / cover;

    }
    & .mySwiper .pagination-box .swiper-pagination-bullet:nth-of-type(4){
        background:url(./img/slide/thumb04.png) center / cover;

    }
    & .mySwiper .pagination-box .swiper-pagination-bullet:nth-of-type(5){
        background:url(./img/slide/thumb05.png) center / cover;

    }

`