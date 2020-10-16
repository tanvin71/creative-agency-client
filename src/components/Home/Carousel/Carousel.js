import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import'./Carousel.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from "swiper";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import slide1 from '../../../images/carousel-1.png';
import slide2 from '../../../images/carousel-2.png';
import slide3 from '../../../images/carousel-4.png';


const Carousel = () => {
    
    return (

        <div className="carousel">
            <h1 className="text-center text-white pt-5 mb-5"> Here are some of  <span>our works</span> </h1>
            <Swiper
            navigation
            pagination={{ clickable: true }}
            spaceBetween={50}
            autoplay={{delay: 2000}}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img src={slide1} className="img-fluid w- 25" alt=""/></SwiperSlide>
            <SwiperSlide><img src={slide2} className="img-fluid w- 25" alt=""/></SwiperSlide>
            <SwiperSlide><img src={slide3} className="img-fluid w- 25" alt=""/></SwiperSlide>
            <SwiperSlide><img src={slide1} className="img-fluid w- 25" alt=""/></SwiperSlide>
        </Swiper>
        </div>
        
        
    );
};

export default Carousel;