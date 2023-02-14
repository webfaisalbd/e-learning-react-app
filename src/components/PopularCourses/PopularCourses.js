import React from 'react'
import './PopularCourses.css'

import { BsBook, BsPeople, BsStarFill } from 'react-icons/bs';

import courseData from '../../courseData/courseData';
// console.log(courseData);

const PopularCourses = () => {
  return (
    <div className='popular_courses_container'>
      <div className="popular_courses_content">
        <h2>Our Popular Courses</h2>
        <div className="popular_courses_sub_content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequatur libero quod voluptatibus ullam quia quas, vitae voluptatem recusandae reprehenderit!</p>
          <button className='btn'>See All</button>
        </div>
      </div>
      <div className="popular_courses_card_box">
        {
          courseData.filter((singleCourse) => {
            return singleCourse.rating > 4.5;
          })
            .slice(0, 3)
            .map((singleCourse) => {
              return <div key={singleCourse.id} className="single_card">
                <div className="single_card_img">
                  <img src={singleCourse.imgUrl} alt="" />
                </div>
                <div className="single_card_content">
                  <p className='course_title'>{singleCourse.title}</p>
                  <div className='course_descripton'>
                    <div className='course_description_box'>
                      <div className='lesson_student'>
                        <span className='icon'><BsBook /></span>
                        <span>{singleCourse.lesson} Lessons</span>
                      </div>
                      <div className='lesson_student'>
                        <span className='icon'><BsPeople /></span>
                        <span>{singleCourse.students} K</span>
                      </div>
                    </div>
                    <div className='course_description_box'>
                      <div className='lesson_student'>
                        <span className='icon'><BsStarFill /></span>
                        <span>{singleCourse.rating} K</span>
                      </div>
                      <div className='lesson_student'>
                        <span className='enroll'>Enroll Now</span>
                      </div>
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

export default PopularCourses