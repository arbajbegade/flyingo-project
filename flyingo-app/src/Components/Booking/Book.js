import React from 'react'
import FlightStatus from './FlightStatus'
import From from './From'
import To from './To'

function Book() {
  return (
    <div>
      <div className='flex px-5 justify-center space-x-1 font4'>
        <From/>
        <To/>
        <div className='flex flex-col border-2 px-5 py-2 hover:border-gray-400'>
          <label htmlFor="">Depart</label>
          <input type="date" className='pl-2 focus:outline-none' placeholder='Airport' />
        </div>
        <div className='flex flex-col border-2 px-5 py-2 hover:border-gray-400'>
          <label htmlFor="">Return</label>
          <input type="date" className=' focus:outline-none' placeholder='Airport' />
        </div>
        <FlightStatus></FlightStatus>
      </div>
    </div>
  )
}

export default Book