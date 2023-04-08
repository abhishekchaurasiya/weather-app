import React from 'react'
import Background from './components/Background';
import LeftWeather from './components/LeftWeather';
import RightWeather from './components/RightWeather';


const App = () => {

  return (
    <div className='relative w-full h[100vh] m-0 p-0'>
      <Background />
      <div className='absolute top-0 w-full flex justify-evenly items-center h-full'>
        <LeftWeather />
        <RightWeather />
      </div>
    </div>

  )
}

export default App

