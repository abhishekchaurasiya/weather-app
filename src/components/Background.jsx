import React from 'react'
import sunbg from "../assets/sunbg.jpg"

const Background = () => {

    return (
        <div className='grid xs:grid-col-1 '>
            <img src={sunbg} alt="" className='object-cover h-[100vh] w-full relative'/>
            <div className='absolute w-full h-full bg-black opacity-40'>hel</div>
        </div>
    )
}

export default Background
