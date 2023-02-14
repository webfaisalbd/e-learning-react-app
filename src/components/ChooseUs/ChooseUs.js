import React, { useState } from 'react'
import './ChooseUs.js.css'

import { AiFillPlayCircle } from 'react-icons/ai'

import chooseUs from './chooseUs.png';

import ReactPlayer from 'react-player';


const ChooseUs = () => {
    const [play, setPlay] = useState(false);
    // console.log(play);
    return (
        <div className='chooseUs_container'>
            <div className="chooseUs_content">
                <div>
                    <div className="chooseUs_title">
                        <h2>Why Choose Us</h2>
                    </div>
                    <div className="chooseUs_description">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia nostrum harum eos praesentium odit a sed quod aut fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit omnis, culpa eligendi inventore perspiciatis minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores cupiditate facilis provident quidem accusamus impedit tenetur laboriosam debitis nisi eius!</p>
                    </div>
                </div>
            </div>
            <div className="chooseUs_image">
                {
                    play ? <ReactPlayer controls url='https://youtu.be/ZstzwKbHdUA' width="100%" height="100%" /> : <img src={chooseUs} alt="" />
                }
                <div className='player_btn'>
                    {
                        !play && <AiFillPlayCircle className='player' onClick={() => setPlay(!play)} />
                    }
                </div>
            </div>
        </div>
    )
}

export default ChooseUs