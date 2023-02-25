import React, { useState } from 'react'

import { FaBars, FaTimes } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';

import '../../App.css'
import './NavBar.css'

import logo from './logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }


    return (
        <header className='container'>
            <div className="logo">
                <a href=""><img src={logo} alt="" /></a>
            </div>

            {/* full screen nav  */}
            <nav className='full_screen_nav'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/allCourses">Courses</Link></li>
                    {/* <li><a href="">About</a></li> */}
                    {/* <li><a href="">Blogs</a></li> */}
                    {/* <li><a href="">Contact</a></li> */}
                    <div className='phone'><IoCallOutline className='icon_color' /> <a  href="tel:+88016123456789">+88016123456789</a></div>
                </ul>
            </nav>


            <div onClick={handleNav} className='hamburger'>
                {
                    nav ? <FaTimes size={30} /> : <FaBars size={30} />
                }
            </div>



            {/* mobile screen nav  */}
            <nav className={nav ? 'mobile_screen_nav' : 'mobile_screen_nav_hidden'}>
                <ul>
                    <li><Link to="">Home</Link></li>
                    <li><Link to="/allCourses">Courses</Link></li>
                    {/* <li><a href="">About</a></li> */}
                    {/* <li><a href="">Blogs</a></li> */}
                    {/* <li><a href="">Contact</a></li> */}
                    <div className='phone'><IoCallOutline className='icon_color' /> <a href="">+88016123456789</a></div>
                </ul>
            </nav>


        </header>
    )
}

export default NavBar