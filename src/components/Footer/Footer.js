import React from 'react'

import { BsLinkedin, BsFacebook, BsInstagram } from 'react-icons/bs'

import './Footer.css'

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className="footer_box">
                <div className="multiple_box">
                    <div className="single_item_box">
                        <div className="single_item">
                            <a href=""><img src="./logo.png" alt="logo" /></a>
                            <div className="footer_social_icons">
                                <BsLinkedin className='social_icons' />
                                <BsFacebook className='social_icons' />
                                <BsInstagram className='social_icons' />
                            </div>
                        </div>
                        <div className="single_item">
                            <h4>Explore</h4>
                            <p>Home</p>
                            <p>About Us</p>
                            <p>Courses</p>
                            <p>Blog</p>
                        </div>
                    </div>
                    <div className="single_item_box">
                        <div className="single_item">
                            <h4>Information</h4>
                            <p>Privacy Policy</p>
                            <p>Membership</p>
                            <p>Purchase Guide</p>
                            <p>Terms of Service</p>
                        </div>
                        <div className="single_item">
                            <h4>Get in Touch</h4>
                            <p>Dhaka, Bangladesh</p>
                            <p>Phone: +8801612345678</p>
                            <p>Email: web.faisal.bd@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer