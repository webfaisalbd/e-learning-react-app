import React from 'react'

import './Features.css';

import featuresData from '../../featuresData/featuresData';
// console.log(featuresData);

const Features = () => {
    return (
        <div className='features_container'>
            <div className="features_box">
                {
                    featuresData.map((singleFeature) => {
                        return <div key={singleFeature.id} className="single_feature">
                            <div>
                                <div className='icons'>{singleFeature.icon}</div>
                                <p className='title'>{singleFeature.title}</p>
                                <p className='description'>{singleFeature.desc}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Features