import '../main.css'
import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

function CarouselLatestWorks() {


    return (
        <div className='carouselContainer'>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                grabCursor={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='slide-1'>
                    <img src="./Carousel-1@2x.jpg" alt="" />
                    <div className='carouselTextBox'>
                        <h1>KOURTNEY ROY</h1>
                        <h2>Ilulissat 03, 2014</h2>
                        <h3>£5000</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide-2'>
                    <img src="./Carousel-2@2x.jpg" alt="" />
                    <div className='carouselTextBox'>
                        <h1>OLAF OTTO BECKER</h1>
                        <h2>Chicago, 1976</h2>
                        <h3>£5000</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide-3'>
                    <img src="./Carousel-3@2x.jpg" alt="" />
                    <div className='carouselTextBox'>
                        <h1>KOURTNEY ROY</h1>
                        <h2>Ilulissat 03, 2014</h2>
                        <h3>£5000</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide-4'>
                    <img src="./Carousel-4@2x.jpg" alt="" />
                    <div className='carouselTextBox'>
                        <h1>OLAF OTTO BECKER</h1>
                        <h2>Chicago, 1976</h2>
                        <h3>£5000</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default CarouselLatestWorks