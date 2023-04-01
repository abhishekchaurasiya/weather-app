import React from 'react'
import Background from './components/Background';
import LeftWeather from './components/LeftWeather';
import RightWeather from './components/RightWeather';


const App = () => {

  return (
    <div className='flex w-full h-full'>
      <Background />
     
      <LeftWeather />
      <RightWeather />
    </div>
  )
}

export default App

