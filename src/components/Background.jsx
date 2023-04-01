import React from 'react'
import sunClearBg from "../assets/clear.jpg";

const Background = () => {

    return (
        <div className='relative w-full h-full'>
            <img src={sunClearBg} alt="" className='w-full h-[100vh] object-cover ' />
        </div>
    )
}

export default Background
