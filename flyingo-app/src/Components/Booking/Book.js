import React, { useState } from 'react'
import FlightStatus from './FlightStatus'
import From from './From'
import To from './To'

function Book() {
  const [showReturn,setShowReturn] = useState(false)
  const handleShowReturn = ()=>{
    setShowReturn(!showReturn)
  }
  


  return (
    <div>
      <div className='flex mb-2 ml-4 space-x-4'>
        <div className='flex items-center space-x-1'> <button  disabled={showReturn === false} onClick={handleShowReturn} className='h-4 w-4 border-2 border-gray-500 rounded-full'></button> <button> On Way </button></div>
        <div className='flex items-center space-x-1'> <button disabled={showReturn === true} onClick={handleShowReturn} className='h-4 w-4 border-2 border-gray-500 rounded-full'></button> <button> Round Trip  </button></div>
      </div>
      <div className='flex px-5 justify-center space-x-1 font4'>
        <From/>
        <To/>
        <div className='flex flex-col border-2 px-5 py-2 hover:border-gray-400'>
          <label htmlFor="">Depart</label>
          <input type="date" className='pl-2 focus:outline-none' placeholder='Airport' />
        </div>
        {showReturn && (
        <div className='flex flex-col border-2 px-5 py-2 hover:border-gray-400'>
          <label htmlFor="">Return</label>
          <input type="date" className=' focus:outline-none' placeholder='Airport' />
        </div> )
        }

        <FlightStatus></FlightStatus>
      </div>
    </div>
  )
}

export default Book