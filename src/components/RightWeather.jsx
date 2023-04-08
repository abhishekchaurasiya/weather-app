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
            <div className='flex flex-col gap-2 justify-center ml-9 relative'>
                <form onSubmit={submitHandler} className='flex items-center gap-x-3'>
                    <input type="text"
                        className=' bg-black text-white rounded-md py-1 px-3 hover:bg-gray-700 outline-none text-center'
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
                <div className='px-10 mt-2'>
                    <ul className=' text-white font-semibold text-[22px]'>
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
                    <div className=' '>
                        <h3 className='text-white font-semibold my-3'>Weather Details</h3>
                        <ul className='flex flex-col gap-y-2 text-white'>
                            <li className='flex justify-between'>
                                <p>Country</p>
                                <p className='text-left'>{country}</p>
                            </li>
                            <li className='flex justify-between'>
                                <p>Wind</p>
                                <p>{wind} km<span>/</span>h</p>
                            </li>
                            <li className=' flex justify-between'>
                                <p>Humidity</p>
                                <p>{humidity}%</p>
                            </li>
                            <li className='flex justify-between'>
                                <p>Feels Like</p>
                                <p>{feelsLikes} <sup>0</sup>C</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightWeather;

