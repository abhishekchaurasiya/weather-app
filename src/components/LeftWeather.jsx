import React, { useContext } from 'react'
import { WeatherContext } from '../context/WeathetContext'
import IconWeather from './IconWeather';

const LeftWeather = () => {
    const { temp, time, date, city } = useContext(WeatherContext)

    return (
        
            <div className='relative grid lg:grid-cols-4 text-white items-center w-4/12 h-full'>
                <div className=' absolute flex items-center gap-x-5 mt-[200px]'>
                    <div className='flex items-center '>
                        <h1 className='text-[40px] mr-1'>{temp}  </h1>
                        <p> <sup className='text-[20px]'>0</sup><span className='text-[30px]'>C</span>  </p>
                    </div>
                    <div className=''>
                        <p className='text-[40px] '>{city}</p>
                    </div>
                    <div className='mb-5 '>
                        <IconWeather />
                    </div>
                    <div className='ml-5 font-semibold'>
                        <p className='py-1'>{time}</p>
                        <p className=''>{date.toLocaleDateString()}</p>
                    </div>
                </div>

            </div>
    )
}

export default LeftWeather
