import React, { useContext } from 'react'
import { WeatherContext } from '../context/WeathetContext'
import { WiCloudy } from "react-icons/wi"
import { BsSun, BsFillCloudRainHeavyFill, BsFillCloudSunFill, BsCloudLightningRainFill, BsCloudHazeFill, BsClouds } from 'react-icons/bs'
import { MdThunderstorm } from 'react-icons/md'

const IconWeather = () => {
    const { weatherCondition } = useContext(WeatherContext)
    return (
        <div className=' flex flex-col text-[30px] items-center'>
            {weatherCondition === "Smoke" && <span className='text-white text-[30px]'> <WiCloudy /> </span>}
            {weatherCondition === "Clouds" && <span className='text-white text-[30px]'> <BsFillCloudSunFill /> </span>}
            {weatherCondition === "Rain" && <span className='text-white text-[30px]'> <BsFillCloudRainHeavyFill /> </span>}
            {weatherCondition === "Clear" && <span className='text-white text-[30px]'> <BsSun /> </span>}
            {weatherCondition === "Thunderstrom" && <span className='text-white text-[30px]'> <MdThunderstorm /> </span>}
            {weatherCondition === "Haze" && <span className='text-white text-[30px]'> <BsCloudHazeFill /> </span>}
            {weatherCondition === "Mist" && <span className='text-white text-[30px]'> <BsClouds /> </span>}
            {weatherCondition}
        </div>
    )
}

export default IconWeather;
