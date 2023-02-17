import React from 'react'

import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className='newsletter_container'>
            <div className="newsletter_box">
                <div className="newsletter_heading">
                    <h2>Subscribe Our Newsletter</h2>
                </div>
                <div className="newsletter_input_box">
                    <input type="email" placeholder='Email' />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter