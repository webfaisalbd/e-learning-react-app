import React from 'react'
import './HeroSection.css'
import heroImage from './hero-section1.png'

const HeroSection = () => {
    return (
        <div className='hero_container'>
            <div className="hero_content">
                <div className='content_box'>
                    <div className='first_quote'>
                        <h2>AnyTime Anywhere</h2>
                        <h2>Learn Your Suitable Time</h2>
                    </div>
                    <div className='last_quote'>
                        <p>Anyone who stops learning is old, whether at twenty or eighty.</p>
                        <p className='explore_courses'><a href="">Explore Courses</a></p>
                    </div>
                    <div className='hero_search'>
                        <input type="text" placeholder='Search' />
                        <button>Search</button>
                    </div>
                </div>
            </div>
            <div className="hero_image">
                <img src={heroImage} alt="" />
            </div>
        </div>
    )
}

export default HeroSection