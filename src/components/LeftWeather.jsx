import React, { useContext } from 'react'
import { WeatherContext } from '../context/WeathetContext'
import IconWeather from './IconWeather';

const LeftWeather = () => {
    const { temp, time, date, city } = useContext(WeatherContext)

    return (
        <>
            <div
                className='text-white absolute top-[10vh] left-[15vw] flex  w-full max-w-[650px] items-center gap-x-20 '>
                <h1 className=' font-bold text-[45px]'
                >{temp}
                    <sup className=' font-bold text-[25px]'> 0</sup><span className='text-[40px]'>C</span>
                </h1>
                <div className='flex flex-col items-center'>
                    <p className='font-blod text-[45px]'>{city}</p>
                    <div className='flex items-center gap-x-4'>
                        <p className='font-blod text-[18px]'>{time}</p>
                        <p className='font-blod text-[18px]'>{date.toLocaleDateString()}</p>
                    </div>
                </div>
                <div>
                    <IconWeather />
                </div>
            </div>
        </>
    )
}

export default LeftWeather
