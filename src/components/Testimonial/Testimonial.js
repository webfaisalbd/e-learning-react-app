// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


import "./Testimonial.css";
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

import testimonialData from '../../testimonialData/testimonialData'
// console.log(testimonialData);


export default function Testimonial() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={50}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    900: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    testimonialData.map((singleData)=> {
                        return <SwiperSlide key={singleData.id} className="testimonial_singleItem">
                        <div className="design_box">
                            <div className="text_box">
                                <p>{singleData.desc}</p>
                                <FaQuoteLeft className="quoteLeft" />
                                <FaQuoteRight className="quoteRight" />
                            </div>
                            <div className="img_text_flex">
                                <div className="img_box">
                                    <img src={singleData.img} alt="" />
                                </div>
                                <div>
                                    <h3>{singleData.personName}</h3>
                                    <p>{singleData.profession}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    })
                }
                
            </Swiper>
        </>
    );
}
