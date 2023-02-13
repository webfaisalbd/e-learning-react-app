import React from 'react'

import './CourseNameSlider.css'

import { SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiPhp, SiLaravel, SiPostgresql, SiAdobephotoshop, SiPython } from "react-icons/si";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const coursesName = [<SiHtml5 />, <SiBootstrap />, <SiTailwindcss />, <SiJavascript />, <SiReact />, <SiNodedotjs />, <SiExpress />, <SiMongodb />, <SiCss3 />, <SiPhp />, <SiLaravel />, <SiPostgresql />, <SiAdobephotoshop />, <SiPython />]


const CourseNameSlider = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 7000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='courseNameContainer'>

            <Slider {...settings}>

                {
                    coursesName.map((singleCourse, i) => {
                        return <div className='course_box' key={i}>
                            <div className="course_item">{singleCourse}</div>
                        </div>
                    })
                }


            </Slider>
        </div>
    )
}

export default CourseNameSlider