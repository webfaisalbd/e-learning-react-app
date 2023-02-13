import React from 'react'

import './AboutUs.css'

import aboutImage from './about.png'

const AboutUs = () => {
    return (
        <div className='about_container'>

            <div className="about_image">
                <img src={aboutImage} alt="" />
            </div>

            <div className="about_content">
                <div>
                    <div className="about_title">
                        <h2>About Us</h2>
                    </div>
                    <div className='about_description'>
                        <h3>Choose from top industry instructors</h3>
                        <p>An online course is a program of learning that's organized according to a syllabus and that takes place in a virtual space.</p>
                    </div>
                    <div className='about_counter'>
                        <div className="single_counter_box">
                            <div className='single_counter'>
                                <h2>15K</h2>
                                <p>Different Courses</p>
                            </div>
                            <div className='single_counter'>
                                <h2>10M</h2>
                                <p>Running Students</p>
                            </div>
                        </div>
                        <div className="single_counter_box">
                            <div className='single_counter'>
                                <h2>8k</h2>
                                <p>Course Instructor</p>
                            </div>
                            <div className='single_counter'>
                                <h2>4k</h2>
                                <p>Support Trainer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutUs