import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";
import { API_KEY } from "../baseUrl";

export const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {

    const [weatherCondition, setWeatherCondition] = useState('');
    const [humidity, setHumidity] = useState(50);
    const [feelsLike, setFeelsLike] = useState('')
    const [country, setCountry] = useState('')

    const [wind, setWind] = useState("")
    const [city, setCity] = useState('Rewa')

    const [temperature, setTemperature] = useState(0);
    const temp = Math.floor(temperature - 273);
    const [time, setTime] = useState('');

    const date = new Date();
    const fetchWeatherData = async (city) => {
        const urls = `${baseUrl}${city}&appid=${API_KEY}`;
        try {

            const response = await axios.get(urls);
            setTemperature(response.data.main.temp)
            setWeatherCondition(response.data.weather[0].main)
            setHumidity(response.data.main.humidity)
            setFeelsLike(response.data.main.feels_like)
            setCountry(response.data.sys.country);
            setWind(Math.round(response.data.wind.speed));
            setCity(response.data.name)

        } catch (error) {
            console.log("Error message", error.message)
            setTemperature(0)
        }
    }

    useEffect(() => {
        fetchWeatherData(city)
    }, [city])

    useEffect(() => {
        setTimeout(() => {
            setInterval(() => {
                setTime(new Date().toLocaleTimeString())
            }, 1000)
        })
    }, [])

    const value = {
        fetchWeatherData,
        temp,
        time,
        date,
        weatherCondition,
        humidity,
        feelsLike,
        country,
        wind,
        city,
    }

    return <WeatherContext.Provider value={value}>
        {children}
    </WeatherContext.Provider>
};  