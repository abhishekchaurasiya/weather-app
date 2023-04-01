import React, { useContext, useState } from 'react'
import { WeatherContext } from '../context/WeathetContext'
import { BsSearchHeartFill } from 'react-icons/bs'


const RightWeather = () => {
    const { humidity, feelsLike, country, wind, fetchWeatherData } = useContext(WeatherContext)
    const [city, setCity] = useState("");

    let feelsLikes = Math.floor(feelsLike - 273)
    

    const submitHandler = (event) => {
        event.preventDefault()
        if (city) {
            fetchWeatherData(city)
        }
    }

    return (
        <>
            <div className=' absolute bg-[#232323] opacity-[85%] w-4/12 h-[100vh] right-0'></div>

            <div className=' absolute  right-0 w-4/12 max-w-4xl h-full'>
                <form onSubmit={submitHandler} className=' flex items-center ml-[120px] mt-[90px] gap-x-3'>
                    <input type="text"
                        className=' bg-black text-white rounded-md py-1 px-3 hover:bg-gray-700 outline-none'
                        placeholder='Enter city name....'
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                    />
                    <button
                        className=' text-white'>
                        <BsSearchHeartFill fontSize={30} />
                    </button>
                </form>

                {/* set weather */}
                <ul className='text-white flex flex-col items-center justify-center gap-y-4 mt-5 text-[20px]'>
                    <li>
                        <button className='' onClick={() => fetchWeatherData('Rewa')}>
                            Rewa
                        </button>
                    </li>
                    <li>
                        <button className='city' onClick={() => fetchWeatherData('New York')}>
                            New York
                        </button>
                    </li>
                    <li>
                        <button className='city' onClick={() => fetchWeatherData('Hyderabad')}>
                            Hyderabad
                        </button>
                    </li>
                </ul>

                {/* Weather details */}
                <div className=' text-white flex flex-col justify-start items-center mt-[50px] gap-y-3 '>
                    <h3 className='font-bold text-[30px] text-[#ffca00]'>Weather Details</h3>
                    <ul className='flex flex-col gap-y-6 font-bold text-[18px]'>
                        <li className='flex gap-x-20 items-center'>
                            <p>Country</p>
                            <p>{country}</p>
                        </li>
                        <li className='flex gap-x-[6.5rem] items-center'>
                            <p>Wind</p>
                            <p>{wind} km<span>/</span>h</p>
                        </li>
                        <li className='flex gap-x-20'>
                            <p>Humidity</p>
                            <p>{humidity}%</p>
                        </li>
                        <li className='flex gap-x-20'>
                            <p>Feels Like</p>
                            <p>{feelsLikes} <sup>0</sup>C</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default RightWeather;

