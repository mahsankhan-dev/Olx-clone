import React from 'react'
import './banner.css'
import Images from '../../Images/1st.jpg'

function Banner() {
    return (
        <div className="banner">
            <img
                src={Images}
                alt=""
            />
        </div>
    )
}

export default Banner