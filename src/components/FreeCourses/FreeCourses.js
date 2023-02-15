import React from 'react'

import './FreeCourses.css';

import { BsPeople, BsStarFill } from 'react-icons/bs';

import coursesData from '../../courseData/courseData';

const FreeCourses = () => {
    return (
        <div className='freeCourses_container'>
            <div className="freeCourses_box">
                {
                    coursesData.filter((course) => {
                        return course.paymentType === 'unpaid';
                    })
                        .slice(0,4)
                        .map((course) => {
                            return <div key={course.id} className="freeCourses_item">
                                <div className="freeCourses_img">
                                    <img src={course.imgUrl} alt="" />
                                    <button className='free_btn'>Free</button>
                                </div>
                                <div className="freeCourses_content">
                                    <p className="course_title">{course.title}</p>
                                    <div className="icons_box">
                                        <div className="icons_pair">
                                            <span className='icon_style'><BsPeople /></span>
                                            <span>{course.students} K</span>
                                        </div>
                                        <div className="icons_pair">
                                            <span className='icon_style'><BsStarFill /></span>
                                            <span>{course.rating} K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                }
            </div>
        </div>
    )
}

export default FreeCourses