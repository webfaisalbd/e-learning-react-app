import React, { useEffect, useState } from 'react'

import './AllCourses.css'

import { BsBook, BsPeople, BsStarFill } from 'react-icons/bs';

import courseData from '../../courseData/courseData';
// console.log(courseData);

const AllCourses = () => {

    const [data, setData] = useState(courseData);

    const [pageData, setPageData] = useState([]);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);


    const handleNext = () => {
        if (page === pageCount) {
            return page;
        } else {
            setPage(page + 1)
        }
    }

    const handlePrevious = () => {
        if (page === 1) {
            return page;
        } else {
            setPage(page - 1)
        }

    }

    useEffect(() => {
        const pagedatacount = Math.ceil(data.length / 6);
        setPageCount(pagedatacount);

        if (page) {
            const LIMIT = 6;
            const skip = LIMIT * page;
            const dataskip = data.slice(page === 1 ? 0 : skip - LIMIT, skip);
            setPageData(dataskip);
        }
    }, [page])


    return (
        <div className='allCourses_container'>
            <div className="allCourses_heading">
                <h2>Get Our All Courses Here </h2>
            </div>

            {/* pagination start */}
            <div className="pagination">
                <div>
                    <button onClick={handlePrevious} disabled={page === 1}>Previous</button>
                    {
                        Array(pageCount).fill(null).map((e, index) => {
                            return <button className={`${page == index + 1 ? 'active' : ''}`} onClick={() => setPage(index + 1)}>{index + 1}</button>
                        })
                    }
                    <button onClick={handleNext} disabled={page === pageCount}>Next</button>
                </div>
            </div>
            {/* pagination end */}

            <div className="allCourses_box">
                {
                    pageData.length > 0 ?
                        pageData.map((singleCourse) => {
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
                        :
                        <div>Loading</div>
                }
            </div>


        </div>
    )
}

export default AllCourses;