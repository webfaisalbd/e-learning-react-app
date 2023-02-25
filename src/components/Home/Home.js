import React from 'react'

import '../../App.css';

import AboutUs from '../AboutUs/AboutUs'
import ChooseUs from '../ChooseUs/ChooseUs'
import CourseNameSlider from '../CourseNameSlider/CourseNameSlider'
import Features from '../Features/Features'
import Footer from '../Footer/Footer';
import FreeCourses from '../FreeCourses/FreeCourses'
import HeroSection from '../HeroSection/HeroSection'
import Newsletter from '../Newsletter/Newsletter'
import PopularCourses from '../PopularCourses/PopularCourses'
import Testimonial from '../Testimonial/Testimonial'

const Home = () => {
    return (
        <>
            <div className='container'>
                <HeroSection />
                <CourseNameSlider />
                <AboutUs />
                <PopularCourses />
                <ChooseUs />
                <Features />
                <FreeCourses />
                <Testimonial />
                <Newsletter />
            </div>
            <Footer />
        </>
    )
}

export default Home